import { Check, Star, BookOpen, Users, Award, Heart, Compass, Brain, Leaf, Calendar, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CashomInitiation = () => {
  const whyItMatters = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Cannabis as Teacher",
      description: "This isn't about cannabis as a product. This is about cannabis as a teacher, an ally, and a changer of culture."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Hospitality at the Highest Level",
      description: "How do we welcome people into a relationship with cannabis that is transformational?"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Bridge Between Worlds",
      description: "To be a bridge between cultures, industries, and paradigms. To speak the language of both tradition and innovation."
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Conscious Leadership",
      description: "For those ready to go deeper — into devotional relationship, meaningful stewardship, and conscious leadership."
    }
  ];

  const whatYoullReceive = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Weekly Calls for One Year",
      description: "Focused, personal, and immersive sessions. Each month includes a group call to reflect, connect, and integrate. High-touch support throughout your journey.",
      features: [
        "Weekly deep-dive sessions",
        "Monthly group calls",
        "Personal support and guidance",
        "Turn weaknesses into strengths"
      ]
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Guided Initiation with the Medicine",
      description: "Monthly consumption homework — not just what to consume, but how and why. Learn to listen to cannabis and dive deep into terpenes.",
      features: [
        "Monthly consumption guidance",
        "Deep dive into terpenes",
        "Cannabis as ally and teacher",
        "Initiatory path experience"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Deep Study & Exploration",
      description: "Dive deep into topics through the lens of cannabis. Embodying knowledge, activating wisdom, and applying what you learn in real time.",
      features: [
        "Cannabis archetypes and biology",
        "Science of cannabis effects",
        "Creativity and expression",
        "Psychedelic and spiritual aspects"
      ]
    }
  ];

  const studyTopics = [
    {
      category: "Archetypes, Biology & Lifestyle",
      icon: <Leaf className="w-5 h-5 text-primary" />,
      topics: [
        "Different cannabis archetypes",
        "Variations in the endocannabinoid system",
        "How cannabis affects different people",
        "Cannabis alignment with different lifestyles"
      ]
    },
    {
      category: "Science & Theories",
      icon: <Brain className="w-5 h-5 text-primary" />,
      topics: [
        "Emotional, mental, and sensory effects",
        "High vs. stoned experiences",
        "Euphoria, anxiety, creativity exploration",
        "Internal feelings and introspection"
      ]
    },
    {
      category: "Creativity & Expression",
      icon: <Star className="w-5 h-5 text-primary" />,
      topics: [
        "Cannabis and creative flow",
        "Music, painting, and art enhancement",
        "Movement integration (sports, nature)",
        "Expression and play"
      ]
    },
    {
      category: "Psychedelic & Spiritual",
      icon: <Compass className="w-5 h-5 text-primary" />,
      topics: [
        "Cannabis as psychedelic medicine",
        "Spiritual ally relationship",
        "Consciousness expansion",
        "Altered states exploration"
      ]
    }
  ];

  const retreat = {
    title: "Retreat in April 2026",
    subtitle: "A Two-Part Transformational Experience",
    parts: [
      "Training intensive for you as a Level 1 CashoM",
      "Leadership practicum where you'll begin guiding others alongside Philip"
    ]
  };

  const otherFeatures = [
    "Ongoing group calls for sharing and reflection",
    "Opportunities for practicum webinars alongside Philip",
    "Potential opportunity to license Cultivating Spirits in your region",
    "Immersive homework opportunities tailored to your needs"
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
            <p className="text-xl md:text-2xl text-primary/80 font-medium mb-8">
              A yearlong training to become a Level 1 CashoM — a steward and server of the Cannabis plant
            </p>
            
            {/* Investment & Timeline */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Investment</h3>
                <p className="text-3xl font-bold text-primary">$12,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Timeline</h3>
                <p className="text-sm text-foreground/80">12 months — Weekly meetings + Monthly group meetings + Retreat in April 2026</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              👉 Begin Your Initiation
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
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Mainstream America still doesn't understand the depth of what this plant offers. It's often commercialized, misunderstood, or minimized. That's why this path matters.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This container is for those who feel called to hold space, embody reverence, and help others experience cannabis in ways that are relational, possibly sacred, accessible, and impactful.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {whyItMatters.map((matter, index) => (
                <div key={index} className="bg-secondary/20 p-8 rounded-lg">
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

      {/* What You'll Receive */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              What You'll Receive
            </h2>
            <div className="space-y-12">
              {whatYoullReceive.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        {item.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground/70">{feature}</span>
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

      {/* Deep Study Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Deep Study & Exploration
            </h2>
            <p className="text-center text-lg text-foreground/80 mb-12 max-w-4xl mx-auto">
              Throughout the year, we'll dive deep into topics through the lens of cannabis. This isn't about memorizing facts. It's about embodying knowledge, activating wisdom, and applying what you learn in real time.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {studyTopics.map((topic, index) => (
                <div key={index} className="bg-accent/20 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {topic.icon}
                    <h3 className="text-lg font-serif font-semibold text-primary ml-3">
                      {topic.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {topic.topics.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
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

      {/* Initiation Message */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              This Is an Initiation, Not Just Information
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>There are things you can learn from videos. There are things you can learn in a course.</p>
              <p className="font-medium text-primary">
                But the true value of this container is what can't be taught in a curriculum:
              </p>
              <p>You are being guided into direct relationship with cannabis.</p>
              <p>
                I will teach you through experience, help you see what the plant is revealing, and support you as you build a living connection with cannabis so you can be the ultimate teacher!
              </p>
              <p className="text-xl font-semibold text-primary">
                This is how you become a true CashoM — not by memorizing information, but by living in right relationship with the plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
              {retreat.title}
            </h2>
            <p className="text-xl text-primary/80 font-medium text-center mb-12">
              {retreat.subtitle}
            </p>
            <div className="space-y-6">
              {retreat.parts.map((part, index) => (
                <div key={index} className="flex items-center space-x-4 bg-secondary/20 p-6 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="text-lg text-foreground/80">{part}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
              Additional Features
            </h2>
            <div className="space-y-4">
              {otherFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-16">
              Who This Is For
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <div className="bg-accent/20 p-6 rounded-lg">
                <p>People ready to serve cannabis to the public with reverence, skill, and awareness.</p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <p>Leaders, masters at hospitality, the best bartenders, visionaries, and creators who want to align their work with cannabis.</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Those who want to become CashoMs — not a casual user or facilitator, but devoted to being a teacher for cannabis.</p>
              </div>
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
              👉 Begin Your Initiation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashomInitiation;
