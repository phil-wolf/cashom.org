import { Check, ExternalLink } from 'lucide-react';

const programs = [
  {
    eyebrow: 'Entry Level',
    title: 'Cannabis Lounge Attendant Certification',
    price: '$39',
    description: 'The fastest way to get started in cannabis hospitality.',
    learn: [
      'Consumable basics across product formats',
      'Responsible service fundamentals',
      'Cleanliness and basic safety protocols',
    ],
    url: 'https://thcservepro.com/live-training',
  },
  {
    eyebrow: 'Core Certification',
    title: 'Certified Server of Cannabis',
    price: '$149',
    description: 'The standard for professionals serving cannabis guests directly.',
    learn: [
      'Explain the plant to a curious guest',
      'Match guests to products across formats',
      'Recognize over-consumption and apply harm-reduction',
      'Introduction to the GUIDE method',
    ],
    url: 'https://thcservepro.com/live-training',
  },
];

const FeaturedProgramsStrip = () => {
  return (
    <section className="py-20 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
            Featured Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-brown mb-5">
            Start your certification today
          </h2>
          <p className="text-lg text-ink-brown/70 leading-relaxed">
            Two practical entry points. Same professional standard. Choose the one that fits your role.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex flex-col md:flex-row gap-6 md:gap-8 bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8"
            >
              <div className="flex-1">
                <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase">
                  {program.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-ink-brown leading-snug">
                  {program.title}
                </h3>
                <p className="mt-2 text-3xl font-serif font-bold text-ink-brown">{program.price}</p>
                <p className="mt-3 text-sm text-ink-brown/70 leading-relaxed">{program.description}</p>

                <ul className="mt-5 space-y-2">
                  {program.learn.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-brown/80 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-rust" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex md:flex-col items-center md:items-stretch justify-center md:justify-center gap-4 md:min-w-[160px] md:border-l md:border-ink-brown/10 md:pl-8">
                <a
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-rust px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-rust/90"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-ink-brown/50 text-center hidden md:block">Opens in a new tab</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramsStrip;
