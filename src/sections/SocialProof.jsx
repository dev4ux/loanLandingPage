import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

export default function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]); // Reset timer whenever 'current' changes

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => {
      if (dir === 1) return (prev + 1) % TESTIMONIALS.length;
      return (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    });
  };

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-brand-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-black tracking-[0.3em] text-brand-400 uppercase mb-4"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Trusted by <span className="text-brand-400">Thousands</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-400 fill-brand-400" />
              ))}
            </div>
            <span className="text-lg font-black text-white">4.9/5</span>
            <span className="text-sm text-text-secondary uppercase tracking-widest font-black">• 50,000+ Happy Clients</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative px-4 lg:px-0">
          <div className="glass-card p-8 lg:p-14 rounded-[3rem] min-h-[320px] flex items-center shadow-2xl border-white/5">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="flex justify-center lg:justify-start mb-8">
                  <Quote className="w-12 h-12 text-brand-600 opacity-50" />
                </div>
                <p className="text-lg lg:text-2xl text-white font-medium leading-relaxed italic mb-10 text-center lg:text-left">
                  "{TESTIMONIALS[current].content}"
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-6 border-t border-white/5 pt-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/20">
                    <span className="text-xl font-black text-black">
                      {TESTIMONIALS[current].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-lg font-black text-white uppercase tracking-widest">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-xs font-black text-brand-400 uppercase tracking-[0.2em] mt-1">
                      {TESTIMONIALS[current].role} • {TESTIMONIALS[current].location}
                    </p>
                  </div>
                  <div className="lg:ml-auto flex items-center gap-1" aria-label={`${TESTIMONIALS[current].rating} out of 5 stars`}>
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-400 fill-brand-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-1/2 -translate-y-1/2 -left-2 lg:-left-20 w-12 h-12 rounded-2xl bg-brand-900 border border-white/5 shadow-2xl flex items-center justify-center hover:bg-brand-600 group transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-400 group-hover:text-black transition-colors" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute top-1/2 -translate-y-1/2 -right-2 lg:-right-20 w-12 h-12 rounded-2xl bg-brand-900 border border-white/5 shadow-2xl flex items-center justify-center hover:bg-brand-600 group transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-400 group-hover:text-black transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-10 bg-brand-400' : 'w-3 bg-white/10'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
