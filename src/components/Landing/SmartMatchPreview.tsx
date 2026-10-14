import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Building2, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const SmartMatchPreview: React.FC = () => {
  const { smartMatches, setActiveView } = useApp();
  const topMatch = smartMatches[0];

  return (
    <section className="py-14 bg-[#2D2D2D] text-white border-b border-[#E5E1DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0D6B5E]/30 border border-[#0D6B5E]/50 text-emerald-300 text-[10px] font-bold rounded uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Core Innovative Feature</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Smart Resource Matching Engine ⭐
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Why let surplus goods go unused in one warehouse while another NGO desperately needs them nearby? HopePoint continuously matches surplus inventories with open requirements based on category, quantity, geographic distance, and urgency.
            </p>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated distance & location proximity calculations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Inter-NGO resource sharing & surplus re-allocation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Reduces operational waste and accelerates emergency response</span>
              </li>
            </ul>

            <div className="pt-1">
              <button
                onClick={() => setActiveView('smart-matches')}
                className="px-5 py-2.5 bg-[#0D6B5E] hover:bg-[#0D6B5E]/90 text-white font-bold text-xs rounded-md shadow-md transition-all flex items-center gap-2"
              >
                <span>Launch Interactive Smart Matcher</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Match Visualizer Box */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-xl relative space-y-3.5">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold text-white">Live Smart Match Output</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-[10px] rounded uppercase tracking-wider border border-emerald-500/30">
                  {topMatch?.matchScore || 94}% Compatibility Score
                </span>
              </div>

              {/* Top Box: Offering NGO */}
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">Available Resource (Surplus)</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {topMatch?.offeringLocation || 'Puducherry'}
                  </span>
                </div>
                <p className="text-xs font-bold text-white">{topMatch?.offeringNgoName || 'CareTrust Foundation'}</p>
                <p className="text-xs text-slate-300">Item: <strong className="text-white">100 Winter Woolen Blankets</strong></p>
              </div>

              {/* Match Connector */}
              <div className="text-center py-0.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#0D6B5E] text-white text-[10px] font-bold rounded shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Match Identified: 50 Units Allocation</span>
                </span>
              </div>

              {/* Bottom Box: Requesting NGO */}
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-orange-400">Requirement (Need)</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {topMatch?.requestingLocation || 'Puducherry'}
                  </span>
                </div>
                <p className="text-xs font-bold text-white">{topMatch?.requestingNgoName || 'Community Relief Center'}</p>
                <p className="text-xs text-slate-300">Need: <strong className="text-white">50 Woolen Blankets for Night Shelter</strong></p>
              </div>

              <div className="pt-1 text-center">
                <p className="text-[10px] text-slate-400">
                  Matches update dynamically in real time whenever NGOs log new inventory or requirements.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
