import { Link } from 'react-router-dom';

const SignUpCTA = () => {
  return (
    <section className="py-20 bg-ink-brown text-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Sign Up Today
          </h2>
          <p className="text-lg text-parchment/80 leading-relaxed mb-10">
            Join our list for early access, exclusive offers, and updates on new CashoM certifications.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-full bg-rust px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-rust/90"
          >
            Sign Up Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpCTA;
