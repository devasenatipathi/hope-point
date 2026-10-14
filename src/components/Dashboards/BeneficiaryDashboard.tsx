import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Accessibility,
  Plus,
  CheckCircle2,
  Clock,
  HeartHandshake,
  CreditCard,
  GraduationCap,
  Briefcase,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export const BeneficiaryDashboard: React.FC = () => {
  const {
    currentUser,
    beneficiaryRequests,
    createBeneficiaryRequest,
    disabilityResources,
    setActiveView
  } = useApp();

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestCategory, setRequestCategory] = useState('Assistive Devices');
  const [assistanceDesc, setAssistanceDesc] = useState('');
  const [reqLocation, setReqLocation] = useState('Puducherry');

  const myRequests = beneficiaryRequests.filter(r => r.beneficiaryId === currentUser.id || r.beneficiaryName === currentUser.name);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assistanceDesc.trim()) return;

    createBeneficiaryRequest({
      category: requestCategory,
      requiredAssistance: assistanceDesc,
      location: reqLocation,
      urgency: 'High'
    });

    setAssistanceDesc('');
    setIsRequestModalOpen(false);
  };

  return (
    <div className="space-y-8">
      
      {/* Beneficiary Header */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-950 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded uppercase">
              Beneficiary Support Portal
            </span>
            <h1 className="text-2xl font-extrabold text-white">Welcome, {currentUser.name}!</h1>
            <p className="text-xs text-slate-200">
              Access disability assistance, UDID card support, assistive devices, and vocational skill training programs.
            </p>
          </div>

          <button
            onClick={() => setIsRequestModalOpen(true)}
            className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-xs rounded-xl transition-colors shadow-lg flex items-center gap-1.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Request Assistance / Support</span>
          </button>
        </div>
      </div>

      {/* Active Requests Tracker */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">My Support & Assistance Requests</h2>
          <span className="text-xs text-slate-500 font-medium">Track live status updates</span>
        </div>

        {myRequests.length === 0 ? (
          <p className="text-center py-8 text-xs text-slate-400">No support requests submitted yet. Click "Request Assistance" above to get started!</p>
        ) : (
          <div className="space-y-3">
            {myRequests.map(req => (
              <div key={req.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-bold rounded">
                    Category: {req.category}
                  </span>
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Status: {req.status}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-900">{req.requiredAssistance}</p>

                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                  <span>Submitted: {req.requestDate}</span>
                  {req.matchedNgoName && (
                    <span className="text-emerald-700 font-bold">Assigned NGO: {req.matchedNgoName}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Available Welfare & Disability Schemes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Available Support & Welfare Programs</h2>
          <button
            onClick={() => setActiveView('disability-support')}
            className="text-xs text-teal-700 font-bold hover:underline flex items-center gap-1"
          >
            <span>View Full Disability Section</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disabilityResources.slice(0, 3).map(res => (
            <div key={res.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <span className="px-2.5 py-0.5 bg-teal-50 text-teal-800 text-[10px] font-bold rounded">
                {res.category}
              </span>
              <h3 className="text-sm font-bold text-slate-900">{res.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{res.description}</p>
              
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => setActiveView('disability-support')}
                  className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  {res.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Assistance Request Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Request Assistance / Support</h3>
              <button onClick={() => setIsRequestModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-sm">✕</button>
            </div>

            <form onSubmit={handleSubmitRequest} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Support Category</label>
                <select
                  value={requestCategory}
                  onChange={(e) => setRequestCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-medium"
                >
                  <option value="Assistive Devices">Assistive Devices (Wheelchair, Hearing Aid, etc.)</option>
                  <option value="UDID Support">UDID Card Application Guidance</option>
                  <option value="Skill Training">Skill Training Program</option>
                  <option value="Food & Care Package">Food & Care Packages</option>
                  <option value="Medical Assistance">Medical Assistance</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Required Assistance Description</label>
                <textarea
                  rows={3}
                  value={assistanceDesc}
                  onChange={(e) => setAssistanceDesc(e.target.value)}
                  placeholder="Describe your requirement clearly..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Location / District</label>
                <input
                  type="text"
                  value={reqLocation}
                  onChange={(e) => setReqLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-medium"
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsRequestModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
