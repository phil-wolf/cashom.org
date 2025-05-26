
const CredibilitySection = () => {
  const testimonials = [
    {
      quote: "Philip Wolf is my Mentor. I've had the privilege to learn from him for the last 10 weeks and I can say for certain this man is actively changing the Cannabis Space and carving out lanes that didn't exist before.",
      author: "Kelly Addison",
      company: "Kelly's Green Lounge"
    },
    {
      quote: "What a moment to honor. In an industry where so much is performative, fast-paced, or purely transactional, this program grounded us in humility, reciprocity, and true plant education. Philip Wolf, thank you for teaching us the math, science, and art of cannabis service; even more, the responsibility that comes with it.",
      author: "Vanessa Olivar",
      company: "CannaLuxxe"
    },
    {
      quote: "Gratitude doesn't quite capture what I'm feeling after completing the CashoM class with Philip Wolf. This experience deepened my understanding of the cannabis industry in ways I couldn't have anticipated... the responsibility we carry as stewards of this plant, every session left me more inspired and aligned with my purpose.",
      author: "Joe Hager",
      company: "Dispensary owner in Oklahoma"
    },
    {
      quote: "The past 10 weeks have really helped me shape all the goals and visions I have into something that is actually about to take off. I was really appreciative of not just the review and conversations we had around consumption methods and how to address it to folks of all different experience levels. But echoing what Vanessa said, the whole environmental element.",
      author: "Isabella Dechard",
      company: ""
    },
    {
      quote: "My customers come in all day, people and I'd be able to tell them the new facts or things I've learned and it was incredible to see the spark in their eyes of learning about terpenes and just learning the importance of the plant... I'm just so jazzed on the events I have planned up here. It's incredible and thank you so much.",
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

        {/* Testimonials Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-center text-2xl font-serif font-bold text-primary mb-12">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="text-foreground/80 italic mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  )}
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
