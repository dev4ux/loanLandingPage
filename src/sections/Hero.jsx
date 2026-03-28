import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Shield, Users, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="home" className="relative min-h-screen bg-brand-950 pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-400/5 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-international">
              Get Instant Loan <br />
              <span className="text-brand-400">Approval</span> in Minutes
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mb-16 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Check your eligibility in 30 seconds. No paperwork. <span className="text-white font-bold">No CIBIL impact.</span>
            </p>

            {/* Repositioned trust indicators to fill button space for cleaner navigation */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 mb-20">
              {[
                { icon: Shield, text: 'RBI Registered', color: 'text-brand-400' },
                { icon: Users, text: '50k+ Happy Users', color: 'text-brand-400' },
                { icon: Award, text: '100% Secure', color: 'text-brand-400' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-brand-600/10 flex items-center justify-center border border-brand-600/10 shadow-xl shadow-black/20`}>
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <span className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form Card & Mockup Interaction */}
          <div className="relative flex flex-col items-center lg:items-end">
            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[460px] glass-card rounded-[3rem] p-10 md:p-12 relative z-20 shadow-2xl border border-white/10"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Get Started</h3>
                <p className="text-[10px] text-brand-400 font-black uppercase tracking-[0.3em] bg-brand-600/5 py-2 px-4 rounded-full inline-block border border-brand-600/10">
                  Apply in 30s • Instant Approval
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4 group">
                  <label className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] pl-1">
                    Enter Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 pr-4 border-r border-white/10">
                      <span className="text-brand-400 font-black text-lg">+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="00000 00000"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ''));
                        setPhoneError('');
                      }}
                      className={`w-full pl-22 pr-6 py-5 rounded-2xl border-2 bg-brand-950/80 text-white text-lg font-black tracking-widest transition-all focus:outline-none focus:ring-8 ${phoneError
                        ? 'border-red-500/50 focus:ring-red-500/10'
                        : 'border-white/5 focus:ring-brand-400/10 focus:border-brand-400'
                        }`}
                    />
                  </div>
                  {phoneError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-400 mt-2 ml-1"
                    >
                      {phoneError}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`btn-primary w-full py-6 text-lg rounded-2xl transition-all shadow-2xl shadow-brand-600/20 ${submitted ? 'bg-white text-brand-950 shadow-none' : ''
                    }`}
                >
                  {submitted ? '✓ Applied Successfully' : 'See Loan Offers Now →'}
                </motion.button>

                <div className="flex items-center justify-center gap-3 opacity-40">
                  <Shield className="w-4 h-4 text-brand-400" />
                  <p className="text-[10px] text-white font-black uppercase tracking-widest">
                    256-bit Secure Encryption
                  </p>
                </div>
              </form>

              {/* Social proof avatars */}
              <div className="mt-12 pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-4">
                    {[
                      { src: '/avatars/indian_user_avatar_1_1774621656514.png' },
                      { src: '/avatars/indian_user_avatar_2_1774621740874.png' },
                      { src: '/avatars/indian_user_avatar_3_1774621808040.png' },
                      { src: '/avatars/indian_user_avatar_4_1774621890291.png' }
                    ].map((avatar, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="w-12 h-12 rounded-2xl border-4 border-brand-950 shadow-2xl overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-300 cursor-pointer"
                      >
                        <img src={avatar.src} alt="User" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white tracking-tighter leading-none mb-1">2,847+</p>
                    <p className="text-[9px] font-black text-brand-400 uppercase tracking-widest">Active Applications</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
