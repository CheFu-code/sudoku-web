import { Link } from 'react-router';

const features = [
  { num: '01', title: 'Five Difficulty Levels', desc: 'From gentle warm-ups to diabolical expert challenges. Every puzzle is hand-verified and unique.' },
  { num: '02', title: 'Daily Puzzles', desc: 'A fresh puzzle every day at midnight. Compete on global leaderboards without creating an account.' },
  { num: '03', title: 'Smart Hints', desc: 'Reveal one step at a time. Our hint system teaches technique rather than just giving answers.' },
  { num: '04', title: 'Progress Tracking', desc: 'Track your solve times, accuracy, and improvement over weeks and months with clear charts.' },
  { num: '05', title: 'Offline Play', desc: 'No signal? No problem. Every downloaded puzzle works completely offline.' },
  { num: '06', title: 'Zero Ads', desc: 'One purchase, no subscriptions, no interruptions. Sudoku the way it should be.' },
];

const stats = [
  { value: '4.9', label: 'App Store rating', sub: 'from 128k reviews' },
  { value: '2M+', label: 'Active players', sub: 'across all platforms' },
  { value: '50k', label: 'Unique puzzles', sub: 'and growing' },
  { value: '99ms', label: 'Avg load time', sub: 'blazing fast' },
];

const grid = [
  [5,3,null,null,7,null,null,null,null],
  [6,null,null,1,9,5,null,null,null],
  [null,9,8,null,null,null,null,6,null],
  [8,null,null,null,6,null,null,null,3],
  [4,null,null,8,null,3,null,null,1],
  [7,null,null,null,2,null,null,null,6],
  [null,6,null,null,null,null,2,8,null],
  [null,null,null,4,1,9,null,null,5],
  [null,null,null,null,8,null,null,7,9],
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen pt-24 pb-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ede8de] border border-[#c8c2b4] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c0392b] animate-pulse" />
              <span className="text-xs font-mono-custom text-[#6b6357]">Daily puzzle live now</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight text-[#1a1814] mb-6">
              The puzzle<br />
              <em className="not-italic font-semibold">that sharpens</em><br />
              the mind.
            </h1>
            <p className="text-lg text-[#6b6357] leading-relaxed max-w-md mb-10">
              Sudoku for people who take puzzles seriously. No clutter, no noise — just pure logic and the quiet satisfaction of a solved grid.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/download" className="bg-[#1a1814] text-[#f5f0e8] px-8 py-3.5 text-sm font-medium hover:bg-[#3d3830] transition-colors rounded-sm">
                Play Free — No Account
              </Link>
              <Link to="/about" className="border border-[#c8c2b4] text-[#1a1814] px-8 py-3.5 text-sm font-medium hover:bg-[#ede8de] transition-colors rounded-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Sudoku grid decoration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 border border-[#c8c2b4]/30 rounded-sm" />
              <div className="grid grid-cols-9 border-2 border-[#1a1814] w-72 h-72 lg:w-[340px] lg:h-[340px]">
                {grid.flat().map((cell, i) => {
                  const row = Math.floor(i / 9);
                  const col = i % 9;
                  const boxRow = Math.floor(row / 3);
                  const boxCol = Math.floor(col / 3);
                  const isGiven = cell !== null;
                  return (
                    <div key={i}
                      className={`flex items-center justify-center font-mono-custom text-xs lg:text-sm transition-colors
                        ${(boxRow + boxCol) % 2 === 0 ? 'bg-[#ede8de]' : 'bg-[#f5f0e8]'}
                        ${col % 3 === 2 && col !== 8 ? 'border-r-2 border-r-[#1a1814]' : 'border-r border-r-[#c8c2b4]'}
                        ${row % 3 === 2 && row !== 8 ? 'border-b-2 border-b-[#1a1814]' : 'border-b border-b-[#c8c2b4]'}
                        ${isGiven ? 'text-[#1a1814] font-medium' : 'text-[#c0392b]'}
                      `}>
                      {cell ?? ''}
                    </div>
                  );
                })}
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#c0392b] text-[#f5f0e8] text-xs font-mono-custom px-3 py-1.5">
                Solve it →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#c8c2b4] bg-[#ede8de]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-[#1a1814] mb-1">{s.value}</div>
              <div className="text-sm font-medium text-[#1a1814] mb-0.5">{s.label}</div>
              <div className="text-xs text-[#6b6357] font-mono-custom">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-4">Features</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1a1814] max-w-xl">
              Everything you need, nothing you don't.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c8c2b4]">
            {features.map(f => (
              <div key={f.num} className="bg-[#f5f0e8] p-8 hover:bg-[#ede8de] transition-colors group">
                <div className="font-mono-custom text-xs text-[#c0392b] mb-4">{f.num}</div>
                <h3 className="font-display text-xl font-semibold text-[#1a1814] mb-3">{f.title}</h3>
                <p className="text-sm text-[#6b6357] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a1814]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#f5f0e8] mb-4">
              Start solving today.
            </h2>
            <p className="text-[#8c8278] max-w-md">Free forever. No sign-up required for the daily puzzle. Premium puzzles unlock with a one-time purchase.</p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link to="/download" className="bg-[#c0392b] text-white px-10 py-4 text-sm font-medium hover:bg-[#a93226] transition-colors rounded-sm text-center">
              Play in Browser — Free
            </Link>
            <div className="flex gap-3">
              <button className="flex-1 border border-[#3d3830] text-[#c8c2b4] px-6 py-3 text-xs font-mono-custom hover:border-[#6b6357] transition-colors rounded-sm">
                ↗ App Store
              </button>
              <button className="flex-1 border border-[#3d3830] text-[#c8c2b4] px-6 py-3 text-xs font-mono-custom hover:border-[#6b6357] transition-colors rounded-sm">
                ↗ Google Play
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
