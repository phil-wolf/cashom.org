
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeliefSection from '@/components/BeliefSection';
import CertificationPathway from '@/components/CertificationPathway';
import CredibilitySection from '@/components/CredibilitySection';
import PhilipWolfSection from '@/components/PhilipWolfSection';
import EmailSignup from '@/components/EmailSignup';

import CashomSection from '@/components/CashomSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BeliefSection />
      <CertificationPathway />
      <CredibilitySection />
      <PhilipWolfSection />
      <CertificationPathway
        eyebrow="Featured Programs"
        title="Featured Programs"
        subtitle="Comprehensive cannabis education and professional development programs designed for mindful practice and industry excellence."
        showFraming={false}
      />
      <CashomSection />

      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
