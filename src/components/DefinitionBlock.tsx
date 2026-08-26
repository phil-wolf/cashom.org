const DefinitionBlock = () => (
  <section className="py-16 bg-parchment border-y border-ink-brown/10">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto rounded-2xl border border-ink-brown/15 bg-background px-8 py-10 shadow-sm">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-brown">CashoM</h2>
          <span className="text-sm italic text-ink-brown/60">(noun)</span>
          <span className="text-sm font-sans tracking-wide text-rust">| kuh-SHOWM</span>
        </div>
        <p className="mt-4 text-sm italic text-ink-brown/60 leading-relaxed">
          From "cannabis sommelier" — shortened to CaSomm, then CashoM.
        </p>
        <p className="mt-5 border-t border-ink-brown/10 pt-5 text-xl md:text-2xl font-serif font-semibold text-ink-brown leading-snug">
          CashoM means the stewardship and guidance of cannabis.
        </p>
      </div>
    </div>
  </section>
);

export default DefinitionBlock;
