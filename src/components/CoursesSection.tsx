
import { Circle, Star, BarChart3, BookOpen, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const offerings = [
    {
      icon: <Circle className="w-6 h-6 text-primary" />,
      title: "Cannabis Hospitality Stewardship Certification",
      description: "Learn the art of hospitality at the highest level—welcoming people into a transformational relationship with cannabis. Embody reverence and help others experience cannabis in ways that are relational, sacred, and impactful.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cannabis-hospitality-certification"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "The CashoM Initiation",
      description: "A yearlong training to become a Level 1 CashoM — a steward and server of the Cannabis plant. Investment: $12,000. Timeline: 12 months with weekly meetings, monthly group sessions, and a retreat in April 2026.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cashom-initiation"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "THC ServeSmart",
      description: "Specialized training for the liquor industry on legal THC beverages. Learn proper serving techniques, dosage awareness, and responsible service practices for this emerging market segment.",
      buttonText: "Learn More →",
      isLink: true,
      url: "/thc-servesmart"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Free Education",
      description: "Access our comprehensive library of cannabis education content, insights, and research through our Substack publication. Stay informed about the latest developments in cannabis consciousness and responsible consumption practices.",
      buttonText: "Visit Substack →",
      isLink: true,
      url: "https://CashoM.substack.com"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Public Courses",
      description: "Become a better cannabis consumer by understanding the plant's complexities and applying new knowledge that's transforming the industry. Learn evidence-based consumption practices and stay current with emerging research and innovations.",
      buttonText: "Learn More →",
      isLink: false
    }
  ];

  const featuredSections = [
    {
      icon: <Circle className="w-8 h-8 text-primary" />,
      title: "Cannabis Hospitality Stewardship",
      description: "Master the art of cannabis hospitality through personalized mentorship with Philip Wolf. Learn to create transformational experiences that honor the sacred relationship between people and the cannabis plant.",
      buttonText: "Start Your Journey",
      url: "/cannabis-hospitality-certification",
      bgColor: "bg-gradient-to-br from-primary/10 to-accent/20"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "CashoM Initiation",
      description: "Embark on a comprehensive year-long journey to become a Level 1 CashoM. This intensive program combines weekly training, monthly group sessions, and hands-on retreat experiences.",
      buttonText: "Begin Initiation",
      url: "/cashom-initiation",
      bgColor: "bg-gradient-to-br from-secondary/30 to-primary/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "THC ServeSmart Certification",
      description: "Professional training for the hospitality industry on legal THC beverages. Master responsible service practices, dosage awareness, and customer education for this emerging market.",
      buttonText: "Get Certified",
      url: "/thc-servesmart",
      bgColor: "bg-gradient-to-br from-accent/30 to-secondary/20"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Core Beliefs & Philosophy",
      description: "Explore our foundational beliefs about cannabis as teacher, ally, and sacred medicine. Understand the principles that guide our approach to education, hospitality, and conscious consumption.",
      buttonText: "Discover Our Beliefs",
      url: "#beliefs",
      bgColor: "bg-gradient-to-br from-primary/15 to-accent/25"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Free Educational Resources",
      description: "Access our comprehensive library of cannabis education through our Substack publication. Stay informed with the latest research, insights, and developments in cannabis consciousness.",
      buttonText: "Access Resources",
      url: "https://CashoM.substack.com",
      bgColor: "bg-gradient-to-br from-secondary/25 to-primary/15"
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

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-7xl mx-auto mb-20">
          {offerings.map((offering, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Icon Circle */}
              <div className="w-24 h-24 border-2 border-primary rounded-full flex items-center justify-center mx-auto">
                <div className="w-12 h-12 border border-primary rounded-full flex items-center justify-center">
                  {offering.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-primary font-semibold px-4">
                {offering.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed px-2 text-sm">
                {offering.description}
              </p>

              {/* Learn More Button */}
              {offering.isLink ? (
                offering.url?.startsWith('http') ? (
                  <a 
                    href={offering.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm inline-block"
                  >
                    {offering.buttonText}
                  </a>
                ) : (
                  <Link 
                    to={offering.url || '#'}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm inline-block"
                  >
                    {offering.buttonText}
                  </Link>
                )
              ) : (
                <button className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
                  {offering.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Featured Sections */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredSections.map((section, index) => (
              <div 
                key={index} 
                className={`${section.bgColor} p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                
                <h3 className="text-lg font-serif font-semibold text-primary mb-3 text-center">
                  {section.title}
                </h3>
                
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 text-center">
                  {section.description}
                </p>
                
                {section.url.startsWith('http') ? (
                  <a 
                    href={section.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    {section.buttonText}
                  </a>
                ) : section.url.startsWith('#') ? (
                  <a 
                    href={section.url}
                    className="block w-full text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    {section.buttonText}
                  </a>
                ) : (
                  <Link 
                    to={section.url}
                    className="block w-full text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    {section.buttonText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
