import { motion } from 'framer-motion';
import { FileText, BarChart3, Banknote } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../utils/constants';

const ICONS = [FileText, BarChart3, Banknote];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-brand-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-black tracking-[0.3em] text-brand-400 uppercase mb-4"
          >
            Streamlined Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            How it <span className="text-brand-400">Works</span>
          </motion.h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get your loan approved and disbursed in four simple, fully digital steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-[2px] bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Step indicator circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-brand-950 border-4 border-brand-600/20 flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:border-brand-600 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Icon className="w-8 h-8 text-brand-400 group-hover:text-black transition-colors" />
                    
                    {/* Dynamic glow */}
                    <div className="absolute inset-0 bg-brand-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>

                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-brand-950/50 border border-white/10 text-[10px] font-black text-brand-400 uppercase tracking-widest">
                    Step {step.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
