import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const openModal = useCallback(() => {
    const dismissed = sessionStorage.getItem('ccsc-promo-dismissed');
    if (!dismissed && !hasTriggered) {
      setIsOpen(true);
      setHasTriggered(true);
      // Small delay to allow mount before triggering transition
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [hasTriggered]);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
    sessionStorage.setItem('ccsc-promo-dismissed', 'true');
  };

  useEffect(() => {
    // Time-based trigger: 9 seconds
    const timer = setTimeout(() => {
      openModal();
    }, 9000);

    // Exit-intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openModal();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [openModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-headline"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeModal}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground/70" />
        </button>

        {/* Decorative top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-[hsl(25,55%,50%)] to-primary" />

        <div className="p-8 md:p-10 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/lovable-uploads/9bc25130-52b6-4bd4-8d97-065022eff1ce.png"
              alt="CashoM Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Headline */}
          <h2
            id="promo-headline"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight"
          >
            Cannabis Hospitality Is Evolving. Are You Leading It?
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
            Start a cannabis event company. Elevate your existing services. Transform your retail brand. One certification, three paths forward.
          </p>

          {/* Urgency Line */}
          <div className="inline-block bg-accent/60 border border-primary/20 rounded-lg px-5 py-3 mb-8">
            <p className="text-foreground text-sm md:text-base font-medium leading-snug">
              Only 7 seats remain for the July 22nd cohort — apply now before they're gone.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://forms.gle/1ph4uKp1EtsLsiyr5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sessionStorage.setItem('ccsc-promo-dismissed', 'true')}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Apply Now
          </a>

          {/* Trust hint */}
          <p className="text-muted-foreground text-xs mt-5">
            CashoM Certified Server of Cannabis — The gold standard in cannabis hospitality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
