import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <section className="py-8 relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-[2rem] overflow-hidden bg-accent-600 p-8 lg:p-12 shadow-2xl shadow-accent-600/20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                  Limited Time: Lowest Interest Rates
                </h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">
                  Special 0% Processing Fee - Ending Today!
                </p>
              </div>
            </div>

            <motion.a
              href="#hero-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-accent-600 font-black rounded-2xl shadow-2xl hover:bg-brand-50 transition-all text-sm uppercase tracking-[0.2em] whitespace-nowrap min-w-[200px] flex items-center justify-center gap-3"
            >
              Get Offer Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
