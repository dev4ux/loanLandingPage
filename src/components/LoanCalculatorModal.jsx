import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, IndianRupee } from 'lucide-react';

export default function LoanCalculatorModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [rate, setRate] = useState(12);

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
      : amount / tenure;

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-brand-950 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-brand-600">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-black" />
                <h3 className="text-xl font-black text-black uppercase tracking-tighter">
                  EMI Calculator
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-black/10 hover:bg-black/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Loan Amount</label>
                  <span className="text-lg font-black text-white">{formatCurrency(amount)}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={5000000}
                  step={10000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  aria-label="Loan Amount"
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
              </div>

              {/* Tenure */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Tenure</label>
                  <span className="text-lg font-black text-white">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={60}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  aria-label="Tenure in months"
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Interest Rate</label>
                  <span className="text-lg font-black text-white">{rate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={36}
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  aria-label="Interest rate percentage"
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">Monthly EMI</p>
                  <p className="text-2xl font-black text-brand-400 flex items-center gap-1">
                    <IndianRupee className="w-5 h-5" />
                    {Math.round(emi).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2">Total Interest</p>
                  <p className="text-2xl font-black text-white flex items-center gap-1">
                    <IndianRupee className="w-5 h-5 opacity-30" />
                    {Math.round(totalInterest).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onClose}
                className="btn-primary w-full py-5 rounded-2xl text-base font-black uppercase tracking-widest shadow-2xl shadow-brand-600/20"
              >
                Apply Now →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
