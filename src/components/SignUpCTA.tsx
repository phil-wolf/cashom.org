import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SignUpCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const form = e.target as HTMLFormElement;
    form.submit();
    
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-ink-brown text-parchment">
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

          {isSuccess ? (
            <div className="bg-parchment/10 border border-parchment/20 rounded-xl px-6 py-5 mb-6">
              <h4 className="font-bold text-parchment text-lg mb-1">Thank you!</h4>
              <p className="text-parchment/80">You have successfully joined our subscriber list.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-3 text-sm text-rust underline hover:no-underline"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <>
              <iframe 
                name="hidden_iframe" 
                style={{ display: 'none' }} 
              ></iframe>
              
              <form 
                onSubmit={handleSubmit} 
                action="https://assets.mailerlite.com/jsonp/318197/forms/105933278184211992/subscribe" 
                method="post" 
                target="hidden_iframe"
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="fields[email]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 rounded-full bg-parchment/10 border border-parchment/20 text-parchment placeholder:text-parchment/50 focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust"
                    disabled={isSubmitting}
                  />
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-rust px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-rust/90 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Sign Up Today'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {error && (
                  <div className="text-red-300 text-sm mt-3">
                    {error}
                  </div>
                )}
              </form>
            </>
          )}

          <p className="text-sm text-parchment/50 mt-6">
            * We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpCTA;
