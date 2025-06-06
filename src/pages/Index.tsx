
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CredibilitySection from '@/components/CredibilitySection';
import CoursesSection from '@/components/CoursesSection';
import PhilipWolfSection from '@/components/PhilipWolfSection';
import EmailSignup from '@/components/EmailSignup';
import BeliefSection from '@/components/BeliefSection';
import CashomSection from '@/components/CashomSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BeliefSection />
      <CredibilitySection />
      <CoursesSection />
      <PhilipWolfSection />
      <EmailSignup />
      <CashomSection />
      <Footer />
    </div>
  );
};

export default Index;
