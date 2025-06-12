
import { Check, Star, BookOpen, Users, Award, Heart, Compass, Brain, Leaf, Calendar, DollarSign, Clock, Target, Lightbulb, Zap, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CashomInitiation = () => {
  const whyItMatters = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Cannabis as Catalyst",
      description: "This program isn't about cannabis as a commodity. It's about cannabis as a catalyst—for personal growth, cultural change, and responsible leadership."
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Going Deeper",
      description: "Most people stay on the surface with this plant. The CashoM Initiation is for those ready to go deeper—to engage cannabis with intention and integrity."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Elevated Hospitality",
      description: "At its core, this work is a form of elevated hospitality. How do we invite others into a relationship with cannabis that is intentional, impactful, and transformative?"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Conscious Future",
      description: "This training is for those committed to elevating the conversation and shaping a more thoughtful, conscious future for the plant—and for those it serves."
    }
  ];

  const experiences = [
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "A Guided Initiation",
      emoji: "🧭",
      description: "This isn't just a curriculum—it's a guided journey. You'll receive monthly \"consumption homework\" that goes beyond what to use and into how and why. You'll learn to listen, reflect, and engage cannabis as a guide.",
      features: [
        "How cannabis interacts with mood, mindset, and creativity",
        "How to approach cannabis with clarity and confidence",
        "How to integrate plant experiences into your professional life",
        "Building a relationship that's personal and deeply informed"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Weekly One-on-One Mentorship",
      emoji: "🌱",
      description: "We meet weekly for immersive, personalized mentorship. This is where we do the deep work—shaping your relationship with cannabis, identifying areas for growth, and applying what you're learning in real time.",
      features: [
        "Monthly group integration calls",
        "Personalized support to overcome challenges",
        "Grow your capacity as a steward",
        "Access to a tight-knit, supportive peer group"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "In-Person Retreat: April 2026",
      emoji: "🏕️",
      description: "The retreat is a two-part experience combining intensive training and practical application in a live environment.",
      features: [
        "Training intensive to solidify your identity as a Level 1 CashoM",
        "Practicum where you'll co-facilitate sessions",
        "Guide others and apply what you've learned",
        "Live environment practice and feedback"
      ]
    }
  ];

  const studyTopics = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Cannabinoids & Terpenes",
      emoji: "🧪",
      description: "Deep dive into the science behind cannabis effects",
      topics: [
        "Major and minor cannabinoids and their effects",
        "Terpene profiles and how they influence energy, creativity, and calm",
        "Whole-plant synergy and product selection",
        "Understanding compounds beyond marketing"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Conscious Consumption",
      emoji: "💨",
      description: "Mindful practices for intentional cannabis use",
      topics: [
        "Self-awareness practices before, during, and after use",
        "Identifying your unique high",
        "Smoking, vaping, and ingesting with intention",
        "Making consumption a mindful, daily-life practice"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Deep Integration Topics",
      emoji: "🔍",
      description: "Advanced applications and lifestyle integration",
      topics: [
        "Cannabis and lifestyle alignment (sports, sex, creativity, nature)",
        "Deepening mindfulness, meditation, and focus",
        "Emotional processing and insight development",
        "Creating safe, enriching experiences for others"
      ]
    },
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: "Science & Sensory Awareness",
      emoji: "🧠",
      description: "Understanding the neurological and emotional impacts",
      topics: [
        "How cannabis affects emotion, perception, and neurochemistry",
        "The role of euphoria, laughter, and introspection",
        "Supporting diverse consumption styles and preferences",
        "The difference between being high and being connected"
      ]
    }
  ];

  const additionalOpportunities = [
    "Collaborate with Philip on live webinars and industry events",
    "Eligible participants may explore licensing Cultivating Spirits in their region",
    "Homework assignments customized to your goals—brand-building, service design, etc."
  ];

  const whoThisIsFor = [
    "Professionals seeking to serve cannabis to the public with skill, care, and awareness",
    "Visionaries, creators, and connectors ready to lead in the space",
    "Bartenders, hosts, guides, and facilitators who want to elevate their craft",
    "Individuals called to be stewards—not just consumers—of the plant"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              The CashoM Initiation
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium mb-12">
              A Yearlong Training to Become a Level 1 CashoM
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
                <p className="text-sm text-foreground/80 leading-relaxed">12 months — Weekly individual meetings · Monthly group calls · In-person retreat, April 2026</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              Apply Now →
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Why This Work Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whyItMatters.map((matter, index) => (
                <div key={index} className="bg-secondary/20 p-8 rounded-lg border border-primary/5">
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

      {/* What You'll Experience */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-primary/5">
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

      {/* What You'll Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Study
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {studyTopics.map((topic, index) => (
                <div key={index} className="bg-accent/20 p-6 rounded-lg border border-primary/5">
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

      {/* Additional Opportunities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Additional Opportunities
            </h2>
            <div className="space-y-4">
              {additionalOpportunities.map((opportunity, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm border border-primary/5">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{opportunity}</p>
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
              This Is an Initiation, Not Just Information
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>You could learn the facts elsewhere. But The CashoM Initiation is about becoming someone who embodies the plant's message—who can hold space, translate complexity into connection, and guide others responsibly.</p>
              <p>This is a high-touch, immersive training. You'll be challenged to grow, to get clear on your voice, and to offer something that's genuinely needed in the cannabis space.</p>
              <p className="text-xl font-semibold text-primary">
                You won't just learn how to work with cannabis—you'll become someone it can work through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Who This Is For
            </h2>
            <div className="space-y-4">
              {whoThisIsFor.map((person, index) => (
                <div key={index} className="flex items-start space-x-4 bg-accent/20 p-6 rounded-lg border border-primary/5">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{person}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-foreground/80 mb-6">
                If this resonates, apply now. This isn't casual work. But if you're ready for the path, you'll have support at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Step into a year-long transformation and become a true steward of the Cannabis plant.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              Apply Now →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashomInitiation;
