
import { Heart, Star, Users, BookOpen, Compass, Leaf } from 'lucide-react';

const BeliefSection = () => {
  const beliefs = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cannabis as Teacher & Ally",
      description: "We believe cannabis is not just a product to be consumed, but a sacred teacher and ally that can guide us toward deeper self-awareness, creativity, and connection. When approached with reverence and intention, this plant becomes a powerful tool for personal transformation and healing."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Education Over Commercialization",
      description: "In an industry often driven by profit, we stand for authentic education and conscious consumption. We believe that true understanding of cannabis—its compounds, effects, and potential—empowers people to make informed decisions and develop meaningful relationships with the plant."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Professional Standards & Hospitality",
      description: "We believe the cannabis industry deserves the same level of professionalism, expertise, and hospitality standards as any other service industry. Through proper training and certification, we elevate cannabis service from casual consumption to intentional, guided experiences."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Bridging Ancient Wisdom & Modern Science",
      description: "We honor both the traditional, indigenous knowledge of cannabis and cutting-edge scientific research. This plant has been humanity's ally for thousands of years, and we believe in integrating ancient wisdom with modern understanding to serve our communities better."
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Conscious Leadership in Cannabis",
      description: "We believe the cannabis movement needs conscious leaders who can hold space for transformation, speak multiple cultural languages, and bridge the gap between tradition and innovation. Our role is to guide this industry toward its highest potential with integrity and purpose."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Accessible, Safe & Sacred Experiences",
      description: "We believe everyone deserves access to safe, educational, and potentially sacred cannabis experiences. Whether someone is exploring cannabis for wellness, creativity, or spiritual growth, we're committed to providing the knowledge and support they need to navigate their journey safely."
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
            Our core beliefs shape everything we do—from education and certification to the experiences we create and the professionals we train.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Join us in elevating the cannabis industry through education, professionalism, and conscious service.
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
