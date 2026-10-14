import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserRole,
  UserProfile,
  NGOProfile,
  RequirementItem,
  SurplusItem,
  SmartMatch,
  DonationRecord,
  VolunteerOpportunity,
  VolunteerApplication,
  DisabilityResource,
  BeneficiaryRequest,
  AppNotification
} from '../types';
import {
  DEMO_USERS,
  INITIAL_NGO_PROFILES,
  INITIAL_REQUIREMENTS,
  INITIAL_SURPLUS,
  INITIAL_SMART_MATCHES,
  INITIAL_VOLUNTEER_OPPORTUNITIES,
  INITIAL_DISABILITY_RESOURCES,
  INITIAL_DONATIONS,
  INITIAL_NOTIFICATIONS,
  INITIAL_BENEFICIARY_REQUESTS
} from '../mockData';

interface AppContextType {
  // Auth & Roles
  userRole: UserRole;
  currentUser: UserProfile;
  switchRole: (role: UserRole) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalMode: 'login' | 'register';
  setAuthModalMode: (mode: 'login' | 'register') => void;
  selectedRoleForRegister: UserRole;
  setSelectedRoleForRegister: (role: UserRole) => void;

  // Navigation / Views
  activeView: string;
  setActiveView: (view: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Data Collections
  ngoProfiles: NGOProfile[];
  requirements: RequirementItem[];
  surplusItems: SurplusItem[];
  smartMatches: SmartMatch[];
  donations: DonationRecord[];
  volunteerOpportunities: VolunteerOpportunity[];
  volunteerApplications: VolunteerApplication[];
  disabilityResources: DisabilityResource[];
  beneficiaryRequests: BeneficiaryRequest[];
  notifications: AppNotification[];

  // Action Methods
  postRequirement: (data: Omit<RequirementItem, 'id' | 'ngoId' | 'ngoName' | 'ngoLocation' | 'ngoVerified' | 'ngoCategory' | 'createdAt' | 'quantityFulfilled'>) => void;
  addSurplusResource: (data: Omit<SurplusItem, 'id' | 'ngoId' | 'ngoName' | 'ngoLocation' | 'createdAt'>) => void;
  createDonation: (data: { ngoId: string; ngoName: string; requirementId?: string; type: 'In-Kind' | 'Financial'; itemTitle: string; quantityOrAmount: string; amountNumber?: number }) => DonationRecord;
  applyForVolunteer: (opportunityId: string) => void;
  createBeneficiaryRequest: (data: { category: string; requiredAssistance: string; location: string; urgency: RequirementItem['urgency'] }) => void;
  verifyNGO: (ngoId: string) => void;
  updateMatchStatus: (matchId: string, status: SmartMatch['status']) => void;

  // Modals & Active Selections
  activeModal: string | null; // e.g. 'post-req' | 'add-surplus' | 'donation' | 'track-donation' | 'ngo-profile' | 'volunteer-apply'
  setActiveModal: (modal: string | null) => void;
  selectedNgoId: string | null;
  setSelectedNgoId: (id: string | null) => void;
  selectedRequirementId: string | null;
  setSelectedRequirementId: (id: string | null) => void;
  selectedDonationId: string | null;
  setSelectedDonationId: (id: string | null) => void;

  // Notification methods
  markNotificationAsRead: (id: string) => void;
  clearAllNotifications: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [currentUser, setCurrentUser] = useState<UserProfile>(DEMO_USERS.ngo);
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [selectedRoleForRegister, setSelectedRoleForRegister] = useState<UserRole>('ngo');

  const [activeView, setActiveView] = useState('landing');
  const [searchQuery, setSearchQuery] = useState('');

  // Collections
  const [ngoProfiles, setNgoProfiles] = useState<NGOProfile[]>(INITIAL_NGO_PROFILES);
  const [requirements, setRequirements] = useState<RequirementItem[]>(INITIAL_REQUIREMENTS);
  const [surplusItems, setSurplusItems] = useState<SurplusItem[]>(INITIAL_SURPLUS);
  const [smartMatches, setSmartMatches] = useState<SmartMatch[]>(INITIAL_SMART_MATCHES);
  const [donations, setDonations] = useState<DonationRecord[]>(INITIAL_DONATIONS);
  const [volunteerOpportunities, setVolunteerOpportunities] = useState<VolunteerOpportunity[]>(INITIAL_VOLUNTEER_OPPORTUNITIES);
  const [volunteerApplications, setVolunteerApplications] = useState<VolunteerApplication[]>([]);
  const [disabilityResources] = useState<DisabilityResource[]>(INITIAL_DISABILITY_RESOURCES);
  const [beneficiaryRequests, setBeneficiaryRequests] = useState<BeneficiaryRequest[]>(INITIAL_BENEFICIARY_REQUESTS);
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);

