import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import symbol from '@/assets/cashom-symbol.png.asset.json';

type Q = { id: string; section: string; type: 'mc' | 'written'; question: string; options: string[]; suggested_length: string | null };
type Creds = { name: string; email: string; code: string };
const LS = 'cashom-exam';

const startSchema = z.object({
  name: z.string().trim().min(1, 'Enter your full name').max(120),
  email: z.string().trim().email('Enter a valid email').max(255),
  code: z.string().trim().min(3, 'Enter your access code').max(40),
});

async function call(body: Record<string, unknown>) {
  const { data, error } = await supabase.functions.invoke('exam', { body });
  if (error) {
    let msg = 'Something went wrong. Please try again.';
    try { const j = await (error as any).context?.json(); if (j?.error) msg = j.error; } catch { /* ignore */ }
    throw new Error(msg);
  }
  return data;
}

const FinalExam = () => {
  const [creds, setCreds] = useState<Creds>({ name: '', email: '', code: '' });
  const [stage, setStage] = useState<'start' | 'exam' | 'review' | 'done'>('start');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [meta, setMeta] = useState<{ title: string; intro: string; deadline: string | null }>({ title: 'Final Exam', intro: '', deadline: null });
  const [questions, setQuestions] = useState<Q[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [saveState, setSaveState] = useState<'saved' | 'saving' | 'offline'>('saved');
  const dirty = useRef<Record<string, string>>({});
  const [now, setNow] = useState(Date.now());

  const sections = useMemo(() => {
    const m: { name: string; qs: Q[] }[] = [];
    questions.forEach((q) => {
      let s = m.find((x) => x.name === q.section);
      if (!s) { s = { name: q.section, qs: [] }; m.push(s); }
      s.qs.push(q);
    });
    return m;
  }, [questions]);

  const lsKey = `${LS}:${creds.code.trim().toUpperCase()}`;

  const begin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    const p = startSchema.safeParse(creds);
    if (!p.success) return setErr(p.error.issues[0].message);
    setBusy(true);
    try {
      const d = await call({ action: 'start', ...p.data, code: p.data.code.toUpperCase() });
      const local = JSON.parse(localStorage.getItem(lsKey) || '{}');
      setAnswers({ ...d.answers, ...local });
      dirty.current = { ...local };
      setQuestions(d.questions);
      setMeta({ title: d.title, intro: d.intro, deadline: d.deadline });
      setStage('exam');
      window.scrollTo(0, 0);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  };

  const flush = async () => {
    const pending = dirty.current;
    if (!Object.keys(pending).length) return true;
    setSaveState('saving');
    try {
      await call({ action: 'save', ...creds, code: creds.code.trim().toUpperCase(), answers: pending });
      Object.keys(pending).forEach((k) => { if (dirty.current[k] === pending[k]) delete dirty.current[k]; });
      setSaveState('saved');
      return true;
    } catch { setSaveState('offline'); return false; }
  };

  useEffect(() => {
    if (stage !== 'exam' && stage !== 'review') return;
    const t = setInterval(() => { flush(); setNow(Date.now()); }, 5000);
    const on = () => flush();
    window.addEventListener('online', on);
    return () => { clearInterval(t); window.removeEventListener('online', on); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const setAnswer = (id: string, v: string) => {
    setAnswers((a) => {
      const next = { ...a, [id]: v };
      localStorage.setItem(lsKey, JSON.stringify(next));
      return next;
    });
    dirty.current[id] = v;
  };

  const unanswered = questions.filter((q) => !(answers[q.id] ?? '').trim());
  const remaining = meta.deadline ? Math.max(0, new Date(meta.deadline).getTime() - now) : null;

  const submit = async () => {
    setBusy(true); setErr('');
    try {
      await call({ action: 'submit', ...creds, code: creds.code.trim().toUpperCase(), answers });
      localStorage.removeItem(lsKey);
      setStage('done');
      window.scrollTo(0, 0);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  };

  useEffect(() => {
    if (remaining === 0 && stage !== 'done' && stage !== 'start') submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining === 0]);

  const sec = sections[step];
  const pct = sections.length ? ((stage === 'review' ? sections.length : step) / sections.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Final Exam | CashoM</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header className="border-b border-border py-5">
        <div className="max-w-2xl mx-auto px-5 flex items-center justify-center gap-3">
          <img src={symbol.url} alt="" className="h-8 w-8" />
          <span className="font-serif text-xl">CashoM</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-10">
        {stage === 'start' && (
          <form onSubmit={begin} className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-rust">Certified Server of Cannabis</p>
            <h1 className="font-serif text-3xl md:text-4xl">Final Exam</h1>
            <p className="text-muted-foreground">Enter your details and the access code you were sent. If you've already started, use the same code to pick up where you left off.</p>
            {(['name', 'email', 'code'] as const).map((k) => (
              <label key={k} className="block space-y-1.5">
                <span className="text-sm font-medium">{k === 'name' ? 'Full name' : k === 'email' ? 'Email' : 'Access code'}</span>
                <Input
                  value={creds[k]}
                  type={k === 'email' ? 'email' : 'text'}
                  autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'}
                  className={k === 'code' ? 'uppercase tracking-widest' : ''}
                  onChange={(e) => setCreds({ ...creds, [k]: e.target.value })}
                />
              </label>
            ))}
            {err && <p role="alert" className="text-sm text-destructive">{err}</p>}
            <Button type="submit" disabled={busy} className="w-full h-12">{busy ? 'Checking…' : 'Start exam'}</Button>
          </form>
        )}

        {(stage === 'exam' || stage === 'review') && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{stage === 'review' ? 'Review' : `Section ${step + 1} of ${sections.length}`}</span>
                <span>
                  {remaining !== null && `${Math.floor(remaining / 60000)}:${String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0')} left · `}
                  {saveState === 'saving' ? 'Saving…' : saveState === 'offline' ? 'Saved on this device' : 'Saved'}
                </span>
              </div>
              <Progress value={pct} />
            </div>

            {stage === 'exam' && step === 0 && meta.intro && <p className="text-muted-foreground">{meta.intro}</p>}

            {stage === 'exam' && sec && (
              <>
                <h2 className="font-serif text-2xl">{sec.name}</h2>
                <ol className="space-y-8">
                  {sec.qs.map((q) => {
                    const n = questions.indexOf(q) + 1;
                    return (
                      <li key={q.id} className="space-y-3">
                        <p className="font-medium"><span className="text-rust mr-2">{n}.</span>{q.question}</p>
                        {q.type === 'mc' ? (
                          <div className="space-y-2" role="radiogroup">
                            {q.options.map((o, i) => {
                              const on = answers[q.id] === String(i);
                              return (
                                <button key={i} type="button" role="radio" aria-checked={on}
                                  onClick={() => setAnswer(q.id, String(i))}
                                  className={`w-full text-left rounded-md border px-4 py-3 text-sm transition-colors ${on ? 'border-rust bg-parchment-deep' : 'border-border hover:bg-muted'}`}>
                                  {o}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <>
                            {q.suggested_length && <p className="text-xs text-muted-foreground">Suggested length: {q.suggested_length}</p>}
                            <Textarea rows={5} value={answers[q.id] ?? ''} onChange={(e) => setAnswer(q.id, e.target.value)} />
                          </>
                        )}
                      </li>
                    );
                  })}
                </ol>
                <div className="flex gap-3 pt-4">
                  {step > 0 && <Button variant="outline" className="flex-1 h-12" onClick={() => { flush(); setStep(step - 1); window.scrollTo(0, 0); }}>Back</Button>}
                  <Button className="flex-1 h-12" onClick={() => { flush(); if (step < sections.length - 1) setStep(step + 1); else setStage('review'); window.scrollTo(0, 0); }}>
                    {step < sections.length - 1 ? 'Next section' : 'Review answers'}
                  </Button>
                </div>
              </>
            )}

            {stage === 'exam' && !sections.length && <p className="text-muted-foreground">There are no questions yet. Please check back later.</p>}

            {stage === 'review' && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl">Review</h2>
                {unanswered.length ? (
                  <>
                    <p>You have {unanswered.length} unanswered question{unanswered.length > 1 ? 's' : ''}:</p>
                    <ul className="space-y-2">
                      {unanswered.map((q) => (
                        <li key={q.id}>
                          <button className="text-left text-sm underline underline-offset-2 text-rust" onClick={() => { setStep(sections.findIndex((s) => s.name === q.section)); setStage('exam'); }}>
                            {questions.indexOf(q) + 1}. {q.question}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : <p>Every question has an answer.</p>}
                {err && <p role="alert" className="text-sm text-destructive">{err}</p>}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-12" onClick={() => { setStage('exam'); setStep(sections.length - 1); }}>Back</Button>
                  <Button className="flex-1 h-12" disabled={busy} onClick={submit}>{busy ? 'Submitting…' : 'Submit exam'}</Button>
                </div>
              </div>
            )}
          </div>
        )}

        {stage === 'done' && (
          <div className="text-center space-y-4 py-16">
            <img src={symbol.url} alt="" className="h-14 w-14 mx-auto" />
            <p className="font-serif text-2xl">Thank you. Your exam has been submitted. You'll receive your results by email.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FinalExam;
