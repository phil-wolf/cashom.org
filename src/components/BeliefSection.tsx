
import { Heart, Users, BookOpen } from 'lucide-react';

const BeliefSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-6">
            We Believe
          </h2>
          <p className="text-xl text-center text-primary/80 mb-16 max-w-4xl mx-auto">
            Elevating Culture Through Cannabis Hospitality
          </p>
          
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
