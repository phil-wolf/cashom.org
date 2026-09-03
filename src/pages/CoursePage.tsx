import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users, CalendarDays } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { SITE_URL } from '@/components/Seo';
import TierStepper from '@/components/TierStepper';
import DefinitionBlock from '@/components/DefinitionBlock';
import CourseCredentialSection from '@/components/CourseCredentialSection';
import CourseSocialProof from '@/components/CourseSocialProof';
import { APPLY_URL, courses, getCourse } from '@/data/courses';

const CoursePage = () => {
  const { slug } = useParams();
  const course = getCourse(slug);

  if (!course) return <Navigate to="/" replace />;

  const others = courses.filter((c) => c.slug !== course.slug);

  const arcCards = [
    {
      title: 'Foundation Term · November–December 2026',
      description:
        'The Certified Steward of Cannabis and Certified Server of Cannabis courses, both included in tuition — $947 of coursework. Everyone arrives sharing the same vocabulary.',
    },
    {
      title: 'Q1 · Craft · January–March 2027',
      description:
        'Advanced connoisseurship, the tasting protocol, and holding space. Build the palate and the room presence. The quarter closes with the retreat in Boulder.',
    },
    {
      title: 'Q2 · Practice · April–June 2027',
      description:
        'Establish your own practice. Real guests, real repetitions, documented and brought back to the cohort. Advanced service work: over-consumption, harm reduction, and reading a room.',
    },
    {
      title: 'Q3 · The Lens · July–September 2027',
      description:
        'The Lens Framework arrives — not as theory, but as the answer to what you have already run into. Applied to guests you already know, inside the domain you are specializing in.',
    },
    {
      title: 'Q4 · Threshold · October 2027 – January 2028',
      description:
        'Design and run a full experience, assessed against the mastery rubric. Co-lead a public webinar. Meet the cohort at MJBizCon in December. Conferral in January.',
    },
  ];

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

            <TierStepper currentSlug={course.slug} />

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
              <p
                className="text-lg text-ink-brown/75 leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: course.intro }}
              />

              {course.slug === 'cashom-level-1' ? (
                <div className="mb-10">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-2">
                    <p className="text-3xl font-serif font-bold text-ink-brown">{course.price}</p>
                    {course.foundingLabel && (
                      <span className="inline-flex rounded-full bg-rust/10 text-rust text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-3 py-1">
                        {course.foundingLabel}
                      </span>
                    )}
                  </div>
                  {course.standardPriceNote && (
                    <p className="text-sm text-ink-brown/70 mb-5">{course.standardPriceNote}</p>
                  )}

                  {course.paymentOptions && (
                    <div className="bg-parchment-deep/50 rounded-xl p-5 border border-ink-brown/10 max-w-xl mb-8">
                      <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-3">
                        Payment options
                      </p>
                      <ul className="space-y-2">
                        {course.paymentOptions.map((opt) => (
                          <li
                            key={opt.label}
                            className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm"
                          >
                            <span className="font-semibold text-ink-brown">{opt.label}</span>
                            <span className="text-ink-brown/80">{opt.value}</span>
                          </li>
                        ))}
                      </ul>
                      {course.paymentNote && (
                        <p className="mt-3 text-xs text-ink-brown/60 leading-relaxed">
                          {course.paymentNote}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                      <Clock className="w-4 h-4 text-rust" />
                      {course.format}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                      <Users className="w-4 h-4 text-rust" />
                      {course.audience}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <p className="text-3xl font-serif font-bold text-ink-brown">{course.price}</p>
                    <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                      <Clock className="w-4 h-4 text-rust" />
                      {course.format}
                    </p>
                    {course.oneOnOne && (
                      <p className="flex items-center gap-2 text-sm text-ink-brown/70">
                        <CalendarDays className="w-4 h-4 text-rust" />
                        {course.oneOnOne}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-sm text-ink-brown/70">
                    <Users className="w-4 h-4 text-rust" />
                    {course.audience}
                  </p>
                </div>
              )}

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

        {/* What this is */}
        {course.slug === 'cashom-level-1' && (
          <section className="py-16 bg-parchment border-t border-ink-brown/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5">
                  What this is
                </h2>
                <p className="text-lg text-ink-brown/75 leading-relaxed">
                  A twelve-month apprenticeship in cannabis service, stewardship and guidance,
                  culminating in the CashoM designation. It is built for practitioners already
                  working with cannabis and consumers who have gone as far as they can on their own.
                  You will develop mastery of advanced connoisseurship and the Lens Framework, and
                  earn the designation that comes with it.
                </p>
                <p className="mt-4 text-lg text-ink-brown/75 leading-relaxed">
                  This is not simply a certification. It is a year of devotion to becoming the kind
                  of practitioner others trust to steward the cannabis experience.
                </p>
                <p className="mt-4 text-lg text-ink-brown/75 leading-relaxed">
                  Twelve seats a year, by application only.
                </p>
              </div>
            </div>
          </section>
        )}

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

        {/* The credential */}
        {(course.slug === 'certified-server-of-cannabis' || course.slug === 'certified-steward-of-cannabis') && (
          <CourseCredentialSection courseSlug={course.slug} />
        )}

        {/* The rhythm */}
        {course.slug === 'cashom-level-1' && (
          <section className="py-16 bg-parchment border-t border-ink-brown/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5">
                  The rhythm
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                  <h3 className="text-xl font-serif font-bold text-ink-brown mb-3">26 live sessions</h3>
                  <p className="text-sm text-ink-brown/70 leading-relaxed">
                    Every other week. Half transmission, half practicum, where you present real work to the cohort.
                  </p>
                </article>

                <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                  <h3 className="text-xl font-serif font-bold text-ink-brown mb-3">12 private calls</h3>
                  <p className="text-sm text-ink-brown/70 leading-relaxed">
                    45 minutes monthly with Philip Wolf. Progression review against the mastery rubric.
                  </p>
                </article>

                <article className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8">
                  <h3 className="text-xl font-serif font-bold text-ink-brown mb-3">Four days in Boulder</h3>
                  <p className="text-sm text-ink-brown/70 leading-relaxed">
                    A retreat from March 18–21, 2027. Travel and lodging not included; budget approximately $900–$1,500.
                  </p>
                </article>
              </div>
            </div>
          </section>
        )}

        {/* The Arc / Curriculum */}
        {course.slug === 'cashom-level-1' ? (
          <section className="py-16 bg-parchment">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                  THE ARC
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5">
                  How the year moves
                </h2>
                <p className="text-lg text-ink-brown/75 leading-relaxed">
                  Each quarter answers the question the last one raised.
                </p>
              </div>

              <div className="grid gap-6">
                {arcCards.map((card) => (
                  <article
                    key={card.title}
                    className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8"
                  >
                    <h3 className="text-xl font-serif font-bold text-ink-brown mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-ink-brown/70 leading-relaxed">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16 bg-parchment">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                  Curriculum
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown">
                  {course.curriculumHeading ?? 'What the program covers'}
                </h2>
                {course.curriculumSubheading && (
                  <p className="mt-4 text-lg text-ink-brown/75 leading-relaxed">
                    {course.curriculumSubheading}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {course.curriculum.map((module, i) => (
                  <article
                    key={module.title}
                    className="bg-background rounded-2xl border border-ink-brown/10 shadow-sm p-8 h-full flex flex-col"
                  >
                    <p className="text-rust text-[0.7rem] font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                      Module {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-xl font-serif font-bold text-ink-brown mb-4 leading-snug">
                      {module.title}
                    </h3>
                    {module.items ? (
                      <ul className="space-y-3">
                        {module.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm text-ink-brown/80 leading-relaxed"
                          >
                            <Check
                              className="w-5 h-5 mt-0.5 shrink-0 text-rust"
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-brown/70 leading-relaxed">
                        {module.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key dates */}
        {course.slug === 'cashom-level-1' && (
          <section className="py-16 bg-background border-t border-ink-brown/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5">
                  Key dates
                </h2>
              </div>

              <div className="max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-4 gap-x-8 text-base leading-relaxed">
                  <div className="font-semibold text-ink-brown">Applications</div>
                  <div className="text-ink-brown/75">Reviewed as they arrive — the cohort closes when it's full</div>

                  <div className="font-semibold text-ink-brown">Foundation term</div>
                  <div className="text-ink-brown/75">November 9 – December 18, 2026</div>

                  <div className="font-semibold text-ink-brown">Program opens</div>
                  <div className="text-ink-brown/75">January 13, 2027</div>

                  <div className="font-semibold text-ink-brown">Retreat — Boulder, CO</div>
                  <div className="text-ink-brown/75">March 18–21, 2027</div>

                  <div className="font-semibold text-ink-brown">MJBizCon gathering</div>
                  <div className="text-ink-brown/75">December 2027</div>

                  <div className="font-semibold text-ink-brown">Conferral</div>
                  <div className="text-ink-brown/75">January 2028</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-ink-brown">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">
              {course.comingSoon
                ? 'Be first in line'
                : course.slug === 'cashom-level-1'
                  ? 'Twelve seats. One cohort a year.'
                  : 'Ready to get certified?'}
            </h2>
            <p className="text-parchment/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              {course.comingSoon
                ? 'This certification is launching soon. Add your name and we will reach out the moment enrollment opens.'
                : course.slug === 'cashom-level-1'
                  ? 'Applications are reviewed as they arrive, and the cohort closes when it\'s full. The year begins January 13, 2027.'
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
              Progress through the CashoM pathway
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

        <DefinitionBlock />

        <CourseSocialProof />
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;
