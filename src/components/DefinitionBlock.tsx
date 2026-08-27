const DefinitionBlock = () => (
  <section className="py-12 bg-parchment border-y border-ink-brown/10">
    <div className="container mx-auto px-4">
      <div className="w-full rounded-none sm:rounded-3xl border-x-0 sm:border border-ink-brown/15 bg-background px-6 py-8 md:px-12 md:py-10 shadow-[0_18px_50px_-20px_rgba(60,40,25,0.12)] relative overflow-hidden">
        {/* Decorative rust accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-rust" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-rust/10 blur-xl" aria-hidden="true" />
              <img
                src="/lovable-uploads/cdfc5b29-a363-40f3-a90f-3e4e147f1d88.png"
                alt="CashoM logo mark"
                className="relative h-16 w-auto sm:h-20 drop-shadow-sm"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0 mb-1">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-ink-brown tracking-tight">CashoM</h2>
                <span className="text-sm italic text-ink-brown/60">(noun)</span>
              </div>
              <p className="text-xs sm:text-sm font-sans font-semibold tracking-[0.12em] uppercase text-rust">
                | kuh-SHOWM
              </p>
            </div>
          </div>

          <div className="sm:max-w-md sm:text-right">
            <p className="text-lg sm:text-xl font-serif font-medium text-ink-brown leading-relaxed">
              CashoM means a steward and server of cannabis.
            </p>
            <p className="mt-2 text-sm italic text-ink-brown/60 leading-relaxed">
              From "cannabis sommelier" — shortened to CaSomm, then CashoM.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DefinitionBlock;
