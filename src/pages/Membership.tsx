import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Fragment } from 'react';
import { Check, Minus, ArrowRight } from 'lucide-react';

type TierKey = 'server' | 'steward' | 'cashom';

interface BenefitRow {
  label: string;
  server: boolean;
  steward: boolean;
  cashom: boolean;
}

interface BenefitGroup {
  title: string;
  rows: BenefitRow[];
}

const benefitGroups: BenefitGroup[] = [
  {
    title: 'Community',
    rows: [
      { label: 'Circle member space', server: true, steward: true, cashom: true },
      { label: 'Monthly members call', server: true, steward: true, cashom: true },
      { label: 'Featured on the monthly call', server: false, steward: true, cashom: true },
      { label: 'In-person meetups (potential during conferences)', server: false, steward: true, cashom: true },
      { label: 'Private cohort space', server: false, steward: false, cashom: true },
      { label: 'Monthly one-on-one with Philip', server: false, steward: false, cashom: true },
    ],
  },
  {
    title: 'Learning',
    rows: [
      { label: 'Session library', server: true, steward: true, cashom: true },
      { label: 'Server and Steward courses included', server: false, steward: false, cashom: true },
      { label: 'Full Lens Framework', server: false, steward: false, cashom: true },
      { label: 'Boulder retreat (travel not covered)', server: false, steward: false, cashom: true },
    ],
  },
  {
    title: 'Recognition',
    rows: [
      { label: 'Digital badge and credential use', server: true, steward: true, cashom: true },
      { label: 'Public member directory', server: false, steward: true, cashom: true },
      { label: 'Guest Substack feature (by invitation)', server: false, steward: false, cashom: true },
      { label: 'Webinar feature (by invitation)', server: false, steward: true, cashom: true },
      { label: 'Partner spotlights', server: false, steward: true, cashom: true },
      { label: 'Conferral and lapel pin', server: false, steward: false, cashom: true },
      { label: 'First look at guiding work', server: false, steward: false, cashom: true },
    ],
  },
  {
    title: 'Opportunities',
    rows: [
      { label: 'Teaching and certifying rights', server: false, steward: false, cashom: true },
      { label: 'Cultivating Spirits licensing potential', server: false, steward: false, cashom: true },
      { label: 'Co-led webinars and live events', server: false, steward: false, cashom: true },
      { label: 'Return to the retreat as teacher', server: false, steward: false, cashom: true },
    ],
  },
];

interface TierCard {
  key: TierKey;
  name: string;
  price: string;
  audience: string;
  benefits: string[];
  footer: string;
  featured?: boolean;
}

const tierCards: TierCard[] = [
  {
    key: 'server',
    name: 'Server',
    price: '$149',
    audience: 'For anyone bringing cannabis into the work they already do.',
    benefits: [
      'Certified Server of Cannabis course',
      'Circle member space',
      'Monthly members call',
      'Session library',
      'Digital badge and credential use',
    ],
    footer: 'Founding rate on Steward',
  },
  {
    key: 'steward',
    name: 'Steward',
    price: '$798',
    audience: 'For professionals ready to guide guests and curate experiences.',
    benefits: [
      'Certified Steward of Cannabis course',
      'Two one-on-one sessions with Philip',
      'Featured on the monthly call',
      'Public member directory',
      'Webinar features and partner spotlights',
      'In-person meetups',
    ],
    footer: 'Full tuition credit to the Initiation',
  },
  {
    key: 'cashom',
    name: 'CashoM',
    price: '$9,500',
    audience: 'For the few who want to master the craft and teach it.',
    benefits: [
      'The year-long Initiation',
      'Full Lens Framework',
      'Boulder retreat',
      'Monthly one-on-one with Philip',
      'Teaching and certifying rights',
      'Conferral and lapel pin',
    ],
    footer: 'You hold the standard and teach the tiers below',
    featured: true,
  },
];

