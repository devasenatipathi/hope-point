import React from 'react';
import { Building2, Users, PackageCheck, HeartHandshake } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'ngos',
      value: '100+',
      label: 'Verified NGOs',
      subtext: 'Across Puducherry & India',
      icon: <Building2 className="w-5 h-5 text-[#0D6B5E]" />,
      bgColor: 'bg-[#F9F8F6]',
      borderColor: 'border-[#E5E1DB]'
    },
    {
      id: 'volunteers',
      value: '500+',
      label: 'Active Volunteers',
      subtext: 'Dedicated community helpers',
      icon: <Users className="w-5 h-5 text-amber-700" />,
      bgColor: 'bg-[#F9F8F6]',
      borderColor: 'border-[#E5E1DB]'
    },
    {
      id: 'resources',
      value: '1,000+',
      label: 'Resources Shared',
      subtext: 'In-kind items redistributed',
      icon: <PackageCheck className="w-5 h-5 text-[#0D6B5E]" />,
      bgColor: 'bg-[#F9F8F6]',
      borderColor: 'border-[#E5E1DB]'
    },
    {
      id: 'supported',
      value: '5,000+',
      label: 'People Supported',
      subtext: 'Direct beneficiaries reached',
      icon: <HeartHandshake className="w-5 h-5 text-purple-700" />,
      bgColor: 'bg-[#F9F8F6]',
      borderColor: 'border-[#E5E1DB]'
    }
  ];

  return (
    <section className="py-10 bg-white border-b border-[#E5E1DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div
              key={s.id}
              className={`p-4 rounded-xl ${s.bgColor} border ${s.borderColor} transition-all duration-150 flex flex-col items-start gap-2`}
            >
              <div className="p-2 bg-white rounded-lg shadow-xs border border-[#E5E1DB]">
                {s.icon}
              </div>
              <div className="mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">{s.value}</span>
                <h3 className="text-xs font-bold text-[#2D2D2D] mt-0.5">{s.label}</h3>
                <p className="text-[11px] text-[#6B665F] font-medium">{s.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
