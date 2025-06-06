
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CashomSection from '@/components/CashomSection';
import BeliefSection from '@/components/BeliefSection';
import CredibilitySection from '@/components/CredibilitySection';
import CoursesSection from '@/components/CoursesSection';
import PhilipWolfSection from '@/components/PhilipWolfSection';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CashomSection />
      <BeliefSection />
      <CredibilitySection />
      <CoursesSection />
      <PhilipWolfSection />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
