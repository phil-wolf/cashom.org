
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeaturedProgramsSection = () => {
  const enhancedOfferings = [
    {
      icon: (
        <img 
          src="/lovable-uploads/0033d46b-6b37-45d4-841d-c8dd5c518dbe.png" 
          alt="Cannabis Hospitality Stewardship Certification"
          className="w-12 h-12"
        />
      ),
      title: "Cannabis Hospitality Stewardship Certification",
      subtitle: "Professional Cannabis Service Excellence",
      description: "Master the art of hospitality at the highest level—welcoming people into a mindful relationship with cannabis. Develop advanced skills to guide others through intentional, responsible, and impactful cannabis experiences.",
      features: [
        "Comprehensive hospitality training protocols",
        "Mindful consumption guidance techniques", 
        "Professional service standards",
        "Customer experience optimization"
      ],
      gradient: "from-primary/5 via-secondary/10 to-accent/15",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
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
          className="w-12 h-12"
        />
      ),
      title: "The CashoM Initiation",
      subtitle: "Year-Long Professional Development Program",
      description: "A comprehensive 12-month training program to become a Level 1 CashoM — a knowledgeable steward and server of cannabis. This intensive program combines weekly sessions, monthly workshops, and immersive learning experiences.",
      features: [
        "12-month structured curriculum",
        "Weekly training sessions",
        "Monthly group workshops",
        "Exclusive retreat experience in April 2026",
        "Professional certification upon completion"
      ],
      gradient: "from-accent/10 via-muted/15 to-secondary/20",
      iconBg: "bg-accent/15",
      iconColor: "text-primary",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cashom-initiation"
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/91f0e0bf-59ed-4093-8106-b51ec5e5ad1e.png" 
          alt="THC ServeSmart"
          className="w-12 h-12"
        />
      ),
      title: "THC ServeSmart",
      subtitle: "Specialized Training for Beverage Industry",
      description: "Cutting-edge training designed specifically for the liquor and beverage industry focusing on legal THC beverages. Learn evidence-based serving techniques, dosage awareness, and responsible service practices for this rapidly emerging market.",
      features: [
        "Industry-specific training protocols",
        "Dosage calculation and awareness",
        "Responsible service practices",
        "Legal compliance guidelines",
        "Market trend insights"
      ],
      gradient: "from-secondary/15 via-muted/20 to-accent/10",
      iconBg: "bg-secondary/20",
      iconColor: "text-primary",
      buttonText: "Learn More →",
      isLink: true,
      url: "/thc-servesmart"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-secondary/10">
      <div className="w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Featured Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cannabis education and professional development programs designed for mindful practice and industry excellence
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {enhancedOfferings.map((offering, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${offering.gradient} border border-white/30 shadow-lg`}>
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/10 blur-lg"></div>
              
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 ${offering.iconBg} rounded-2xl flex items-center justify-center shadow-md border border-white/30`}>
                      {offering.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                        {offering.title}
                      </h3>
                      <p className="text-lg font-medium text-primary/80 mb-4">
                        {offering.subtitle}
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Buttons */}
                    <div className="pt-4 flex flex-wrap gap-4">
                      {offering.isLink ? (
                        offering.url.startsWith('http') ? (
                          <a 
                            href={offering.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            {offering.buttonText}
                          </a>
                        ) : (
                          <Link 
                            to={offering.url}
                            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            {offering.buttonText}
                          </Link>
                        )
                      ) : (
                        <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                          {offering.buttonText}
                        </button>
                      )}
                      
                      {offering.hasApplication && (
                        <a 
                          href={offering.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            Apply Now
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramsSection;
