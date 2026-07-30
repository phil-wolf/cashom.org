import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeliefSection from '@/components/BeliefSection';
import CertificationPathway from '@/components/CertificationPathway';
import SignUpCTA from '@/components/SignUpCTA';
import PhilipWolfSection from '@/components/PhilipWolfSection';
import EmailSignup from '@/components/EmailSignup';
import CashomSection from '@/components/CashomSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="CashoM — Cannabis Certifications & Hospitality Coaching"
        description="Cannabis hospitality certifications and coaching for service, wellness, and event professionals. Train from Lounge Attendant to Certified Server of Cannabis."
        path="/"
      />
      <Header />
      <main>
      <Hero />
      <BeliefSection />
      <CertificationPathway />
      <PhilipWolfSection />
      <SignUpCTA />
      <CashomSection />
      <EmailSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
