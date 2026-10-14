import React from 'react';
import { useApp } from '../../context/AppContext';
import { Accessibility, CreditCard, GraduationCap, Briefcase, Heart, ArrowRight } from 'lucide-react';

export const DisabilitySupportPreview: React.FC = () => {
  const { setActiveView } = useApp();

  const features = [
    {
      title: '🪪 UDID Support',
      desc: 'Step-by-step registration guidance and application support for Unique Disability ID cards.',
      icon: <CreditCard className="w-5 h-5 text-teal-600" />
    },
    {
      title: '🎓 Skill Development',
      desc: 'Free vocational, IT, and administrative skill training programs tailored for all abilities.',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />
    },
    {
      title: '💼 Inclusive Employment',
      desc: 'Direct connections with equal-opportunity corporate employers hiring for remote and office roles.',
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />
    },
    {
      title: '🦽 Assistive Devices',
      desc: 'Sponsorship for wheelchairs, hearing aids, braille slates, prosthetics, and mobility trikes.',
      icon: <Accessibility className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section className="py-14 bg-[#F4F1EE] border-b border-[#E5E1DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="px-2.5 py-1 bg-orange-100/80 text-orange-800 text-[10px] font-bold rounded uppercase tracking-widest border border-orange-200">
              Specialized Care Module
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight mt-2">
              Disability Support & Empowerment
            </h2>
            <p className="text-xs text-[#6B665F] mt-1 font-medium">
              Guiding beneficiaries through official government UDID documentation, assistive mobility devices, and inclusive career pathways.
            </p>
          </div>

          <button
            onClick={() => setActiveView('disability-support')}
            className="text-xs font-bold text-[#0D6B5E] hover:underline flex items-center gap-1 group"
          >
            <span>Open Disability Support Portal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-[#E5E1DB] shadow-2xs hover:border-[#0D6B5E] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-[#F9F8F6] w-fit rounded-lg border border-[#E5E1DB] mb-3">
                  {f.icon}
                </div>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-1">{f.title}</h3>
                <p className="text-xs text-[#6B665F] leading-relaxed font-normal">{f.desc}</p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#E5E1DB]">
                <button
                  onClick={() => setActiveView('disability-support')}
                  className="text-xs font-bold text-[#0D6B5E] hover:underline flex items-center gap-1"
                >
                  <span>Learn More & Apply</span>
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
