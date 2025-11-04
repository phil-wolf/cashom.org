import { ArrowLeft, CheckCircle, Target, BookOpen, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CannabisActivatorCertification = () => {
  const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header";

  const targetAudience = [
    "Experiential marketing teams & agencies",
    "Brand ambassadors / field marketing representatives",
    "Consumer experience & events professionals",
    "Resource center, lounge, and hospitality teams",
    "Anyone who represents cannabis in public-facing environments"
  ];

  const learningModules = [
    {
      title: "The Language & Culture of Modern Cannabis",
      points: [
        "Communicating cannabis without clichés",
        "Understanding cannabis as a sensory and emotional experience",
        "Positioning cannabis in brand, hospitality, and cultural contexts"
      ]
    },
    {
      title: "The Science of Feeling States",
      points: [
        "How cannabinoids, terpenes, and flavonoids shape emotional and physical experience",
        "Identifying and describing high states in real time",
        "Connecting product profiles to desired guest experience outcomes"
      ]
    },
    {
      title: "Safe & Confident Serving Practices",
      points: [
        "Foundational serving protocol for brand environments",
        "Dosing, pacing, verbal consent, and guest assessment",
        "Recognizing when to support, redirect, or slow down a guest"
      ]
    },
    {
      title: "Experience Design for Activations",
      points: [
        "Designing cannabis touchpoints that feel intentional, not promotional",
        "Matching brand identity → cannabis profile → emotional arc",
        "Creating micro-moments of connection and meaning"
      ]
    },
    {
      title: "Presence, Hosting, & Brand Embodiment",
      points: [
        "How to hold space with warmth, clarity, and professionalism",
        "Representing a brand through grounded personal presence",
        "Serving with confidence instead of performance or hype"
      ]
    }
  ];

  const programFormat = [
    "6-Week Cohort-Based Online Training",
    "Weekly 90-Min Live Group Call",
    "One 1:1 Integration / Skill Reflection Session",
    "Scenario Roleplay + Activation Design Practice",
    "Final Applied Project: Design a Brand Activation Experience"
  ];

  const outcomes = [
    "Serve cannabis at activations with confidence and clarity",
    "Describe cannabis in a way that connects emotionally with consumers and clients",
    "Design meaningful micro-experiences rooted in brand values",
    "Create authentic resonance rather than manufactured hype",
    "Hold presence in chaotic event environments with calm and leadership",
    "Elevate the cultural tone of cannabis wherever you show up"
  ];

  const credentialCompetencies = [
    "Safe, intentional cannabis serving in public-facing environments",
    "Product-to-experience alignment and emotional awareness",
    "Brand-aligned communication and experiential hosting presence"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Professional Certification
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Cannabis Brand Activator Certification
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
            Develop the competence, confidence, and cultural fluency to represent cannabis brands with integrity and presence.
          </p>
          
          <a 
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Apply Now
            </Button>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              The cannabis industry is moving beyond product sampling and promotional giveaways. Brands today need activators who can elevate experiences, communicate with intention, and create meaningful moments that connect people to the plant—and to the brand itself.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              This certification trains marketers, brand ambassadors, experiential producers, and field teams to serve cannabis with intention, professionalism, and emotional awareness. You'll learn to understand cannabis through the lens of human feeling states, and how to design activations that feel inviting, elevated, and memorable.
            </p>

            <p className="text-xl font-semibold text-primary text-center mb-12">
              This is the new standard of cannabis brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              Who This Certification Is For
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              This training is designed for:
            </p>

            <div className="grid gap-4 mb-8">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{audience}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed italic">
              If you activate at conferences, festivals, pop-ups, trade events, private gatherings, or industry mixers—this certification gives you the skill, presence, and language to serve cannabis in a way that resonates.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <BookOpen className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">What You'll Learn</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {learningModules.map((module, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">{index + 1}. {module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-foreground/70 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Credential */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              Your Credential
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Graduates receive the <strong>Certified Cannabis Activation Specialist (CCAS)</strong> designation.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              This credential signifies competency in:
            </p>

            <div className="grid gap-4 mb-8">
              {credentialCompetencies.map((competency, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-border">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{competency}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-lg border border-primary/20">
              <p className="text-foreground/70 leading-relaxed italic">
                <strong>Note:</strong> This is a foundational serving certification. Those wishing to guide deeper personal experiences and intentional consumption journeys may continue on to the Cannabis Hospitality Stewardship Certification to earn the Certified Server of Cannabis credential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Users className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Program Format</h2>
            </div>
            
            <div className="grid gap-4 mb-8">
              {programFormat.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-border shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed italic text-center">
              This training is structured to be practical, experiential, and immediately applicable.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              What You'll Walk Away With
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              You will be able to:
            </p>

            <div className="grid gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-border">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Enrollment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
              Tuition & Enrollment
            </h2>
            
            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <p className="text-lg text-foreground/80 mb-4">
                <strong>Payment plans available.</strong>
              </p>
              <p className="text-foreground/70">
                Group / agency pricing available upon request.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-lg text-foreground/80">
                <strong>Limited to 20 Participants per Cohort</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6">
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The Future of Cannabis Experiences Requires a New Kind of Host
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto opacity-90">
            Not just a brand rep.<br />
            Not just a promoter.<br />
            Not just someone who knows cannabis.
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 font-semibold">
            But someone who can connect people—to the plant, to the moment, and to meaning.
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            This certification gives you that skill.
          </p>
          <a 
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Join Us
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CannabisActivatorCertification;