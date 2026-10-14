import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, Sparkles, Building2, ShieldCheck, ArrowRight, CheckCircle2, Users, HandHeart } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setActiveView, setIsAuthModalOpen, setAuthModalMode, setSelectedRoleForRegister, switchRole } = useApp();

  return (
    <section className="relative overflow-hidden bg-[#2D2D2D] text-white py-14 lg:py-20 border-b border-[#E5E1DB]">
      {/* Decorative background subtle ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0D6B5E]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D6B5E]/30 border border-[#0D6B5E]/50 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Centralized Social Care Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-300 font-bold uppercase text-[10px] tracking-wider">Smart Resource Matching</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">
              Where <span className="text-emerald-400">Hope Meets Help</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Connect with NGOs, share surplus resources, support local communities, empower disability welfare, and track real social impact—all in one transparent ecosystem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <button
                onClick={() => {
                  setSelectedRoleForRegister('ngo');
                  setAuthModalMode('register');
                  setIsAuthModalOpen(true);
                }}
                className="px-5 py-2.5 bg-[#0D6B5E] hover:bg-[#0D6B5E]/90 text-white font-bold text-xs rounded-md shadow-md transition-all flex items-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveView('explore-ngos')}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-md border border-slate-700 transition-all flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Explore NGOs</span>
              </button>

              <button
                onClick={() => switchRole('beneficiary')}
                className="px-4 py-2.5 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 font-semibold text-xs rounded-md border border-orange-500/30 transition-all flex items-center gap-2"
              >
                <HandHeart className="w-3.5 h-3.5 text-orange-400" />
                <span>Request Help</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Government Reg No. Verified NGOs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>100% In-Kind & Financial Audited Ledger</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Smart Resource Matching Preview Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl relative">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-200 ml-1">Smart Match Engine Live</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-300 font-bold rounded border border-emerald-500/30">
                  94% Match Score
                </span>
              </div>

              {/* Match Card 1: Offering */}
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 space-y-1.5 mb-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-[#0D6B5E]/30 text-emerald-400 rounded">
                      <Building2 className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        CareTrust Foundation
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      </p>
                      <p className="text-[10px] text-slate-400">📍 Puducherry</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[9px] font-bold rounded uppercase tracking-wider">Surplus</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">100 Winter Woolen Blankets Available</p>
              </div>

              {/* Match Arrow Indicator */}
              <div className="flex items-center justify-center my-1.5">
                <div className="px-2.5 py-0.5 bg-[#0D6B5E] text-white text-[10px] font-bold rounded shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Smart Match Engine: 94% Compatibility</span>
                </div>
              </div>

              {/* Match Card 2: Requesting */}
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 space-y-1.5 mt-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-orange-500/20 text-orange-400 rounded">
                      <Building2 className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        Community Relief Center
                      </p>
                      <p className="text-[10px] text-slate-400">📍 Puducherry (3.2 km away)</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-[9px] font-bold rounded uppercase tracking-wider">Requirement</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">Needs 50 Woolen Blankets for Night Shelter</p>
              </div>

              {/* Action Button */}
              <div className="mt-3">
                <button
                  onClick={() => setActiveView('smart-matches')}
                  className="w-full py-2 bg-[#0D6B5E] hover:bg-[#0D6B5E]/90 text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Try Smart Resource Matching Interface</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
