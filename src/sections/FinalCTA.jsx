import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-brand-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-[10px] font-black text-brand-400 tracking-[0.3em] uppercase">
              Start Your Journey Today
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Get your loan approved <span className="text-brand-400">instantly.</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Join thousands of satisfied Indians who found their perfect financial match through SabkaLoan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#hero-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-brand-600 text-black font-black rounded-2xl shadow-2xl shadow-brand-600/20 hover:bg-brand-500 transition-all text-sm uppercase tracking-[0.2em] w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <a
              href="#how-it-works"
              className="px-10 py-5 text-white font-black hover:text-brand-400 transition-colors text-sm uppercase tracking-[0.2em]"
            >
              See process →
            </a>
          </div>

          {/* Bottom trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest">🔒 256-bit Secure</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest">RBI Compliant</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest">No Hidden Fees</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
