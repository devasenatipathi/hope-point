import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { X, Building2, HeartHandshake, UserCheck, Accessibility, ShieldCheck, Lock, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    selectedRoleForRegister,
    setSelectedRoleForRegister,
    switchRole
  } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Puducherry, India');
  
  // Role specific fields
  const [ngoRegNo, setNgoRegNo] = useState('PY/NGO/2026/1022');
  const [ngoCategory, setNgoCategory] = useState('Food & Shelter');
  const [preferredCause, setPreferredCause] = useState('Healthcare');
  const [skills, setSkills] = useState('Teaching, Logistics');

  if (!isAuthModalOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authModalMode === 'login') {
      // Demo authentication switch
      switchRole(selectedRoleForRegister || 'ngo');
    } else {
      // Registration complete - switch to registered role
      switchRole(selectedRoleForRegister);
    }

    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {authModalMode === 'login' ? 'HopePoint Login' : 'Role-Based Registration'}
            </h3>
            <p className="text-xs text-slate-500">
              {authModalMode === 'login' ? 'Access your role dashboard' : 'Join as an NGO, Donor, Volunteer, or Beneficiary'}
            </p>
          </div>
          <button onClick={() => setIsAuthModalOpen(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Select User Role</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setSelectedRoleForRegister('ngo')}
              className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedRoleForRegister === 'ngo'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>NGO</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRoleForRegister('donor')}
              className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedRoleForRegister === 'donor'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Donor</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRoleForRegister('volunteer')}
              className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedRoleForRegister === 'volunteer'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Volunteer</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRoleForRegister('beneficiary')}
              className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                selectedRoleForRegister === 'beneficiary'
                  ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Accessibility className="w-4 h-4" />
              <span>Beneficiary</span>
            </button>
          </div>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-3 text-xs">
          
          {authModalMode === 'register' && (
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {selectedRoleForRegister === 'ngo' ? 'NGO Name' : 'Full Name'}
              </label>
              <input
                type="text"
                placeholder={selectedRoleForRegister === 'ngo' ? 'e.g. CareTrust Foundation' : 'e.g. Ananya Roy'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="user@hopepoint.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>
          </div>

          {authModalMode === 'register' && (
            <>
              {/* NGO Specific Fields */}
              {selectedRoleForRegister === 'ngo' && (
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                  <p className="font-bold text-blue-900 text-xs">NGO Verification Details</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700">Govt Reg Number</label>
                      <input
                        type="text"
                        value={ngoRegNo}
                        onChange={(e) => setNgoRegNo(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded p-1.5 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700">Primary Category</label>
                      <select
                        value={ngoCategory}
                        onChange={(e) => setNgoCategory(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded p-1.5 text-xs"
                      >
                        <option value="Food & Shelter">Food & Shelter</option>
                        <option value="Education & Child Care">Education & Child Care</option>
                        <option value="Disability & Rehab">Disability & Rehab</option>
                        <option value="Healthcare & Medical">Healthcare & Medical</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500">
                    * Note: NGO account will remain <strong>"Pending Verification"</strong> until Admin verifies government registration credentials.
                  </p>
                </div>
              )}

              {/* Volunteer Specific Fields */}
              {selectedRoleForRegister === 'volunteer' && (
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Skills & Interests</label>
                  <input
                    type="text"
                    placeholder="e.g. Teaching, UDID Counseling, Driving"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5"
                  />
                </div>
              )}
            </>
          )}

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md text-xs"
            >
              {authModalMode === 'login' ? `Login as ${selectedRoleForRegister.toUpperCase()}` : `Register as ${selectedRoleForRegister.toUpperCase()}`}
            </button>

            <div className="text-center pt-1">
              {authModalMode === 'login' ? (
                <button
                  type="button"
                  onClick={() => setAuthModalMode('register')}
                  className="text-xs text-blue-600 font-bold hover:underline"
                >
                  Don't have an account? Register Now
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setAuthModalMode('login')}
                  className="text-xs text-blue-600 font-bold hover:underline"
                >
                  Already registered? Login Here
                </button>
              )}
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
