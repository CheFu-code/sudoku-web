const sections = [
  {
    title: '1. Acceptance of terms',
    text: 'By downloading, installing, or using Sudoku (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App. These Terms constitute a legally binding agreement between you and Sudoku Inc., a company incorporated in Finland ("we," "us," or "Sudoku").',
  },
  {
    title: '2. License to use the App',
    text: 'Subject to your compliance with these Terms, we grant you a personal, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial entertainment. This license does not include the right to sublicense, sell, resell, distribute, copy, reproduce, or modify any part of the App or its content.',
  },
  {
    title: '3. User accounts',
    text: 'You may use the App anonymously or create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must be at least 13 years old to create an account. You agree to provide accurate information when creating an account and to update it if it changes.',
  },
  {
    title: '4. Acceptable use',
    text: 'You agree not to: (a) use the App for any unlawful purpose; (b) attempt to gain unauthorized access to any portion of the App or its related systems; (c) use automated tools, bots, or scripts to interact with the App; (d) reverse engineer, decompile, or disassemble any part of the App; (e) impersonate any person or entity; (f) interfere with or disrupt the integrity or performance of the App or its data; (g) collect or harvest any personally identifiable information from the App without authorization.',
  },
  {
    title: '5. Purchases and payments',
    text: 'The premium unlock is a one-time purchase. All purchases are final. We offer a 30-day money-back guarantee — contact support@sudoku.app with your order ID. Prices may vary by region and are displayed in your local currency at checkout. Payments are processed by Apple (App Store), Google (Play Store), or Stripe (web), and are subject to their respective terms. We do not store your payment information.',
  },
  {
    title: '6. Intellectual property',
    text: 'The App, including its design, code, puzzle generation algorithms, and content, is owned by Sudoku Inc. and is protected by Finnish, EU, and international intellectual property laws. The Sudoku name and logo are trademarks of Sudoku Inc. Nothing in these Terms grants you any rights to our intellectual property except the limited license described in Section 2.',
  },
  {
    title: '7. User content',
    text: 'If you submit feedback, feature requests, bug reports, or other communications to us, you grant us a perpetual, irrevocable, royalty-free license to use those submissions for any purpose, including improving the App, without compensation or attribution to you.',
  },
  {
    title: '8. Disclaimer of warranties',
    text: 'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
  },
  {
    title: '9. Limitation of liability',
    text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SUDOKU INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP. IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR €10 IF YOU HAVE NOT MADE ANY PURCHASES.',
  },
  {
    title: '10. Termination',
    text: 'We may suspend or terminate your account at any time for violation of these Terms. You may terminate your account at any time from app settings. Upon termination, your license to use the App ends immediately. Sections 6, 8, 9, and 11 survive termination.',
  },
  {
    title: '11. Governing law and disputes',
    text: 'These Terms are governed by the laws of Finland, without regard to conflict of law principles. Any disputes shall be resolved by binding arbitration in Helsinki, Finland, under the rules of the Finnish Arbitration Institute, except that either party may seek injunctive relief in a court of competent jurisdiction. If you are an EU consumer, you may also use the EU Online Dispute Resolution platform at ec.europa.eu/consumers/odr.',
  },
  {
    title: '12. Changes to these Terms',
    text: 'We may update these Terms from time to time. We will notify you of material changes by email (if you have an account) and in-app at least 30 days before they take effect. Continued use of the App after the effective date constitutes acceptance of the updated Terms.',
  },
  {
    title: '13. Contact',
    text: 'Questions about these Terms? Email legal@sudoku.app. Sudoku Inc., Mannerheimintie 12A, 00100 Helsinki, Finland.',
  },
];

export default function Terms() {
  return (
    <div className="pt-24">
      <section className="py-20 border-b border-[#c8c2b4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-mono-custom text-[#6b6357] uppercase tracking-widest mb-6">Legal</div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1a1814] mb-4">Terms of Service</h1>
          <p className="text-sm text-[#6b6357] font-mono-custom">Last updated: September 1, 2026 · Effective: September 1, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <nav className="lg:sticky lg:top-24 self-start space-y-1">
            {sections.map((s, i) => (
              <a key={i} href={`#term-${i}`}
                className="block text-xs font-mono-custom text-[#6b6357] hover:text-[#1a1814] transition-colors py-1 leading-tight">
                {s.title}
              </a>
            ))}
          </nav>

          <div className="lg:col-span-3 space-y-10">
            {sections.map((s, i) => (
              <div key={i} id={`term-${i}`} className={`pb-10 ${i < sections.length - 1 ? 'border-b border-[#c8c2b4]' : ''}`}>
                <h2 className="font-display text-2xl font-semibold text-[#1a1814] mb-4">{s.title}</h2>
                <p className="text-sm text-[#6b6357] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
