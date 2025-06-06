
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-accent/20 to-secondary/30">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: `url('/lovable-uploads/0033d46b-6b37-45d4-841d-c8dd5c518dbe.png')`
      }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 animate-fade-in">
          Welcome to CashoM
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>Cannabis Certifications for Hospitality, Service & Wellness Professionals</p>
        
        {/* CashoM Logo */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
          <img 
            src="/lovable-uploads/cdfc5b29-a363-40f3-a90f-3e4e147f1d88.png" 
            alt="CashoM Logo" 
            className="h-40 w-auto md:h-48 opacity-90" 
          />
        </div>

        <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary border-2 border-primary/20 px-8 py-4 text-lg font-semibold animate-scale-in group" style={{
          animationDelay: '0.4s'
        }} onClick={scrollToCourses}>
          All Courses
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
