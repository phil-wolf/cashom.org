
import { Circle, Star, BarChart3, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const offerings = [
    {
      icon: <Circle className="w-6 h-6 text-primary" />,
      title: "Cannabis Hospitality Stewardship Certification",
      description: "Learn the art of hospitality at the highest level—welcoming people into a transformational relationship with cannabis. Develop skills to help others experience cannabis in ways that are intentional, mindful, and impactful.",
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

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Offerings
          </h2>
        </div>

        {/* Offerings Grid - All 5 Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
