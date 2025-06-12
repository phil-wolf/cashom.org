
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
  const offerings = [
    {
      icon: (
        <img 
          src="/lovable-uploads/0033d46b-6b37-45d4-841d-c8dd5c518dbe.png" 
          alt="Cannabis Hospitality Stewardship Certification"
          className="w-6 h-6"
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
          src="/lovable-uploads/528a060d-1f4b-4975-bbf6-eb1c257aa493.png" 
          alt="The CashoM Initiation"
          className="w-6 h-6"
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
          src="/lovable-uploads/91f0e0bf-59ed-4093-8106-b51ec5e5ad1e.png" 
          alt="THC ServeSmart"
          className="w-6 h-6"
        />
      ),
      title: "THC ServeSmart",
      description: "Specialized training for the liquor industry on legal THC beverages. Learn proper serving techniques, dosage awareness, and responsible service practices for this emerging market segment.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/thc-servesmart"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
