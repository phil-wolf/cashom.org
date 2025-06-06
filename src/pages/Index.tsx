
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeliefSection from '@/components/BeliefSection';
import CoursesSection from '@/components/CoursesSection';
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
      <CoursesSection />
      <CredibilitySection />
      <PhilipWolfSection />
      <EmailSignup />
      <CashomSection />
      <Footer />
    </div>
  );
};

export default Index;
