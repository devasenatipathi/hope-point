import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { RoleSwitcher } from './components/RoleSwitcher';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Landing Components
import { Hero } from './components/Landing/Hero';
import { StatsSection } from './components/Landing/StatsSection';
import { HowItWorks } from './components/Landing/HowItWorks';
import { FeaturedNGOs } from './components/Landing/FeaturedNGOs';
import { SmartMatchPreview } from './components/Landing/SmartMatchPreview';
import { DisabilitySupportPreview } from './components/Landing/DisabilitySupportPreview';

// Dashboards
import { NGODashboard } from './components/Dashboards/NGODashboard';
import { DonorDashboard } from './components/Dashboards/DonorDashboard';
import { VolunteerDashboard } from './components/Dashboards/VolunteerDashboard';
import { BeneficiaryDashboard } from './components/Dashboards/BeneficiaryDashboard';
import { AdminDashboard } from './components/Dashboards/AdminDashboard';

// Modules
import { ExploreNGOsView } from './components/Modules/ExploreNGOsView';
import { SmartMatchingView } from './components/Modules/SmartMatchingView';
import { DisabilitySupportView } from './components/Modules/DisabilitySupportView';
import { ImpactDashboardView } from './components/Modules/ImpactDashboardView';

// Modals
import { PostRequirementModal } from './components/Modules/PostRequirementModal';
import { AddSurplusModal } from './components/Modules/AddSurplusModal';
import { DonationModal } from './components/Modules/DonationModal';
import { NGOProfileModal } from './components/Modules/NGOProfileModal';
import { TransparencyTrackerModal } from './components/Modules/TransparencyTrackerModal';
import { AuthModal } from './components/Modules/AuthModal';

const MainContent: React.FC = () => {
  const { activeView, activeModal } = useApp();

  const renderView = () => {
    switch (activeView) {
      case 'landing':
        return (
          <div className="space-y-0">
            <Hero />
            <StatsSection />
            <HowItWorks />
            <FeaturedNGOs />
            <SmartMatchPreview />
            <DisabilitySupportPreview />
          </div>
        );

      case 'explore-ngos':
        return <ExploreNGOsView />;

      case 'smart-matches':
        return <SmartMatchingView />;

      case 'disability-support':
        return <DisabilitySupportView />;

      case 'volunteer-portal':
        return <VolunteerDashboard />;

      case 'impact-dashboard':
        return <ImpactDashboardView />;

      case 'ngo-dashboard':
        return <NGODashboard />;

      case 'donor-dashboard':
        return <DonorDashboard />;

      case 'volunteer-dashboard':
        return <VolunteerDashboard />;

      case 'beneficiary-dashboard':
        return <BeneficiaryDashboard />;

      case 'admin-dashboard':
        return <AdminDashboard />;

      default:
        return (
          <div className="space-y-0">
            <Hero />
            <StatsSection />
            <HowItWorks />
            <FeaturedNGOs />
            <SmartMatchPreview />
            <DisabilitySupportPreview />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EE] flex flex-col justify-between font-sans antialiased text-[#2D2D2D]">
      <div>
        <RoleSwitcher />
        <Navbar />
        
        <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${activeView === 'landing' ? 'p-0 max-w-none' : ''}`}>
          {renderView()}
        </main>
      </div>

      <Footer />

      {/* Active Modals */}
      {activeModal === 'post-req' && <PostRequirementModal />}
      {activeModal === 'add-surplus' && <AddSurplusModal />}
      {activeModal === 'donation' && <DonationModal />}
      {activeModal === 'ngo-profile' && <NGOProfileModal />}
      {activeModal === 'track-donation' && <TransparencyTrackerModal />}
      
      {/* Auth Modal */}
      <AuthModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
