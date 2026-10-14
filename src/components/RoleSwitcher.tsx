import React from 'react';
import { useApp } from '../context/AppContext';
import { UserRole } from '../types';
import { Building2, HeartHandshake, UserCheck, Accessibility, ShieldCheck, Eye } from 'lucide-react';

export const RoleSwitcher: React.FC = () => {
  const { userRole, switchRole } = useApp();

  const roles: { role: UserRole; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
    {
      role: 'guest',
      label: 'Guest Landing',
      icon: <Eye className="w-3.5 h-3.5" />,
      color: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300',
      desc: 'Public landing, NGO directory & stats'
    },
    {
      role: 'ngo',
      label: 'NGO Role',
      icon: <Building2 className="w-3.5 h-3.5" />,
      color: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
      desc: 'CareTrust Foundation (Post Needs & Surplus)'
    },
    {
      role: 'donor',
      label: 'Donor / Sponsor',
      icon: <HeartHandshake className="w-3.5 h-3.5" />,
      color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
      desc: 'Ananya Roy (Explore Needs & Donate)'
    },
    {
      role: 'volunteer',
      label: 'Volunteer',
      icon: <UserCheck className="w-3.5 h-3.5" />,
      color: 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200',
      desc: 'Rahul Sharma (Apply for Drives & Skills)'
    },
    {
      role: 'beneficiary',
      label: 'Beneficiary',
      icon: <Accessibility className="w-3.5 h-3.5" />,
      color: 'bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200',
      desc: 'Lakshmi Narayanan (Request Help & Disability)'
    },
    {
      role: 'admin',
      label: 'Master Admin',
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      color: 'bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200',
      desc: 'HopePoint Admin (Verify NGOs & Analytics)'
    }
  ];

  return (
    <div className="bg-[#2D2D2D] text-white text-xs py-2 px-3 border-b border-slate-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#0D6B5E] animate-pulse"></span>
          <span className="text-[#9E978E] uppercase tracking-wider text-[10px] font-bold">Interactive Role Demo:</span>
          <span className="hidden md:inline text-slate-300 text-[11px]">Click role to test workflows:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto max-w-full pb-0.5 sm:pb-0">
          {roles.map(r => {
            const isActive = userRole === r.role;
            return (
              <button
                key={r.role}
                onClick={() => switchRole(r.role)}
                title={r.desc}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 border ${
                  isActive
                    ? 'bg-white text-slate-900 border-white shadow-sm ring-2 ring-blue-500 font-semibold scale-[1.02]'
                    : `${r.color} opacity-90 hover:opacity-100`
                }`}
              >
                {r.icon}
                <span>{r.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
