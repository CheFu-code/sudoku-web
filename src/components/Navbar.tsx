import { useState } from 'react';
import { Link, NavLink } from 'react-router';

const links = [
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#c8c2b4] bg-[#f5f0e8]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 grid grid-cols-3 grid-rows-3 gap-[2px]">
            {[4,null,7,null,5,null,2,null,9].map((n, i) => (
              <div key={i} className="flex items-center justify-center rounded-[1px] bg-[#1a1814] text-[#f5f0e8]" style={{ fontSize: '6px', fontFamily: 'DM Mono, monospace', fontWeight: 500 }}>
                {n ?? ''}
              </div>
            ))}
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-[#1a1814]">Sudoku<span className="text-[#c0392b]">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[#c0392b]' : 'text-[#6b6357] hover:text-[#1a1814]'}`
              }>
              {l.label}
            </NavLink>
          ))}
          <Link to="/play" className="text-sm font-medium bg-[#1a1814] text-[#f5f0e8] px-4 py-2 rounded-sm hover:bg-[#3d3830] transition-colors">
            Play Free
          </Link>
        </nav>

        <button className="md:hidden p-2 text-[#1a1814]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className={`w-5 h-px bg-current transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-px bg-current transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#c8c2b4] bg-[#f5f0e8] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#6b6357] hover:text-[#1a1814]">
              {l.label}
            </NavLink>
          ))}
          <Link to="/play" onClick={() => setOpen(false)}
            className="text-sm font-medium bg-[#1a1814] text-[#f5f0e8] px-4 py-2 rounded-sm text-center hover:bg-[#3d3830] transition-colors">
            Play Free
          </Link>
        </div>
      )}
    </header>
  );
}
