
import { User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PhilipWolfSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/team');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <User className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Meet Philip Wolf
            </h2>
          </div>
          <p className="text-2xl text-primary font-serif font-semibold mb-4">
            Your Teacher
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn Cannabis Hospitality from Philip Wolf – Industry Pioneer (High Times 2015) & Creator of the Cannabis Pairing Protocol
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Philip Wolf has guided thousands of people through immersive cannabis pairing dinners, setting the standard for what cannabis hospitality looks like. As the creator of the Cannabis Pairing Protocol, he pioneered how food, cannabis, and human connection can come together to create elevated, memorable experiences.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            onClick={handleLearnMore}
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhilipWolfSection;
