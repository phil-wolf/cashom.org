import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';

interface CertificationPathwayProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showFraming?: boolean;
}

const branchNotes: Record<string, string> = {
  'certified-steward-of-cannabis':
    'Optional branch: Specialty Certifications (for chefs, yoga teachers, life coaches, bud bar operators, and more) — In development',
};

const CertificationPathway = ({
  eyebrow = 'The Certification Pathway',
  title = 'How the path works',
  subtitle = 'A three-tier ladder from your first day serving guests to full mastery of the cannabis experience. Start where you are — advance only as far as you want to go.',
  showFraming = true,
}: CertificationPathwayProps) => {
  return (
    <section id="courses" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-brown mb-5">
            {title}
          </h2>
          <p className="text-lg text-ink-brown/70 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4 items-stretch">
          {courses.map((tier, i) => (
            <div key={tier.slug} className="relative flex">
              <article className="flex flex-col w-full h-full bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase">
                  {tier.tier}
                </p>
                <span
                  className={`mt-3 inline-flex self-start rounded-full text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-3 py-1 leading-snug ${
                    tier.comingSoon
                      ? 'bg-ink-brown/10 text-ink-brown/60'
                      : 'bg-rust/10 text-rust'
                  }`}
                >
                  {tier.status}
                </span>

                <h3 className="mt-5 text-2xl font-serif font-bold text-ink-brown leading-snug">
                  {tier.title}
                </h3>
                <div className="mt-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="text-3xl font-serif font-bold text-ink-brown">{tier.price}</p>
                    {tier.foundingLabel && (
                      <span className="inline-flex rounded-full bg-rust/10 text-rust text-[0.6rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1">
                        {tier.foundingLabel}
                      </span>
                    )}
                  </div>
                  {tier.standardPriceNote && (
                    <p className="text-xs text-ink-brown/60">{tier.standardPriceNote}</p>
                  )}
                  {tier.paymentOptions && (
                    <div className="mt-3 p-3 rounded-lg bg-parchment-deep/50 border border-ink-brown/10">
                      <p className="text-[0.6rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-2">
                        Payment options
                      </p>
                      <ul className="space-y-1">
                        {tier.paymentOptions.map((opt) => (
                          <li key={opt.label} className="text-xs text-ink-brown/80 leading-snug">
                            <span className="font-semibold text-ink-brown">{opt.label}</span> —{' '}
                            {opt.value}
                          </li>
                        ))}
                      </ul>
                      {tier.paymentNote && (
                        <p className="mt-2 text-[0.65rem] text-ink-brown/60 leading-relaxed">
                          {tier.paymentNote}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-4 text-sm text-ink-brown/70 leading-relaxed">
                  <span className="font-semibold text-ink-brown">For: </span>
                  {tier.audience}
                </p>

                <div className="mt-6 border-t border-ink-brown/10 pt-5 flex-1">
                  <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-3">
                    What you'll learn
                  </p>
                  <ul className="space-y-2.5">
                    {tier.learn.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink-brown/80 leading-relaxed">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-rust" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  {tier.oneOnOne && (
                    <p className="text-xs text-ink-brown/60 mb-1">{tier.oneOnOne}</p>
                  )}
                  <p className="text-xs text-ink-brown/60 mb-1">{tier.format}</p>
                  {tier.schedule && (
                    <div className="mb-4">
                      <p className="text-[0.6rem] font-sans font-semibold tracking-[0.15em] uppercase text-ink-brown/60 mb-1.5">
                        {tier.schedule.label}
                      </p>
                      <ul className="space-y-0.5 mb-1.5">
                        {tier.schedule.items.map((item) => (
                          <li key={item} className="text-xs text-ink-brown/70 leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                      {tier.schedule.note && (
                        <p className="text-xs text-rust font-medium leading-snug">{tier.schedule.note}</p>
                      )}
                    </div>
                  )}
                  <div className="border-t border-ink-brown/10 pt-4">

                    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-1">
                      You become
                    </p>
                    <p className="font-serif text-lg font-semibold text-ink-brown">{tier.becomes}</p>
                  </div>
                  {branchNotes[tier.slug] && (
                    <p className="mt-4 rounded-lg bg-parchment-deep px-4 py-3 text-xs text-ink-brown/70 leading-relaxed">
                      {branchNotes[tier.slug]}
                    </p>
                  )}
                  <Link
                    to={`/courses/${tier.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-rust text-rust font-sans text-sm font-semibold px-5 py-3 hover:bg-rust hover:text-white transition-colors"
                  >
                    {tier.comingSoon ? 'Coming soon — see details' : 'View course details'}
                  </Link>
                </div>
              </article>

              {i < courses.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-rust/60"
                />
              )}
            </div>
          ))}
        </div>

        {showFraming && (
          <p className="mt-16 max-w-3xl mx-auto text-center text-lg text-ink-brown/70 leading-relaxed">
            Server and Steward are all most people ever need. CashoM is optional advanced mastery,
            pursued by a dedicated few.
          </p>
        )}
      </div>
    </section>
  );
};

export default CertificationPathway;
