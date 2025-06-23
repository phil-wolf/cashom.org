import { Check, Star, BookOpen, Users, Award, Heart, Compass, Brain, Leaf, Calendar, DollarSign, Clock, Target, Lightbulb, Zap, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CashomInitiation = () => {
  const whyItMatters = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Experience Over Product",
      description: "In many sectors, cannabis is still treated as a product. But in hospitality, it must be treated as an experience."
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "True Hospitality",
      description: "A true host doesn't just serve a drink—they guide a moment. A true CashoM doesn't just serve cannabis—they shape the space, elevate the energy, and ensure each guest feels safe, seen, and supported in their high."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "The Future",
      description: "This is the future of cannabis hospitality. You'll learn how to serve cannabis with cultural awareness, scientific understanding, emotional intelligence, and refined etiquette."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Becoming a Bridge",
      description: "This work is about becoming a bridge: Between wellness and celebration, between tradition and innovation, between the plant and the people."
    }
  ];

  const experiences = [
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Weekly One-on-One Mentorship",
      emoji: "🌿",
      description: "This isn't passive learning. It's a co-created journey with Philip Wolf—founder of Cultivating Spirits and pioneer of legal cannabis dining in the U.S. You'll meet weekly to build skills, grow your presence, and refine your approach to service.",
      features: [
        "Personal mentorship with Philip Wolf",
        "Co-created learning journey",
        "Build skills and presence",
        "Refine your approach to service"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Monthly Group Sessions",
      emoji: "🤝",
      description: "Our group calls provide time to reflect, practice, and connect with a small cohort of peers (5–7 people per group). These are industry professionals like you, all seeking to advance cannabis hospitality through excellence and heart.",
      features: [
        "Small cohort of 5-7 peers",
        "Time to reflect and practice",
        "Connect with industry professionals",
        "Advance through excellence and heart"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "In-Person Retreat (April 2026)",
      emoji: "🏕️",
      description: "This immersive retreat includes advanced hospitality training and real-time practice in guiding guests through high-touch, intentional cannabis experiences.",
      features: [
        "Service-based leadership practicum",
        "Advanced hospitality training",
        "Real-time practice with guests",
        "High-touch, intentional experiences"
      ]
    }
  ];

  const studyTopics = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Foundations of Elevated Cannabis Hospitality",
      emoji: "🧠",
      description: "Core principles of professional cannabis service",
      topics: [
        "Creating a service environment for cannabis use",
        "Managing energy and expectations during consumption events",
        "The psychology of comfort, care, and emotional safety",
        "Professional etiquette when working with cannabis"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Product Mastery",
      emoji: "🧪",
      description: "Deep understanding of cannabis products and effects",
      topics: [
        "The effects of flower, beverages, tinctures, edibles, and concentrates",
        "How cannabinoids and terpenes influence the guest experience",
        "Choosing products to fit different settings and guest needs",
        "The science of dosing and absorption in social settings"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Guiding the Experience",
      emoji: "🧭",
      description: "Advanced skills in hosting and facilitation",
      topics: [
        "Hosting guests through various states of being high",
        "Recognizing and adjusting to guest energy in real-time",
        "Holding space without overpowering the moment",
        "Storytelling and education as part of the guest journey"
      ]
    },
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: "Creative Expression & Event Design",
      emoji: "🎨",
      description: "Creating memorable and transformative experiences",
      topics: [
        "Integrating food, music, nature, and ritual into service",
        "Designing memorable cannabis pairing events",
        "Fusing ambiance, timing, and flow into unforgettable moments",
        "Advanced event design and execution"
      ]
    }
  ];

  const additionalOpportunities = [
    "Co-lead webinars and live events with Philip",
    "Exclusive access to licensed offerings of Cultivating Spirits in your region",
    "Customized field assignments to align with your goals and offerings"
  ];

  const whoThisIsFor = [
    "Cannabis event producers and hospitality entrepreneurs",
    "High-level hosts, retreat leaders, and service professionals",
    "Bartenders, chefs, sommeliers, and wellness guides ready to add cannabis to their craft",
    "Visionaries committed to shaping the future of cannabis culture"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Become a CashoM
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium mb-4">
              A Yearlong Training in Cannabis Hospitality at Its Highest Level
            </p>
            <p className="text-lg text-primary/70 mb-12">
              Earn your Level 1 Certification as a steward and host of meaningful cannabis experiences.
            </p>
            
            {/* Investment & Timeline Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Investment</h3>
                <p className="text-3xl font-bold text-primary">$12,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Timeline</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">12 Months · Weekly Mentorship · Monthly Group Calls · In-Person Retreat – April 2026</p>
              </div>
            </div>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                Apply Now →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Elevating Cannabis Hospitality */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Elevating Cannabis Hospitality
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>The CashoM Initiation is not a course—it's a professional and personal transformation. This yearlong container is for those ready to serve cannabis with care, precision, and integrity.</p>
              <p>In today's cannabis industry, hospitality is often overlooked. But true cannabis hospitality is an art form. It's the ability to create experiences that are not only enjoyable, but transformative. It's about reading the room, guiding guests with intention, and offering cannabis in a way that's both informed and deeply respectful.</p>
              <p className="text-xl font-semibold text-primary">
                This program trains you to do just that—at the highest level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Why This Work Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whyItMatters.map((matter, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-primary/5 shadow-sm">
                  <div className="flex items-center mb-4">
                    {matter.icon}
                    <h3 className="text-xl font-serif font-semibold text-primary ml-3">
                      {matter.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {matter.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Gain
            </h2>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-accent/20 p-8 rounded-lg border border-primary/5">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center bg-primary/5">
                        {experience.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">{experience.emoji}</span>
                        <h3 className="text-2xl font-serif font-bold text-primary">
                          {experience.title}
                        </h3>
                      </div>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {experience.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {experience.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/70 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {studyTopics.map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-primary/5 shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{topic.emoji}</span>
                    {topic.icon}
                    <h3 className="text-lg font-serif font-semibold text-primary ml-3">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4">{topic.description}</p>
                  <div className="space-y-2">
                    {topic.topics.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <Check className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* This Is an Initiation */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              This Is an Initiation
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>Hospitality is not just what you do—it's who you become.</p>
              <p>The CashoM Initiation is about cultivating yourself into someone who can guide others through elevated cannabis experiences with professionalism, poise, and presence.</p>
              <p>You'll be learning from one of the most experienced cannabis hosts in the industry. You'll be supported every step of the way. And you'll graduate with the skills, confidence, and certification to lead in this evolving space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Optional Opportunities
            </h2>
            <div className="space-y-4">
              {additionalOpportunities.map((opportunity, index) => (
                <div key={index} className="flex items-center space-x-4 bg-accent/20 p-6 rounded-lg border border-primary/5">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{opportunity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Who This Is For
            </h2>
            <p className="text-lg text-foreground/80 text-center mb-8">
              This program is for professionals ready to serve cannabis with integrity and depth:
            </p>
            <div className="space-y-4">
              {whoThisIsFor.map((person, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-primary/5 shadow-sm">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{person}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Apply Now
            </h2>
            <p className="text-xl mb-4 opacity-90">
              We only accept a limited number of participants per year to ensure the highest level of support and mentorship.
            </p>
            <p className="text-lg mb-8 opacity-90">
              If you're ready to bring the art of hospitality into cannabis—and bring cannabis into the future of hospitality—The CashoM Initiation is your next step.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
                Apply Now →
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashomInitiation;
