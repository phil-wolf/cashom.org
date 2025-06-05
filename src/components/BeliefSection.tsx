
import { Heart, Users, BookOpen } from 'lucide-react';

const BeliefSection = () => {
  const beliefs = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cannabis as a Plant Medicine for Social Connection, Lifestyle & Healing",
      description: "We believe cannabis is a powerful plant medicine that enhances social experiences, supports balanced lifestyles, and promotes holistic healing. When approached with intention and respect, it can foster meaningful connections, creative expression, and personal wellness journeys."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Cannabis as a Plant Medicine for Professional Excellence & Mindful Service",
      description: "We believe the cannabis industry deserves the highest standards of professionalism and mindful hospitality. Through comprehensive training and certification, we elevate cannabis service to create intentional, educational experiences that honor both the plant and the person."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Cannabis as a Plant Medicine for Education-First & Evidence-Based Approach",
      description: "We believe in bridging traditional plant knowledge with modern science and evidence-based practices. Our commitment to authentic education over commercialization empowers individuals to make informed decisions and develop meaningful, mindful relationships with cannabis."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-6">
            We Believe
          </h2>
          <p className="text-xl text-center text-primary/80 mb-16 max-w-4xl mx-auto">
            that we're Not Just Serving Cannabis — We're Shaping Culture
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                  {belief.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4 text-center">
                  {belief.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed text-center">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-primary font-medium mb-4">
              Join us in elevating the cannabis industry through education, professionalism, and mindful service.
            </p>
            <p className="text-foreground/70">
              Every CashoM-certified professional carries these beliefs into their work, creating ripple effects of positive change in communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
