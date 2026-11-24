import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3'

const db = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

const Base = z.object({
  code: z.string().trim().min(3).max(40),
  email: z.string().trim().email().max(255),
})
const Start = Base.extend({ action: z.literal('start'), name: z.string().trim().min(1).max(120) })
const Save = Base.extend({ action: z.literal('save'), answers: z.record(z.string().uuid(), z.string().max(10000)) })
const Submit = Base.extend({ action: z.literal('submit'), answers: z.record(z.string().uuid(), z.string().max(10000)) })
const Body = z.discriminatedUnion('action', [Start, Save, Submit])

const MAX_TRIES = 10, WINDOW_MIN = 15

async function rateLimited(key: string) {
  const since = new Date(Date.now() - WINDOW_MIN * 60000).toISOString()
  const { count } = await db.from('exam_code_tries').select('id', { count: 'exact', head: true }).eq('key', key).gte('created_at', since)
  return (count ?? 0) >= MAX_TRIES
}

async function loadAttempt(code: string, email: string) {
  const { data: c } = await db.from('access_codes').select('*').eq('code', code.toUpperCase()).maybeSingle()
  if (!c || !c.active) return { err: 'That access code is not valid.' }
  const { data: a } = await db.from('exam_attempts').select('*').eq('code_id', c.id).maybeSingle()
  if (a && a.email.toLowerCase() !== email.toLowerCase()) return { err: 'That access code has already been used.' }
  if (a && a.status === 'submitted') return { err: 'This exam has already been submitted.' }
  return { code: c, attempt: a }
}

async function settings() {
  const { data } = await db.from('exam_settings').select('title,intro,time_limit_minutes,is_open').eq('id', 1).single()
  return data!
}

function expired(attempt: any, s: any) {
  if (!s.time_limit_minutes || !attempt) return false
  return Date.now() > new Date(attempt.started_at).getTime() + (s.time_limit_minutes + 2) * 60000
}

async function writeAnswers(attemptId: string, answers: Record<string, string>) {
  const rows = Object.entries(answers).map(([question_id, answer]) => ({ attempt_id: attemptId, question_id, answer, updated_at: new Date().toISOString() }))
  if (rows.length) await db.from('exam_answers').upsert(rows, { onConflict: 'attempt_id,question_id' })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  try {
    const parsed = Body.safeParse(await req.json())
    if (!parsed.success) return json({ error: 'Please check your name, email and access code.' }, 400)
    const b = parsed.data
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const s = await settings()
    if (!s.is_open) return json({ error: 'The exam is closed right now.' }, 403)

    if (b.action === 'start' && (await rateLimited(`ip:${ip}`) || await rateLimited(`email:${b.email.toLowerCase()}`))) {
      return json({ error: 'Too many attempts. Please wait 15 minutes and try again.' }, 429)
    }
    const r = await loadAttempt(b.code, b.email)
    if ('err' in r) {
      if (b.action === 'start') await db.from('exam_code_tries').insert([{ key: `ip:${ip}` }, { key: `email:${b.email.toLowerCase()}` }])
      return json({ error: r.err }, 400)
    }
    let attempt = r.attempt

    if (b.action === 'start') {
      if (!attempt) {
        const { data, error } = await db.from('exam_attempts').insert({ code_id: r.code.id, student_name: b.name, email: b.email }).select().single()
        if (error) return json({ error: 'That access code has already been used.' }, 400)
        attempt = data
      }
      const { data: qs } = await db.from('exam_questions').select('id,section,position,type,question,options,suggested_length').order('section_order', { ascending: true }).order('position')
      const { data: ans } = await db.from('exam_answers').select('question_id,answer').eq('attempt_id', attempt.id)
      const saved: Record<string, string> = {}
      ans?.forEach((a) => { saved[a.question_id] = a.answer ?? '' })
      const deadline = s.time_limit_minutes ? new Date(new Date(attempt.started_at).getTime() + s.time_limit_minutes * 60000).toISOString() : null
      return json({ title: s.title, intro: s.intro, questions: qs ?? [], answers: saved, deadline })
    }

    if (!attempt) return json({ error: 'Please start the exam first.' }, 400)
    if (b.action === 'save') {
      if (expired(attempt, s)) return json({ error: 'Time is up.' }, 403)
      await writeAnswers(attempt.id, b.answers)
      return json({ ok: true })
    }

    // submit
    await writeAnswers(attempt.id, b.answers)
    const { data: qs } = await db.from('exam_questions').select('id,type,correct_index,points')
    const { data: ans } = await db.from('exam_answers').select('id,question_id,answer').eq('attempt_id', attempt.id)
    const byQ = new Map((ans ?? []).map((a) => [a.question_id, a]))
    let mc = 0, mcPossible = 0, wPossible = 0
    for (const q of qs ?? []) {
      if (q.type === 'mc') {
        mcPossible += q.points
        const a = byQ.get(q.id)
        const right = a && a.answer !== null && a.answer !== '' && Number(a.answer) === q.correct_index
        if (right) mc += q.points
        if (a) await db.from('exam_answers').update({ auto_score: right ? 1 : 0 }).eq('id', a.id)
        else await db.from('exam_answers').insert({ attempt_id: attempt.id, question_id: q.id, answer: '', auto_score: 0 })
      } else wPossible += q.points
    }
    await db.from('exam_attempts').update({ status: 'submitted', submitted_at: new Date().toISOString(), mc_score: mc, mc_possible: mcPossible, written_possible: wPossible, graded: wPossible === 0 }).eq('id', attempt.id)
    return json({ ok: true })
  } catch (e) {
    console.error(e)
    return json({ error: 'Something went wrong. Please try again.' }, 500)
  }
})
