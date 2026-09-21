import { useState } from 'react';

const topics = [
  'Bug report',
  'Feature request',
  'Account & billing',
  'Press inquiry',
  'Partnership',
  'Other',
];

export default function Contact() {
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Email</div>
              <a href="mailto:hello@sudoku.app" className="text-sm text-[#1a1814] hover:text-[#c0392b] transition-colors">hello@sudoku.app</a>
            </div>
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Support</div>
              <a href="mailto:support@sudoku.app" className="text-sm text-[#1a1814] hover:text-[#c0392b] transition-colors">support@sudoku.app</a>
            </div>
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Press</div>
              <a href="mailto:press@sudoku.app" className="text-sm text-[#1a1814] hover:text-[#c0392b] transition-colors">press@sudoku.app</a>
            </div>
            <div>
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Office</div>
              <address className="text-sm text-[#6b6357] not-italic leading-relaxed">
                Sudoku Inc.<br />
                Mannerheimintie 12A<br />
                00100 Helsinki, Finland
              </address>
            </div>
            <div className="pt-4 border-t border-[#c8c2b4]">
              <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-3">Response time</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#3d3830]">Typically under 24 hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="border border-[#c8c2b4] p-12 text-center">
                <div className="font-display text-3xl font-semibold text-[#1a1814] mb-3">Message sent.</div>
                <p className="text-[#6b6357]">We'll get back to you at the address you provided. Usually within a day.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm text-[#c0392b] hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-2">Name</label>
                    <input required type="text" placeholder="Your name"
                      className="w-full border border-[#c8c2b4] bg-transparent px-4 py-3 text-sm text-[#1a1814] placeholder-[#c8c2b4] focus:outline-none focus:border-[#1a1814] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-2">Email</label>
                    <input required type="email" placeholder="your@email.com"
                      className="w-full border border-[#c8c2b4] bg-transparent px-4 py-3 text-sm text-[#1a1814] placeholder-[#c8c2b4] focus:outline-none focus:border-[#1a1814] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-2">Topic</label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(t => (
                      <button type="button" key={t} onClick={() => setTopic(t)}
                        className={`px-4 py-2 text-xs font-mono-custom border transition-colors rounded-sm ${topic === t ? 'bg-[#1a1814] text-[#f5f0e8] border-[#1a1814]' : 'border-[#c8c2b4] text-[#6b6357] hover:border-[#1a1814]'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-2">Message</label>
                  <textarea required rows={6} placeholder="Tell us what's on your mind..."
                    className="w-full border border-[#c8c2b4] bg-transparent px-4 py-3 text-sm text-[#1a1814] placeholder-[#c8c2b4] focus:outline-none focus:border-[#1a1814] transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="bg-[#1a1814] text-[#f5f0e8] px-10 py-3.5 text-sm font-medium hover:bg-[#3d3830] transition-colors rounded-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
