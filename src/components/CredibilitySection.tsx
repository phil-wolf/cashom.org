const CredibilitySection = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Philip Wolf has guided over <strong className="text-primary">5,000+ cannabis consumers</strong> through 
              mindful experiences, bringing decades of expertise in conscious consumption and 
              wellness education to every certification program.
            </p>
            <p className="text-foreground/70">
              His work has been featured in leading publications and media outlets, 
              establishing him as a trusted voice in the evolving cannabis wellness space.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Philip Wolf speaking at an event" className="rounded-lg shadow-lg w-full h-80 object-cover" />
          </div>
        </div>

        {/* Media Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-center text-muted-foreground mb-8 font-semibold">
            As Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {['NYTimes', 'Forbes', 'TIME', 'Bloomberg', 'CBC', 'Al Jazeera', 'High Times', 'Rolling Stone'].map(outlet => <div key={outlet} className="text-center">
                <div className="h-8 flex items-center justify-center bg-muted rounded px-3">
                  <span className="text-sm font-semibold text-muted-foreground">{outlet}</span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default CredibilitySection;