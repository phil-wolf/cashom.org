import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeliefSection from '@/components/BeliefSection';
import CertificationPathway from '@/components/CertificationPathway';
import CredentialSection from '@/components/CredentialSection';
import DefinitionBlock from '@/components/DefinitionBlock';
import SignUpCTA from '@/components/SignUpCTA';
import PhilipWolfSection from '@/components/PhilipWolfSection';
import PromoModal from '@/components/PromoModal';
import CashomSection from '@/components/CashomSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="CashoM — Cannabis Certifications & Hospitality Coaching"
        description="Cannabis hospitality certifications and coaching for service, wellness, and event professionals. Train from Certified Server to Certified Steward of Cannabis."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <BeliefSection />
        <CertificationPathway />
        <CredentialSection />
        <DefinitionBlock />
        <PhilipWolfSection />
        <SignUpCTA />
        <CashomSection />
      </main>
      <Footer />
      <PromoModal />
    </div>
  );
};

export default Index;
