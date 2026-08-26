import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { courses } from '@/data/courses';

interface TierStepperProps {
  currentSlug: string;
}

const shortNames: Record<string, string> = {
  'cannabis-lounge-attendant': 'Lounge Attendant',
  'certified-server-of-cannabis': 'Server',
  'certified-steward-of-cannabis': 'Steward',
  'cashom-level-1': 'CashoM',
};

const TierStepper = ({ currentSlug }: TierStepperProps) => (
  <nav aria-label="Certification pathway progress" className="mb-10">
    <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-3">
      You are here
    </p>
    <ol className="flex flex-wrap items-center gap-y-2">
      {courses.map((c, i) => {
        const isCurrent = c.slug === currentSlug;
        return (
          <li key={c.slug} className="flex items-center">
            {isCurrent ? (
              <span
                aria-current="step"
                className="inline-flex flex-col rounded-xl bg-rust text-white px-4 py-2"
              >
                <span className="text-[0.6rem] font-sans font-semibold tracking-[0.15em] uppercase opacity-90">
                  {c.tier}
                </span>
                <span className="font-serif text-sm font-bold leading-snug">
                  {shortNames[c.slug]}
                </span>
              </span>
            ) : (
              <Link
                to={`/courses/${c.slug}`}
                className="inline-flex flex-col rounded-xl border border-ink-brown/15 px-4 py-2 hover:border-rust/50 transition-colors"
              >
                <span className="text-[0.6rem] font-sans font-semibold tracking-[0.15em] uppercase text-ink-brown/50">
                  {c.tier}
                </span>
                <span className="font-serif text-sm font-semibold text-ink-brown/80 leading-snug">
                  {shortNames[c.slug]}
                </span>
              </Link>
            )}
            {i < courses.length - 1 && (
              <ChevronRight aria-hidden="true" className="w-4 h-4 mx-1.5 text-rust/50 shrink-0" />
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default TierStepper;
