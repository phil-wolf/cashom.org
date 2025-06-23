
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CoursesSection = () => {
  const [thcEmail, setThcEmail] = useState('');
  const [isThcSubmitting, setIsThcSubmitting] = useState(false);
  const [isThcSuccess, setIsThcSuccess] = useState(false);
  const [thcError, setThcError] = useState('');

  const handleThcEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!thcEmail) {
      setThcError('Please enter your email address');
      return;
    }

    setIsThcSubmitting(true);
    setThcError('');

    // Submit the form to the hidden iframe
    const form = e.target as HTMLFormElement;
    form.submit();
    
    // Show success message after a short delay
    setTimeout(() => {
      setIsThcSuccess(true);
      setThcEmail('');
      setIsThcSubmitting(false);
    }, 1000);
  };

  const handleThcIframeLoad = () => {
    console.log('THC Form submitted to MailerLite');
  };

  const offerings = [
    {
      icon: (
        <img 
          src="/lovable-uploads/4128c16f-e7d1-4046-aea4-af6bf9389f17.png" 
          alt="Cannabis Hospitality Stewardship Certification"
          className="w-28 h-20"
        />
      ),
      title: "Cannabis Hospitality Stewardship Certification",
      description: "Earn your Cannabis Hospitality Stewardship Certificate which is the premiere program to bring your company to life. Start the program with a vision and end with your event or company coming to life.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cannabis-hospitality-certification",
      hasApplication: true,
      applicationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header"
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/5b234463-d921-4745-9983-ab209166b5ae.png" 
          alt="The CashoM Initiation"
          className="w-28 h-20"
        />
      ),
      title: "The CashoM Initiation",
      description: "Learn the art of hospitality at the highest level—Develop skills to help others experience cannabis in the most impactful way. A yearlong training to become a Level 1 CashoM — a steward and server of the Cannabis plant. Timeline: 12 months with weekly meetings, monthly group sessions, live practicums and a retreat in 2026.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cashom-initiation"
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/ced58816-8fc0-4a73-9fd9-552a1026cf79.png" 
          alt="THC ServeSmart"
          className="w-28 h-20"
        />
      ),
      title: "THC ServeSmart",
      description: "Specialized training for the liquor industry on legal THC beverages. Learn proper serving techniques, dosage awareness, and responsible service practices for this emerging market segment.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/thc-servesmart",
      hasEmailSignup: true
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Offerings
          </h2>
        </div>

        {/* Offerings Grid - 3 Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center mb-4">
                {offering.icon}
                <h3 className="text-lg font-serif font-semibold text-primary mt-3 text-center">
                  {offering.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm text-center">
                {offering.description}
              </p>
              <div className="space-y-3">
                {offering.isLink ? (
                  offering.url.startsWith('http') ? (
                    <a 
                      href={offering.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                    >
                      {offering.buttonText}
                    </a>
                  ) : (
                    <Link 
                      to={offering.url}
                      className="inline-flex items-center justify-center w-full text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                    >
                      {offering.buttonText}
                    </Link>
                  )
                ) : (
                  <button className="inline-flex items-center justify-center w-full text-primary font-medium hover:text-primary/80 transition-colors text-sm">
                    {offering.buttonText}
                  </button>
                )}
                
                {offering.hasApplication && (
                  <a 
                    href={offering.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90 text-primary border border-primary/20">
                      Apply Now
                    </Button>
                  </a>
                )}

                {offering.hasEmailSignup && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                    <p className="text-xs text-gray-600 mb-3 text-center">
                      <strong>Coming August 2025!</strong><br />
                      Get 20% off - Join Early Access
                    </p>
                    
                    {isThcSuccess ? (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-xs">
                        <p className="font-bold">Thank you!</p>
                        <p>You're on the list! Watch for your 20% off code.</p>
                        <button 
                          onClick={() => setIsThcSuccess(false)}
                          className="mt-1 text-xs underline hover:no-underline"
                        >
                          Add another email
                        </button>
                      </div>
                    ) : (
                      <>
                        <iframe 
                          name="thc_hidden_iframe" 
                          style={{ display: 'none' }} 
                          onLoad={handleThcIframeLoad}
                        ></iframe>
                        
                        <form 
                          onSubmit={handleThcEmailSubmit} 
                          action="https://assets.mailerlite.com/jsonp/318197/forms/105933278184211992/subscribe" 
                          method="post" 
                          target="thc_hidden_iframe"
                          className="space-y-2"
                        >
                          <input
                            type="email"
                            name="fields[email]"
                            value={thcEmail}
                            onChange={(e) => setThcEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={isThcSubmitting}
                            className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-primary"
                          />
                          
                          {thcError && (
                            <div className="text-red-600 text-xs">
                              {thcError}
                            </div>
                          )}

                          <input type="hidden" name="ml-submit" value="1" />
                          <input type="hidden" name="anticsrf" value="true" />

                          <Button
                            type="submit"
                            disabled={isThcSubmitting}
                            className="w-full text-xs py-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            {isThcSubmitting ? 'Joining...' : 'Get 20% Off'}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
