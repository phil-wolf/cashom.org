import { User, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PhilipWolfSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/team');
  };

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

  const publications = [
    { name: 'NYTimes', style: 'font-serif', color: 'text-ink-brown' },
    { name: 'Forbes', style: 'font-serif', color: 'text-ink-brown' },
    { name: 'TIME', style: 'font-sans font-bold tracking-tight', color: 'text-red-700' },
    { name: 'Bloomberg', style: 'font-sans font-semibold', color: 'text-ink-brown' },
    { name: 'CBC', style: 'font-sans font-bold', color: 'text-red-600' },
    { name: 'Al Jazeera', style: 'font-serif', color: 'text-amber-700' },
    { name: 'High Times', style: 'font-serif font-bold', color: 'text-green-700' },
    { name: 'Rolling Stone', style: 'font-sans font-bold tracking-wide', color: 'text-red-700' },
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="relative h-full bg-primary text-primary-foreground p-8 rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rust to-accent" />
      <Quote className="w-8 h-8 text-accent/40 mb-4" />
      <blockquote className="text-primary-foreground/95 italic leading-relaxed flex-1 mb-6">
        "{testimonial.quote}"
      </blockquote>
      <div className="border-t border-primary-foreground/20 pt-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-lg">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-bold text-primary-foreground text-base">
              {testimonial.author}
            </p>
            {testimonial.company && (
              <p className="text-primary-foreground/70 text-xs uppercase tracking-wider font-medium">
                {testimonial.company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Intro Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-rust/10 flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-rust" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Meet Philip Wolf
            </h2>
          </div>
          <p className="text-2xl text-primary font-serif font-semibold mb-4">
            Your Teacher
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn Cannabis Hospitality from Philip Wolf – Industry Pioneer (High Times 2015) & Creator of the Cannabis Pairing Protocol
          </p>
        </div>

        {/* Credibility Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-2">
              A Trusted Pioneer
            </p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
              A Trusted Pioneer in Cannabis Hospitality
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Recognized by High Times as the pioneer of cannabis hospitality, Philip Wolf founded the first company in the United States to legally offer cannabis pairing dinners. Through curated experiences and immersive events, he has guided over <strong className="text-primary">5,000</strong> consumers in their consumption of cannabis with precision, care, and deep expertise—helping them access elevated, enriching experiences in a safe and intentional setting.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With over 16 years in the legal cannabis industry, Philip brings unparalleled knowledge in cannabis hospitality, education, and service standards to every certification program he leads. His work has been featured in Time Magazine, NBC and CBS Nightly News, Forbes, and as a writer for Rolling Stone, cementing his role as a trusted authority in the evolving cannabis landscape.
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

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-rust/10 rounded-2xl -rotate-2" />
            <img 
              src="/lovable-uploads/528a060d-1f4b-4975-bbf6-eb1c257aa493.png" 
              alt="Philip Wolf speaking at an event" 
              className="relative rounded-xl shadow-xl w-full h-80 lg:h-96 object-cover" 
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-center text-3xl font-serif font-bold text-primary mb-12">
            What Our Students Say
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <div key={index + 3} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Media Logos */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-10">
            As Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-10 lg:gap-x-12">
            {publications.map((pub) => (
              <div
                key={pub.name}
                className={`text-base md:text-lg lg:text-xl ${pub.style} ${pub.color} opacity-80 hover:opacity-100 transition-opacity`}
              >
                {pub.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilipWolfSection;
