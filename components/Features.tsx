
import React from 'react';

const FEATURES_DATA = [
  {
    title: "High-Yield Seeds",
    description: "Premium cotton, maize, and pulse varieties scientifically optimized for Nandurbar soil conditions.",
    icon: "🌱",
    stats: "98% Germination"
  },
  {
    title: "Advanced Fertilizers",
    description: "Custom NPK blends, organic boosters, and systemic nutrition for sustained crop health and growth.",
    icon: "🧪",
    stats: "20% Yield Increase"
  },
  {
    title: "Crop Protection",
    description: "Eco-friendly pest control and systemic fungicides to safeguard your hard work from local threats.",
    icon: "🛡️",
    stats: "Safe Formulas"
  },
  {
    title: "Farming Hardware",
    description: "Durable, modern equipment designed for ergonomic use and long-lasting performance in the field.",
    icon: "🚜",
    stats: "Heavy Duty"
  },
  {
    title: "Field Consulting",
    description: "On-site visits from our experts to diagnose issues and recommend precise crop interventions.",
    icon: "👨‍🌾",
    stats: "Expert Support"
  },
  {
    title: "Soil Lab Analysis",
    description: "Professional chemical analysis of your soil to create a perfect nutrient management plan.",
    icon: "🌍",
    stats: "Precision Lab"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Our Core Capabilities</h2>
            <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
              The Best Tools For <br />
              <span className="text-cta">The Best Harvest.</span>
            </h3>
          </div>
          <div className="lg:w-1/3">
            <p className="text-lg text-slate-500 font-semibold leading-relaxed border-l-4 border-accent pl-6">
              Vilas Agro integrates modern technology with traditional farming wisdom to provide unparalleled value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 p-10 rounded-[40px] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(15,23,42,0.08)] hover:-translate-y-3 border-beam-container"
            >
              {/* Animated Border Beam on Hover */}
              <div className="border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-xl shadow-slate-200/50 mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-grow bg-slate-200" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] shrink-0">{feature.stats}</span>
              </div>

              <h4 className="text-2xl font-black text-primary mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {feature.description}
              </p>

              <a
                href={`https://wa.me/919822006925?text=Hi, I'm interested in ${feature.title} at Vilas Agro`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary font-black text-sm uppercase tracking-widest group-hover:text-cta transition-colors cursor-pointer"
              >
                Explore Solutions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
