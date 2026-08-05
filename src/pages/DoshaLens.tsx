import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import {
  doshaKeys,
  doshaLens,
  getDosha,
  getPursuit,
  getPursuitKeys,
  pursuitLabels,
  type Alignment,
  type DoshaKey,
  type PursuitKey,
  type StateDirection,
  type WheelLevel,
} from '@/data/doshaLens';

const alignmentStyles: Record<Alignment, string> = {
  strong: 'bg-emerald-600/10 text-emerald-800 border-emerald-600/30',
  moderate: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
  gentle: 'bg-ink-brown/10 text-ink-brown/60 border-ink-brown/20',
};

const wheelLevels: { key: WheelLevel; label: string }[] = [
  { key: 'low', label: 'Low' },
  { key: 'medium', label: 'Medium' },
  { key: 'high', label: 'High' },
];

const stateDirections: { key: StateDirection; label: string; blurb: string }[] = [
  { key: 'from_below', label: 'Below the target', blurb: 'Activate toward it' },
  { key: 'at_target', label: 'At the target', blurb: 'Sustain it' },
  { key: 'from_above', label: 'Above the target', blurb: 'Ground through it' },
];

const chipLabel = (chip: string) => chip.replace(/-/g, ' ');

const DoshaLens = () => {
  const [doshaKey, setDoshaKey] = useState<DoshaKey>('vata');
  const [pursuitKey, setPursuitKey] = useState<PursuitKey>('creativity');
  const [direction, setDirection] = useState<StateDirection>('at_target');

  const dosha = getDosha(doshaKey);
  const pursuitKeysForDosha = useMemo(() => getPursuitKeys(doshaKey), [doshaKey]);
  const activePursuitKey = pursuitKeysForDosha.includes(pursuitKey) ? pursuitKey : pursuitKeysForDosha[0];
  const pursuit = getPursuit(doshaKey, activePursuitKey);
  const terpenes = doshaLens.terpene_directions[doshaKey];

  const handleDoshaSelect = (key: DoshaKey) => {
    setDoshaKey(key);
    const keys = getPursuitKeys(key);
    if (!keys.includes(pursuitKey)) {
      setPursuitKey(keys[0]);
    }
  };

  if (!pursuit) return null;

  const availableDirections = stateDirections.filter((d) => {
    if (d.key === 'at_target') return true;
    return pursuit.states[d.key] !== null;
  });
  const activeDirection = availableDirections.some((d) => d.key === direction) ? direction : 'at_target';
  const activeStateCard = pursuit.states[activeDirection];
  const unavailableNote =
    direction === 'from_below' ? pursuit.states.from_below_note : direction === 'from_above' ? pursuit.states.from_above_note : undefined;

  return (
    <div className="min-h-screen bg-parchment">
      <Seo
        title="The Dosha Lens Framework — CashoM"
        description="Explore the CashoM dosha archetype wheels, terpene state navigator, and state-conditional protocol cards. Apply your high to your pursuits in life."
        path="/dosha-lens"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-parchment py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-ink-brown/70 hover:text-rust transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to CashoM
            </Link>

            <div className="max-w-3xl">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                The Lens Framework
              </p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink-brown leading-tight mb-6">
                The Dosha Lens Framework
              </h1>
              <p className="text-lg italic text-ink-brown/75 leading-relaxed mb-4">
                &ldquo;{doshaLens.meta.canonical_phrase}&rdquo;
              </p>
              <p className="text-ink-brown/70 leading-relaxed">{doshaLens.meta.description}</p>
            </div>
          </div>
        </section>

        {/* Dosha selector */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-6">
              Choose a dosha
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {doshaKeys.map((key) => {
                const d = getDosha(key);
                const isActive = key === doshaKey;
                return (
                  <button
                    key={key}
                    onClick={() => handleDoshaSelect(key)}
                    className="text-left rounded-2xl border p-6 transition-colors"
                    style={{
                      borderColor: isActive ? d.color : 'hsl(var(--ink-brown) / 0.1)',
                      backgroundColor: isActive ? `${d.color}14` : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: d.color }}
                      />
                      <h2 className="font-serif text-xl font-bold text-ink-brown">{d.label}</h2>
                    </div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-brown/50 mb-3">{d.element}</p>
                    <p className="text-sm text-ink-brown/70 leading-relaxed">{d.constitution_note}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pursuit selector */}
        <section className="py-10 bg-parchment">
          <div className="container mx-auto px-4">
            <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-6">
              Choose a pursuit
            </p>
            <div className="flex flex-wrap gap-3">
              {pursuitKeysForDosha.map((key) => {
                const isActive = key === activePursuitKey;
                return (
                  <button
                    key={key}
                    onClick={() => setPursuitKey(key)}
                    className={`rounded-full px-5 py-2 text-sm font-sans font-semibold transition-colors border ${
                      isActive
                        ? 'bg-ink-brown text-parchment border-ink-brown'
                        : 'bg-background text-ink-brown/70 border-ink-brown/15 hover:border-rust/40'
                    }`}
                  >
                    {pursuitLabels[key]}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wheel */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                {dosha.label} · {pursuitLabels[activePursuitKey]}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-4">
                Lens: {pursuit.lens}
              </h2>
              <p className="text-ink-brown/70 leading-relaxed">{pursuit.prime}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {wheelLevels.map(({ key, label }) => {
                const band = pursuit.wheel[key];
                const isTarget = key === pursuit.target;
                return (
                  <div
                    key={key}
                    className="rounded-2xl border p-6 relative"
                    style={{
                      borderColor: isTarget ? dosha.color : 'hsl(var(--ink-brown) / 0.1)',
                      backgroundColor: isTarget ? `${dosha.color}0f` : 'hsl(var(--background))',
                    }}
                  >
                    {isTarget && (
                      <span
                        className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[0.65rem] font-sans font-semibold uppercase tracking-[0.12em] text-white"
                        style={{ backgroundColor: dosha.color }}
                      >
                        Target
                      </span>
                    )}
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-brown/50 mb-2">{label}</p>
                    <p className="font-serif text-2xl font-bold text-ink-brown mb-3 capitalize">{band.feeling}</p>
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold capitalize ${alignmentStyles[band.alignment]}`}
                    >
                      {band.alignment}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p className="text-xs uppercase tracking-[0.14em] text-ink-brown/50">Activation profile</p>
              {pursuit.activation_profile.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs font-semibold capitalize"
                  style={{ backgroundColor: `${dosha.color}1f`, color: dosha.color }}
                >
                  {chipLabel(t)}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Session arc */}
        <section className="py-16 bg-parchment">
          <div className="container mx-auto px-4">
            <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-6">
              Session arc
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  Prime
                </p>
                <p className="text-sm text-ink-brown/70 leading-relaxed">{pursuit.prime}</p>
              </article>

              <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  Lift → apply
                </p>
                <h3 className="font-serif text-lg font-bold text-ink-brown mb-2">{pursuit.apply.beat_name}</h3>
                <p className="text-sm text-ink-brown/70 leading-relaxed">{pursuit.apply.copy}</p>
              </article>

              <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  Land
                </p>
                <p className="text-sm text-ink-brown/70 leading-relaxed">{activeStateCard?.land}</p>
              </article>
            </div>

            {/* State navigator */}
            <div className="max-w-3xl mb-8">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                Where are you right now?
              </p>
              <h3 className="text-2xl font-serif font-bold text-ink-brown mb-3">
                Relative to the target state of {pursuit.target_feeling}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {stateDirections.map(({ key, label, blurb }) => {
                const isAvailable = availableDirections.some((d) => d.key === key);
                const isActive = key === activeDirection;
                return (
                  <button
                    key={key}
                    disabled={!isAvailable}
                    onClick={() => setDirection(key)}
                    className={`rounded-2xl border px-5 py-3 text-left transition-colors ${
                      !isAvailable
                        ? 'opacity-40 cursor-not-allowed border-ink-brown/10 bg-background'
                        : isActive
                        ? 'text-white border-transparent'
                        : 'bg-background border-ink-brown/15 hover:border-rust/40'
                    }`}
                    style={isActive && isAvailable ? { backgroundColor: dosha.color } : undefined}
                  >
                    <p className="text-sm font-sans font-semibold">{label}</p>
                    <p className={`text-xs ${isActive && isAvailable ? 'text-white/80' : 'text-ink-brown/50'}`}>
                      {blurb}
                    </p>
                  </button>
                );
              })}
            </div>

            {!availableDirections.some((d) => d.key === direction) && unavailableNote && (
              <p className="text-sm text-ink-brown/60 italic mb-8 max-w-2xl">{unavailableNote}</p>
            )}

            {activeStateCard && (
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: `${dosha.color}55`, backgroundColor: `${dosha.color}0a` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <h4 className="font-serif text-2xl font-bold text-ink-brown">{activeStateCard.beat_name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStateCard.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full px-3 py-1 text-xs font-semibold capitalize"
                        style={{ backgroundColor: `${dosha.color}1f`, color: dosha.color }}
                      >
                        {chipLabel(chip)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-ink-brown/50 mb-2">
                      Guidance
                    </p>
                    <p className="text-sm text-ink-brown/80 leading-relaxed">{activeStateCard.guidance}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-ink-brown/50 mb-2">
                      Land
                    </p>
                    <p className="text-sm text-ink-brown/80 leading-relaxed">{activeStateCard.land}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-ink-brown/50 mb-2">
                      Watch for
                    </p>
                    <p className="text-sm text-ink-brown/80 leading-relaxed">{activeStateCard.watch}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Terpene direction navigator */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                Terpene state navigator
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown">
                Directions for {dosha.label}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {(
                [
                  { key: 'up' as const, label: 'Up', terpenes: terpenes.up, note: terpenes.up_note },
                  { key: 'down' as const, label: 'Down', terpenes: terpenes.down, note: terpenes.down_note },
                  { key: 'hold' as const, label: 'Hold', terpenes: terpenes.hold, note: terpenes.hold_note },
                ]
              ).map(({ key, label, terpenes: list, note }) => (
                <article key={key} className="rounded-2xl border border-ink-brown/10 bg-parchment p-8">
                  <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {list.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-xs font-semibold capitalize"
                        style={{ backgroundColor: `${dosha.color}1f`, color: dosha.color }}
                      >
                        {chipLabel(t)}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-ink-brown/70 leading-relaxed">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Alignment legend + disclaimer */}
        <section className="py-16 bg-ink-brown">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-parchment/50 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                  Alignment scale
                </p>
                <ul className="space-y-3">
                  {(Object.keys(doshaLens.meta.alignment_scale) as Alignment[]).map((key) => (
                    <li key={key} className="text-parchment/80 text-sm leading-relaxed">
                      <span className="font-semibold capitalize">{key}</span> —{' '}
                      {doshaLens.meta.alignment_scale[key]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-parchment/50 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                  A note on this material
                </p>
                <p className="text-parchment/70 text-sm leading-relaxed">{doshaLens.meta.disclaimer}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DoshaLens;
