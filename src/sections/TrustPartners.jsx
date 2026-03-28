import { motion } from 'framer-motion';
import { PARTNER_LOGOS } from '../utils/constants';

export default function TrustPartners() {
  return (
    <section className="py-16 bg-brand-50 border-y border-brand-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-text-muted uppercase tracking-[0.4em] mb-12"
        >
          Official Lending Partners
        </motion.p>

        <div className="relative">
          {/* Mask for smooth fade edge */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-50 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-16 lg:gap-32 py-12 whitespace-nowrap items-center">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="group cursor-pointer flex items-center shrink-0"
                >
                  <div className="h-6 lg:h-8 w-auto flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name}
                      className="h-full w-auto object-contain brightness-90 contrast-125 grayscale group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
