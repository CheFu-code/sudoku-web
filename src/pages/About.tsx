const timeline = [
  { year: '2018', event: 'Founded in a small apartment in Helsinki. Three developers, one shared obsession: a Sudoku app worth using.' },
  { year: '2019', event: 'First public beta launched on iOS. 12,000 testers in week one — far beyond anything we expected.' },
  { year: '2020', event: 'Full release on iOS and Android. Featured by Apple as "App of the Day" in 47 countries.' },
  { year: '2022', event: 'Reached 1 million players. Launched daily competitive puzzles with global leaderboards.' },
  { year: '2024', event: 'Introduced adaptive difficulty — the engine that learns your solve patterns and keeps the challenge ideal.' },
  { year: '2026', event: 'Over 2 million players across 140 countries. Still three core developers. Still one obsession.' },
];

const team = [
  { name: 'Mira Lehtinen', role: 'Founder & Design', bio: 'Former type designer. Approaches product with the same precision she once applied to letterforms.' },
  { name: 'Tomás Krejčí', role: 'Founder & Engineering', bio: 'Systems programmer who once wrote a Sudoku solver in 48 hours just to see if he could. He could.' },
  { name: 'Yuki Tanaka', role: 'Puzzle Curation', bio: 'Competitive Sudoku champion, 2017. Hand-reviews every puzzle we publish for quality and solvability.' },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">About</div>
            <h1 className="font-display text-5xl lg:text-6xl font-light leading-tight text-[#1a1814]">
              Built by people who<br />
              <em className="not-italic font-semibold">love the puzzle.</em>
            </h1>
          </div>
          <div>
            <p className="text-lg text-[#6b6357] leading-relaxed">
              We started Sudoku because every app we tried had ads, distractions, and dark patterns. We wanted to play, not fight with software.
            </p>
            <p className="text-lg text-[#6b6357] leading-relaxed mt-4">
              Eight years later, we still believe the same thing: a great Sudoku app should disappear into the background and let the puzzle take over.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-12">Our Principles</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c2b4]">
            {[
              ['Clarity over cleverness', 'The UI should be invisible. Every element earns its place or it doesn\'t exist.'],
              ['Players, not users', 'You\'re here to think. We\'re here to make that easier, not to extract engagement.'],
              ['Small team, long game', 'We don\'t scale for growth. We scale for quality. The two are often in conflict.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#f5f0e8] p-10">
                <h3 className="font-display text-2xl font-semibold text-[#1a1814] mb-4">{title}</h3>
                <p className="text-sm text-[#6b6357] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-b border-[#c8c2b4] bg-[#ede8de]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-12">History</div>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.year} className={`grid grid-cols-[80px_1fr] gap-8 py-6 ${i < timeline.length - 1 ? 'border-b border-[#c8c2b4]' : ''}`}>
                <div className="font-mono-custom text-sm font-medium text-[#c0392b]">{t.year}</div>
                <div className="text-sm text-[#3d3830] leading-relaxed">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-12">The Team</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(p => (
              <div key={p.name} className="border border-[#c8c2b4] p-8 hover:border-[#1a1814] transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#1a1814] flex items-center justify-center text-[#f5f0e8] font-display text-xl font-semibold mb-6">
                  {p.name[0]}
                </div>
                <div className="font-display text-xl font-semibold text-[#1a1814] mb-1">{p.name}</div>
                <div className="text-xs font-mono-custom text-[#c0392b] mb-4">{p.role}</div>
                <p className="text-sm text-[#6b6357] leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
