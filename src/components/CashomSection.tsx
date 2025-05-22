
const CashomSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Become a CashoM
          </h2>
          
          <div className="text-lg text-foreground/80 space-y-6 leading-relaxed">
            <p>
              A <strong className="text-primary font-semibold">CashoM</strong> is a Certified Server & Steward of Cannabis - 
              a trained professional who understands the sacred nature of this plant and can guide others 
              in conscious, intentional consumption.
            </p>
            
            <p>
              Our comprehensive certification program includes specialized training in 
              <span className="text-primary font-semibold"> Cannabis Stewardship</span>, 
              <span className="text-primary font-semibold"> Philosophy</span>, and 
              <span className="text-primary font-semibold"> Mentorship</span> - 
              equipping you with both the knowledge and wisdom to serve your community with integrity.
            </p>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center space-x-4 bg-accent/20 px-8 py-4 rounded-lg">
              <div className="w-12 h-12 bg-primary transform rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 bg-white transform -rotate-45"></div>
              </div>
              <span className="text-primary font-serif font-semibold text-xl">
                Join the movement towards conscious cannabis education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashomSection;
