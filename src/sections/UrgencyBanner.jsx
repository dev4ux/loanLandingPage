import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <section className="py-8 relative overflow-hidden bg-brand-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-[2rem] overflow-hidden bg-brand-600 p-8 lg:p-12 shadow-2xl shadow-brand-600/20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
                <TrendingDown className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-black leading-tight uppercase tracking-tighter">
                  Special Offer: Lowest Interest Rates
                </h3>
                <p className="text-black/70 font-bold uppercase tracking-widest text-xs mt-2">
                  Special 0% Processing Fee - Ending Today!
                </p>
              </div>
            </div>

            <motion.a
              href="#hero-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-black rounded-2xl shadow-2xl hover:bg-zinc-900 transition-all text-sm uppercase tracking-[0.2em] whitespace-nowrap min-w-[200px] flex items-center justify-center gap-3"
            >
              Get Offer Now
              <ArrowRight className="w-5 h-5 text-brand-400" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
