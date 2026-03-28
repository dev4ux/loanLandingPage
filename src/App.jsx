import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileCTA from './components/StickyMobileCTA';
import LiveCounter from './components/LiveCounter';
import LoanCalculatorModal from './components/LoanCalculatorModal';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import TrustPartners from './sections/TrustPartners';
import HowItWorks from './sections/HowItWorks';

// Lazy load below-the-fold sections
const Benefits = lazy(() => import('./sections/Benefits'));
const LoanTypes = lazy(() => import('./sections/LoanTypes'));
const SocialProof = lazy(() => import('./sections/SocialProof'));
const UrgencyBanner = lazy(() => import('./sections/UrgencyBanner'));
const FAQ = lazy(() => import('./sections/FAQ'));
const FinalCTA = lazy(() => import('./sections/FinalCTA'));

// Basic Skeleton Loader
const SectionSkeleton = () => (
  <div className="py-20 px-4 max-w-7xl mx-auto">
    <div className="skeleton h-12 w-64 mb-6 mx-auto" />
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton h-64 w-full rounded-2xl" />
      ))}
    </div>
  </div>
);

// Simple Error Boundary Fallback
const ErrorFallback = () => (
  <div className="py-20 text-center bg-red-50 rounded-3xl mx-4 my-8 border border-red-100">
    <p className="text-red-600 font-bold">Failed to load this section. Please refresh.</p>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <ErrorFallback />;
    return this.props.children;
  }
}

export default function App() {
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustPartners />
        <HowItWorks />
        
        <Suspense fallback={<SectionSkeleton />}>
          <ErrorBoundary>
            <Benefits />
          </ErrorBoundary>
          <ErrorBoundary>
            <LoanTypes />
          </ErrorBoundary>
          <ErrorBoundary>
            <SocialProof />
          </ErrorBoundary>
          <ErrorBoundary>
            <UrgencyBanner />
          </ErrorBoundary>
          <ErrorBoundary>
            <FAQ />
          </ErrorBoundary>
          <ErrorBoundary>
            <FinalCTA />
          </ErrorBoundary>
        </Suspense>
      </main>

      <Footer />

      {/* Floating elements */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
      <LiveCounter />

      {/* Calculator fab */}
      <button
        onClick={() => setCalcOpen(true)}
        className="fixed bottom-6 right-24 z-50 hidden lg:flex items-center gap-2 px-4 py-2.5 bg-white border border-brand-200/60 rounded-full shadow-lg hover:shadow-xl hover:border-brand-300 transition-all text-sm font-medium text-brand-700"
      >
        <span>🧮</span> EMI Calculator
      </button>

      <LoanCalculatorModal isOpen={calcOpen} onClose={() => setCalcOpen(false)} />
    </div>
  );
}
