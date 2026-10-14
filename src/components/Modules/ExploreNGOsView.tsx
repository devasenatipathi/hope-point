import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Building2, ShieldCheck, MapPin, ArrowRight, Filter, Heart } from 'lucide-react';

export const ExploreNGOsView: React.FC = () => {
  const { ngoProfiles, setSelectedNgoId, setActiveModal, searchQuery, setSearchQuery } = useApp();

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filteredNgos = ngoProfiles.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ngo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ngo.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'All' || ngo.category === categoryFilter;
    const matchesVer = !verifiedOnly || ngo.isVerified;
    return matchesSearch && matchesCat && matchesVer;
  });

  return (
    <div className="space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-2xl space-y-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full uppercase">
            Transparent Care Network
          </span>
          <h1 className="text-3xl font-extrabold text-white">Explore Verified NGOs & Care Centers</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Connect directly with government-registered non-profits across Puducherry and India. Support active drives, view surplus resources, or partner for community welfare.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by NGO name, category, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 font-medium"
          >
            <option value="All">All Categories</option>
            <option value="Food & Shelter">Food & Shelter</option>
            <option value="Education & Child Care">Education & Child Care</option>
            <option value="Disability & Rehab">Disability & Rehab</option>
            <option value="Healthcare & Medical">Healthcare & Medical</option>
          </select>

          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Show Verified Only</span>
          </label>
        </div>
      </div>

      {/* NGO Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNgos.map(ngo => (
          <div
            key={ngo.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-32 bg-slate-200">
                <img src={ngo.coverImage} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  {ngo.isVerified ? (
                    <span className="px-2 py-0.5 bg-white/90 backdrop-blur-xs text-emerald-800 text-[10px] font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full">
                      Pending
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 relative">
                <div className="-mt-8 mb-3 flex items-end justify-between">
                  <img src={ngo.logo} alt="" className="w-14 h-14 rounded-xl object-cover ring-4 ring-white shadow-md bg-white" />
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Reg: {ngo.registrationNo}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{ngo.name}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> {ngo.location}
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                  {ngo.description}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Beneficiaries</p>
                <p className="text-sm font-extrabold text-slate-800">{ngo.beneficiariesSupported.toLocaleString()}+</p>
              </div>

              <button
                onClick={() => {
                  setSelectedNgoId(ngo.id);
                  setActiveModal('ngo-profile');
                }}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
