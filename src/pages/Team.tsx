
import Seo from '@/components/Seo';
import Header from '@/components/Header';
import PhilipWolfBio from '@/components/PhilipWolfBio';
import Footer from '@/components/Footer';

const Team = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Meet Philip Wolf & the CashoM Team"
        description="Meet Philip Wolf, cannabis hospitality pioneer, and the CashoM team leading cannabis certification and education worldwide."
        path="/team"
        jsonLd={{"@context":"https://schema.org","@type":"Person","name":"Philip Wolf","jobTitle":"Founder, Cultivating Spirits & Cannabis Hospitality Pioneer","url":"https://cashom-v1-46.lovable.app/team","sameAs":["https://www.instagram.com/philipwolf420/","https://www.linkedin.com/in/philip-wolf-1a08b325/"]}}
      />
      <Header />
      <main>
      <PhilipWolfBio />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
