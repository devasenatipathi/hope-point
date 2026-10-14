import React from 'react';
import { Search, Sparkles, HeartHandshake, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Need Identification',
      description: 'NGOs post urgent requirements or list surplus resources with location and urgency levels.',
      icon: <Search className="w-5 h-5 text-[#0D6B5E]" />,
      badge: 'Need'
    },
    {
      step: '02',
      title: 'Smart Matching Engine',
      description: 'Our algorithm automatically pairs available surplus resources with nearby NGO requests.',
      icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
      badge: 'Match'
    },
    {
      step: '03',
      title: 'Support & Redistribution',
      description: 'Donors, sponsors, and partner NGOs fulfill needs via physical drop-offs or direct contributions.',
      icon: <HeartHandshake className="w-5 h-5 text-[#0D6B5E]" />,
      badge: 'Support'
    },
    {
      step: '04',
      title: 'Track & Measure Impact',
      description: 'Live milestone tracking with photo verification logs ensures complete 100% transparency.',
      icon: <LineChart className="w-5 h-5 text-purple-700" />,
      badge: 'Impact'
    }
  ];

  return (
    <section className="py-14 bg-[#F4F1EE] border-b border-[#E5E1DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-2.5 py-1 bg-[#EBE7E0] text-[#0D6B5E] text-[10px] font-bold rounded uppercase tracking-widest border border-[#DED9D1]">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight mt-2.5">
            How HopePoint Connects Hope with Help
          </h2>
          <p className="text-xs text-[#6B665F] mt-1.5 font-medium">
            A user comes to HopePoint with either a need, a resource, time, or funds—and the platform connects it to the right place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="bg-white rounded-xl p-5 border border-[#E5E1DB] shadow-2xs relative flex flex-col justify-between group transition-all hover:border-[#0D6B5E]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-[#9E978E] group-hover:text-[#0D6B5E] transition-colors">
                    {s.step}
                  </span>
                  <span className="px-2 py-0.5 bg-[#F9F8F6] text-[#6B665F] font-bold text-[9px] rounded uppercase border border-[#E5E1DB]">
                    {s.badge}
                  </span>
                </div>

                <div className="p-2.5 bg-[#F9F8F6] w-fit rounded-lg border border-[#E5E1DB] mb-3 group-hover:bg-[#0D6B5E]/10 transition-colors">
                  {s.icon}
                </div>

                <h3 className="text-sm font-bold text-[#2D2D2D] mb-1">{s.title}</h3>
                <p className="text-xs text-[#6B665F] leading-relaxed font-normal">{s.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-[#E5E1DB] text-[#2D2D2D] flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-10 p-5 bg-[#2D2D2D] text-white rounded-xl border border-slate-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Need → Match → Support → Track → Impact</p>
              <p className="text-[11px] text-slate-300">Every resource item transferred on HopePoint includes verification logs and receipts.</p>
            </div>
          </div>
          <button className="px-3.5 py-2 bg-[#0D6B5E] hover:bg-[#0D6B5E]/90 text-white text-xs font-bold rounded-md whitespace-nowrap transition-colors border border-[#0D6B5E]">
            Learn More About Our Ledger
          </button>
        </div>

      </div>
    </section>
  );
};
