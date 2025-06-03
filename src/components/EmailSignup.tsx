
import { useState } from 'react';

const EmailSignup = () => {
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

    // Submit the form to the hidden iframe
    const form = e.target as HTMLFormElement;
    form.submit();
    
    // Show success message after a short delay
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleIframeLoad = () => {
    // This will be called when the iframe loads, indicating the form was submitted
    console.log('Form submitted to MailerLite');
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
            <>
              {/* Hidden iframe to capture form submission */}
              <iframe 
                name="hidden_iframe" 
                style={{ display: 'none' }} 
                onLoad={handleIframeLoad}
              ></iframe>
              
              <form 
                onSubmit={handleSubmit} 
                action="https://assets.mailerlite.com/jsonp/318197/forms/105933278184211992/subscribe" 
                method="post" 
                target="hidden_iframe"
                className="max-w-md mx-auto"
              >
                <div className="mb-4">
                  <input
                    type="email"
                    name="fields[email]"
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

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </>
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
