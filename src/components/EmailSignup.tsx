
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const EmailSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: "Success!",
      description: "Thank you for signing up. You'll receive exclusive updates and specials.",
    });
    
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            Join our email list for exclusive updates, course announcements, and special offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />

            <Button 
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary w-full md:w-auto px-12 py-3 font-semibold"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/60 mt-6">
            * Required field. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
