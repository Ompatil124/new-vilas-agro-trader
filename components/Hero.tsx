
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Passive scroll listener for better performance
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations (subtle: max 20-30px)
  // Background speed 0.5x -> using a small multiplier to reach max subtle movement slowly
  const bgTransform = `translateY(${Math.min(scrollY * 0.1, 25)}px)`;
  // Foreground speed 1.2x -> moving slightly faster in the opposite direction for depth
  const fgTransform = `translateY(${Math.max(scrollY * -0.15, -30)}px)`;

  // Calculate years since 1997
  const yearsSince1997 = new Date().getFullYear() - 1997;

  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-background">
      {/* Background Decor (Parallax Layer) */}
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: bgTransform }}
      />
      <div
        className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cta/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: bgTransform }}
      />

      {/* Floating Geometric Elements (Foreground Parallax Layer) */}
      <div
        className="absolute top-32 left-[10%] w-16 h-16 border-4 border-primary/10 rounded-3xl rotate-12 hidden lg:block transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: fgTransform }}
      />
      <div
        className="absolute bottom-40 right-[15%] w-24 h-24 border-4 border-cta/10 rounded-full hidden lg:block transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: fgTransform }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white shadow-lg shadow-slate-200/50 text-primary text-xs font-black tracking-[0.15em] border border-slate-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              NANDURBAR'S PREMIER AGRO CENTER
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-primary leading-[1] tracking-tighter">
              Harvesting <br />
              <span className="text-cta">The Future.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
              Vilas Agro provides scientifically verified seeds and premium nutrition to ensure your crops reach their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#features"
                className="btn-ripple bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                Our Catalog
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="tel:9673931801" className="bg-white text-primary border-2 border-slate-100 px-12 py-5 rounded-2xl font-black text-xl hover:border-primary hover:text-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
                Expert Advice
              </a>
            </div>

            <div className="flex items-center gap-10 pt-10 border-t border-slate-200/60 w-fit">
              <div className="group">
                <div className="text-3xl font-black text-primary group-hover:text-cta transition-colors">{yearsSince1997}+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Years Legacy</div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="group">
                <div className="text-3xl font-black text-primary group-hover:text-cta transition-colors">5k+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Farmers</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Image Parallax Layer (Foreground) */}
            <div
              className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(15,23,42,0.15)] border-[12px] border-white tilt-card image-zoom-container transition-transform duration-100 ease-out"
              style={{ transform: fgTransform }}
            >
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200"
                alt="Agricultural Landscape"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-cta mb-4">Quality Proven</div>
                <h3 className="text-3xl font-extrabold leading-tight">Serving Nandurbar with the highest agricultural standards.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
