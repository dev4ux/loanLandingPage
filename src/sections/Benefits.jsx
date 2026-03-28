import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Settings,
  BadgeCheck,
  Smartphone,
  Lock,
} from 'lucide-react';
import { BENEFITS } from '../utils/constants';

const ICON_MAP = { ShieldCheck, Zap, Settings, BadgeCheck, Smartphone, Lock };

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-black tracking-[0.3em] text-brand-600 uppercase mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-6"
          >
            Built for <span className="text-brand-600">Your Peace of Mind</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Every feature designed to make your borrowing experience seamless, secure, and transparent.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] group hover:border-brand-600/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 border border-brand-100 group-hover:bg-brand-600 transform group-hover:rotate-6 transition-all duration-500">
                  <Icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-brand-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
