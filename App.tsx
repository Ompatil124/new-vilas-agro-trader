
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 md:hidden z-50 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ready to grow?</span>
          <span className="text-sm font-bold text-primary">Contact Vilas Agro</span>
        </div>
        <a 
          href="https://www.google.com/maps/place/Vilas+agro/@21.3668465,74.2451498,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cta text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-cta/20"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

export default App;
