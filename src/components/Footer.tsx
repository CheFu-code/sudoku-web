import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="border-t border-[#c8c2b4] bg-[#1a1814] text-[#f5f0e8] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-xl font-semibold mb-3">Sudoku<span className="text-[#c0392b]">.</span></div>
          <p className="text-sm text-[#8c8278] leading-relaxed max-w-xs">
            The most elegant Sudoku experience on any device. Train your mind, find your calm.
          </p>
        </div>

        <div>
          <div className="text-xs font-mono-custom font-medium text-[#6b6357] uppercase tracking-widest mb-4">Navigate</div>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-sm text-[#c8c2b4] hover:text-[#f5f0e8] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-mono-custom font-medium text-[#6b6357] uppercase tracking-widest mb-4">Legal</div>
          <ul className="space-y-2">
            {[['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Service'], ['/cookies', 'Cookie Policy']].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-sm text-[#c8c2b4] hover:text-[#f5f0e8] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[#2e2a24] pt-6">
        <p className="text-xs text-[#6b6357] font-mono-custom">© {new Date().getFullYear()} Sudoku Inc. All rights reserved.</p>
        <p className="text-xs text-[#6b6357]">Made by Chefu Technologies (Pty) Ltd.</p>

      </div>
    </footer>
  );
}
