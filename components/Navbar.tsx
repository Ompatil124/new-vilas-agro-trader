
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass-nav shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm shadow-md py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tighter leading-none text-primary">VILAS AGRO</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary/70 uppercase mt-1">Nandurbar</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 font-bold text-sm">
          <a href="#features" className="text-slate-700 hover:text-primary transition-all">Our Products</a>
          <a href="#testimonials" className="text-slate-700 hover:text-primary transition-all">Success Stories</a>
          <a href="#contact" className="text-slate-700 hover:text-primary transition-all">Contact Us</a>

          {/* Phone Number Display - PROMINENT */}
          <a
            href="tel:9673931801"
            className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-5 py-3 rounded-xl transition-all duration-300 border-2 border-primary/30 hover:border-primary shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-black text-base">9673931801</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Vilas+agro/@21.3668465,74.2451498,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-white px-7 py-3 rounded-xl hover:bg-primary hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 active:scale-95"
          >
            Find Our Shop
          </a>
        </div>

        {/* Mobile Phone Button */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:9673931801"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl shadow-lg hover:bg-cta transition-all font-black text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
