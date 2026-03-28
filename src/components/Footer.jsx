import { NAV_LINKS } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/20">
                <span className="text-black font-black text-sm">SL</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Sabka<span className="text-brand-400">Loan</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-8 font-medium">
              India's premier digital lending marketplace. We connect you with 50+ RBI-registered lenders to find the most competitive personal loan offers instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-400 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-black text-white/50 hover:text-brand-400 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-xs font-black text-white/50 hover:text-brand-400 transition-colors uppercase tracking-widest">
                  EMI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-400 mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {['Personal Loan', 'Business Loan', 'Education Loan', 'Medical Loan'].map((t) => (
                <li key={t}>
                  <a href="#loans" className="text-xs font-black text-white/50 hover:text-brand-400 transition-colors uppercase tracking-widest">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-400 mb-8">
              Contact
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Support Email</p>
                <a
                  href="mailto:hello@sabkaloan.in"
                  className="text-sm font-black text-white hover:text-brand-400 transition-colors"
                >
                  hello@sabkaloan.in
                </a>
              </div>
              <div className="flex items-center gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 group transition-all cursor-pointer">
                    <span className="text-[10px] font-black text-white/30 group-hover:text-black uppercase">
                      {social.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-20 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest text-center md:text-left">
                © {new Date().getFullYear()} SabkaLoan. All rights reserved.
              </p>
              <p className="text-[9px] font-black text-white/20 uppercase tracking-widest text-center md:text-left">
                FINTECH MARKETPLACE • RBI COMPLIANT PARTNERS
              </p>
            </div>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Security'].map(item => (
                <a key={item} href="#" className="text-[10px] font-black text-white/30 hover:text-white uppercase tracking-widest uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