const ladder = [
  { tier: 'Server', line: 'You receive.' },
  { tier: 'Steward', line: "You're seen." },
  { tier: 'CashoM', line: 'You teach.' },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? (
    <Check className="w-4 h-4 text-rust mx-auto" strokeWidth={3} aria-label="Included" />
  ) : (
    <Minus className="w-4 h-4 text-ink-brown/25 mx-auto" aria-label="Not included" />
  );

const Membership = () => {
  return (
    <div className="min-h-screen bg-parchment">
      <Seo
        title="CashoM Membership — Cannabis Hospitality Certification Tiers"
        description="Three tiers of cannabis hospitality certification and membership: Server, Steward, and CashoM. Compare benefits and enroll."
        path="/membership"
      />
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-rust text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-6">
              Certification & Membership
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink-brown leading-[1.05] mb-6">
              CashoM Membership
            </h1>
            <p className="text-lg md:text-xl text-ink-brown/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              A professional home for people who serve cannabis — trained, credentialed, and connected.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-rust text-white font-sans text-base font-semibold px-10 py-4 hover:bg-rust/90 transition-colors shadow-lg shadow-rust/20"
            >
              Enroll
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>

        {/* 2. The ladder */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-brown/10 rounded-2xl overflow-hidden border border-ink-brown/10">
              {ladder.map((step, i) => (
                <div key={step.tier} className="bg-background p-8 md:p-10 text-center relative">
                  <p className="text-rust text-[0.65rem] font-sans font-semibold tracking-[0.25em] uppercase mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-2xl font-serif font-bold text-ink-brown mb-2">{step.tier}</h2>
                  <p className="text-ink-brown/70">{step.line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Pricing cards */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {tierCards.map((tier) => (
                <article
                  key={tier.key}
                  className={`flex flex-col rounded-2xl p-8 md:p-10 ${
                    tier.featured
                      ? 'bg-ink-brown text-parchment shadow-xl lg:-my-4 lg:py-14'
                      : 'bg-background border border-ink-brown/10 shadow-sm'
                  }`}
                >
                  <h3
                    className={`text-2xl font-serif font-bold ${
                      tier.featured ? 'text-parchment' : 'text-ink-brown'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-3 text-4xl font-serif font-bold ${
                      tier.featured ? 'text-parchment' : 'text-ink-brown'
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      tier.featured ? 'text-parchment/70' : 'text-ink-brown/70'
                    }`}
                  >
                    {tier.audience}
                  </p>
                  <ul
                    className={`mt-8 space-y-3 flex-1 border-t pt-6 ${
                      tier.featured ? 'border-parchment/15' : 'border-ink-brown/10'
                    }`}
                  >
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.featured ? 'text-parchment' : 'text-rust'
                          }`}
                          strokeWidth={3}
                        />
                        <span className={tier.featured ? 'text-parchment/90' : 'text-ink-brown/80'}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full font-sans text-sm font-semibold px-5 py-3 transition-colors ${
                      tier.featured
                        ? 'bg-parchment text-ink-brown hover:bg-parchment-deep'
                        : 'border border-rust text-rust hover:bg-rust hover:text-white'
                    }`}
                  >
                    Enroll in {tier.name}
                  </a>
                  <p
                    className={`mt-4 text-center text-xs leading-relaxed ${
                      tier.featured ? 'text-parchment/60' : 'text-ink-brown/60'
                    }`}
                  >
                    {tier.footer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Comparison table */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-3">
                What each tier includes
              </h2>
              <p className="text-ink-brown/70 mb-10">
                Every benefit, side by side.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-ink-brown/10 bg-background shadow-sm">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="border-b border-ink-brown/10">
                      <th className="sticky left-0 bg-background z-10 text-left font-serif font-bold text-ink-brown p-4 md:p-5 min-w-[220px]">
                        Benefit
                      </th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown text-center w-28">Server</th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown text-center w-28">Steward</th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown text-center w-28">CashoM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benefitGroups.map((group) => (
                      <>
                        <tr key={group.title} className="bg-parchment-deep/50">
                          <td
                            colSpan={4}
                            className="sticky left-0 p-4 md:p-5 text-rust text-[0.65rem] font-sans font-semibold tracking-[0.25em] uppercase"
                          >
                            {group.title}
                          </td>
                        </tr>
                        {group.rows.map((row) => (
                          <tr key={row.label} className="border-t border-ink-brown/10">
                            <td className="sticky left-0 bg-background p-4 md:p-5 text-ink-brown/80 leading-snug">
                              {row.label}
                            </td>
                            <td className="p-4 md:p-5 text-center"><Cell value={row.server} /></td>
                            <td className="p-4 md:p-5 text-center"><Cell value={row.steward} /></td>
                            <td className="p-4 md:p-5 text-center"><Cell value={row.cashom} /></td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How membership works */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-6">
                How membership works
              </h2>
              <p className="text-lg text-ink-brown/70 leading-relaxed mb-4">
                Membership is earned by completing a course, not by signing up.
              </p>
              <p className="text-lg text-ink-brown/70 leading-relaxed">
                Complete a tier, and its benefits are yours.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Closing CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-ink-brown rounded-2xl px-8 py-16 md:py-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-6">
                Choose your tier
              </h2>
              <p className="text-parchment/70 leading-relaxed mb-10 max-w-xl mx-auto">
                Start where you are. Advance only as far as you want to go.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-parchment text-ink-brown font-sans text-base font-semibold px-10 py-4 hover:bg-parchment-deep transition-colors"
              >
                Enroll
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
