import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Fragment } from 'react';
import { Check, Minus, ArrowRight, ArrowDown } from 'lucide-react';
import cashomSymbol from '@/assets/cashom-symbol.png.asset.json';

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
    <span
      className="mx-auto flex w-6 h-6 items-center justify-center rounded-full bg-rust/10"
      aria-label="Included"
    >
      <Check className="w-3.5 h-3.5 text-rust" strokeWidth={3} />
    </span>
  ) : (
    <Minus className="w-4 h-4 text-ink-brown/20 mx-auto" aria-label="Not included" />
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
            <img
              src={cashomSymbol.url}
              alt="CashoM symbol"
              className="w-20 h-auto mx-auto mb-8"
              loading="eager"
            />
            <p className="text-rust text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-6">
              Cannabis Hospitality Certification
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink-brown leading-[1.05] mb-6">
              CashoM
            </h1>
            <p className="text-lg md:text-xl text-ink-brown/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Certification for cannabis hospitality professionals. Complete a course, earn the credential, and join the community that comes with it.
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

        {/* 2. Why this exists + How it works — side by side */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:divide-x md:divide-ink-brown/10">
              <div className="md:pr-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-6">
                  Why this exists
                </h2>
                <div className="space-y-4 text-lg text-ink-brown/70 leading-relaxed">
                  <p>
                    We're doing everything we can to grow the cannabis hospitality space, because
                    we believe in the impact it can have on our society.
                  </p>
                  <p>
                    We believe building a community for our students helps this. Please stay tuned
                    as we continue to refine and perfect this community.
                  </p>
                </div>
              </div>
              <div className="md:pl-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-6">
                  How it works
                </h2>
                <div className="space-y-4 text-lg text-ink-brown/70 leading-relaxed">
                  <p>Take a CashoM course and you're in.</p>
                  <p>
                    The further you go, the more opens up — the room, the recognition, and
                    eventually the right to teach it yourself.
                  </p>
                </div>
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
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-ink-brown/10">
                      <th className="sticky left-0 bg-background z-10 text-left font-serif font-bold text-ink-brown p-4 md:p-5 min-w-[210px] md:min-w-[240px]">
                        Benefit
                      </th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown/60 text-center w-24 md:w-28">
                        Server
                      </th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown/60 text-center w-24 md:w-28">
                        Steward
                      </th>
                      <th className="p-4 md:p-5 font-serif font-bold text-ink-brown text-center w-24 md:w-32 bg-parchment-deep/40">
                        CashoM
                        <span className="block mt-1 text-[0.55rem] font-sans font-semibold tracking-[0.18em] uppercase text-rust">
                          Full access
                        </span>
                      </th>
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
                          <tr
                            key={row.label}
                            className="group border-t border-ink-brown/[0.07] hover:bg-parchment-deep/20 transition-colors"
                          >
                            <td className="sticky left-0 bg-background group-hover:bg-parchment-deep/30 p-4 md:p-5 text-ink-brown/80 leading-snug transition-colors">
                              {row.label}
                            </td>
                            <td className="p-4 md:p-5 text-center"><Cell value={row.server} /></td>
                            <td className="p-4 md:p-5 text-center"><Cell value={row.steward} /></td>
                            <td className="p-4 md:p-5 text-center bg-parchment-deep/25"><Cell value={row.cashom} /></td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-ink-brown/50 md:hidden">
                Swipe to compare all tiers
              </p>
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