  // Modals
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedNgoId, setSelectedNgoId] = useState<string | null>(null);
  const [selectedRequirementId, setSelectedRequirementId] = useState<string | null>(null);
  const [selectedDonationId, setSelectedDonationId] = useState<string | null>(null);

  const switchRole = (role: UserRole) => {
    setUserRole(role);
    if (role === 'guest') {
      setCurrentUser({
        id: 'guest',
        name: 'Guest Visitor',
        email: 'guest@hopepoint.org',
        role: 'guest'
      });
      setActiveView('landing');
    } else if (DEMO_USERS[role]) {
      setCurrentUser(DEMO_USERS[role]);
      setActiveView(`${role}-dashboard`);
    }
  };

  // Run auto smart-matching algorithm whenever new requirement or surplus is added
  const triggerSmartMatching = (
    currentSurplus: SurplusItem[],
    currentReqs: RequirementItem[]
  ) => {
    const newMatches: SmartMatch[] = [];

    currentSurplus.forEach(surplus => {
      currentReqs.forEach(req => {
        // Simple intelligent score calculation
        let score = 50;
        const reasons: string[] = [];

        // Category match
        if (surplus.category.toLowerCase().includes(req.category.toLowerCase()) || 
            req.category.toLowerCase().includes(surplus.category.toLowerCase())) {
          score += 25;
          reasons.push(`Category Match (${surplus.category})`);
        }

        // Location match
        const surLoc = surplus.location.toLowerCase();
        const reqLoc = req.location.toLowerCase();
        if (surLoc.includes(reqLoc) || reqLoc.includes(surLoc) || (surLoc.includes('puducherry') && reqLoc.includes('puducherry'))) {
          score += 20;
          reasons.push('Same City / District Radius (< 10 km)');
        } else {
          score += 5;
          reasons.push('Inter-city Regional Logistics Route');
        }

        // Quantity overlap
        if (surplus.quantityAvailable >= req.quantityRequired - req.quantityFulfilled) {
          score += 15;
          reasons.push(`Surplus quantity (${surplus.quantityAvailable}) covers requirement (${req.quantityRequired - req.quantityFulfilled})`);
        } else {
          score += 8;
          reasons.push('Partial quantity fulfillment possible');
        }

        // Urgency factor
        if (req.urgency === 'Emergency' || req.urgency === 'High') {
          score += 5;
          reasons.push(`Urgent need prioritization (${req.urgency})`);
        }

        if (score >= 65 && surplus.ngoId !== req.ngoId) {
          newMatches.push({
            id: `match-auto-${surplus.id}-${req.id}`,
            surplusItemId: surplus.id,
            requirementItemId: req.id,
            offeringNgoName: surplus.ngoName,
            offeringNgoId: surplus.ngoId,
            offeringLocation: surplus.location,
            requestingNgoName: req.ngoName,
            requestingNgoId: req.ngoId,
            requestingLocation: req.location,
            resourceTitle: `${surplus.title} ↔ ${req.title}`,
            matchedQuantity: Math.min(surplus.quantityAvailable, req.quantityRequired - req.quantityFulfilled),
            unit: surplus.unit || 'Units',
            matchScore: Math.min(score, 98),
            matchReasons: reasons,
            status: 'Pending Review',
            urgency: req.urgency,
            distanceKm: surLoc.includes('puducherry') && reqLoc.includes('puducherry') ? 4.5 : 28.0,
            createdAt: new Date().toISOString().split('T')[0]
          });
        }
      });
    });

    if (newMatches.length > 0) {
      setSmartMatches(prev => {
        // avoid duplicates
        const existingIds = new Set(prev.map(m => m.id));
        const filteredNew = newMatches.filter(m => !existingIds.has(m.id));
        return [...filteredNew, ...prev];
      });
    }
  };

  const postRequirement = (
    data: Omit<RequirementItem, 'id' | 'ngoId' | 'ngoName' | 'ngoLocation' | 'ngoVerified' | 'ngoCategory' | 'createdAt' | 'quantityFulfilled'>
  ) => {
    const ngoProfile = ngoProfiles.find(p => p.id === currentUser.id) || ngoProfiles[0];
    const newReq: RequirementItem = {
      ...data,
      id: `req-${Date.now()}`,
      ngoId: ngoProfile.id,
      ngoName: ngoProfile.name,
      ngoLocation: ngoProfile.location,
      ngoVerified: ngoProfile.isVerified,
      ngoCategory: ngoProfile.category,
      quantityFulfilled: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    const updatedReqs = [newReq, ...requirements];
    setRequirements(updatedReqs);
    triggerSmartMatching(surplusItems, updatedReqs);

    // add notification
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '📌 New NGO Requirement Posted',
      message: `${ngoProfile.name} posted a requirement for ${newReq.quantityRequired} ${newReq.unit} of ${newReq.title}.`,
      timestamp: 'Just now',
      isRead: false,
      type: 'general',
      roleTarget: 'all'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const addSurplusResource = (
    data: Omit<SurplusItem, 'id' | 'ngoId' | 'ngoName' | 'ngoLocation' | 'createdAt'>
  ) => {
    const ngoProfile = ngoProfiles.find(p => p.id === currentUser.id) || ngoProfiles[0];
    const newSurplus: SurplusItem = {
      ...data,
      id: `surplus-${Date.now()}`,
      ngoId: ngoProfile.id,
      ngoName: ngoProfile.name,
      ngoLocation: ngoProfile.location,
      createdAt: new Date().toISOString().split('T')[0]
    };

    const updatedSurplus = [newSurplus, ...surplusItems];
    setSurplusItems(updatedSurplus);
    triggerSmartMatching(updatedSurplus, requirements);

    // add notification
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '📦 New Surplus Resource Listed',
      message: `${ngoProfile.name} listed ${newSurplus.quantityAvailable} ${newSurplus.unit} of ${newSurplus.title} as surplus!`,
      timestamp: 'Just now',
      isRead: false,
      type: 'match',
      roleTarget: 'all'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const createDonation = (data: {
    ngoId: string;
    ngoName: string;
    requirementId?: string;
    type: 'In-Kind' | 'Financial';
    itemTitle: string;
    quantityOrAmount: string;
    amountNumber?: number;
  }) => {
    const trackingCode = `HP-DON-${Math.floor(100000 + Math.random() * 900000)}`;
    const newDonation: DonationRecord = {
      id: `don-${Date.now()}`,
      donorId: currentUser.id,
      donorName: currentUser.name,
      ngoId: data.ngoId,
      ngoName: data.ngoName,
      requirementId: data.requirementId,
      type: data.type,
      itemTitle: data.itemTitle,
      quantityOrAmount: data.quantityOrAmount,
      amountNumber: data.amountNumber,
      status: 'Initiated',
      date: new Date().toISOString().split('T')[0],
      trackingCode,
      impactNote: 'Donation logged in HopePoint transparency ledger.',
      proofImageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80'
    };

    setDonations(prev => [newDonation, ...prev]);

    // Update requirement fulfillment if applicable
    if (data.requirementId) {
      setRequirements(prev =>
        prev.map(r => {
          if (r.id === data.requirementId) {
            const addedQty = data.type === 'In-Kind' ? parseInt(data.quantityOrAmount) || 1 : 0;
            const addedAmt = data.type === 'Financial' ? data.amountNumber || 0 : 0;
            return {
              ...r,
              quantityFulfilled: Math.min(r.quantityRequired, r.quantityFulfilled + addedQty),
              financialRaised: (r.financialRaised || 0) + addedAmt
            };
          }
          return r;
        })
      );
    }

    // Add notification
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '🎁 Thank You for Your Donation!',
      message: `Your donation of ${data.quantityOrAmount} for ${data.ngoName} has been logged with code ${trackingCode}.`,
      timestamp: 'Just now',
      isRead: false,
      type: 'donation'
    };
    setNotifications(prev => [newNotif, ...prev]);

    return newDonation;
  };

  const applyForVolunteer = (opportunityId: string) => {
    const opp = volunteerOpportunities.find(o => o.id === opportunityId);
    if (!opp) return;

    const newApp: VolunteerApplication = {
      id: `vapp-${Date.now()}`,
      volunteerId: currentUser.id,
      volunteerName: currentUser.name,
      opportunityId: opp.id,
      opportunityTitle: opp.title,
      ngoName: opp.ngoName,
      skills: currentUser.skills || ['General Assistance'],
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };

    setVolunteerApplications(prev => [newApp, ...prev]);

    // update spots
    setVolunteerOpportunities(prev =>
      prev.map(o => (o.id === opportunityId ? { ...o, spotsFilled: Math.min(o.spotsTotal, o.spotsFilled + 1) } : o))
    );

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '🤝 Volunteer Application Submitted',
      message: `Your application for "${opp.title}" at ${opp.ngoName} was received successfully.`,
      timestamp: 'Just now',
      isRead: false,
      type: 'volunteer'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const createBeneficiaryRequest = (data: {
    category: string;
    requiredAssistance: string;
    location: string;
    urgency: RequirementItem['urgency'];
  }) => {
    const newReq: BeneficiaryRequest = {
      id: `benreq-${Date.now()}`,
      beneficiaryId: currentUser.id,
      beneficiaryName: currentUser.name,
      category: data.category,
      requiredAssistance: data.requiredAssistance,
      location: data.location,
      urgency: data.urgency,
      status: 'Submitted',
      requestDate: new Date().toISOString().split('T')[0]
    };

    setBeneficiaryRequests(prev => [newReq, ...prev]);

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '🙏 Assistance Request Submitted',
      message: `Your request for ${data.category} in ${data.location} has been registered with HopePoint support team.`,
      timestamp: 'Just now',
      isRead: false,
      type: 'general'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const verifyNGO = (ngoId: string) => {
    setNgoProfiles(prev =>
      prev.map(p =>
        p.id === ngoId
          ? { ...p, isVerified: true, verificationBadgeDate: new Date().toISOString().split('T')[0] }
          : p
      )
    );

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: '✅ NGO Status Verified',
      message: `NGO ID ${ngoId} has been verified by HopePoint Admin! Verification badge issued.`,
      timestamp: 'Just now',
      isRead: false,
      type: 'verification',
      roleTarget: 'admin'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const updateMatchStatus = (matchId: string, status: SmartMatch['status']) => {
    setSmartMatches(prev =>
      prev.map(m => (m.id === matchId ? { ...m, status } : m))
    );
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        currentUser,
        switchRole,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        selectedRoleForRegister,
        setSelectedRoleForRegister,
        activeView,
        setActiveView,
        searchQuery,
        setSearchQuery,
        ngoProfiles,
        requirements,
        surplusItems,
        smartMatches,
        donations,
        volunteerOpportunities,
        volunteerApplications,
        disabilityResources,
        beneficiaryRequests,
        notifications,
        postRequirement,
        addSurplusResource,
        createDonation,
        applyForVolunteer,
        createBeneficiaryRequest,
        verifyNGO,
        updateMatchStatus,
        activeModal,
        setActiveModal,
        selectedNgoId,
        setSelectedNgoId,
        selectedRequirementId,
        setSelectedRequirementId,
        selectedDonationId,
        setSelectedDonationId,
        markNotificationAsRead,
        clearAllNotifications
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
