
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CannabisHospitalityApplication = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/cannabis-hospitality-certification" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Certification Details
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Apply for Cannabis Hospitality Stewardship Certification
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Take the first step towards becoming a certified cannabis hospitality professional. Complete the application form to begin your journey.
          </p>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg border border-border p-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Ready to Apply?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Click the button below to access our secure application form. You'll be redirected to Google Forms where you can complete your application.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Complete Application Form
                </Button>
              </a>
              
              <p className="text-sm text-foreground/60 mt-6">
                The form will open in a new tab for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Complete Form</h4>
                <p className="text-foreground/70">Fill out the comprehensive application with your background and goals</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Review Process</h4>
                <p className="text-foreground/70">Our team will review your application and contact you within 48 hours</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Begin Journey</h4>
                <p className="text-foreground/70">Start your cannabis hospitality certification program</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CannabisHospitalityApplication;
