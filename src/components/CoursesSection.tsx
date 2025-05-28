
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

  const horizontalOfferings = [
    {
      icon: <Circle className="w-12 h-12 text-white" />,
      title: "Cannabis Hospitality Stewardship Certification",
      subtitle: "Personalized Mentorship Program",
      description: "Master the art of cannabis hospitality through one-on-one mentorship with Philip Wolf. This comprehensive program teaches you to create transformational experiences that honor the sacred relationship between people and cannabis. Learn to guide others with reverence, intention, and deep understanding of the plant's healing potential.",
      features: ["Personalized mentorship", "Sacred plant wisdom", "Hospitality mastery", "Transformational experiences"],
      buttonText: "Start Your Journey",
      url: "/cannabis-hospitality-certification",
      bgColor: "bg-gradient-to-r from-primary to-primary/80"
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: "The CashoM Initiation",
      subtitle: "Year-Long Comprehensive Training",
      description: "Embark on an intensive 12-month journey to become a Level 1 CashoM—a true steward and server of the Cannabis plant. This transformative program combines weekly training sessions, monthly group experiences, and immersive retreat learning to develop your expertise and spiritual connection with cannabis.",
      features: ["12-month program", "Weekly meetings", "Monthly group sessions", "April 2026 retreat"],
      buttonText: "Begin Initiation",
      url: "/cashom-initiation",
      bgColor: "bg-gradient-to-r from-secondary/80 to-accent/80"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-white" />,
      title: "THC ServeSmart Certification",
      subtitle: "Professional Hospitality Training",
      description: "Specialized certification program designed for hospitality professionals working with legal THC beverages. Master responsible service practices, understand dosage implications, educate customers effectively, and navigate the regulatory landscape of this rapidly growing market segment.",
      features: ["Industry certification", "Dosage awareness", "Customer education", "Regulatory compliance"],
      buttonText: "Get Certified",
      url: "/thc-servesmart",
      bgColor: "bg-gradient-to-r from-accent/80 to-primary/60"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: "Free Educational Resources",
      subtitle: "Comprehensive Cannabis Library",
      description: "Access our extensive collection of cannabis education through our Substack publication. Discover research-backed insights, consciousness-expanding content, and the latest developments in cannabis science, spirituality, and responsible consumption practices. All completely free to our community.",
      features: ["Research insights", "Latest developments", "Consciousness content", "Community access"],
      buttonText: "Access Resources",
      url: "https://CashoM.substack.com",
      bgColor: "bg-gradient-to-r from-primary/70 to-secondary/70"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Public Cannabis Courses",
      subtitle: "Evidence-Based Learning",
      description: "Enhance your cannabis knowledge through our public course offerings. Understand the plant's complex chemistry, learn evidence-based consumption practices, and stay current with emerging research that's transforming how we think about cannabis and its therapeutic applications.",
      features: ["Plant chemistry", "Evidence-based practices", "Emerging research", "Therapeutic applications"],
      buttonText: "Explore Courses",
      url: "#",
      bgColor: "bg-gradient-to-r from-secondary/60 to-accent/60"
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

        {/* Horizontal Offering Sections */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {horizontalOfferings.map((offering, index) => (
            <div 
              key={index} 
              className={`${offering.bgColor} rounded-2xl overflow-hidden shadow-xl border border-primary/20`}
            >
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content Side */}
                  <div className="space-y-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        {offering.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold">
                          {offering.title}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {offering.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-white/95">
                      {offering.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {offering.url.startsWith('http') ? (
                      <a 
                        href={offering.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                      >
                        {offering.buttonText}
                      </a>
                    ) : offering.url === '#' ? (
                      <button className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                        {offering.buttonText}
                      </button>
                    ) : (
                      <Link 
                        to={offering.url}
                        className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                      >
                        {offering.buttonText}
                      </Link>
                    )}
                  </div>
                  
                  {/* Visual Side */}
                  <div className="relative">
                    <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          {offering.icon}
                        </div>
                      </div>
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

export default CoursesSection;
