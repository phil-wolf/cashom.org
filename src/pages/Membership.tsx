import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Fragment } from 'react';
import { Check, Minus, ArrowRight, ArrowDown } from 'lucide-react';

type TierKey = 'server' | 'steward' | 'cashom';

interface BenefitRow {
  label: string;
  server: boolean;
  steward: boolean;
  cashom: boolean;
}

interface BenefitGroup {
  title: string;
  description: string;
  rows: BenefitRow[];
}

const benefitGroups: BenefitGroup[] = [
  {
    title: 'Community',
    description: '',
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
    description: '',
    rows: [
      { label: 'Session library', server: true, steward: true, cashom: true },
      { label: 'Server and Steward courses included', server: false, steward: false, cashom: true },
      { label: 'Full Lens Framework', server: false, steward: false, cashom: true },
      { label: 'Boulder retreat (travel not covered)', server: false, steward: false, cashom: true },
    ],
  },
  {
    title: 'Recognition',
    description: '',
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
    description: '',
    rows: [
      { label: 'Teaching and certifying rights', server: false, steward: false, cashom: true },
      { label: 'Cultivating Spirits licensing potential', server: false, steward: false, cashom: true },
      { label: 'Co-led webinars and live events', server: false, steward: false, cashom: true },
      { label: 'Return to the retreat as teacher', server: false, steward: false, cashom: true },
    ],
  },
];

interface Tier {
  key: TierKey;
  name: string;
  price: string;
  description: string;
}

const tiers: Tier[] = [
  {
    key: 'server',
    name: 'Server',
    price: '$149',
    description: 'For anyone bringing cannabis into the work they already do.',
  },
  {
    key: 'steward',
    name: 'Steward',
    price: '$798',
    description: 'For professionals ready to guide guests and curate experiences.',
  },
  {
    key: 'cashom',
    name: 'CashoM',
    price: '$9,500',
    description: 'For the few who want to master the craft and teach it.',
  },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? (
    <Check className="w-4 h-4 text-rust mx-auto" strokeWidth={3} aria-label="Included" />
  ) : (
    <Minus className="w-4 h-4 text-ink-brown/25 mx-auto" aria-label="Not included" />
  );

const Membership = () => {
  const scrollToJoin = () => {
    const joinSection = document.getElementById('how-to-join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Seo
        title="CashoM — Cannabis Hospitality Certification"
        description="Three tiers of cannabis hospitality certification: Server, Steward, and CashoM. Compare what each includes and enroll."
        path="/membership"
      />
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-rust text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-6">
              Cannabis Hospitality Certification
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink-brown leading-[1.05] mb-6">
              CashoM
            </h1>
            <p className="text-lg md:text-xl text-ink-brown/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              A professional home for people who serve cannabis — trained, credentialed, and connected.
            </p>
            <button
              onClick={scrollToJoin}
              className="inline-flex items-center rounded-full bg-rust text-white font-sans text-base font-semibold px-10 py-4 hover:bg-rust/90 transition-colors shadow-lg shadow-rust/20"
            >
              Enroll
              <ArrowDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </section>

        {/* 2. Why this exists */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-6">
                Why this exists
              </h2>
              <div className="space-y-4 text-lg text-ink-brown/70 leading-relaxed">
                <p>
                  Cannabis hospitality is still being invented — and the people doing it deserve
                  real training, real recognition, and each other.
                </p>
                <p>
                  The purpose of this community is to raise the standard of the space, not to
                  gatekeep it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How access works */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-6">
                How access works
              </h2>
              <div className="space-y-4 text-lg text-ink-brown/70 leading-relaxed">
                <p>Access is earned, not bought. Complete a CashoM certification and you're in.</p>
                <p>Each level of certification opens more of the community. Nobody buys their way past the work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Full comparison table */}
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
                      <Fragment key={group.title}>
                        <tr className="bg-parchment-deep/50">
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
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How to join */}
        <section id="how-to-join" className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-3">
                  How to join
                </h2>
                <p className="text-ink-brown/70 leading-relaxed">
                  Complete the certification for the level you want, and its access is yours.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {tiers.map((tier) => (
                  <article
                    key={tier.key}
                    className={`flex flex-col rounded-2xl p-8 md:p-10 ${
                      tier.key === 'cashom'
                        ? 'bg-ink-brown text-parchment shadow-xl'
                        : 'bg-background border border-ink-brown/10 shadow-sm'
                    }`}
                  >
                    <h3
                      className={`text-2xl font-serif font-bold ${
                        tier.key === 'cashom' ? 'text-parchment' : 'text-ink-brown'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`mt-3 text-4xl font-serif font-bold ${
                        tier.key === 'cashom' ? 'text-parchment' : 'text-ink-brown'
                      }`}
                    >
                      {tier.price}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed flex-1 ${
                        tier.key === 'cashom' ? 'text-parchment/70' : 'text-ink-brown/70'
                      }`}
                    >
                      {tier.description}
                    </p>
                    <a
                      href="#"
                      className={`mt-8 inline-flex w-full items-center justify-center rounded-full font-sans text-sm font-semibold px-5 py-3 transition-colors ${
                        tier.key === 'cashom'
                          ? 'bg-parchment text-ink-brown hover:bg-parchment-deep'
                          : 'border border-rust text-rust hover:bg-rust hover:text-white'
                      }`}
                    >
                      Enroll in {tier.name}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Closing */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-ink-brown rounded-2xl px-8 py-16 md:py-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-6">
                Raise the standard of the space
              </h2>
              <p className="text-parchment/70 leading-relaxed mb-10 max-w-xl mx-auto">
                Complete the work, take your place in the community.
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
