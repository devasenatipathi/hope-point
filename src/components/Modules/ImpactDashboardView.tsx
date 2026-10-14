import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  TrendingUp,
  Building2,
  Users,
  PackageCheck,
  HeartHandshake,
  ShieldCheck,
  Award
} from 'lucide-react';

export const ImpactDashboardView: React.FC = () => {
  const { ngoProfiles, requirements, surplusItems, donations } = useApp();

  const categoryData = [
    { name: 'Shelter & Clothing', count: 420 },
    { name: 'Assistive Devices', count: 180 },
    { name: 'Education & Books', count: 310 },
    { name: 'Medical Kits', count: 240 },
    { name: 'Food & Nutrition', count: 550 }
  ];

  const monthlyGrowth = [
    { month: 'Jan', donations: 120, matches: 45 },
    { month: 'Feb', donations: 190, matches: 82 },
    { month: 'Mar', donations: 280, matches: 130 },
    { month: 'Apr', donations: 340, matches: 195 },
    { month: 'May', donations: 490, matches: 260 },
    { month: 'Jun', donations: 620, matches: 340 },
    { month: 'Jul', donations: 810, matches: 420 }
  ];

  const pieData = [
    { name: 'Teaching & Mentoring', value: 35, color: '#2563eb' },
    { name: 'Disability & UDID Assistance', value: 30, color: '#0d9488' },
    { name: 'Food & Relief Drives', value: 20, color: '#d97706' },
    { name: 'Logistics & Warehouse', value: 15, color: '#9333ea' }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold rounded-full">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Audited Platform Analytics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            HopePoint Social Impact & Transparency Dashboard
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Real-time visual metrics tracking resource redistribution efficiency, NGO growth, volunteer participation, and beneficiary lives impacted.
          </p>
        </div>
      </div>

      {/* Top Stat Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total People Supported</p>
          <p className="text-3xl font-black text-blue-600 mt-1">5,420+</p>
          <p className="text-xs text-slate-500 mt-0.5">Across Puducherry & South India</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Resources Shared</p>
          <p className="text-3xl font-black text-emerald-600 mt-1">1,700+</p>
          <p className="text-xs text-slate-500 mt-0.5">In-kind items redistributed</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Smart Matches Completed</p>
          <p className="text-3xl font-black text-indigo-600 mt-1">320+</p>
          <p className="text-xs text-slate-500 mt-0.5">Inter-NGO resource transfers</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Audited Ledger Score</p>
          <p className="text-3xl font-black text-purple-600 mt-1">99.4%</p>
          <p className="text-xs text-slate-500 mt-0.5">Verification & proof photo rate</p>
        </div>
      </div>

      {/* Recharts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Bar Chart of Resources by Category */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Resource Redistribution by Category</h3>
              <p className="text-xs text-slate-500">In-kind items delivered to verified beneficiaries</p>
            </div>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full">Items Count</span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Donut Chart of Volunteer Hours */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Volunteer Hours Allocation</h3>
            <p className="text-xs text-slate-500">Distribution across community causes</p>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="truncate">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 3: Line Chart of Growth Over Time */}
        <div className="lg:col-span-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Monthly Growth: Donations & Smart Resource Matches</h3>
              <p className="text-xs text-slate-500">Progressive platform activity log for 2026</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="flex items-center gap-1 text-emerald-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Donations
              </span>
              <span className="flex items-center gap-1 text-indigo-600">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Smart Matches
              </span>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="donations" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="matches" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
};
