const DefinitionBlock = () => (
  <section className="py-20 bg-parchment border-y border-ink-brown/10">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto rounded-3xl border border-ink-brown/15 bg-background px-8 py-12 md:px-14 md:py-16 shadow-[0_18px_50px_-20px_rgba(60,40,25,0.12)] relative overflow-hidden">
        {/* Decorative rust accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-rust" aria-hidden="true" />

        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-rust/10 blur-xl" aria-hidden="true" />
            <img
              src="/lovable-uploads/cdfc5b29-a363-40f3-a90f-3e4e147f1d88.png"
              alt="CashoM logo mark"
              className="relative h-20 w-auto md:h-24 drop-shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 mb-3">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-ink-brown tracking-tight">CashoM</h2>
            <span className="text-base italic text-ink-brown/60">(noun)</span>
          </div>

          <p className="text-sm md:text-base font-sans font-semibold tracking-[0.12em] uppercase text-rust mb-8">
            | kuh-SHOWM
          </p>

          <div className="w-16 h-px bg-ink-brown/20 mb-8" aria-hidden="true" />

          <p className="text-lg md:text-xl font-serif font-medium text-ink-brown leading-relaxed max-w-xl">
            CashoM means a steward and server of cannabis.
          </p>

          <p className="mt-5 text-sm italic text-ink-brown/60 leading-relaxed max-w-lg">
            From "cannabis sommelier" — shortened to CaSomm, then CashoM.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DefinitionBlock;
