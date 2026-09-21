const platforms = [
  {
    name: 'iOS',
    icon: '↗',
    desc: 'iPhone & iPad',
    detail: 'Requires iOS 13 or later. Optimized for all screen sizes including iPad split view.',
    cta: 'Download on App Store',
    rating: '4.9',
    reviews: '128k reviews',
  },
  {
    name: 'Android',
    icon: '↗',
    desc: 'Phone & Tablet',
    detail: 'Requires Android 8.0+. Adaptive layout for phones and tablets. Full offline support.',
    cta: 'Get on Google Play',
    rating: '4.8',
    reviews: '94k reviews',
  },
  {
    name: 'Browser',
    icon: '→',
    desc: 'No install required',
    detail: 'Works in Chrome, Firefox, Safari, and Edge. No account required for the daily puzzle.',
    cta: 'Play in Browser',
    rating: 'Free',
    reviews: 'always',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    sub: 'forever',
    features: ['Daily puzzle', '500 starter puzzles', 'Basic statistics', 'Anonymous play'],
    cta: 'Start Playing',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$4.99',
    sub: 'one-time, no subscription',
    features: ['Everything in Free', '50,000+ puzzles', 'Full statistics & trends', 'Offline library', 'Custom themes', '6 difficulty levels', 'Priority support'],
    cta: 'Unlock Premium',
    highlight: true,
  },
];

export default function Download() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">Get the app</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">
            Play anywhere,<br /><em className="not-italic font-semibold">any device.</em>
          </h1>
          <p className="text-lg text-[#6b6357] max-w-lg">Native apps for iOS and Android. Full browser support. One account syncs everything.</p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-12">Platforms</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c2b4]">
            {platforms.map(p => (
              <div key={p.name} className="bg-[#f5f0e8] p-10 flex flex-col justify-between group hover:bg-[#ede8de] transition-colors">
                <div>
                  <div className="text-xs font-mono-custom text-[#6b6357] mb-1">{p.desc}</div>
                  <div className="font-display text-3xl font-semibold text-[#1a1814] mb-4">{p.name}</div>
                  <p className="text-sm text-[#6b6357] leading-relaxed mb-8">{p.detail}</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-mono-custom font-medium text-[#c0392b]">{p.rating}</span>
                    <span className="text-xs text-[#6b6357] font-mono-custom">{p.reviews}</span>
                  </div>
                  <button className="w-full border border-[#1a1814] text-[#1a1814] py-3 text-sm font-medium hover:bg-[#1a1814] hover:text-[#f5f0e8] transition-colors rounded-sm">
                    {p.cta} {p.icon}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-4">Pricing</div>
          <h2 className="font-display text-4xl font-light text-[#1a1814] mb-12">Simple. Honest.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c8c2b4] max-w-3xl">
            {plans.map(plan => (
              <div key={plan.name} className={`p-10 ${plan.highlight ? 'bg-[#1a1814]' : 'bg-[#f5f0e8]'}`}>
                <div className={`text-xs font-mono-custom uppercase tracking-widest mb-2 ${plan.highlight ? 'text-[#8c8278]' : 'text-[#6b6357]'}`}>{plan.name}</div>
                <div className={`font-display text-4xl font-semibold mb-1 ${plan.highlight ? 'text-[#f5f0e8]' : 'text-[#1a1814]'}`}>{plan.price}</div>
                <div className={`text-xs font-mono-custom mb-8 ${plan.highlight ? 'text-[#6b6357]' : 'text-[#6b6357]'}`}>{plan.sub}</div>
                <ul className="space-y-2 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlight ? 'text-[#c8c2b4]' : 'text-[#6b6357]'}`}>
                      <span className="text-[#c0392b]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-sm font-medium rounded-sm transition-colors ${plan.highlight ? 'bg-[#c0392b] text-white hover:bg-[#a93226]' : 'border border-[#c8c2b4] text-[#1a1814] hover:bg-[#ede8de]'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6b6357] font-mono-custom mt-6">30-day money-back guarantee · No subscription · One purchase, yours forever</p>
        </div>
      </section>
    </div>
  );
}
