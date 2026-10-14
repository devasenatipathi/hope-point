import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Heart,
  HeartHandshake,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Package,
  DollarSign,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const DonorDashboard: React.FC = () => {
  const {
    currentUser,
    requirements,
    donations,
    setActiveModal,
    setSelectedRequirementId,
    setSelectedDonationId,
    searchQuery
  } = useApp();

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [urgencyFilter, setUrgencyFilter] = useState('All');

  const myDonations = donations.filter(d => d.donorId === currentUser.id);

  // Filter open requirements
  const filteredRequirements = requirements.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.ngoName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'All' || r.category === categoryFilter;
    const matchesUrg = urgencyFilter === 'All' || r.urgency === urgencyFilter;
    return matchesSearch && matchesCat && matchesUrg;
  });

  return (
    <div className="space-y-8">
      
      {/* Donor Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded uppercase">
              Donor / Sponsor Portal
            </span>
            <h1 className="text-2xl font-extrabold text-white">Welcome Back, {currentUser.name}!</h1>
            <p className="text-xs text-slate-200">
              Your donations directly support verified NGOs with full transparent tracking from receipt to distribution.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <div>
              <p className="text-[10px] text-slate-300 uppercase font-bold">Total Contributed</p>
              <p className="text-lg font-extrabold text-emerald-300">₹ 18,000 + 20 Items</p>
            </div>
            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300">
              <Heart className="w-5 h-5 fill-emerald-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Filter Requirements:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 font-medium"
          >
            <option value="All">All Categories</option>
            <option value="Shelter & Clothing">Shelter & Clothing</option>
            <option value="Assistive Devices">Assistive Devices</option>
            <option value="Education & Books">Education & Books</option>
            <option value="Healthcare & Medical">Healthcare & Medical</option>
          </select>

          {/* Urgency Dropdown */}
          <select
            value={urgencyFilter}
            onChange={(e) => setUrgencyFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 font-medium"
          >
            <option value="All">All Urgency Levels</option>
            <option value="Emergency">Emergency</option>
            <option value="High">High Urgency</option>
            <option value="Medium">Medium Urgency</option>
          </select>
        </div>
      </div>

      {/* Current Needs Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span>Explore Verified NGO Current Needs</span>
          <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold">
            {filteredRequirements.length} Needs Open
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequirements.map(req => {
            const pct = Math.round((req.quantityFulfilled / req.quantityRequired) * 100);
            return (
              <div
                key={req.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 bg-slate-100">
                    <img
                      src={req.imageUrl}
                      alt={req.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded shadow-xs ${
                        req.urgency === 'Emergency'
                          ? 'bg-rose-600 text-white'
                          : req.urgency === 'High'
                          ? 'bg-amber-500 text-white'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {req.urgency} Urgency
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        {req.ngoName}
                        {req.ngoVerified && <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />}
                      </span>
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-semibold">{req.category}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{req.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{req.description}</p>

                    {/* Progress Bar */}
                    <div className="pt-2 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                        <span>Fulfilled: {req.quantityFulfilled} / {req.quantityRequired} {req.unit}</span>
                        <span className="text-emerald-600 font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {req.location}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedRequirementId(req.id);
                      setActiveModal('donation');
                    }}
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center gap-1"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Donate Now</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Donation History Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900">My Donation History & Live Tracking</h2>

        {myDonations.length === 0 ? (
          <p className="text-center py-8 text-xs text-slate-400">No donations made yet. Click "Donate Now" above to make your first contribution!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                  <th className="pb-3">Tracking Code</th>
                  <th className="pb-3">Recipient NGO</th>
                  <th className="pb-3">Contribution</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {myDonations.map(d => (
                  <tr key={d.id} className="hover:bg-slate-50">
                    <td className="py-3 font-mono font-bold text-slate-800">{d.trackingCode}</td>
                    <td className="py-3 font-semibold text-slate-800">{d.ngoName}</td>
                    <td className="py-3 text-emerald-700 font-bold">{d.itemTitle} ({d.quantityOrAmount})</td>
                    <td className="py-3 text-slate-500">{d.date}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-[10px]">
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => {
                          setSelectedDonationId(d.id);
                          setActiveModal('track-donation');
                        }}
                        className="text-xs text-blue-600 font-bold hover:underline"
                      >
                        Track Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
