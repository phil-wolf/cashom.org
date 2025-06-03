
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Take the first step towards becoming a certified cannabis hospitality professional. Complete the application form below to begin your journey.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border border-border overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfx_ICZtoEDhKl4rg7QtBkzR4UFY7R9JX2cDvUPt8JMaJxXAg/viewform?embedded=true" 
                width={640}
                height={4333}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Cannabis Hospitality Stewardship Certification Application"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CannabisHospitalityApplication;
