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

  const enhancedOfferings = [
    {
      icon: <Circle className="w-12 h-12" />,
      title: "Cannabis Hospitality Stewardship Certification",
      subtitle: "Professional Cannabis Service Excellence",
      description: "Master the art of hospitality at the highest level—welcoming people into a mindful relationship with cannabis. Develop advanced skills to guide others through intentional, responsible, and impactful cannabis experiences.",
      features: [
        "Comprehensive hospitality training protocols",
        "Mindful consumption guidance techniques", 
        "Professional service standards",
        "Customer experience optimization"
      ],
      gradient: "from-emerald-500/20 via-green-400/15 to-teal-300/20",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cannabis-hospitality-certification"
    },
    {
      icon: <Star className="w-12 h-12" />,
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
      gradient: "from-purple-500/20 via-violet-400/15 to-indigo-300/20",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonText: "Learn More →",
      isLink: true,
      url: "/cashom-initiation"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
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
      gradient: "from-blue-500/20 via-cyan-400/15 to-sky-300/20",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      buttonText: "Learn More →",
      isLink: true,
      url: "/thc-servesmart"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Free Education",
      subtitle: "Comprehensive Cannabis Knowledge Library",
      description: "Access our extensive library of cannabis education content, research insights, and industry analysis through our Substack publication. Stay informed about the latest developments in cannabis science and mindful consumption practices.",
      features: [
        "Weekly educational content",
        "Research-backed insights",
        "Industry trend analysis",
        "Expert interviews and perspectives",
        "Community discussion forums"
      ],
      gradient: "from-amber-500/20 via-orange-400/15 to-yellow-300/20",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      buttonText: "Visit Substack →",
      isLink: true,
      url: "https://CashoM.substack.com"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Public Courses",
      subtitle: "Consumer Education & Best Practices",
      description: "Become a more informed cannabis consumer by understanding the plant's complexities and applying evidence-based knowledge that's transforming the industry. Learn responsible consumption practices and stay current with emerging research.",
      features: [
        "Evidence-based consumption education",
        "Plant science and biology",
        "Consumption method comparisons",
        "Safety and wellness protocols",
        "Latest research findings"
      ],
      gradient: "from-rose-500/20 via-pink-400/15 to-red-300/20",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      buttonText: "Learn More →",
      isLink: false
    }
  ];

  return (
    <>
      {/* Original Grid Section */}
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

      {/* Enhanced Horizontal Stacked Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <div key={index} className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${offering.gradient} border border-white/20 shadow-xl`}>
                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/5 blur-lg"></div>
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 ${offering.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <div className={offering.iconColor}>
                          {offering.icon}
                        </div>
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
                      
                      {/* Button */}
                      <div className="pt-4">
                        {offering.isLink ? (
                          offering.url.startsWith('http') ? (
                            <a 
                              href={offering.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                              {offering.buttonText}
                            </a>
                          ) : (
                            <Link 
                              to={offering.url}
                              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                              {offering.buttonText}
                            </Link>
                          )
                        ) : (
                          <button className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            {offering.buttonText}
                          </button>
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
    </>
  );
};

export default CoursesSection;
