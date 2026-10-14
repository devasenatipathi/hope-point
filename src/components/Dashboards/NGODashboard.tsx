import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Plus,
  Package,
  Sparkles,
  Heart,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  MapPin,
  ArrowUpRight,
  TrendingUp,
  Share2
} from 'lucide-react';

export const NGODashboard: React.FC = () => {
  const {
    currentUser,
    ngoProfiles,
    requirements,
    surplusItems,
    smartMatches,
    donations,
    volunteerApplications,
    setActiveModal,
    setSelectedRequirementId,
    updateMatchStatus,
    verifyNGO
  } = useApp();

  const [activeTab, setActiveTab] = useState<'requirements' | 'surplus' | 'matches' | 'donations' | 'volunteers'>('requirements');

  // Find NGO profile for current user
  const ngo = ngoProfiles.find(p => p.id === currentUser.id) || ngoProfiles[0];

  const myRequirements = requirements.filter(r => r.ngoId === ngo.id);
  const mySurplus = surplusItems.filter(s => s.ngoId === ngo.id);
  const myMatches = smartMatches.filter(m => m.offeringNgoId === ngo.id || m.requestingNgoId === ngo.id);
  const myDonations = donations.filter(d => d.ngoId === ngo.id);
  const myVolunteers = volunteerApplications.filter(v => v.ngoName === ngo.name);

  return (
    <div className="space-y-8">
      
      {/* NGO Header & Profile Summary Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={ngo.logo}
              alt={ngo.name}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-100 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold text-slate-900">{ngo.name}</h1>
                {ngo.isVerified ? (
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified NGO</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                    Pending Verification
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span>Registration No: <strong>{ngo.registrationNo}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {ngo.location}</span>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveModal('post-req')}
              className="flex-1 md:flex-none px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Post New Requirement</span>
            </button>

            <button
              onClick={() => setActiveModal('add-surplus')}
              className="flex-1 md:flex-none px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Package className="w-4 h-4" />
              <span>Add Surplus Resource</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Requirements</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">{myRequirements.length}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Open needs in Puducherry</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Surplus Listed</p>
          <p className="text-2xl font-extrabold text-teal-600 mt-1">{mySurplus.length}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Available for redistribution</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Smart Matches ⭐</p>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">{myMatches.length}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">High compatibility pairs</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Donations Received</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{myDonations.length}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">In-kind & financial entries</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs col-span-2 lg:col-span-1">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Volunteers</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{myVolunteers.length}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Active drive applicants</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-slate-200 rounded-t-xl px-4 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('requirements')}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'requirements'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>My Requirements ({myRequirements.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('surplus')}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'surplus'
              ? 'border-teal-600 text-teal-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Surplus Inventory ({mySurplus.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('matches')}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'matches'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Smart Matches ⭐ ({myMatches.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('donations')}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'donations'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Heart className="w-4 h-4 text-emerald-600" />
          <span>Donations Log ({myDonations.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('volunteers')}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'volunteers'
              ? 'border-amber-600 text-amber-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4 text-amber-600" />
          <span>Volunteers ({myVolunteers.length})</span>
        </button>
      </div>

      {/* Tab Content Areas */}
      <div className="bg-white border border-slate-200 rounded-b-2xl p-6 shadow-xs">
        
        {/* Requirements Tab */}
        {activeTab === 'requirements' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-800">Active Requirement Postings</h3>
              <button
                onClick={() => setActiveModal('post-req')}
                className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Post Requirement
              </button>
            </div>

            {myRequirements.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">No active requirements posted yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myRequirements.map(req => {
                  const pct = Math.round((req.quantityFulfilled / req.quantityRequired) * 100);
                  return (
                    <div key={req.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                            req.urgency === 'Emergency' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {req.urgency} Urgency
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mt-1">{req.title}</h4>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">{req.category}</span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{req.description}</p>

                      {/* Progress bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-600">
                          <span>Fulfillment: {req.quantityFulfilled} / {req.quantityRequired} {req.unit}</span>
                          <span className="font-bold text-blue-600">{pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full transition-all duration-300"
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                        <span>Required By: <strong>{req.requiredBy}</strong></span>
                        <span className="text-emerald-600 font-bold">📍 {req.location}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Surplus Inventory Tab */}
        {activeTab === 'surplus' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-800">Listed Surplus Resources</h3>
              <button
                onClick={() => setActiveModal('add-surplus')}
                className="text-xs text-teal-600 font-bold hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> List Surplus
              </button>
            </div>

            {mySurplus.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">No surplus resources listed currently.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mySurplus.map(surplus => (
                  <div key={surplus.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                        Condition: {surplus.condition}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Available Until: {surplus.availableUntil}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">{surplus.title}</h4>
                    <p className="text-xs text-slate-600">{surplus.description}</p>

                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span>Quantity: <strong className="text-teal-700">{surplus.quantityAvailable} {surplus.unit}</strong></span>
                      <span className="text-slate-500">📍 {surplus.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Smart Matches Tab */}
        {activeTab === 'matches' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-800">Smart Resource Matches</h3>
              </div>
              <span className="text-xs text-slate-500">Auto-calculated match compatibility score</span>
            </div>

            {myMatches.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">No smart matches found yet.</p>
            ) : (
              <div className="space-y-3">
                {myMatches.map(m => (
                  <div key={m.id} className="p-4 rounded-xl bg-slate-900 text-white space-y-3 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-xs rounded-full">
                        {m.matchScore}% Match
                      </span>
                      <span className="text-xs text-slate-400">Status: <strong className="text-amber-400">{m.status}</strong></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <p className="text-[10px] text-blue-400 font-bold uppercase">Offering NGO</p>
                        <p className="font-bold text-white mt-0.5">{m.offeringNgoName}</p>
                        <p className="text-slate-300 mt-1">Resource: {m.resourceTitle}</p>
                      </div>

                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <p className="text-[10px] text-rose-400 font-bold uppercase">Requesting NGO</p>
                        <p className="font-bold text-white mt-0.5">{m.requestingNgoName}</p>
                        <p className="text-slate-300 mt-1">Match Qty: {m.matchedQuantity} {m.unit}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {m.status === 'Pending Review' && (
                        <button
                          onClick={() => updateMatchStatus(m.id, 'Accepted')}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors"
                        >
                          Approve Resource Match
                        </button>
                      )}
                      <button
                        onClick={() => alert(`Contacting ${m.requestingNgoName} at contact@caretrust.org`)}
                        className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg"
                      >
                        Contact Partner NGO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Donations Log Tab */}
        {activeTab === 'donations' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 pb-2 border-b border-slate-100">Received Donations</h3>
            {myDonations.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">No donations received yet.</p>
            ) : (
              <div className="space-y-2">
                {myDonations.map(d => (
                  <div key={d.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{d.itemTitle} ({d.quantityOrAmount})</p>
                      <p className="text-[11px] text-slate-500">Donor: {d.donorName} • Tracking: <code className="bg-slate-200 px-1 rounded">{d.trackingCode}</code></p>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Volunteers Tab */}
        {activeTab === 'volunteers' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 pb-2 border-b border-slate-100">Volunteer Drive Applications</h3>
            {myVolunteers.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">No volunteer applications submitted yet.</p>
            ) : (
              <div className="space-y-2">
                {myVolunteers.map(v => (
                  <div key={v.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{v.volunteerName} → {v.opportunityTitle}</p>
                      <p className="text-[11px] text-slate-500">Applied: {v.appliedDate} • Skills: {v.skills.join(', ')}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-[10px]">
                      {v.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
