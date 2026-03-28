import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-6"
    >
      <div className="glass-nav rounded-2xl border border-white/10 p-3 shadow-2xl">
        <a
          href="#hero-form"
          className="btn-primary flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-black uppercase tracking-widest shadow-xl shadow-brand-600/20"
        >
          Apply Now
          <ArrowRight className="w-5 h-5 text-black" />
        </a>
      </div>
    </motion.div>
  );
}
