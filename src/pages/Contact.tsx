export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">Contact</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">Get in touch.</h1>
          <p className="text-lg text-[#6b6357] max-w-lg">We're a small team — real humans read every message. We aim to respond within one business day.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Contact info */}
          <div className="grid max-w-3xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Email</div>
              <a href="mailto:sudoku@chefu.co.za" className="text-sm text-[#1a1814] hover:text-[#c0392b] transition-colors">sudoku@chefu.co.za</a>
            </div>
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Support</div>
              <a href="mailto:sudoku@chefu.co.za" className="text-sm text-[#1a1814] hover:text-[#c0392b] transition-colors">sudoku@chefu.co.za</a>
            </div>
            
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Office</div>
              <address className="text-sm text-[#6b6357] not-italic leading-relaxed">
                Sudoku Inc.<br />
                Mannerheimintie 12A<br />
                00100 Helsinki, Finland
              </address>
            </div>
            <div className="border-t border-[#c8c2b4] pt-4 md:col-span-2">
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Response time</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#3d3830]">Typically under 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
