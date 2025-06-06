
const BeliefSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-primary/5 via-accent/20 to-secondary/15 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with enhanced styling and background logo */}
          <div className="relative">
            {/* Large transparent logo behind text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
              <img src="/lovable-uploads/cdfc5b29-a363-40f3-a90f-3e4e147f1d88.png" alt="CashoM Logo Background" className="h-[32rem] w-auto" />
            </div>
            
            {/* Main heading text */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Elevating Culture
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary/90 via-accent to-primary bg-clip-text text-transparent">
                  Through Cannabis
                </span>
                <span className="block mt-2 text-primary/80">
                  Hospitality
                </span>
              </h2>
            </div>
            
            {/* Decorative underline */}
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
          </div>
          
          {/* Subtle supporting text */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-primary/70 font-medium leading-relaxed">
              Setting new standards for mindful, professional cannabis service
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default BeliefSection;
