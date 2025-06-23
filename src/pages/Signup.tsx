
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Signup = () => {
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
    console.log('Form submitted to MailerLite');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-accent/20 to-secondary/30 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Join Our Newsletter
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Stay informed with exclusive updates, course announcements, and special offers from CashoM.
            </p>

            {isSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg">Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 text-sm underline hover:no-underline"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                {/* Hidden iframe to capture form submission */}
                <iframe 
                  name="signup_hidden_iframe" 
                  style={{ display: 'none' }} 
                  onLoad={handleIframeLoad}
                ></iframe>
                
                <form 
                  onSubmit={handleSubmit} 
                  action="https://assets.mailerlite.com/jsonp/318197/forms/105933278184211992/subscribe" 
                  method="post" 
                  target="signup_hidden_iframe"
                  className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="fields[email]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-600 text-sm mb-4 text-center">
                      {error}
                    </div>
                  )}

                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </button>
                </form>
              </>
            )}

            <p className="text-sm text-gray-500 mt-6">
              * We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;
