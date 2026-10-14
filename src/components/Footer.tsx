import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveView, switchRole } = useApp();

  return (
    <footer className="bg-[#2D2D2D] text-slate-400 text-xs py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#0D6B5E] flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-lg text-white">Hope<span className="text-[#0D6B5E]">Point</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed font-normal">
              A centralized social care platform connecting NGOs, donors, sponsors, volunteers, and beneficiaries to create a transparent, collaborative social welfare ecosystem.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Government Registered NGO Verification</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <p className="font-bold text-white uppercase text-[11px] tracking-wider">Platform Modules</p>
            <ul className="space-y-1.5">
              <li><button onClick={() => setActiveView('landing')} className="hover:text-white transition-colors">Home Landing</button></li>
              <li><button onClick={() => setActiveView('explore-ngos')} className="hover:text-white transition-colors">Explore Verified NGOs</button></li>
              <li><button onClick={() => setActiveView('smart-matches')} className="hover:text-white transition-colors">Smart Resource Matching ⭐</button></li>
              <li><button onClick={() => setActiveView('disability-support')} className="hover:text-white transition-colors">Disability Support & UDID</button></li>
              <li><button onClick={() => setActiveView('volunteer-portal')} className="hover:text-white transition-colors">Volunteer Opportunities</button></li>
              <li><button onClick={() => setActiveView('impact-dashboard')} className="hover:text-white transition-colors">Impact & Transparency Ledger</button></li>
            </ul>
          </div>

          {/* Col 3: Role Switcher Shortcuts */}
          <div className="space-y-2">
            <p className="font-bold text-white uppercase text-[11px] tracking-wider">Test Role Views</p>
            <ul className="space-y-1.5">
              <li><button onClick={() => switchRole('ngo')} className="hover:text-blue-400 transition-colors">NGO Dashboard View</button></li>
              <li><button onClick={() => switchRole('donor')} className="hover:text-emerald-400 transition-colors">Donor / Sponsor Dashboard</button></li>
              <li><button onClick={() => switchRole('volunteer')} className="hover:text-amber-400 transition-colors">Volunteer Portal View</button></li>
              <li><button onClick={() => switchRole('beneficiary')} className="hover:text-teal-400 transition-colors">Beneficiary Support View</button></li>
              <li><button onClick={() => switchRole('admin')} className="hover:text-purple-400 transition-colors">Master Admin Control Panel</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-2">
            <p className="font-bold text-white uppercase text-[11px] tracking-wider">Hub Location</p>
            <p className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Heritage Town, White Town, Puducherry - 605001</span>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>contact@hopepoint.org</span>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Emergency Helpline: 1800-425-0011</span>
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 HopePoint Centralized Social Care Platform. All rights reserved.</p>
          <p>Where Need Meets Match • Built for Puducherry & Social Care Networks</p>
        </div>

      </div>
    </footer>
  );
};
