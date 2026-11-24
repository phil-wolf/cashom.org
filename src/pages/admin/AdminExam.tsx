import { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { computeResult, generateCode, parseCsv, toCsv } from '@/lib/examCsv';
import symbol from '@/assets/cashom-symbol.png.asset.json';

type Question = {
  id: string; section: string; section_order: number; position: number; type: string; question: string;
  options: string[]; correct_index: number | null; model_answer: string | null; rubric: string | null;
  suggested_length: string | null; points: number;
};
type Code = { id: string; code: string; student_name: string | null; active: boolean; created_at: string };
type Attempt = {
  id: string; code_id: string; student_name: string; email: string; status: string; submitted_at: string | null;
  mc_score: number | null; mc_possible: number | null; written_score: number | null; written_possible: number | null;
  total_pct: number | null; passed: boolean | null; graded: boolean;
};
type Settings = { title: string; intro: string; passing_score: number; time_limit_minutes: number | null; is_open: boolean };

const sortQs = (qs: Question[]) => [...qs].sort((a, b) => a.section_order - b.section_order || a.section.localeCompare(b.section) || a.position - b.position);
const download = (name: string, text: string) => {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url);
};
const emptyQ = (): Partial<Question> => ({ section: '', section_order: 0, type: 'mc', question: '', options: ['', '', '', ''], correct_index: 0, model_answer: '', rubric: '', suggested_length: '2–4 sentences', points: 1 });

