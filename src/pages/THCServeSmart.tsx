import { Check, Star, BookOpen, Users, Award, Play, Download, Mic, Badge, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const THCServeSmart = () => {
  const benefits = [
    {
      icon: <Check className="w-6 h-6 text-primary" />,
      title: "Protect Your Bar, Venue, or License",
      description: "Learn how to dose and serve responsibly, avoiding overconsumption and liability."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Train Your Staff to Sell With Confidence",
      description: "Give your team the language and understanding to properly guide first-time THC beverage drinkers."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Meet the Moment",
      description: "Be one of the first in your region to responsibly integrate cannabis drinks into service — and stand out from competitors."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Align With Regulation Before It Hits",
      description: "Get ahead of evolving compliance standards by implementing safe service practices now."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Gain Product Expertise",
      description: "Learn directly from leading THC beverage brands through embedded product education modules."
    }
  ];

  const learningTopics = [
    "How THC works in the body — and how to explain onset and duration to customers",
    "Best practices for low-dose, microdose, and stacked beverage service",
    "Differences between cannabis and alcohol intoxication",
    "Guidelines for combining THC and alcohol — and when not to",
    "How to talk about effects, cannabinoids, and dosing without sounding like a dispensary",
    "Real-world examples for managing guest experiences with professionalism and care",
    "Brand education on specific products you'll be selling or serving"
  ];

  const targetAudience = [
    "Bartenders & Servers",
    "Bar Managers & Beverage Directors",
    "Alcohol Distributors & Brand Reps",
    "Retail Beverage Staff & Hospitality Teams",
    "Event Hosts, Venues & Promoters"
  ];

  const included = [
    {
      icon: <Play className="w-5 h-5 text-primary" />,
      title: "On-Demand Video Training"
    },
    {
      icon: <Download className="w-5 h-5 text-primary" />,
      title: "Downloadable Tools & Dosing Guides"
    },
    {
      icon: <Mic className="w-5 h-5 text-primary" />,
      title: "Bonus: \"Real Talk with Bartenders\" Podcast Series"
    },
    {
      icon: <Check className="w-5 h-5 text-primary" />,
      title: "Certification Exam + Digital Badge"
    },
    {
      icon: <Badge className="w-5 h-5 text-primary" />,
      title: "ServeSmart Lapel Pin to wear proudly behind the bar"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "Brand-Specific THC Beverage Product Education"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: "Lifetime Access + Updates as Regulations Evolve"
    }
  ];

  const pathway = [
    {
      level: "Level 1: THC ServeSmart Certified™",
      subtitle: "Safe Service Fundamentals",
      items: [
        "Responsible service",
        "Dosing basics",
        "Onset & duration",
        "Guest communication",
        "THC vs alcohol"
      ],
      badge: "🥇",
      note: "Includes digital badge + lapel pin"
    },
    {
      level: "Level 2: THC ServeSmart Sensory Pro™ (Coming Soon)",
      subtitle: "Flavor & Experience Design",
      items: [
        "Terpenes & flavonoids",
        "Flavor mapping",
        "Food & beverage pairing",
        "Aromatic profiles",
        "Elevated mixology"
      ],
      badge: "🥈"
    },
    {
      level: "CashoM™ – Full-Spectrum Cannabis Hospitality",
      subtitle: "Understanding All Realms of THC",
      items: [
        "Scientific + energetic THC knowledge",
        "Historical + cultural cannabis use",
        "Conscious consumption frameworks",
        "Hosting intentional cannabis experiences",
        "Deepening the human–plant relationship"
      ],
      badge: "🌟",
      note: "Mastery Level"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Get Certified in THC Beverage Service with ServeSmart™
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium mb-8">
              The most comprehensive Certification for Alcohol Industry Professionals Entering the Cannabis Beverage Space
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Cannabis-infused beverages are rapidly entering bars, restaurants, events, and retail shelves across the country. As this category grows, the need for educated, responsible service is critical — especially for professionals already skilled in alcohol service.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                <strong className="text-primary">ServeSmart™ Certification</strong> is the gold standard in THC Beverage training, built specifically for bartenders, distributors, bar managers, servers, and retail staff looking to expand their knowledge and confidently serve this new category.
              </p>
              <p className="text-foreground/70 mb-8">
                Created by cannabis hospitality expert Philip Wolf through CashoM – The Trusted School for Cannabis Hospitality Professionals, ServeSmart bridges the gap between alcohol experience and cannabis beverage expertise.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              👉 Enroll in ServeSmart Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why Get Certified Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Why Get ServeSmart Certified?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-secondary/20 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-serif font-semibold text-primary ml-3">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Learn
            </h2>
            <div className="space-y-4">
              {learningTopics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Get Certified */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
              Who Should Get Certified
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center space-x-4 bg-accent/20 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="text-lg font-medium text-primary">{audience}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground/70 text-lg">
              Whether you're preparing your team or your accounts, ServeSmart gives you the tools to lead with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  {item.icon}
                  <span className="text-foreground/80 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-16">
              Pricing
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">ServeSmart Certification</h3>
                <p className="text-4xl font-bold text-primary mb-4">$125 <span className="text-lg font-normal">per person</span></p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <p className="text-lg text-foreground/80 mb-2">
                  <strong>Team & Distributor Packages:</strong> Custom pricing for 5+ licenses
                </p>
                <p className="text-foreground/70">
                  Bulk discounts and sponsorship options available — <Button variant="link" className="p-0 h-auto text-primary">Contact Us</Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Pathway Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-4">
              🪜 THC Beverage Education Pathway
            </h2>
            <p className="text-center text-foreground/70 mb-16 text-lg">
              Your certification journey doesn't stop here. Continue your education and elevate your role in cannabis hospitality with our advanced training offerings:
            </p>
            <div className="space-y-8">
              {pathway.map((level, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4 mb-6">
                    <span className="text-3xl">{level.badge}</span>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-2">
                        {level.level}
                      </h3>
                      <p className="text-lg text-primary/80 font-medium mb-4">{level.subtitle}</p>
                      {level.note && (
                        <p className="text-sm text-foreground/60 mb-4">{level.note}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {level.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Be the Professional That Sets the Standard
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This category is growing fast. Don't get left behind.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Get certified. Get educated. And be ready to responsibly serve the future of beverage.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              👉 Enroll in ServeSmart Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default THCServeSmart;
