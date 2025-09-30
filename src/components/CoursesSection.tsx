import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
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
      url: "/cashom-initiation",
      hasApplication: true,
      applicationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScD5JIWqI0ESr-gaSr8DeEXa_yx2TWXrIysSBRkbPv6c5SGjw/viewform?usp=header"
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

        {/* Offerings - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex flex-col items-center lg:items-start mb-6">
                  {offering.icon}
                  <h3 className="text-2xl font-serif font-semibold text-primary mt-4 text-center lg:text-left">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-center lg:text-left flex-1">
                  {offering.description}
                </p>
                <div className="space-y-3 mt-auto">
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
