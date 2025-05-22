
const BeliefSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-16">
          We Believe
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Self-Connection
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Cannabis can be a powerful tool for deepening self-awareness and fostering authentic connection with one's inner wisdom and purpose.
            </p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Sacred Sacrament
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              When approached with reverence and intention, cannabis serves as a sacred sacrament that can enhance spiritual practice and mindful living.
            </p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Modern Movement
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We're pioneering a new era of cannabis education that honors both ancient wisdom and modern understanding. Join the movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
