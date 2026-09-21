const sections = [
  {
    title: '1. What information we collect',
    content: [
      {
        sub: '1.1 Information you provide',
        text: 'When you create an account, we collect your email address and the password you choose (stored as a one-way hash). If you contact us, we collect the information you include in your message. We never require your real name, phone number, or any other personally identifying information.',
      },
      {
        sub: '1.2 Information collected automatically',
        text: 'When you use Sudoku, we collect your puzzle history (which puzzles you\'ve solved, your solve times, and any notes or marks you\'ve made), device type and operating system version, app version, and general geographic region (country-level only, derived from your IP address, which we do not log). We do not use cookies for tracking. We do not use any third-party analytics or advertising SDKs.',
      },
      {
        sub: '1.3 Anonymous usage',
        text: 'If you play without signing in, no information is associated with you beyond an anonymous session token that expires when you close the app. The daily puzzle leaderboard uses a pseudonym you choose at play time, not your account identity.',
      },
    ],
  },
  {
    title: '2. How we use your information',
    content: [
      {
        sub: '2.1 To provide the service',
        text: 'We use your puzzle history and account details to sync your progress across devices, maintain your streak, and allow you to resume puzzles in progress. We use your email address solely to send account-related communications (password reset, receipt for a purchase, critical service updates).',
      },
      {
        sub: '2.2 To improve the app',
        text: 'We analyze aggregate, anonymized puzzle completion data to identify puzzles that may be miscategorized by difficulty. This analysis is performed in aggregate — we cannot and do not trace it back to individual accounts.',
      },
      {
        sub: '2.3 What we never do',
        text: 'We never sell your data to third parties. We never use your data to target you with advertising. We never share your data with data brokers, marketing companies, or social networks.',
      },
    ],
  },
  {
    title: '3. Data storage and security',
    content: [
      {
        sub: '3.1 Where your data lives',
        text: 'User data is stored on servers in the European Union, operated by Hetzner Online GmbH, a German cloud provider subject to EU data protection law. Puzzle data synced from non-EU devices is transferred to EU servers under standard contractual clauses.',
      },
      {
        sub: '3.2 How we protect it',
        text: 'Passwords are hashed with Argon2id before storage. Data in transit is encrypted with TLS 1.3. Data at rest is encrypted at the disk level. We maintain a private vulnerability disclosure program and patch critical security issues within 24 hours of confirmation.',
      },
      {
        sub: '3.3 Retention',
        text: 'We retain your account data for as long as your account is active. If you delete your account, all associated data is purged within 48 hours from our live systems and within 30 days from backups.',
      },
    ],
  },
  {
    title: '4. Your rights',
    content: [
      {
        sub: '4.1 Access and portability',
        text: 'You can export all your data (puzzle history, account details, statistics) in JSON format at any time from Settings → Privacy → Export My Data.',
      },
      {
        sub: '4.2 Correction',
        text: 'You can update your email address at any time from account settings. Contact us if you need to correct other account data.',
      },
      {
        sub: '4.3 Deletion',
        text: 'You can permanently delete your account and all associated data from Settings → Account → Delete Account. This action is irreversible.',
      },
      {
        sub: '4.4 EU/EEA residents',
        text: 'If you are in the EU or EEA, you have additional rights under the General Data Protection Regulation (GDPR), including the right to object to processing and to lodge a complaint with your local data protection authority. Sudoku Inc. acts as data controller. Contact privacy@sudoku.app for data subject requests.',
      },
    ],
  },
  {
    title: '5. Children',
    content: [
      {
        sub: '',
        text: 'Sudoku is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us personal information, contact us at privacy@sudoku.app and we will delete it promptly.',
      },
    ],
  },
  {
    title: '6. Changes to this policy',
    content: [
      {
        sub: '',
        text: 'We will notify you of material changes to this privacy policy by email (if you have an account) and by posting a notice in the app at least 30 days before the changes take effect. The date at the top of this page reflects when the policy was last updated.',
      },
    ],
  },
  {
    title: '7. Contact',
    content: [
      {
        sub: '',
        text: 'Questions about this policy? Email privacy@sudoku.app. We aim to respond within 5 business days. Our registered address is Sudoku Inc., Mannerheimintie 12A, 00100 Helsinki, Finland.',
      },
    ],
  },
];

export default function Privacy() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">Legal</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#6b6357] font-mono-custom">Last updated: September 1, 2026 · Effective: September 1, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* TOC */}
          <nav className="lg:sticky lg:top-24 self-start space-y-1">
            {sections.map((s, i) => (
              <a key={i} href={`#section-${i}`}
                className="block text-xs font-mono-custom text-[#6b6357] hover:text-[#1a1814] transition-colors py-1 leading-tight">
                {s.title}
              </a>
            ))}
          </nav>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="bg-[#ede8de] border border-[#c8c2b4] p-6 text-sm text-[#3d3830] leading-relaxed">
              <strong className="font-semibold">Summary:</strong> We collect only what's necessary to run the app (your email, puzzle history, solve times). We never sell your data or show you ads. You can delete your account and all data at any time. If you're in the EU, GDPR applies and we honor all rights under it.
            </div>

            {sections.map((s, i) => (
              <div key={i} id={`section-${i}`}>
                <h2 className="font-display text-2xl font-semibold text-[#1a1814] mb-6">{s.title}</h2>
                <div className="space-y-6">
                  {s.content.map((c, j) => (
                    <div key={j}>
                      {c.sub && <h3 className="text-sm font-semibold text-[#1a1814] mb-2">{c.sub}</h3>}
                      <p className="text-sm text-[#6b6357] leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
