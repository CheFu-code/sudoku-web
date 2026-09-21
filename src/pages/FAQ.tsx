import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      { q: 'Do I need to create an account?', a: 'No account is required to play the daily puzzle or any of our free puzzles. An account is only needed if you want to sync your progress across devices or access the full puzzle library.' },
      { q: 'Is the app really free?', a: 'The daily puzzle and 500 starter puzzles are completely free, forever. A one-time premium unlock (no subscription) adds 50,000+ puzzles, speed stats, and offline access to the full library.' },
      { q: 'Which platforms are supported?', a: 'We support iOS (13+), Android (8+), and modern web browsers (Chrome, Firefox, Safari, Edge). Your progress syncs automatically when you\'re signed in.' },
    ],
  },
  {
    category: 'Gameplay',
    items: [
      { q: 'How are difficulty levels defined?', a: 'Easy and Medium puzzles require only basic elimination techniques. Hard introduces locked candidates. Expert adds X-wings and swordfish. Diabolical requires multi-step hypotheticals. All are solvable by logic alone — never guessing.' },
      { q: 'Can I get hints without it counting as a mistake?', a: 'Hints are optional and tracked separately from your solve accuracy. Your solve time pauses while reviewing a hint. We believe learning technique is more valuable than a perfect streak.' },
      { q: 'What happens if I make a mistake?', a: 'By default, mistakes are highlighted in red but don\'t end the puzzle. You can toggle strict mode (no mistake highlighting) in settings for a more authentic paper-puzzle experience.' },
      { q: 'Are puzzles randomly generated?', a: 'No. Every puzzle in our library is human-reviewed for quality, uniqueness, and correct difficulty rating. We have a small curation team led by a former competitive Sudoku champion.' },
    ],
  },
  {
    category: 'Account & Billing',
    items: [
      { q: 'What does the premium unlock include?', a: 'The premium one-time purchase ($4.99) unlocks the full puzzle library (50,000+ puzzles), detailed statistics, offline access, custom themes, and removes the soft limit on daily streak rewards.' },
      { q: 'Is there a subscription?', a: 'No. Never. We don\'t believe in subscriptions for a puzzle app. You pay once and own it permanently.' },
      { q: 'Can I get a refund?', a: 'Yes. Within 30 days of purchase, no questions asked. Contact us at sudoku@chefu.co.za with your order ID.' },
      { q: 'What happens to my account if I delete the app?', a: 'Your progress is stored in your account, not your device. Reinstall anytime and sign in to restore everything.' },
    ],
  },
  {
    category: 'Privacy & Data',
    items: [
      { q: 'What data do you collect?', a: 'For signed-in users: email, puzzle history, and solve times. For anonymous users: nothing identifiable. We don\'t sell data or use third-party ad trackers. See our Privacy Policy for full details.' },
      { q: 'Can I delete my account?', a: 'Yes, at any time from Settings → Account → Delete Account. All your data is permanently removed within 48 hours.' },
      { q: 'Is my payment information stored?', a: 'No. Payments are processed by Apple, Google, or Stripe depending on your platform. We never see or store your card details.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#c8c2b4] last:border-b-0">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left group">
        <span className="text-sm font-medium text-[#1a1814] group-hover:text-[#c0392b] transition-colors pr-8">{q}</span>
        <span className={`text-[#c0392b] font-mono-custom text-lg shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-[#6b6357] leading-relaxed max-w-2xl">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">FAQ</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">Frequently asked.</h1>
          <p className="text-lg text-[#6b6357] max-w-lg">Answers to the questions we get most often. If yours isn't here, we're one message away.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Nav */}
          <nav className="lg:sticky lg:top-24 self-start space-y-1">
            {faqs.map(f => (
              <a key={f.category} href={`#${f.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-[#6b6357] hover:text-[#1a1814] transition-colors py-1">
                {f.category}
              </a>
            ))}
          </nav>

          {/* Content */}
          <div className="lg:col-span-3 space-y-14">
            {faqs.map(section => (
              <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, '-')}>
                <div className="text-xs font-mono-custom text-[#c0392b] uppercase tracking-widest mb-6">{section.category}</div>
                <div className="border-t border-[#c8c2b4]">
                  {section.items.map(item => <FAQItem key={item.q} {...item} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#ede8de] border-t border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-2xl font-semibold text-[#1a1814] mb-1">Still have questions?</div>
            <p className="text-sm text-[#6b6357]">We read every message and respond within 24 hours.</p>
          </div>
          <a href="/contact" className="bg-[#1a1814] text-[#f5f0e8] px-8 py-3 text-sm font-medium hover:bg-[#3d3830] transition-colors rounded-sm shrink-0">
            Contact Us →
          </a>
        </div>
      </section>
    </div>
  );
}
