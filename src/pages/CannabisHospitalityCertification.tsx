
import { ArrowLeft, CheckCircle, Target, BookOpen, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CannabisHospitalityCertification = () => {
  const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header";

  const benefits = [
    "The Cannabis Hospitality Stewardship Certification Program for Professionals",
    "CashoM seal of approval – This seal will continue to grow in value as CashoM gains popularity",
    "The ability to open up a cannabis hospitality business for under $5,000",
    "Direct access to Philip Wolf's expertise, insights, and guidance",
    "Comprehensive understanding of cannabis consumption theory and applications"
  ];

  const goals = [
    "Provide comprehensive education on cannabis hospitality, business practices, and consumption theory",
    "Empower mentees with knowledge and skills needed to succeed in cannabis hospitality",
    "Foster deeper connection with the cannabis plant and its lifestyle benefits",
    "Understanding the cannabis plant, its compounds, and the entourage effect",
    "Become a vibe setter and space holder for people's cannabis experiences"
  ];

  const objectives = [
    "Offer virtual training with optional in-person experience",
    "Ensure thorough understanding of cannabis properties for life enhancement",
    "Encourage holistic understanding integrating cultural, spiritual, and lifestyle aspects",
    "Facilitate training that empowers mentees to open their own businesses"
  ];

  const curriculum = [
    {
      title: "Relationship, Acknowledgement, Goals, Overview & Reciprocity",
      description: "Establish foundational understanding of the sacred relationship with cannabis, acknowledge its cultural significance, and set clear goals for your journey in cannabis hospitality."
    },
    {
      title: "History, Plant Medicines, Strain Dilemma",
      description: "Explore the rich history of cannabis as plant medicine, understand traditional uses, and navigate the complexities of modern strain selection and categorization."
    },
    {
      title: "Cultivation, Genetics, Entourage Effect",
      description: "Learn about cannabis cultivation practices, genetic variations, and the scientific understanding of how different compounds work together in the entourage effect."
    },
    {
      title: "A Deep Dive into Terpenes and Cannabinoids",
      description: "Master the science behind cannabis compounds, understanding how terpenes and cannabinoids interact to create unique effects and experiences."
    },
    {
      title: "Consumption Theory: How Cannabis Makes You Feel",
      description: "Develop expertise in consumption theory to help clients understand and predict their cannabis experiences based on product selection and consumption methods."
    },
    {
      title: "Customer Engagement, Service Techniques, Dosing",
      description: "Learn professional service techniques for engaging with clients during their cannabis experience, including proper dosing guidance and safety protocols."
    },
    {
      title: "Space Holding, Vibe Setting, Over Consumption Prevention",
      description: "Master the art of creating safe, welcoming environments and learn techniques to prevent over-consumption while maintaining positive experiences."
    },
    {
      title: "Concluding Your High",
      description: "Understand how to guide clients through the end of their cannabis experience, ensuring comfort and integration of their journey."
    },
    {
      title: "Marketing, Business Models, Legal and Business Strategy",
      description: "Develop practical business skills including marketing strategies, viable business models, and understanding legal frameworks for cannabis hospitality enterprises."
    }
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
            CashoM Mentorship Program
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 font-medium mb-4">
            By Philip Wolf
          </p>
          
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Start Your Own Cannabis Hospitality Business or Service
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
              Welcome to the Cannabis Hospitality Stewardship Certification Program for Professionals, an exclusive mentorship experience that offers you the opportunity to learn directly from Philip Wolf. Philip is a trailblazer in the Cannabis Hospitality Industry, offers a mentorship program designed to give you the personalized guidance and education needed to thrive in this rapidly growing field.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-12">
              Whether you're launching a cannabis business, expanding your current offerings, or seeking to deepen your understanding of the plant, Philip will be with you every step of the way. His program blends practical expertise with a holistic approach, recognizing cannabis as a powerful force for transformation and healing in our society. Through this mentorship, you'll be equipped to lead and inspire in the evolving cannabis landscape.
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              Who This Is For
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              The Cannabis Hospitality Stewardship Certificate (CHSC) is a distinguished professional credential for industry leaders seeking to excel in cannabis hospitality or integrate cannabis services into established business operations. This comprehensive certification equips professionals with advanced expertise in developing, managing, and executing premium cannabis experiences across diverse hospitality and wellness environments.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              CHSC holders demonstrate mastery of cannabis consumption science, regulatory compliance, risk management, strategic business development, and evidence-based best practices. This certification ensures professionals can deliver sophisticated, legally compliant, and transformative cannabis experiences that meet the highest industry standards and exceed client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            What You Receive
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-lg border border-border">
              <div className="text-center">
                <a 
                  href={applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg px-8 py-4">
                    Start Your Application
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Target className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Goals</h2>
            </div>
            
            <div className="grid gap-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-4 p-4">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Users className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Objectives</h2>
            </div>
            
            <div className="grid gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-4 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <BookOpen className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Curriculum</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculum.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the Cannabis Hospitality Stewardship Certification Program and learn directly from industry pioneer Philip Wolf.
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
              Apply for Mentorship
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CannabisHospitalityCertification;
