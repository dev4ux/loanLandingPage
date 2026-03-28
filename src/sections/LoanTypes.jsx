import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, HeartPulse, ArrowRight } from 'lucide-react';
import { LOAN_TYPES } from '../utils/constants';

const ICON_MAP = { User, Briefcase, GraduationCap, HeartPulse };

export default function LoanTypes() {
  return (
    <section id="loans" className="py-24 lg:py-32 bg-brand-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-black tracking-[0.3em] text-brand-400 uppercase mb-4"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Personalized <span className="text-brand-400">Loan Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Flexible borrowing options designed to fit your unique financial needs and goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LOAN_TYPES.map((loan, i) => {
            const Icon = ICON_MAP[loan.icon];
            return (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-[2rem] group hover:border-brand-400/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600/10 flex items-center justify-center border border-brand-600/20 group-hover:bg-brand-600 transition-all duration-500">
                    <Icon className="w-7 h-7 text-brand-400 group-hover:text-black transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-950/50 border border-white/10 text-[9px] font-black text-brand-400 uppercase tracking-widest">
                    Best Rates
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {loan.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-8 group-hover:text-white/80 transition-colors line-clamp-2">
                  {loan.description}
                </p>
                
                <div className="my-8 flex items-center justify-between py-6 border-y border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Interest Rate</span>
                    <span className="text-xl font-black text-white leading-none">{loan.rate}</span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Max Amount</span>
                    <span className="text-xl font-black text-white leading-none">₹{loan.maxAmount}</span>
                  </div>
                </div>

                <a
                  href="#hero-form"
                  className="w-full py-4 rounded-2xl bg-brand-600 shadow-[0_15px_30px_-10px_rgba(139,191,102,0.4)] text-black text-xs font-black flex items-center justify-center hover:bg-white transition-all uppercase tracking-widest"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
