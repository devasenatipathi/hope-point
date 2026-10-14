import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck, MapPin, Mail, Phone, Globe, Building2, CheckCircle2, Heart, Package } from 'lucide-react';

export const NGOProfileModal: React.FC = () => {
  const { ngoProfiles, selectedNgoId, requirements, surplusItems, setActiveModal, setSelectedRequirementId } = useApp();

  const ngo = ngoProfiles.find(p => p.id === selectedNgoId) || ngoProfiles[0];
  const ngoReqs = requirements.filter(r => r.ngoId === ngo.id);
  const ngoSurplus = surplusItems.filter(s => s.ngoId === ngo.id);

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header Cover */}
        <div className="relative h-36 bg-slate-200 shrink-0">
          <img src={ngo.coverImage} alt="" className="w-full h-full object-cover" />
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-3 right-3 p-1.5 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12">
            <div className="flex items-end gap-3">
              <img
                src={ngo.logo}
                alt={ngo.name}
                className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white"
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold text-slate-900">{ngo.name}</h2>
                  {ngo.isVerified && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified NGO
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 font-medium">Reg No: <strong>{ngo.registrationNo}</strong> • Est. {ngo.establishedYear}</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (ngoReqs.length > 0) setSelectedRequirementId(ngoReqs[0].id);
                setActiveModal('donation');
              }}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate to {ngo.name}</span>
            </button>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-normal">{ngo.description}</p>

          {/* Contact & Location Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Location</p>
              <p className="font-semibold text-slate-800 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> {ngo.location}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Email</p>
              <p className="font-semibold text-slate-800 mt-0.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600" /> {ngo.email}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Phone</p>
              <p className="font-semibold text-slate-800 mt-0.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-600" /> {ngo.phone}
              </p>
            </div>
          </div>

          {/* Active Requirements List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Active Open Requirements</h3>
            {ngoReqs.length === 0 ? (
              <p className="text-xs text-slate-400">No active requirements posted currently.</p>
            ) : (
              <div className="space-y-2">
                {ngoReqs.map(r => (
                  <div key={r.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{r.title}</p>
                      <p className="text-[11px] text-slate-500">Need: {r.quantityRequired} {r.unit} • Urgency: {r.urgency}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedRequirementId(r.id);
                        setActiveModal('donation');
                      }}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[11px]"
                    >
                      Support
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Surplus Inventory List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Surplus Items Available</h3>
            {ngoSurplus.length === 0 ? (
              <p className="text-xs text-slate-400">No surplus items listed currently.</p>
            ) : (
              <div className="space-y-2">
                {ngoSurplus.map(s => (
                  <div key={s.id} className="p-3 bg-teal-50/60 rounded-xl border border-teal-200 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{s.title}</p>
                      <p className="text-[11px] text-slate-500">Available: {s.quantityAvailable} {s.unit} • Condition: {s.condition}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-bold rounded">Surplus</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
