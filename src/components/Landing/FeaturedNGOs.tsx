import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, ShieldCheck, MapPin, ArrowRight, Heart, CheckCircle2, Package } from 'lucide-react';

export const FeaturedNGOs: React.FC = () => {
  const { ngoProfiles, setSelectedNgoId, setActiveModal, setActiveView } = useApp();

  return (
    <section className="py-14 bg-white border-b border-[#E5E1DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="px-2.5 py-1 bg-[#EBE7E0] text-[#0D6B5E] text-[10px] font-bold rounded uppercase tracking-widest border border-[#DED9D1]">
              Verified Organizations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight mt-2">
              Featured NGOs & Social Care Centers
            </h2>
            <p className="text-xs text-[#6B665F] mt-1 font-medium">
              Explore government registration verified NGOs driving change in healthcare, education, shelter, and disability support.
            </p>
          </div>

          <button
            onClick={() => setActiveView('explore-ngos')}
            className="text-xs font-bold text-[#0D6B5E] hover:underline flex items-center gap-1 group"
          >
            <span>View All Registered NGOs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ngoProfiles.slice(0, 3).map(ngo => (
            <div
              key={ngo.id}
              className="bg-[#F9F8F6] border border-[#E5E1DB] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0D6B5E] transition-all"
            >
              <div>
                {/* Cover & Logo */}
                <div className="relative h-32 bg-[#E5E1DB]">
                  <img
                    src={ngo.coverImage}
                    alt={ngo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    {ngo.isVerified ? (
                      <span className="px-2 py-0.5 bg-white text-[#0D6B5E] text-[9px] font-bold rounded uppercase tracking-wider shadow-2xs border border-[#0D6B5E]/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#0D6B5E]" />
                        <span>Verified NGO</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-bold rounded uppercase border border-amber-200">
                        Pending
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0 relative">
                  <div className="-mt-7 mb-2 flex items-end justify-between">
                    <img
                      src={ngo.logo}
                      alt={ngo.name}
                      className="w-12 h-12 rounded-lg object-cover ring-2 ring-white shadow-xs bg-white"
                    />
                    <span className="text-[9px] font-bold text-[#9E978E] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#E5E1DB]">
                      Reg: {ngo.registrationNo}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#2D2D2D] line-clamp-1">{ngo.name}</h3>
                  <p className="text-[11px] text-[#6B665F] flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#9E978E]" />
                    <span>{ngo.location}</span>
                  </p>

                  <p className="text-xs text-[#6B665F] line-clamp-2 mt-2 leading-relaxed">
                    {ngo.description}
                  </p>

                  {/* Areas of Work Tags */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {ngo.areasOfWork.map((area, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#EBE7E0] text-[#0D6B5E] text-[9px] font-bold rounded uppercase tracking-wider border border-[#DED9D1]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Metrics & Action */}
              <div className="p-3.5 bg-white border-t border-[#E5E1DB] flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-[#9E978E] font-bold uppercase tracking-wider">Beneficiaries</p>
                  <p className="text-xs font-extrabold text-[#2D2D2D]">{ngo.beneficiariesSupported.toLocaleString()}+</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedNgoId(ngo.id);
                    setActiveModal('ngo-profile');
                  }}
                  className="px-3 py-1.5 bg-[#2D2D2D] hover:bg-[#2D2D2D]/90 text-white text-xs font-bold rounded-md transition-colors flex items-center gap-1"
                >
                  <span>View NGO Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
