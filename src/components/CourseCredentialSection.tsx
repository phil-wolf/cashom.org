import { Check } from 'lucide-react';

const content = {
  server: {
    eyebrow: 'THE CREDENTIAL',
    headline: 'Proof that travels with you',
    intro:
      "Your certification is issued through Accredible as a digital badge with a live verification link. Put it on LinkedIn, add it to an application, or send it to a manager — one click and they can confirm it's real and current.",
    benefits: [
      {
        lead: 'Managers can check before they hire.',
        body: 'Lounges, dispensaries, and hospitality groups confirm your training in seconds instead of taking your word for it.',
      },
      {
        lead: 'Guests trust you faster.',
        body: "A certified server answers the question every guest is quietly asking: does this person actually know what they're doing?",
      },
    ],
    footnote: 'Valid two years. Renew anytime with a $49 assessment.',
  },
  steward: {
    eyebrow: 'THE CREDENTIAL',
    headline: 'Proof that travels with you',
    intro:
      "Your certification is issued through Accredible as a digital badge with a live verification link. Add it to your site, attach it to a proposal, or include it in a pitch — anyone can confirm it's real and current in one click.",
    benefits: [
      {
        lead: 'Clients book with confidence.',
        body: 'When someone is trusting you with an experience, verifiable training is what turns an inquiry into a booking.',
      },
      {
        lead: 'Venues say yes more easily.',
        body: 'Hosting cannabis service is a risk decision. A credential a venue can independently confirm makes that conversation shorter.',
      },
      {
        lead: 'Partners take you seriously.',
        body: 'Brands, dispensaries, and event producers work with people who can demonstrate training — proof opens doors a résumé line doesn\'t.',
      },
      {
        lead: 'You can charge what the work is worth.',
        body: 'Anyone can call themselves a cannabis guide. Very few can point to a credential that says so.',
      },
      {
        lead: 'Better insurance terms.',
        body: "Insurers writing cannabis event policies weigh documented training. Certification gives you something concrete to bring to underwriting. We're finalizing partnerships to secure direct discounts for certified practitioners.",
      },
    ],
    footnote: 'Valid two years. Renew anytime with a $49 assessment.',
  },
};

interface CourseCredentialSectionProps {
  courseSlug: 'certified-server-of-cannabis' | 'certified-steward-of-cannabis';
}

const CourseCredentialSection = ({ courseSlug }: CourseCredentialSectionProps) => {
  const data = content[courseSlug];
  if (!data) return null;

  return (
    <section className="py-16 bg-parchment border-t border-ink-brown/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-4">
            {data.eyebrow}
          </p>
          <h2 className="text-3xl font-serif font-bold text-ink-brown mb-5">
            {data.headline}
          </h2>
          <p className="text-lg text-ink-brown/75 leading-relaxed mb-8">
            {data.intro}
          </p>
          <ul className="space-y-4">
            {data.benefits.map((benefit) => (
              <li key={benefit.lead} className="flex gap-3 text-ink-brown/80 leading-relaxed">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-rust" strokeWidth={3} />
                <span>
                  <span className="font-bold text-ink-brown">{benefit.lead}</span>{' '}
                  {benefit.body}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm italic text-ink-brown/60">
            {data.footnote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseCredentialSection;
