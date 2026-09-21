const cookieTypes = [
  {
    name: 'Essential',
    required: true,
    description: 'These cookies are necessary for the app to function. They enable core features like session management and authentication. They cannot be disabled.',
    cookies: [
      { name: 'session_token', purpose: 'Keeps you logged in across page loads', duration: '30 days', type: 'First-party' },
      { name: 'csrf_token', purpose: 'Prevents cross-site request forgery attacks', duration: 'Session', type: 'First-party' },
    ],
  },
  {
    name: 'Functional',
    required: false,
    description: 'These cookies remember your preferences (theme, difficulty default, sound settings) so you don\'t have to re-configure on each visit. Disabling them means your preferences reset each session.',
    cookies: [
      { name: 'theme_pref', purpose: 'Stores your light/dark/system theme preference', duration: '1 year', type: 'First-party' },
      { name: 'difficulty_pref', purpose: 'Remembers your last-selected difficulty', duration: '1 year', type: 'First-party' },
    ],
  },
  {
    name: 'Analytics',
    required: false,
    description: 'We use no third-party analytics. We collect aggregate, anonymized data about puzzle completion rates using our own infrastructure only. No personal information is involved.',
    cookies: [],
  },
  {
    name: 'Advertising',
    required: false,
    description: 'We don\'t run advertisements in Sudoku. There are no advertising cookies, tracking pixels, or ad network SDKs of any kind.',
    cookies: [],
  },
];

export default function Cookies() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">Legal</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">Cookie Policy</h1>
          <p className="text-sm text-[#6b6357] font-mono-custom">Last updated: September 1, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="bg-[#ede8de] border border-[#c8c2b4] p-6">
            <p className="text-sm text-[#3d3830] leading-relaxed">
              <strong className="font-semibold">Short version:</strong> We use only essential cookies for login and a small number of preference cookies. No advertising cookies. No third-party trackers. The native apps use local storage rather than cookies for most preferences.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1a1814] mb-4">What is a cookie?</h2>
            <p className="text-sm text-[#6b6357] leading-relaxed">A cookie is a small text file stored on your device by your browser when you visit a website. Cookies help websites remember information about your visit — like that you're logged in, or what language you prefer. The native Sudoku apps use device storage (not browser cookies) to store similar information.</p>
          </div>

          {cookieTypes.map(ct => (
            <div key={ct.name} className="border-t border-[#c8c2b4] pt-10">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-display text-2xl font-semibold text-[#1a1814]">{ct.name} Cookies</h2>
                {ct.required ? (
                  <span className="text-xs font-mono-custom bg-[#1a1814] text-[#f5f0e8] px-2 py-0.5">Required</span>
                ) : (
                  <span className="text-xs font-mono-custom border border-[#c8c2b4] text-[#6b6357] px-2 py-0.5">Optional</span>
                )}
              </div>
              <p className="text-sm text-[#6b6357] leading-relaxed mb-6">{ct.description}</p>
              {ct.cookies.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-mono-custom border-collapse">
                    <thead>
                      <tr className="border-b border-[#c8c2b4]">
                        {['Name', 'Purpose', 'Duration', 'Type'].map(h => (
                          <th key={h} className="text-left py-2 pr-6 text-[#6b6357] font-medium uppercase tracking-widest">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ct.cookies.map(c => (
                        <tr key={c.name} className="border-b border-[#c8c2b4]/50">
                          <td className="py-3 pr-6 text-[#1a1814]">{c.name}</td>
                          <td className="py-3 pr-6 text-[#6b6357]">{c.purpose}</td>
                          <td className="py-3 pr-6 text-[#6b6357]">{c.duration}</td>
                          <td className="py-3 text-[#6b6357]">{c.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-[#c8c2b4] pt-10">
            <h2 className="font-display text-2xl font-semibold text-[#1a1814] mb-4">Managing cookies</h2>
            <p className="text-sm text-[#6b6357] leading-relaxed mb-4">You can control non-essential cookies in Settings → Privacy within the app. You can also manage cookies through your browser settings — note that blocking essential cookies will prevent login from working.</p>
            <p className="text-sm text-[#6b6357] leading-relaxed">Questions? Email <a href="mailto:privacy@sudoku.app" className="text-[#c0392b] hover:underline">privacy@sudoku.app</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
