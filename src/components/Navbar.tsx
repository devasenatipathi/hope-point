import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  Search,
  Bell,
  CheckCircle2,
  Sparkles,
  User,
  LogOut,
  Building2,
  HeartHandshake,
  UserCheck,
  Accessibility,
  ShieldCheck,
  Menu,
  X,
  FileText,
  BarChart2,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    userRole,
    currentUser,
    switchRole,
    activeView,
    setActiveView,
    searchQuery,
    setSearchQuery,
    notifications,
    markNotificationAsRead,
    clearAllNotifications,
    setIsAuthModalOpen,
    setAuthModalMode,
    setSelectedRoleForRegister,
    setActiveModal
  } = useApp();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'ngo':
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case 'donor':
        return <HeartHandshake className="w-4 h-4 text-emerald-600" />;
      case 'volunteer':
        return <UserCheck className="w-4 h-4 text-amber-600" />;
      case 'beneficiary':
        return <Accessibility className="w-4 h-4 text-teal-600" />;
      case 'admin':
        return <ShieldCheck className="w-4 h-4 text-purple-600" />;
      default:
        return <User className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <header className="bg-white border-b border-[#E5E1DB] sticky top-[37px] z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('landing')}>
            <div className="w-9 h-9 rounded-lg bg-[#0D6B5E] flex items-center justify-center text-white shadow-xs">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-[#2D2D2D] tracking-tight">Hope<span className="text-[#0D6B5E]">Point</span></span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#EBE7E0] text-[#0D6B5E] rounded border border-[#DED9D1] uppercase tracking-wider">Social Care</span>
              </div>
              <p className="text-[10px] text-[#6B665F] font-medium hidden sm:block">Where Hope Meets Help</p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9E978E]" />
              <input
                type="text"
                placeholder="Search NGOs, resources, requirements, Puducherry drives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F9F8F6] focus:bg-white border border-[#E5E1DB] focus:border-[#0D6B5E] focus:ring-1 focus:ring-[#0D6B5E] rounded-lg transition-all outline-none text-[#2D2D2D] placeholder-[#9E978E]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9E978E] hover:text-[#2D2D2D] text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            <button
              onClick={() => handleNavClick('landing')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeView === 'landing' ? 'bg-[#0D6B5E]/10 text-[#0D6B5E]' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('explore-ngos')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeView === 'explore-ngos' ? 'bg-[#0D6B5E]/10 text-[#0D6B5E]' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              Explore NGOs
            </button>
            <button
              onClick={() => handleNavClick('smart-matches')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 ${
                activeView === 'smart-matches' ? 'bg-indigo-50 text-indigo-800' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Smart Matches</span>
            </button>
            <button
              onClick={() => handleNavClick('disability-support')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeView === 'disability-support' ? 'bg-orange-100/70 text-orange-800' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              Disability Support
            </button>
            <button
              onClick={() => handleNavClick('volunteer-portal')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeView === 'volunteer-portal' ? 'bg-amber-100/70 text-amber-800' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              Volunteer
            </button>
            <button
              onClick={() => handleNavClick('impact-dashboard')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeView === 'impact-dashboard' ? 'bg-[#0D6B5E]/10 text-[#0D6B5E]' : 'text-[#6B665F] hover:text-[#2D2D2D] hover:bg-[#F9F8F6]'
              }`}
            >
              Impact
            </button>
          </nav>

          {/* Action Buttons & Profile */}
          <div className="flex items-center gap-2">
            
            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Popover */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="px-1.5 py-0.2 bg-blue-100 text-blue-700 text-[10px] rounded-full font-bold">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={clearAllNotifications}
                        className="text-[11px] text-blue-600 hover:underline font-medium"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-2">
                    {notifications.length === 0 ? (
                      <p className="text-center py-6 text-xs text-slate-400">No notifications yet</p>
                    ) : (
                      notifications.map(n => (
                        <div
                          key={n.id}
                          onClick={() => markNotificationAsRead(n.id)}
                          className={`p-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                            n.isRead ? 'bg-slate-50 hover:bg-slate-100 text-slate-600' : 'bg-blue-50/60 hover:bg-blue-50 text-slate-900 font-medium border-l-2 border-blue-600'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-slate-800 text-[11px]">{n.title}</span>
                            <span className="text-[10px] text-slate-400">{n.timestamp}</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-600">{n.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* If Logged in or Persona Active */}
            {userRole !== 'guest' ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-lg object-cover ring-1 ring-slate-300"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-semibold text-slate-800 truncate max-w-[110px]">{currentUser.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{userRole}</p>
                  </div>
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-800">{currentUser.name}</p>
                      <p className="text-[11px] text-slate-500">{currentUser.email}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] rounded font-bold uppercase">
                        {userRole} Mode
                      </span>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setActiveView(`${userRole}-dashboard`);
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                      >
                        {getRoleIcon(userRole)}
                        <span>My Role Dashboard</span>
                      </button>

                      {userRole === 'ngo' && (
                        <button
                          onClick={() => {
                            setActiveModal('post-req');
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-600" />
                          <span>+ Post Requirement</span>
                        </button>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-1 mt-1">
                      <button
                        onClick={() => {
                          switchRole('guest');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-rose-50 text-rose-600 flex items-center gap-2 font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Switch to Guest View</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setAuthModalMode('login');
                    setIsAuthModalOpen(true);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-[#2D2D2D] hover:bg-[#F9F8F6] border border-[#E5E1DB] rounded-md transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setAuthModalMode('register');
                    setSelectedRoleForRegister('ngo');
                    setIsAuthModalOpen(true);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0D6B5E] hover:bg-[#0D6B5E]/90 rounded-md shadow-xs transition-colors flex items-center gap-1"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 text-xs">
          <button
            onClick={() => handleNavClick('landing')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'landing' ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('explore-ngos')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'explore-ngos' ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
            }`}
          >
            Explore NGOs
          </button>
          <button
            onClick={() => handleNavClick('smart-matches')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'smart-matches' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700'
            }`}
          >
            Smart Matching Interface ⭐
          </button>
          <button
            onClick={() => handleNavClick('disability-support')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'disability-support' ? 'bg-teal-50 text-teal-700' : 'text-slate-700'
            }`}
          >
            Disability Support Section
          </button>
          <button
            onClick={() => handleNavClick('volunteer-portal')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'volunteer-portal' ? 'bg-amber-50 text-amber-700' : 'text-slate-700'
            }`}
          >
            Volunteer Opportunities
          </button>
          <button
            onClick={() => handleNavClick('impact-dashboard')}
            className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
              activeView === 'impact-dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
            }`}
          >
            Impact & Transparency
          </button>
        </div>
      )}
    </header>
  );
};
