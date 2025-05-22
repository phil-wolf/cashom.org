
import { Button } from '@/components/ui/button';

const PromoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary/40 to-accent/40">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Woman with laptop learning online"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Become a Certified Steward of Cannabis
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Transform your understanding of cannabis from simple consumption to sacred practice. 
                  Our comprehensive certification program will equip you with the knowledge and wisdom 
                  to guide others on their cannabis journey.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
