
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Rajesh Patil",
    role: "Progressive Farmer",
    text: "Vilas Agro changed the way I farm. Their seed quality is unmatched in the Dondaicha region. My cotton yield increased by 25% this year.",
    image: "https://picsum.photos/seed/farmer1/100/100"
  },
  {
    name: "Sanjay Deshmukh",
    role: "Grain Producer",
    text: "I rely on their expertise for fertilizers. They tested my soil and recommended exactly what was needed. No more guesswork or wasted money.",
    image: "https://picsum.photos/seed/farmer2/100/100"
  },
  {
    name: "Anita Pawar",
    role: "Horticulturist",
    text: "The guidance they provide is professional and honest. Vilas Agro is not just a shop, it's a family that cares about our livelihood.",
    image: "https://picsum.photos/seed/farmer3/100/100"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Voice of the Land</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Trusted by Thousands <br /> of Local Families</h3>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-accent/50" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400 font-semibold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-20 pt-16 border-t border-white/10 text-center relative z-10">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Authorised Dealer for Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {['nutrihub', 'parijat'].map(brand => (
              <span
                key={brand}
                className="text-3xl font-black text-slate-500 hover:text-white hover:scale-110 transform transition-all duration-300 cursor-default uppercase tracking-widest select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
