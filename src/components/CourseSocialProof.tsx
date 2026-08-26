import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Philip Wolf is my Mentor. I've had the privilege to learn from him and I can say for certain this man is actively changing the Cannabis Space and carving out lanes that didn't exist before.",
    author: 'Kelly Addison',
    company: "Kelly's Green Lounge",
  },
  {
    quote:
      "Gratitude doesn't quite capture what I'm feeling after completing the CashoM class with Philip Wolf. This experience deepened my understanding of the cannabis industry in ways I couldn't have anticipated.",
    author: 'Joe Hager',
    company: 'Dispensary owner in Oklahoma',
  },
];

const CourseSocialProof = () => (
  <>
    {/* Founder bio */}
    <section className="py-16 bg-background border-t border-ink-brown/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase text-rust mb-4">
              Your teacher
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-brown mb-5 leading-tight">
              Meet Philip Wolf
            </h2>
            <p className="text-ink-brown/80 leading-relaxed mb-4">
              Recognized by High Times as the pioneer of cannabis hospitality, Philip Wolf founded
              the first company in the United States to legally offer cannabis pairing dinners. He
              has guided over 5,000 consumers in their consumption of cannabis with precision, care,
              and deep expertise.
            </p>
            <p className="text-ink-brown/80 leading-relaxed mb-6">
              With over 16 years in the legal cannabis industry, his work has been featured in Time
              Magazine, NBC and CBS Nightly News, Forbes, and Rolling Stone.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full border border-rust text-rust font-sans text-sm font-semibold px-6 py-3 hover:bg-rust hover:text-white transition-colors group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-rust/10 rounded-2xl -rotate-2" />
            <img
              src="/lovable-uploads/528a060d-1f4b-4975-bbf6-eb1c257aa493.png"
              alt="Philip Wolf speaking at an event"
              loading="lazy"
              className="relative rounded-xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-parchment border-t border-ink-brown/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-serif font-bold text-ink-brown mb-10">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative bg-primary text-primary-foreground p-8 rounded-xl shadow-lg flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rust to-accent" />
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <blockquote className="text-primary-foreground/95 italic leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-primary-foreground/20 pt-4">
                <p className="font-bold text-base">{t.author}</p>
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider font-medium">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CourseSocialProof;
