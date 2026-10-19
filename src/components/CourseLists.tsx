import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Course } from '@/data/courses';

const COMMUNITY_ITEM = 'Access to the CashoM Community';

interface Props {
  course: Course;
  size?: 'sm' | 'md';
}

const CourseLists = ({ course, size = 'sm' }: Props) => {
  const sm = size === 'sm';
  const liCls = sm
    ? 'flex gap-2.5 text-sm text-ink-brown/80 leading-relaxed'
    : 'flex gap-3 text-ink-brown/80 leading-relaxed';
  const iconCls = sm ? 'w-4 h-4 mt-0.5 shrink-0 text-rust' : 'w-5 h-5 mt-0.5 shrink-0 text-rust';
  const labelCls = `text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust ${sm ? 'mb-3' : 'mb-4'}`;
  const ulCls = sm ? 'space-y-2.5' : 'space-y-3';

  const renderItem = (item: string) => (
    <li key={item} className={liCls}>
      <Check className={iconCls} strokeWidth={3} />
      {item === COMMUNITY_ITEM ? (
        <span>
          Access to the{' '}
          <Link to="/membership" className="text-rust underline underline-offset-2 hover:text-rust/80">
            CashoM Community
          </Link>
        </span>
      ) : (
        <span>{item}</span>
      )}
    </li>
  );

  const groups = [
    { label: "What you'll learn", items: course.learn },
    course.receive && { label: 'What you receive', items: course.receive },
    course.opensUp && { label: 'What opens up', items: course.opensUp, intro: course.opensUpIntro },
  ].filter(Boolean) as { label: string; items: string[]; intro?: string }[];

  return (
    <div className={sm ? 'space-y-7' : 'space-y-10'}>
      {groups.map((g) => (
        <div key={g.label}>
          <p className={labelCls}>{g.label}</p>
          {g.intro && (
            <p className={`italic text-ink-brown/70 leading-relaxed ${sm ? 'text-sm mb-3' : 'mb-4'}`}>{g.intro}</p>
          )}
          <ul className={ulCls}>{g.items.map(renderItem)}</ul>
        </div>
      ))}
    </div>
  );
};

export default CourseLists;
