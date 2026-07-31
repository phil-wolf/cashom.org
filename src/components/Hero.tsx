import { ArrowRight, ChevronDown } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/lovable-uploads/0033d46b-6b37-45d4-841d-c8dd5c518dbe.png')`
        }} 
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-brown/70 via-ink-brown/50 to-ink-brown/80" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <p className="text-rust text-sm font-sans font-semibold tracking-[0.25em] uppercase mb-6 animate-fade-in">
          Cannabis Hospitality Certifications & Training
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-parchment mb-6 leading-[1.1] animate-fade-in">
          CashoM
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-parchment/90 mb-4 max-w-3xl mx-auto font-serif italic animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
          Elevate service. Deepen wisdom. Lead the cannabis experience.
        </p>
        
        <p className="text-base md:text-lg text-parchment/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
          Professional certifications for hospitality, service, and wellness professionals who want to serve cannabis with confidence, care, and credibility.
        </p>

        <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-rust hover:bg-rust/90 text-white px-10 py-6 text-lg font-semibold rounded-full group shadow-lg shadow-rust/20"
            onClick={scrollToCourses}
          >
            Explore Certifications
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <button 
          onClick={scrollToCourses}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-parchment/50 hover:text-parchment transition-colors animate-bounce"
          aria-label="Scroll to certifications"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
