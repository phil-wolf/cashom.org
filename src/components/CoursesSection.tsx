import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
  const offerings = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radiating lines */}
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="21.21" y1="21.21" x2="35.36" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="64.64" y1="64.64" x2="78.79" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="78.79" y1="21.21" x2="64.64" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="35.36" y1="64.64" x2="21.21" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Inner circles */}
          <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Inner leaf-like shape */}
          <path d="M44 50 C44 44, 50 44, 50 50 C50 44, 56 44, 56 50 C56 56, 50 56, 50 50 C50 56, 44 56, 44 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
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
        <svg className="w-6 h-6 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radiating lines */}
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="21.21" y1="21.21" x2="35.36" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="64.64" y1="64.64" x2="78.79" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="78.79" y1="21.21" x2="64.64" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="35.36" y1="64.64" x2="21.21" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Inner circle with cannabis leaf design */}
          <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Cannabis leaf design */}
          <ellipse cx="50" cy="50" rx="6" ry="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="47" cy="47" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(-30 47 47)"/>
          <ellipse cx="53" cy="47" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(30 53 47)"/>
          <ellipse cx="47" cy="53" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(30 47 53)"/>
          <ellipse cx="53" cy="53" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(-30 53 53)"/>
        </svg>
      ),
      title: "The CashoM Initiation",
      description: "Learn the art of hospitality at the highest level—Develop skills to help others experience cannabis in the most impactful way. A yearlong training to become a Level 1 CashoM — a steward and server of the Cannabis plant. Timeline: 12 months with weekly meetings, monthly group sessions, live practicums and a retreat in 2026.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cashom-initiation"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radiating lines */}
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="21.21" y1="21.21" x2="35.36" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="64.64" y1="64.64" x2="78.79" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="78.79" y1="21.21" x2="64.64" y2="35.36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="35.36" y1="64.64" x2="21.21" y2="78.79" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Inner circle */}
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
          {/* Four-pointed star in center */}
          <path d="M50 42 L54 50 L50 58 L46 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M42 50 L50 46 L58 50 L50 54 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
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
