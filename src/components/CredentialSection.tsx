import { Check } from 'lucide-react';

const bullets = [
  'Named credential holder and unique recipient ID',
  'Signed by Philip Wolf, a Master CashoM',
  'Lifetime validity with options for continued education',
  'Earned only by passing the certification assessment — not a participation certificate',
  'Instantly verifiable by any customer, employer or venue — impossible to fake or falsely claim',
  'Yours to keep — a permanent professional credential that travels with you between jobs and you can market',
];

const CredentialSection = () => {
  return (
    <section className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="/lovable-uploads/cashom-certificate.jpg"
              alt="Sample CashoM Cannabis Hospitality Stewardship Program certificate of completion signed by Philip Wolf"
              width={2000}
              height={1125}
              loading="lazy"
              className="w-full rounded-2xl border border-ink-brown/10 shadow-lg bg-background"
            />
            <p className="mt-4 text-sm text-ink-brown/60">
              Sample certificate — issued and verified through Accredible.
            </p>
          </div>

          <div>
            <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
              The Credential You Earn
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5">
              A verified credential that travels with you
            </h2>
            <p className="text-lg text-ink-brown/70 leading-relaxed mb-8">
              On completion, you receive an official CashoM credential issued through Accredible — a
              verified digital certificate and badge with a unique link you can share on LinkedIn, in
              email signatures, and with employers.
            </p>
            <ul className="space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-ink-brown/80 leading-relaxed">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-rust" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialSection;
