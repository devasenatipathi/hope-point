import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Accessibility,
  CreditCard,
  GraduationCap,
  Briefcase,
  BookOpen,
  PhoneCall,
  ExternalLink,
  CheckCircle2,
  FileText,
  Search
} from 'lucide-react';

export const DisabilitySupportView: React.FC = () => {
  const { disabilityResources, switchRole } = useApp();
  const [activeTab, setActiveTab] = useState<'All' | 'UDID Support' | 'Skill Development' | 'Employment' | 'Assistive Devices' | 'Scholarships'>('All');

  const filteredResources = disabilityResources.filter(r => activeTab === 'All' || r.category === activeTab);

  return (
    <div className="space-y-8">
      
      {/* Disability Section Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-400/10 border border-teal-400/20 text-teal-300 text-xs font-bold rounded-full">
            <Accessibility className="w-4 h-4 text-teal-300" />
            <span>Dedicated Social Welfare Section</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Disability Support & Inclusion Hub
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            HopePoint provides transparent guidance for Unique Disability ID (UDID) registration, assistive device sponsorships, inclusive skill training, and equal-opportunity employment.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => switchRole('beneficiary')}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              Submit Assistance Request
            </button>
            <a
              href="https://www.swavlambancard.gov.in"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
            >
              <span>Official Swavlamban UDID Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* UDID Step-by-Step Info Guide */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-teal-600" />
          <h2 className="text-base font-bold text-slate-900">How to Apply for UDID (Unique Disability ID) Card</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700">Step 1: Register Online</span>
            <p className="text-slate-600">Visit official www.swavlambancard.gov.in or apply at local Puducherry support camp.</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700">Step 2: Upload Documents</span>
            <p className="text-slate-600">Aadhaar card, passport photo, and existing hospital disability certificate.</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700">Step 3: Medical Board Assessment</span>
            <p className="text-slate-600">Verification by designated District Medical Board in Puducherry / State center.</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700">Step 4: Card Issuance</span>
            <p className="text-slate-600">e-UDID generated instantly; physical card dispatched to registered address.</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {['All', 'UDID Support', 'Skill Development', 'Employment', 'Assistive Devices', 'Scholarships'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as any)}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-colors border ${
              activeTab === cat
                ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Support Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(res => (
          <div
            key={res.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-bold rounded-full">
                  {res.category}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">📍 {res.location}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900">{res.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{res.description}</p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-xs">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Eligibility Criteria</p>
                <p className="text-slate-700 font-medium">{res.eligibility}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              {res.officialLink ? (
                <a
                  href={res.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{res.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => switchRole('beneficiary')}
                  className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  {res.actionText}
                </button>
              )}

              {res.contactPhone && (
                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Direct Helpline: <strong className="text-slate-800">{res.contactPhone}</strong>
                </p>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
