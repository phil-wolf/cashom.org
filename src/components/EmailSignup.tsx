
import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');

      const response = await fetch('https://assets.mailerlite.com/jsonp/318197/forms/105933278184211992/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Since we're using no-cors, we can't read the response
      // But if no error is thrown, we assume success
      setIsSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            Join our email list for exclusive updates, course announcements, and special offers.
          </p>

          {isSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <h4 className="font-bold">Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-2 text-sm underline hover:no-underline"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary"
                  disabled={isSubmitting}
                />
              </div>
              
              {error && (
                <div className="text-red-300 text-sm mb-4">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-sm text-primary-foreground/60 mt-6">
            * We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
