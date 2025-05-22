
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeliefSection from '@/components/BeliefSection';
import CashomSection from '@/components/CashomSection';
import CredibilitySection from '@/components/CredibilitySection';
import CoursesSection from '@/components/CoursesSection';
import PromoSection from '@/components/PromoSection';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BeliefSection />
      <CashomSection />
      <CredibilitySection />
      <CoursesSection />
      <PromoSection />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
