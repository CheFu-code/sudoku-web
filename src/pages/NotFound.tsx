import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="font-mono-custom text-xs text-[#6b6357] uppercase tracking-widest mb-6">404</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-6">
            No puzzle<br />found here.
          </h1>
          <p className="text-lg text-[#6b6357] mb-10">The page you're looking for doesn't exist. Maybe it was moved, or maybe you just mistyped the URL — it happens to the best of us.</p>
          <div className="flex gap-4">
            <Link to="/" className="bg-[#1a1814] text-[#f5f0e8] px-8 py-3 text-sm font-medium hover:bg-[#3d3830] transition-colors rounded-sm">
              Back to Home
            </Link>
            <Link to="/contact" className="border border-[#c8c2b4] text-[#1a1814] px-8 py-3 text-sm font-medium hover:bg-[#ede8de] transition-colors rounded-sm">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-9 border-2 border-[#c8c2b4] w-64 h-64 opacity-30">
            {Array.from({ length: 81 }).map((_, i) => {
              const row = Math.floor(i / 9);
              const col = i % 9;
              return (
                <div key={i} className={`
                  border-r border-b border-[#c8c2b4]
                  ${col % 3 === 2 && col !== 8 ? 'border-r-2 border-r-[#1a1814]' : ''}
                  ${row % 3 === 2 && row !== 8 ? 'border-b-2 border-b-[#1a1814]' : ''}
                `} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
