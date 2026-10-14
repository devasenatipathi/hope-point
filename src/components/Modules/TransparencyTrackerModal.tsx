import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckCircle2, Clock, ShieldCheck, Truck, Package, MapPin, FileCheck2 } from 'lucide-react';

export const TransparencyTrackerModal: React.FC = () => {
  const { donations, selectedDonationId, setActiveModal } = useApp();

  const don = donations.find(d => d.id === selectedDonationId) || donations[0];

  const stages = [
    { name: 'Donation Initiated', desc: 'Pledged on HopePoint Portal', date: don ? don.date : 'July 2026', done: true },
    { name: 'Confirmed & Processing', desc: 'Assigned tracking code and matched with NGO', date: 'Same Day', done: true },
    { name: 'Received by NGO', desc: `In-kind verified at ${don ? don.ngoName : 'NGO Center'}`, date: 'In Progress', done: don?.status === 'Received by NGO' || don?.status === 'Distributed' },
    { name: 'Distributed to Beneficiary', desc: 'Delivered with photo proof logged', date: 'Final Stage', done: don?.status === 'Distributed' }
  ];

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Live Transparency Ledger & Tracker</h3>
          </div>
          <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {don ? (
          <div className="space-y-4 text-xs">
            {/* Donation Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono font-extrabold text-emerald-700 text-sm">{don.trackingCode}</span>
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-[10px]">
                  {don.status}
                </span>
              </div>
              <p className="font-bold text-slate-900 text-sm">{don.itemTitle} ({don.quantityOrAmount})</p>
              <p className="text-slate-500">Recipient NGO: <strong>{don.ngoName}</strong> • Donor: <strong>{don.donorName}</strong></p>
            </div>

            {/* Step Timeline */}
            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-slate-800 uppercase text-[10px] tracking-wider">Milestone Timeline</h4>
              
              <div className="relative pl-6 space-y-5 border-l-2 border-slate-200">
                {stages.map((stage, idx) => (
                  <div key={idx} className="relative">
                    <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white ${
                      stage.done ? 'bg-emerald-600 ring-4 ring-emerald-100' : 'bg-slate-300'
                    }`}>
                      {stage.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3 h-3 text-slate-500" />}
                    </div>

                    <div>
                      <p className={`font-bold ${stage.done ? 'text-slate-900' : 'text-slate-400'}`}>{stage.name}</p>
                      <p className="text-[11px] text-slate-500">{stage.desc}</p>
                      <span className="text-[10px] text-slate-400">{stage.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Proof Photo */}
            {don.proofImageUrl && (
              <div className="pt-2">
                <p className="font-bold text-slate-700 mb-1">Impact Distribution Verification Photo</p>
                <img src={don.proofImageUrl} alt="Proof" className="w-full h-36 object-cover rounded-xl border border-slate-200" />
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
            >
              Close Ledger
            </button>
          </div>
        ) : (
          <p className="text-center py-6 text-slate-400 text-xs">Donation record not found.</p>
        )}
      </div>
    </div>
  );
};
