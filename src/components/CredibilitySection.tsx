
const CredibilitySection = () => {
  const testimonials = [
    {
      quote: "Philip Wolf is my Mentor. I've had the privilege to learn from him for the last 10 weeks and I can say for certain this man is actively changing the Cannabis Space and carving out lanes that didn't exist before.",
      author: "Kelly Addison",
      company: "Kelly's Green Lounge"
    },
    {
      quote: "Gratitude doesn't quite capture what I'm feeling after completing the CashoM class with Philip Wolf. This experience deepened my understanding of the cannabis industry in ways I couldn't have anticipated... the responsibility we carry as stewards of this plant, every session left me more inspired and aligned with my purpose.",
      author: "Joe Hager",
      company: "Dispensary owner in Oklahoma"
    },
    {
      quote: "Philip Wolf, thank you for teaching us the math, science, and art of cannabis service; even more, the responsibility that comes with it.",
      author: "Vanessa Olivar",
      company: "CannaLuxxe"
    },
    {
      quote: "The past 10 weeks have really helped me shape all the goals and visions I have into something that is actually about to take off. I was really appreciative of not just the review and conversations we had around consumption methods and how to address it to folks of all different experience levels.",
      author: "Isabella Dechard",
      company: "Cannabis Coach and Copywriter"
    },
    {
      quote: "My customers come in all day, people and I'd be able to tell them the new facts or things I've learned (class) and it was incredible to see the spark in their eyes of learning about terpenes and just learning the importance of the plant... I'm just so jazzed on the events I have planned up here. It's incredible and thank you so much.",
      author: "Andrew Sablon",
      company: "Dispensary Owner in Kodiak (Island), Alaska"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              A Trusted Pioneer in Cannabis Hospitality
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Recognized by High Times as the pioneer of cannabis hospitality, Philip Wolf founded the first company in the United States to legally offer cannabis pairing dinners. Through curated experiences and immersive events, he has guided over <strong className="text-primary">5,000</strong> consumers in their consumption of cannabis with precision, care, and deep expertise—helping them access elevated, enriching experiences in a safe and intentional setting.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With over 16 years in the legal cannabis industry, Philip brings unparalleled knowledge in cannabis hospitality, education, and service standards to every certification program he leads. His work has been featured in Time Magazine, NBC and CBS Nightly News, Forbes, and as a writer for Rolling Stone, cementing his role as a trusted authority in the evolving cannabis landscape.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/lovable-uploads/528a060d-1f4b-4975-bbf6-eb1c257aa493.png" alt="Philip Wolf speaking at an event" className="rounded-lg shadow-lg w-full h-80 object-cover" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-center text-2xl font-serif font-bold text-primary mb-12">
            What Our Students Say
          </h3>
          
          {/* Top row - 3 testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="relative group">
                {/* Movie poster-inspired card */}
                <div className="relative bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-secondary"></div>
                  <div className="absolute top-2 right-4 w-3 h-3 bg-accent rounded-full opacity-70"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-50"></div>
                  
                  {/* Quote */}
                  <blockquote className="text-primary-foreground/95 italic mb-6 text-sm leading-relaxed font-medium relative z-10">
                    <span className="text-2xl text-accent opacity-70 absolute -top-2 -left-2">"</span>
                    {testimonial.quote}
                    <span className="text-2xl text-accent opacity-70 absolute -bottom-4 -right-2">"</span>
                  </blockquote>
                  
                  {/* Author section with movie credits styling */}
                  <div className="border-t border-primary-foreground/30 pt-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-primary-foreground text-base">
                          {testimonial.author}
                        </p>
                        {testimonial.company && (
                          <p className="text-primary-foreground/80 text-xs uppercase tracking-wider font-medium">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 2 testimonials centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <div key={index + 3} className="relative group">
                {/* Movie poster-inspired card */}
                <div className="relative bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-secondary"></div>
                  <div className="absolute top-2 right-4 w-3 h-3 bg-accent rounded-full opacity-70"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-50"></div>
                  
                  {/* Quote */}
                  <blockquote className="text-primary-foreground/95 italic mb-6 text-sm leading-relaxed font-medium relative z-10">
                    <span className="text-2xl text-accent opacity-70 absolute -top-2 -left-2">"</span>
                    {testimonial.quote}
                    <span className="text-2xl text-accent opacity-70 absolute -bottom-4 -right-2">"</span>
                  </blockquote>
                  
                  {/* Author section with movie credits styling */}
                  <div className="border-t border-primary-foreground/30 pt-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-primary-foreground text-base">
                          {testimonial.author}
                        </p>
                        {testimonial.company && (
                          <p className="text-primary-foreground/80 text-xs uppercase tracking-wider font-medium">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-center text-muted-foreground mb-8 font-semibold">
            As Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {['NYTimes', 'Forbes', 'TIME', 'Bloomberg', 'CBC', 'Al Jazeera', 'High Times', 'Rolling Stone'].map(outlet => (
              <div key={outlet} className="text-center">
                <div className="h-8 flex items-center justify-center bg-muted rounded px-3">
                  <span className="text-sm font-semibold text-muted-foreground">{outlet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
