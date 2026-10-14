import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Heart,
  TrendingUp,
  AlertTriangle,
  FileText
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    ngoProfiles,
    requirements,
    surplusItems,
    smartMatches,
    donations,
    verifyNGO
  } = useApp();

  const pendingNgos = ngoProfiles.filter(p => !p.isVerified);
  const verifiedNgos = ngoProfiles.filter(p => p.isVerified);

  return (
    <div className="space-y-8">
      
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] font-bold rounded uppercase">
              Master Admin Operations
            </span>
            <h1 className="text-2xl font-extrabold text-white">HopePoint Central Control Panel</h1>
            <p className="text-xs text-slate-200">
              Verify NGO government registrations, monitor smart match accuracy, and manage platform compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <div>
              <p className="text-[10px] text-purple-200 uppercase font-bold">Pending Verifications</p>
              <p className="text-lg font-extrabold text-amber-300">{pendingNgos.length} NGOs Awaiting</p>
            </div>
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* Admin Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Verified NGOs</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{verifiedNgos.length}</p>
          <p className="text-[10px] text-slate-400">Reg No. Authenticated</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Resource Requests</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">{requirements.length}</p>
          <p className="text-[10px] text-slate-400">Across Puducherry & India</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Successful Smart Matches ⭐</p>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">{smartMatches.length}</p>
          <p className="text-[10px] text-slate-400">Inter-NGO resource pairings</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Donations Processed</p>
          <p className="text-2xl font-extrabold text-purple-600 mt-1">{donations.length}</p>
          <p className="text-[10px] text-slate-400">Logged in ledger</p>
        </div>
      </div>

      {/* Pending NGO Verification Queue */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-900">Pending NGO Government Verification Queue</h2>
          <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-bold">
            {pendingNgos.length} Pending
          </span>
        </div>

        {pendingNgos.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-bold text-slate-800">All Registered NGOs Are Verified!</p>
            <p className="text-slate-400 mt-0.5">No pending applications in the verification queue.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingNgos.map(p => (
              <div key={p.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={p.logo} alt={p.name} className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-300" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{p.name}</h3>
                    <p className="text-xs text-slate-500">Reg No: <strong>{p.registrationNo}</strong> • {p.location}</p>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{p.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => verifyNGO(p.id)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Approve & Issue Verification Badge</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Verified NGOs Directory Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900">Verified Platform NGOs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                <th className="pb-3">NGO Name</th>
                <th className="pb-3">Registration No</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {verifiedNgos.map(ngo => (
                <tr key={ngo.id}>
                  <td className="py-3 font-bold text-slate-900 flex items-center gap-2">
                    <img src={ngo.logo} alt="" className="w-6 h-6 rounded-md object-cover" />
                    {ngo.name}
                  </td>
                  <td className="py-3 font-mono">{ngo.registrationNo}</td>
                  <td className="py-3">{ngo.category}</td>
                  <td className="py-3">{ngo.location}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                      Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
