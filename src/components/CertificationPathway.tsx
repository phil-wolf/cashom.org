import { Check, ChevronRight } from 'lucide-react';

interface CertificationPathwayProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showFraming?: boolean;
}


type Tier = {
  eyebrow: string;
  status: string;
  title: string;
  price: string;
  audience: string;
  becomes: string;
  learn: string[];
  format: string;
  branchNote?: string;
};

const tiers: Tier[] = [
  {
    eyebrow: 'Tier 1',
    status: 'Optional starting point',
    title: 'Cannabis Lounge Attendant Certification',
    price: '$39',
    audience: 'Lounge workers with no hosting or guidance responsibilities',
    becomes: 'Lounge Attendant Certified',
    learn: [
      'Consumable basics across product formats',
      'Responsible service fundamentals',
      'Cleanliness and basic safety protocols',
    ],
    format: 'Self-paced',
  },
  {
    eyebrow: 'Tier 2',
    status: 'The gateway — required to advance / anyone can start here',
    title: 'Certified Server of Cannabis',
    price: '$149',
    audience: 'Hospitality staff serving cannabis guests directly',
    becomes: 'Certified Server of Cannabis',
    learn: [
      'Explaining the plant to a curious guest',
      'Basic safety, cleanliness, and legal/compliance awareness',
      "Matching a guest to a product they'll enjoy, across flower, concentrates, edibles, and THC beverages",
      'Guest communication, with an introduction to the GUIDE method',
      'Recognizing over-consumption and basic harm-reduction',
    ],
    format: '3 classes · 75 minutes each · 2–3 weeks',
  },
  {
    eyebrow: 'Tier 3',
    status: 'Enrollment opening soon',
    title: 'Certified Steward of Cannabis',
    price: '$597',
    audience: 'Professionals ready to guide guests, curate events, and build a coaching practice',
    becomes: 'Certified Steward of Cannabis',
    learn: [
      'Full application of the GUIDE method',
      'Introduction to the Lens Framework',
      'Pacing, sequencing, and curating larger events',
      'Advanced terpene and cannabinoid knowledge',
      'Deeper harm-reduction and addiction awareness',
      'Introduction to building a coaching or service business',
    ],
    format: '8 classes · 75 minutes each',
    branchNote:
      'Optional branch: Specialty Certifications (for chefs, yoga teachers, life coaches, bud bar operators, and more) — In development',
  },
  {
    eyebrow: 'Tier 4',
    status: 'Cohort-based · in person retreat',
    title: 'CashoM',
    price: '$12,000',
    audience: 'A dedicated few pursuing full mastery and stewardship of the experience itself',
    becomes: 'CashoM — Level 1',
    learn: [
      '12-month structured curriculum',
      'Weekly training sessions and monthly group workshops',
      'Private coaching sessions with Philip Wolf',
      'Full application of the Lens Framework: "Apply your high to your pursuits in life"',
      'An exclusive in-person retreat experience',
    ],
    format: '12-month program · weekly sessions · monthly workshops · live retreat',
  },
];

const CertificationPathway = () => {
  return (
    <section id="courses" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
            The Certification Pathway
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-brown mb-5">
            How the path works
          </h2>
          <p className="text-lg text-ink-brown/70 leading-relaxed">
            A four-tier ladder from your first day on the floor to full mastery of the cannabis
            experience. Start where you are — advance only as far as you want to go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 items-stretch">
          {tiers.map((tier, i) => (
            <div key={tier.title} className="relative flex">
              <article className="flex flex-col w-full bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase">
                  {tier.eyebrow}
                </p>
                <span className="mt-3 inline-flex self-start rounded-full bg-rust/10 text-rust text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-3 py-1 leading-snug">
                  {tier.status}
                </span>

                <h3 className="mt-5 text-2xl font-serif font-bold text-ink-brown leading-snug">
                  {tier.title}
                </h3>
                <p className="mt-2 text-3xl font-serif font-bold text-ink-brown">{tier.price}</p>

                <p className="mt-4 text-sm text-ink-brown/70 leading-relaxed">
                  <span className="font-semibold text-ink-brown">For: </span>
                  {tier.audience}
                </p>

                <div className="mt-6 border-t border-ink-brown/10 pt-5">
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
                  <p className="text-xs text-ink-brown/60 mb-4">{tier.format}</p>
                  <div className="border-t border-ink-brown/10 pt-4">
                    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-1">
                      You become
                    </p>
                    <p className="font-serif text-lg font-semibold text-ink-brown">{tier.becomes}</p>
                  </div>
                  {tier.branchNote && (
                    <p className="mt-4 rounded-lg bg-parchment-deep px-4 py-3 text-xs text-ink-brown/70 leading-relaxed">
                      {tier.branchNote}
                    </p>
                  )}
                </div>
              </article>

              {i < tiers.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-rust/60"
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-3xl mx-auto text-center text-lg text-ink-brown/70 leading-relaxed">
          Lounge Attendant and Server are all most people ever need. Steward and CashoM are optional
          advanced mastery, pursued by a dedicated few.
        </p>
      </div>
    </section>
  );
};

export default CertificationPathway;
