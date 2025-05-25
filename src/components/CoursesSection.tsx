
import { Circle, Star, BarChart3, BookOpen, GraduationCap } from 'lucide-react';

const CoursesSection = () => {
  const offerings = [
    {
      icon: <Circle className="w-6 h-6 text-primary" />,
      title: "Cannabis Hospitality Stewardship Certification",
      description: "Learn the art of hospitality at the highest level—welcoming people into a transformational relationship with cannabis. Embody reverence and help others experience cannabis in ways that are relational, sacred, and impactful.",
      buttonText: "Learn More →",
      isLink: false
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "The CashoM Initiation",
      description: "A yearlong training to become a Level 1 CashoM — a steward and server of the Cannabis plant. Investment: $12,000. Timeline: 12 months with weekly meetings, monthly group sessions, and a retreat in April 2026.",
      buttonText: "Learn More →",
      isLink: false
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "THC ServeSmart",
      description: "Specialized training for the liquor industry on legal THC beverages. Learn proper serving techniques, dosage awareness, and responsible service practices for this emerging market segment.",
      buttonText: "Learn More →",
      isLink: false
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

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Offerings
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
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
                <a 
                  href={offering.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-sm inline-block"
                >
                  {offering.buttonText}
                </a>
              ) : (
                <button className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
                  {offering.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
