import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  UserCheck,
  Search,
  Award,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Download,
  Building2,
  Briefcase
} from 'lucide-react';

export const VolunteerDashboard: React.FC = () => {
  const {
    currentUser,
    volunteerOpportunities,
    volunteerApplications,
    applyForVolunteer
  } = useApp();

  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const myApplications = volunteerApplications.filter(a => a.volunteerId === currentUser.id);

  return (
    <div className="space-y-8">
      
      {/* Volunteer Header */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-950 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded uppercase">
              Volunteer Portal
            </span>
            <h1 className="text-2xl font-extrabold text-white">Welcome, {currentUser.name}!</h1>
            <p className="text-xs text-slate-200">
              Your skills and time directly power community literacy, blanket distribution, and UDID disability drives.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <div>
              <p className="text-[10px] text-amber-200 uppercase font-bold">Hours Contributed</p>
              <p className="text-lg font-extrabold text-amber-300">24 Volunteer Hours</p>
            </div>
            <button
              onClick={() => setShowCertificateModal(true)}
              className="px-3 py-1.5 bg-amber-400 text-slate-900 font-bold text-xs rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1"
            >
              <Award className="w-4 h-4" />
              <span>Get Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunity Finder */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span>Find Volunteer Opportunities</span>
          <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full font-bold">
            {volunteerOpportunities.length} Drives Open
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerOpportunities.map(opp => {
            const hasApplied = myApplications.some(a => a.opportunityId === opp.id);
            return (
              <div
                key={opp.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-amber-600" />
                      {opp.ngoName}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] font-bold rounded">
                      {opp.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{opp.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{opp.description}</p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-500">
                    <p className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Duration: <strong>{opp.duration}</strong></span>
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Location: <strong>{opp.location}</strong></span>
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {opp.skillsRequired.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Spots: <strong>{opp.spotsFilled} / {opp.spotsTotal}</strong> Filled
                  </span>

                  {hasApplied ? (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Applied
                    </span>
                  ) : (
                    <button
                      onClick={() => applyForVolunteer(opp.id)}
                      className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Apply Now
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Applications Status Tracker */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900">My Volunteer Drive Applications</h2>

        {myApplications.length === 0 ? (
          <p className="text-center py-8 text-xs text-slate-400">You haven't applied for any volunteer drives yet.</p>
        ) : (
          <div className="space-y-3">
            {myApplications.map(app => (
              <div key={app.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{app.opportunityTitle}</h4>
                  <p className="text-slate-500 mt-0.5">NGO: {app.ngoName} • Applied: {app.appliedDate}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Volunteer Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="text-center border-b border-slate-100 pb-4">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-2" />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Certificate of Appreciation</h3>
              <p className="text-xs text-slate-500 mt-1">HopePoint Social Care Network</p>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 text-center space-y-2">
              <p className="text-xs text-slate-600 font-medium">This certificate is proudly awarded to</p>
              <p className="text-lg font-black text-slate-900">{currentUser.name}</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                For outstanding dedication, empathy, and active participation in community volunteer drives across Puducherry.
              </p>
              <div className="pt-2 text-[11px] font-bold text-slate-500">
                Logged Hours: 24 Hours • Issued: July 2026
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  alert('Certificate PDF downloaded to device!');
                  setShowCertificateModal(false);
                }}
                className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Certificate</span>
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
