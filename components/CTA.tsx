
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="bg-primary rounded-[60px] overflow-hidden shadow-[0_60px_120px_rgba(15,23,42,0.3)] relative">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 parallax-slow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cta/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 parallax-fast" />

          <div className="grid lg:grid-cols-2 items-stretch min-h-[700px]">
            <div className="p-12 md:p-24 space-y-12 relative z-10 flex flex-col justify-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                  Step Into <br />
                  <span className="text-white underline decoration-cta/30">Vilas Agro.</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                  Visit our Nandurbar branch for professional guidance and the finest agricultural supplies in the district.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-2xl mb-1 tracking-tight">Our Location</h4>
                    <p className="text-slate-400 font-medium max-w-xs">Dhule - Solapur Rd, near State bank of india, Navnath Nagar, Talathi Colony, Nandurbar, Maharashtra 425412</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-2xl mb-1 tracking-tight">Get In Touch</h4>
                    <div className="flex flex-col gap-1 font-bold">
                      <a href="tel:9673931801" className="text-cta hover:text-white transition-colors">9673931801 (Primary)</a>
                      <a href="tel:9822006925" className="text-cta hover:text-white transition-colors">9822006925 (Support)</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <a
                  href="https://maps.app.goo.gl/dCtPC6ygrSnmHcgC9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-12 py-5 rounded-[24px] font-black text-xl hover:bg-white hover:text-primary hover:scale-105 transition-all duration-500 shadow-2xl shadow-accent/20 text-center"
                >
                  Locate On Maps
                </a>
                <a href="tel:9673931801" className="bg-white/5 backdrop-blur-xl text-white border-2 border-white/10 px-12 py-5 rounded-[24px] font-black text-xl hover:bg-white hover:text-primary transition-all duration-500 text-center">
                  Talk To Expert
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden group min-h-[500px] lg:min-h-0">
              <img
                src="https://cdn.discordapp.com/attachments/1467937539305508865/1467937569688911932/Screenshot_2026-02-02_195625.png?ex=698232e5&is=6980e165&hm=d1dcffcbd8a1503f9db5da2a457df7680df132679387bafb9695ffd25a72202e"
                alt="Store Front Details"
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-transparent" />
              <div className="absolute top-10 right-10 glass-card p-6 rounded-3xl border border-white/20 hidden md:block">
                <div className="text-cta font-black uppercase text-xs tracking-widest mb-2">Open Hours</div>
                <div className="text-white font-bold text-sm">Mon-Sat: 08:00 - 20:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