const Login = () => {
  const [email, setEmail] = useState('hello@cashom.org');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [msg, setMsg] = useState('');
  const go = async (e: React.FormEvent) => {
    e.preventDefault(); setMsg('');
    if (mode === 'in') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    } else {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin/exam` } });
      setMsg(error ? error.message : 'Check your email to confirm your account, then sign in.');
    }
  };
  return (
    <form onSubmit={go} className="max-w-sm mx-auto space-y-4 py-16">
      <h1 className="font-serif text-3xl text-center">Exam admin</h1>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
      <Button type="submit" className="w-full">{mode === 'in' ? 'Sign in' : 'Create admin account'}</Button>
      <button type="button" className="text-sm underline w-full" onClick={() => setMode(mode === 'in' ? 'up' : 'in')}>
        {mode === 'in' ? 'First time? Create your account' : 'Have an account? Sign in'}
      </button>
    </form>
  );
};

const AdminExam = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [codes, setCodes] = useState<Code[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [batch, setBatch] = useState({ count: 5, names: '' });
  const [editing, setEditing] = useState<Partial<Question> | null>(null);
  const [jsonText, setJsonText] = useState('');

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return setIsAdmin(false);
      const { data: r } = await supabase.rpc('has_role', { _user_id: data.user.id, _role: 'admin' });
      setIsAdmin(!!r);
    });
  }, [session]);

  const load = useCallback(async () => {
    const [s, q, c, a] = await Promise.all([
      supabase.from('exam_settings').select('*').eq('id', 1).single(),
      supabase.from('exam_questions').select('*'),
      supabase.from('access_codes').select('*').order('created_at', { ascending: false }),
      supabase.from('exam_attempts').select('*').order('submitted_at', { ascending: false, nullsFirst: false }),
    ]);
    if (s.data) setSettings(s.data as Settings);
    setQuestions(sortQs((q.data ?? []) as Question[]));
    setCodes((c.data ?? []) as Code[]);
    setAttempts((a.data ?? []) as Attempt[]);
  }, []);
  useEffect(() => { if (isAdmin) load(); }, [isAdmin, load]);

  const attemptByCode = useMemo(() => new Map(attempts.map((a) => [a.code_id, a])), [attempts]);
  const codeById = useMemo(() => new Map(codes.map((c) => [c.id, c])), [codes]);

  if (!session) return <Shell><Login /></Shell>;
  if (isAdmin === null) return <Shell><p className="py-16 text-center">Loading…</p></Shell>;
  if (!isAdmin) return <Shell><div className="py-16 text-center space-y-4"><p>This account doesn't have access.</p><Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button></div></Shell>;

  const saveSettings = async () => {
    if (!settings) return;
    const { error } = await supabase.from('exam_settings').update({ ...settings, updated_at: new Date().toISOString() }).eq('id', 1);
    error ? toast.error(error.message) : toast.success('Settings saved');
  };

  const makeCodes = async () => {
    const names = batch.names.split('\n').map((n) => n.trim()).filter(Boolean);
    const n = Math.max(names.length, Math.min(500, Math.max(1, batch.count)));
    const rows = Array.from({ length: n }, (_, i) => ({ code: generateCode(), student_name: names[i] || null }));
    const { error } = await supabase.from('access_codes').insert(rows);
    error ? toast.error(error.message) : toast.success(`${n} codes created`);
    setBatch({ count: 5, names: '' }); load();
  };

  const codeStatus = (c: Code) => {
    if (!c.active) return 'Deactivated';
    const a = attemptByCode.get(c.id);
    return !a ? 'Unused' : a.status === 'submitted' ? 'Submitted' : 'In progress';
  };

  const saveQuestion = async () => {
    if (!editing?.section?.trim() || !editing.question?.trim()) return toast.error('Section and question are required');
    const row = {
      section: editing.section.trim(), section_order: Number(editing.section_order) || 0, type: editing.type!,
      question: editing.question.trim(), points: Number(editing.points) || 1,
      options: editing.type === 'mc' ? (editing.options ?? []).map((o) => o.trim()) : [],
      correct_index: editing.type === 'mc' ? Number(editing.correct_index ?? 0) : null,
      model_answer: editing.type === 'written' ? editing.model_answer || null : null,
      rubric: editing.type === 'written' ? editing.rubric || null : null,
      suggested_length: editing.type === 'written' ? editing.suggested_length || null : null,
    };
    if (row.type === 'mc' && (row.options.length !== 4 || row.options.some((o) => !o))) return toast.error('Multiple choice needs 4 options');
    const res = editing.id
      ? await supabase.from('exam_questions').update(row).eq('id', editing.id)
      : await supabase.from('exam_questions').insert({ ...row, position: questions.filter((q) => q.section === row.section).length });
    if (res.error) return toast.error(res.error.message);
    setEditing(null); load();
  };

  const move = async (q: Question, dir: -1 | 1) => {
    const same = questions.filter((x) => x.section === q.section);
    const i = same.indexOf(q), j = i + dir;
    if (j < 0 || j >= same.length) return;
    const reordered = [...same]; [reordered[i], reordered[j]] = [reordered[j], reordered[i]];
    await Promise.all(reordered.map((x, k) => supabase.from('exam_questions').update({ position: k }).eq('id', x.id)));
    load();
  };

  const importJson = async () => {
    try {
      const arr = JSON.parse(jsonText);
      if (!Array.isArray(arr)) throw new Error('Paste a JSON list of questions');
      const counts: Record<string, number> = {};
      questions.forEach((q) => { counts[q.section] = (counts[q.section] ?? 0) + 1; });
      const rows = arr.map((x: any, i: number) => {
        const type = x.type === 'written' ? 'written' : 'mc';
        if (!x.section || !x.question) throw new Error(`Item ${i + 1}: section and question are required`);
        const options = type === 'mc' ? (x.options ?? []).map(String) : [];
        if (type === 'mc' && options.length !== 4) throw new Error(`Item ${i + 1}: needs 4 options`);
        let ci = x.correct_index;
        if (type === 'mc' && ci === undefined && x.correct_answer !== undefined) ci = options.indexOf(String(x.correct_answer));
        if (type === 'mc' && (ci === undefined || ci < 0 || ci > 3)) throw new Error(`Item ${i + 1}: missing correct answer`);
        counts[x.section] = (counts[x.section] ?? 0) + 1;
        return {
          section: String(x.section), section_order: Number(x.section_order) || 0, type, question: String(x.question), options,
          correct_index: type === 'mc' ? Number(ci) : null, model_answer: x.model_answer ?? null, rubric: x.rubric ?? null,
          suggested_length: x.suggested_length ?? (type === 'written' ? '2–4 sentences' : null), points: Number(x.points) || 1,
          position: counts[x.section] - 1,
        };
      });
      const { error } = await supabase.from('exam_questions').insert(rows);
      if (error) throw error;
      toast.success(`${rows.length} questions imported`); setJsonText(''); load();
    } catch (e: any) { toast.error(e.message); }
  };

  const exportAnswers = async () => {
    const { data } = await supabase.from('exam_answers').select('*');
    const qIndex = new Map(questions.map((q, i) => [q.id, { q, n: i + 1 }]));
    const rows = (data ?? []).flatMap((ans: any) => {
      const a = attempts.find((x) => x.id === ans.attempt_id); const m = qIndex.get(ans.question_id);
      if (!a || !m || a.status !== 'submitted') return [];
      const { q, n } = m; const mc = q.type === 'mc';
      return [{
        student_name: a.student_name, email: a.email, access_code: codeById.get(a.code_id)?.code, submitted_at: a.submitted_at,
        section: q.section, question_number: n, question_type: mc ? 'multiple_choice' : 'written', question_text: q.question,
        student_answer: mc ? (ans.answer !== '' && ans.answer != null ? q.options[Number(ans.answer)] : '') : ans.answer,
        correct_answer: mc && q.correct_index != null ? q.options[q.correct_index] : '', model_answer: q.model_answer ?? '', rubric: q.rubric ?? '',
        auto_score: mc ? ans.auto_score ?? 0 : '', points_possible: q.points,
        written_score: mc ? '' : ans.written_score ?? '', feedback: ans.feedback ?? '', _sort: `${a.email}-${String(n).padStart(4, '0')}`,
      }];
    }).sort((x, y) => x._sort.localeCompare(y._sort));
    download('exam-answers.csv', toCsv(rows, ['student_name', 'email', 'access_code', 'submitted_at', 'section', 'question_number', 'question_type', 'question_text', 'student_answer', 'correct_answer', 'model_answer', 'rubric', 'auto_score', 'points_possible', 'written_score', 'feedback']));
  };

  const exportSummary = () => {
    const rows = attempts.filter((a) => a.status === 'submitted').map((a) => ({
      student_name: a.student_name, email: a.email, access_code: codeById.get(a.code_id)?.code, submitted_at: a.submitted_at,
      mc_score: a.mc_score, mc_possible: a.mc_possible, mc_percent: a.mc_possible ? Math.round((a.mc_score! / a.mc_possible) * 1000) / 10 : '',
      written_score: a.written_score ?? '', written_possible: a.written_possible, total_percent: a.total_pct ?? '',
      result: a.graded ? (a.passed ? 'Pass' : 'Not yet') : 'Needs written grading',
    }));
    download('exam-summary.csv', toCsv(rows, ['student_name', 'email', 'access_code', 'submitted_at', 'mc_score', 'mc_possible', 'mc_percent', 'written_score', 'written_possible', 'total_percent', 'result']));
  };

  const uploadGraded = async (file: File) => {
    try {
      const rows = parseCsv(await file.text());
      const qByNum = new Map(questions.map((q, i) => [String(i + 1), q]));
      const attByCode = new Map(attempts.map((a) => [codeById.get(a.code_id)?.code, a]));
      const touched = new Set<string>(); let n = 0;
      for (const r of rows) {
        const a = attByCode.get(r.access_code?.trim().toUpperCase()); const q = qByNum.get(r.question_number?.trim());
        if (!a || !q || q.type !== 'written') continue;
        const score = r.written_score?.trim() === '' || r.written_score === undefined ? null : Number(r.written_score);
        if (score !== null && (isNaN(score) || score < 0 || score > q.points)) throw new Error(`Score out of range for ${a.student_name}, question ${r.question_number}`);
        await supabase.from('exam_answers').upsert({ attempt_id: a.id, question_id: q.id, written_score: score, feedback: r.feedback || null }, { onConflict: 'attempt_id,question_id' });
        touched.add(a.id); n++;
      }
      const written = questions.filter((q) => q.type === 'written');
      for (const id of touched) {
        const a = attempts.find((x) => x.id === id)!;
        const { data: ans } = await supabase.from('exam_answers').select('question_id,written_score').eq('attempt_id', id);
        const scored = (ans ?? []).filter((x) => written.some((q) => q.id === x.question_id) && x.written_score !== null);
        const ws = scored.reduce((s, x) => s + Number(x.written_score), 0);
        const graded = scored.length === written.length;
        const total = (a.mc_possible ?? 0) + (a.written_possible ?? 0);
        const r = computeResult(a.mc_score ?? 0, ws, total, settings!.passing_score);
        await supabase.from('exam_attempts').update({ written_score: ws, graded, total_pct: graded ? r.pct : null, passed: graded ? r.passed : null }).eq('id', id);
      }
      toast.success(`Recorded ${n} written scores`); load();
    } catch (e: any) { toast.error(e.message); }
  };

  return (
    <Shell>
      <div className="flex items-center justify-between py-6">
        <h1 className="font-serif text-3xl">Final Exam admin</h1>
        <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>Sign out</Button>
      </div>
      <Tabs defaultValue="submissions">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="codes">Access codes</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="space-y-4 pt-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={exportAnswers}>Download answers CSV</Button>
            <Button variant="outline" onClick={exportSummary}>Download summary CSV</Button>
            <label className="inline-flex">
              <input type="file" accept=".csv" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadGraded(f); e.target.value = ''; }} />
              <span className="inline-flex items-center rounded-md border border-input px-4 h-10 text-sm cursor-pointer hover:bg-muted">Upload graded CSV</span>
            </label>
          </div>
          <p className="text-xs text-muted-foreground">To grade: download the answers file, fill in written_score and feedback for written questions, then upload it.</p>
          <div className="overflow-x-auto border rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-muted"><tr>{['Name', 'Email', 'Submitted', 'Multiple choice', 'Total', 'Status'].map((h) => <th key={h} className="text-left p-3 font-medium whitespace-nowrap">{h}</th>)}</tr></thead>
              <tbody>
                {attempts.filter((a) => a.status === 'submitted').map((a) => (
                  <tr key={a.id} className="border-t">
                    <td className="p-3">{a.student_name}</td><td className="p-3">{a.email}</td>
                    <td className="p-3 whitespace-nowrap">{a.submitted_at && new Date(a.submitted_at).toLocaleString()}</td>
                    <td className="p-3">{a.mc_score}/{a.mc_possible}</td>
                    <td className="p-3">{a.total_pct != null ? `${a.total_pct}%` : '—'}</td>
                    <td className="p-3 whitespace-nowrap">{a.graded ? `Graded · ${a.passed ? 'Pass' : 'Not yet'}` : 'Needs written grading'}</td>
                  </tr>
                ))}
                {!attempts.some((a) => a.status === 'submitted') && <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">No submissions yet.</td></tr>}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="codes" className="space-y-4 pt-4">
          <div className="border rounded-md p-4 space-y-3">
            <p className="font-medium">Create codes</p>
            <label className="block text-sm">How many <Input type="number" min={1} max={500} value={batch.count} onChange={(e) => setBatch({ ...batch, count: Number(e.target.value) })} className="w-28 mt-1" /></label>
            <label className="block text-sm">Student names (optional, one per line)<Textarea rows={3} value={batch.names} onChange={(e) => setBatch({ ...batch, names: e.target.value })} className="mt-1" /></label>
            <Button onClick={makeCodes}>Create codes</Button>
          </div>
          <div className="overflow-x-auto border rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-muted"><tr>{['Code', 'Student', 'Status', ''].map((h) => <th key={h} className="text-left p-3 font-medium">{h}</th>)}</tr></thead>
              <tbody>
                {codes.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="p-3 font-mono">{c.code}</td>
                    <td className="p-3">{attemptByCode.get(c.id)?.student_name ?? c.student_name ?? '—'}</td>
                    <td className="p-3">{codeStatus(c)}</td>
                    <td className="p-3 flex gap-2 justify-end">
                      <Button size="sm" variant="outline" onClick={() => { navigator.clipboard.writeText(c.code); toast.success('Copied'); }}>Copy</Button>
                      {c.active && <Button size="sm" variant="ghost" onClick={async () => { await supabase.from('access_codes').update({ active: false }).eq('id', c.id); load(); }}>Deactivate</Button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="questions" className="space-y-4 pt-4">
          <Button onClick={() => setEditing(emptyQ())}>Add question</Button>
          {editing && (
            <div className="border rounded-md p-4 space-y-3 bg-parchment">
              <div className="grid sm:grid-cols-3 gap-3">
                <label className="text-sm sm:col-span-2">Section<Input value={editing.section} onChange={(e) => setEditing({ ...editing, section: e.target.value })} list="sections" /></label>
                <label className="text-sm">Section order<Input type="number" value={editing.section_order} onChange={(e) => setEditing({ ...editing, section_order: Number(e.target.value) })} /></label>
                <datalist id="sections">{[...new Set(questions.map((q) => q.section))].map((s) => <option key={s} value={s} />)}</datalist>
                <label className="text-sm">Type
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3" value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value })}>
                    <option value="mc">Multiple choice</option><option value="written">Written answer</option>
                  </select>
                </label>
                <label className="text-sm">Points<Input type="number" min={1} value={editing.points} onChange={(e) => setEditing({ ...editing, points: Number(e.target.value) })} /></label>
              </div>
              <label className="text-sm block">Question<Textarea value={editing.question} onChange={(e) => setEditing({ ...editing, question: e.target.value })} /></label>
              {editing.type === 'mc' ? (
                <div className="space-y-2">
                  <p className="text-sm">Options (select the correct one)</p>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="radio" checked={editing.correct_index === i} onChange={() => setEditing({ ...editing, correct_index: i })} aria-label={`Option ${i + 1} is correct`} />
                      <Input value={editing.options?.[i] ?? ''} onChange={(e) => { const o = [...(editing.options ?? ['', '', '', ''])]; o[i] = e.target.value; setEditing({ ...editing, options: o }); }} />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <label className="text-sm block">Suggested length<Input value={editing.suggested_length ?? ''} onChange={(e) => setEditing({ ...editing, suggested_length: e.target.value })} /></label>
                  <label className="text-sm block">Model answer<Textarea value={editing.model_answer ?? ''} onChange={(e) => setEditing({ ...editing, model_answer: e.target.value })} /></label>
                  <label className="text-sm block">Grading rubric<Textarea value={editing.rubric ?? ''} onChange={(e) => setEditing({ ...editing, rubric: e.target.value })} /></label>
                </>
              )}
              <div className="flex gap-2"><Button onClick={saveQuestion}>Save</Button><Button variant="ghost" onClick={() => setEditing(null)}>Cancel</Button></div>
            </div>
          )}
          {[...new Set(questions.map((q) => q.section))].map((s) => (
            <div key={s} className="space-y-2">
              <h3 className="font-serif text-xl pt-2">{s}</h3>
              {questions.filter((q) => q.section === s).map((q) => (
                <div key={q.id} className="border rounded-md p-3 flex gap-3 items-start">
                  <div className="flex-1 text-sm">
                    <span className="text-xs uppercase tracking-wider text-rust mr-2">{q.type === 'mc' ? 'Multiple choice' : 'Written'}</span>
                    {questions.indexOf(q) + 1}. {q.question}
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button size="sm" variant="ghost" onClick={() => move(q, -1)} aria-label="Move up">↑</Button>
                    <Button size="sm" variant="ghost" onClick={() => move(q, 1)} aria-label="Move down">↓</Button>
                    <Button size="sm" variant="outline" onClick={() => setEditing({ ...q, options: q.options.length ? q.options : ['', '', '', ''] })}>Edit</Button>
                    <Button size="sm" variant="ghost" onClick={async () => { if (confirm('Delete this question?')) { await supabase.from('exam_questions').delete().eq('id', q.id); load(); } }}>Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="border rounded-md p-4 space-y-2">
            <p className="font-medium">Bulk import (paste JSON)</p>
            <p className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">{`[{"section":"Product Knowledge","type":"mc","question":"…","options":["A","B","C","D"],"correct_index":0},
 {"section":"Guest Service","type":"written","question":"…","suggested_length":"2–4 sentences","model_answer":"…","rubric":"…","points":4}]`}</p>
            <Textarea rows={6} value={jsonText} onChange={(e) => setJsonText(e.target.value)} />
            <Button onClick={importJson} disabled={!jsonText.trim()}>Import</Button>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="pt-4">
          {settings && (
            <div className="space-y-4 max-w-xl">
              <label className="text-sm block">Exam title<Input value={settings.title} onChange={(e) => setSettings({ ...settings, title: e.target.value })} /></label>
              <label className="text-sm block">Intro text<Textarea value={settings.intro} onChange={(e) => setSettings({ ...settings, intro: e.target.value })} /></label>
              <label className="text-sm block">Passing score (%)<Input type="number" min={0} max={100} value={settings.passing_score} onChange={(e) => setSettings({ ...settings, passing_score: Number(e.target.value) })} className="w-28" /></label>
              <label className="text-sm block">Time limit in minutes (leave empty for none)<Input type="number" min={1} value={settings.time_limit_minutes ?? ''} onChange={(e) => setSettings({ ...settings, time_limit_minutes: e.target.value ? Number(e.target.value) : null })} className="w-28" /></label>
              <label className="flex items-center gap-3 text-sm"><Switch checked={settings.is_open} onCheckedChange={(v) => setSettings({ ...settings, is_open: v })} />Exam is open</label>
              <Button onClick={saveSettings}>Save settings</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Shell>
  );
};

const Shell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet><title>Exam admin | CashoM</title><meta name="robots" content="noindex, nofollow" /></Helmet>
    <header className="border-b border-border py-4"><div className="flex items-center justify-center gap-2"><img src={symbol.url} alt="" className="h-7 w-7" /><span className="font-serif text-lg">CashoM</span></div></header>
    <main className="max-w-5xl mx-auto px-4 pb-16">{children}</main>
  </div>
);

export default AdminExam;
