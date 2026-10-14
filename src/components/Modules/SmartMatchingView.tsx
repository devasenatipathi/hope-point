import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Building2,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Filter,
  RefreshCw,
  MessageSquare,
  Share2,
  Package
} from 'lucide-react';

export const SmartMatchingView: React.FC = () => {
  const { smartMatches, updateMatchStatus, setActiveModal } = useApp();

  const [filterCategory, setFilterCategory] = useState('All');
  const [filterUrgency, setFilterUrgency] = useState('All');

  const filteredMatches = smartMatches.filter(m => {
    const matchCat = filterCategory === 'All' || m.resourceTitle.toLowerCase().includes(filterCategory.toLowerCase());
    const matchUrg = filterUrgency === 'All' || m.urgency === filterUrgency;
    return matchCat && matchUrg;
  });

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold rounded-full">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>HopePoint Core Innovation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Smart Resource Matching Interface ⭐
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Eliminate social care resource waste. Our intelligent matching engine cross-references available NGO surplus inventory with open beneficiary requirements across Puducherry and nearby regions in real time.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Category & Quantity Compatibility
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Distance Proximity Radius Calculation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Emergency Urgency Prioritization
            </span>
          </div>
        </div>
      </div>

      {/* Matching Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Matches Found</p>
          <p className="text-2xl font-black text-indigo-600 mt-1">{smartMatches.length}</p>
          <p className="text-[10px] text-slate-400">High compatibility pairings</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Avg Match Accuracy</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">92.4%</p>
          <p className="text-[10px] text-slate-400">Distance & category score</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Surplus Utilization</p>
          <p className="text-2xl font-black text-blue-600 mt-1">88.5%</p>
          <p className="text-[10px] text-slate-400">Items saved from decay</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Avg Transfer Time</p>
          <p className="text-2xl font-black text-purple-600 mt-1">&lt; 24 Hrs</p>
          <p className="text-[10px] text-slate-400">Local Puducherry dispatch</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700">Filter Smart Matches:</span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-medium"
          >
            <option value="All">All Categories</option>
            <option value="Blankets">Blankets & Clothing</option>
            <option value="Mobility">Mobility & Assistive</option>
            <option value="Medical">Medical Kits</option>
          </select>

          <select
            value={filterUrgency}
            onChange={(e) => setFilterUrgency(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-medium"
          >
            <option value="All">All Urgency Levels</option>
            <option value="Emergency">Emergency</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>
        </div>
      </div>

      {/* Smart Match Cards Feed */}
      <div className="space-y-6">
        {filteredMatches.map(m => (
          <div
            key={m.id}
            className="bg-white border-2 border-indigo-100 hover:border-indigo-300 rounded-2xl p-6 shadow-xs transition-all duration-200 space-y-5"
          >
            {/* Top Match Score Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs rounded-full shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{m.matchScore}% Match Score</span>
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Distance: <strong className="text-slate-800">{m.distanceKm} km</strong>
                </span>
              </div>

              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                m.status === 'Accepted' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                Status: {m.status}
              </span>
            </div>

            {/* Comparison Side-by-Side Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              {/* Left Box: Offering NGO (Surplus) */}
              <div className="lg:col-span-5 bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">
                    Available Resource (Surplus)
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> {m.offeringLocation}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  {m.offeringNgoName}
                  <ShieldCheck className="w-4 h-4 text-blue-600 inline" />
                </h3>

                <p className="text-xs text-slate-700 font-medium">
                  Resource: <strong className="text-blue-900">{m.resourceTitle}</strong>
                </p>
              </div>

              {/* Middle Arrow Match Divider */}
              <div className="lg:col-span-2 text-center py-2 lg:py-0">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 mx-auto flex items-center justify-center font-bold text-xs shadow-xs border border-indigo-200">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                </div>
                <p className="text-[10px] font-bold text-indigo-800 mt-1 uppercase">Allocating {m.matchedQuantity} {m.unit}</p>
              </div>

              {/* Right Box: Requesting NGO (Need) */}
              <div className="lg:col-span-5 bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">
                    Requirement (Need)
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" /> {m.requestingLocation}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  {m.requestingNgoName}
                </h3>

                <p className="text-xs text-slate-700 font-medium">
                  Needs: <strong className="text-rose-900">{m.matchedQuantity} {m.unit}</strong>
                </p>
              </div>

            </div>

            {/* Smart Algorithm Breakdown Reasons */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1.5">
              <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Match Algorithm Criteria Breakdown:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                {m.matchReasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Match Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                {m.status === 'Pending Review' ? (
                  <button
                    onClick={() => updateMatchStatus(m.id, 'Accepted')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve & Initiate Transfer</span>
                  </button>
                ) : (
                  <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Transfer Approved
                  </span>
                )}

                <button
                  onClick={() => alert(`Direct Messaging opened with ${m.offeringNgoName} & ${m.requestingNgoName}`)}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact NGOs</span>
                </button>
              </div>

              <span className="text-[11px] text-slate-400 font-medium">Logged in HopePoint Smart Ledger</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
