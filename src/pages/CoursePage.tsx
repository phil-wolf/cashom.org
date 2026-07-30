import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { SITE_URL } from '@/components/Seo';
import { APPLY_URL, courses, getCourse } from '@/data/courses';

const CoursePage = () => {
  const { slug } = useParams();
  const course = getCourse(slug);

  if (!course) return <Navigate to="/" replace />;

  const others = courses.filter((c) => c.slug !== course.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.seoDescription,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'CashoM',
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Seo
        title={course.seoTitle}
        description={course.seoDescription}
        path={`/courses/${course.slug}`}
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-parchment py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/#courses"
              className="inline-flex items-center gap-2 text-sm text-ink-brown/70 hover:text-rust transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the certification pathway
            </Link>

            <div className="max-w-3xl">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                {course.tier} · The Certification Pathway
              </p>
              <span className="inline-flex rounded-full bg-rust/10 text-rust text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-3 py-1 mb-5">
                {course.status}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink-brown leading-tight mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-ink-brown/75 leading-relaxed mb-8">{course.intro}</p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10">
                <p className="text-3xl font-serif font-bold text-ink-brown">{course.price}</p>
                <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                  <Clock className="w-4 h-4 text-rust" />
                  {course.format}
                </p>
                <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                  <Users className="w-4 h-4 text-rust" />
                  {course.audience}
                </p>
              </div>

              {course.comingSoon ? (
                <div className="inline-flex flex-col gap-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-ink-brown/10 text-ink-brown/60 font-sans font-semibold px-8 py-4 cursor-not-allowed">
                    Coming soon
                  </span>
                  <p className="text-sm text-ink-brown/60">
                    This certification is still in development. Enrollment opens soon —{' '}
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rust underline hover:no-underline"
                    >
                      join the waitlist
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-rust text-white font-sans font-semibold px-8 py-4 hover:bg-rust/90 transition-colors"
                >
                  {course.ctaLabel}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-4">
                  What you'll learn
                </p>
                <ul className="space-y-3">
                  {course.learn.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-brown/80 leading-relaxed">
                      <Check className="w-5 h-5 mt-0.5 shrink-0 text-rust" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-4">
                  You become
                </p>
                <h2 className="text-3xl font-serif font-bold text-ink-brown mb-6">{course.becomes}</h2>
                <ul className="space-y-3">
                  {course.outcomes.map((item) => (
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

        {/* Curriculum */}
        <section className="py-16 bg-parchment">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                Curriculum
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown">
                What the program covers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {course.curriculum.map((module, i) => (
                <article
                  key={module.title}
                  className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8"
                >
                  <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                    Module {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-ink-brown mb-3 leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-sm text-ink-brown/70 leading-relaxed">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ink-brown">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">
              {course.comingSoon ? 'Be first in line' : 'Ready to get certified?'}
            </h2>
            <p className="text-parchment/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              {course.comingSoon
                ? 'This certification is launching soon. Add your name and we will reach out the moment enrollment opens.'
                : `Seats are limited. Apply to join the next ${course.title} cohort.`}
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-rust text-white font-sans font-semibold px-8 py-4 hover:bg-rust/90 transition-colors"
            >
              {course.comingSoon ? 'Join the waitlist' : course.ctaLabel}
            </a>
          </div>
        </section>

        {/* Other courses */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-ink-brown mb-8">
              Other steps on the pathway
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  className="block rounded-2xl border border-ink-brown/10 bg-parchment p-6 hover:border-rust/40 transition-colors"
                >
                  <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-2">
                    {c.tier}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-ink-brown leading-snug mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ink-brown/60">
                    {c.comingSoon ? 'Coming soon' : c.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;
