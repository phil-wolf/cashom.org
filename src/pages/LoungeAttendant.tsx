import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const LoungeAttendant = () => (
  <div className="min-h-screen bg-parchment flex flex-col">
    <Seo
      title="Cannabis Lounge Attendant — Coming Soon | CashoM"
      description="Cannabis Lounge Attendant training from CashoM is coming soon."
      path="/courses/cannabis-lounge-attendant"
    />
    <Header />

    <main className="flex-1 flex items-center justify-center py-28">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink-brown leading-tight mb-6">
          Cannabis Lounge Attendant
        </h1>
        <p className="text-rust text-xs font-sans font-semibold tracking-[0.2em] uppercase">
          Coming soon
        </p>
      </div>
    </main>

    <Footer />
  </div>
);

export default LoungeAttendant;
