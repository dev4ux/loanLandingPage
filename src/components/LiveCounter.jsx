import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';

export default function LiveCounter() {
  const [count, setCount] = useState(23);

  useEffect(() => {
    let timeoutId;
    
    const updateCount = () => {
      setCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.max(12, Math.min(47, next));
      });
      
      const nextDelay = 3000 + Math.random() * 4000;
      timeoutId = setTimeout(updateCount, nextDelay);
    };

    timeoutId = setTimeout(updateCount, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
      className="fixed bottom-[84px] left-1/2 -translate-x-1/2 z-40 lg:bottom-6 lg:left-6 lg:translate-x-0"
    >
      <div className="bg-white/95 backdrop-blur-xl flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl shadow-brand-900/10 border border-brand-100">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-600 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600" />
        </span>
        <Users className="w-4 h-4 text-brand-600" />
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-black text-text-primary"
          >
            {count}
          </motion.span>
        </AnimatePresence>
        <span className="text-[10px] font-black text-text-secondary uppercase tracking-widest">applying right now</span>
      </div>
    </motion.div>
  );
}
