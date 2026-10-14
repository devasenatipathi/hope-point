export type UserRole = 'guest' | 'ngo' | 'donor' | 'volunteer' | 'beneficiary' | 'admin';

export type NGOCategory = 
  | 'Healthcare & Medical' 
  | 'Education & Child Care' 
  | 'Disability & Rehab' 
  | 'Food & Shelter' 
  | 'Elderly Care' 
  | 'Disaster Relief' 
  | 'Environment & Animal Welfare';

export type UrgencyLevel = 'Emergency' | 'High' | 'Medium' | 'Low';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  location?: string;
  avatar?: string;
  // Role specific fields
  ngoName?: string;
  ngoRegistrationNo?: string;
  ngoCategory?: NGOCategory;
  isVerified?: boolean;
  verificationStatus?: 'Verified' | 'Pending Verification' | 'Rejected';
  description?: string;
  preferredCauses?: string[];
  skills?: string[];
  availability?: string;
  supportNeeded?: string;
}

export interface RequirementItem {
  id: string;
  ngoId: string;
  ngoName: string;
  ngoLocation: string;
  ngoVerified: boolean;
  ngoCategory: NGOCategory;
  title: string;
  category: string;
  quantityRequired: number;
  quantityFulfilled: number;
  unit: string;
  urgency: UrgencyLevel;
  requiredBy: string;
  description: string;
  location: string;
  imageUrl?: string;
  createdAt: string;
  financialTarget?: number;
  financialRaised?: number;
}

export interface SurplusItem {
  id: string;
  ngoId: string;
  ngoName: string;
  ngoLocation: string;
  title: string;
  category: string;
  quantityAvailable: number;
  unit: string;
  condition: 'New' | 'Gently Used' | 'Refurbished' | 'Good';
  availableUntil: string;
  description: string;
  location: string;
  imageUrl?: string;
  createdAt: string;
}

export interface SmartMatch {
  id: string;
  surplusItemId: string;
  requirementItemId: string;
  offeringNgoName: string;
  offeringNgoId: string;
  offeringLocation: string;
  requestingNgoName: string;
  requestingNgoId: string;
  requestingLocation: string;
  resourceTitle: string;
  matchedQuantity: number;
  unit: string;
  matchScore: number; // e.g. 94%
  matchReasons: string[];
  status: 'Pending Review' | 'Accepted' | 'In Transit' | 'Completed' | 'Declined';
  urgency: UrgencyLevel;
  distanceKm: number;
  createdAt: string;
}

export interface DonationRecord {
  id: string;
  donorId: string;
  donorName: string;
  ngoId: string;
  ngoName: string;
  requirementId?: string;
  type: 'In-Kind' | 'Financial';
  itemTitle: string;
  quantityOrAmount: string;
  amountNumber?: number;
  status: 'Initiated' | 'Processing' | 'Received by NGO' | 'Distributed';
  date: string;
  trackingCode: string;
  impactNote?: string;
  proofImageUrl?: string;
}

export interface VolunteerOpportunity {
  id: string;
  ngoId: string;
  ngoName: string;
  ngoLocation: string;
  title: string;
  category: string;
  skillsRequired: string[];
  location: string;
  type: 'On-site' | 'Remote' | 'Hybrid';
  duration: string;
  description: string;
  spotsTotal: number;
  spotsFilled: number;
  urgency: UrgencyLevel;
  postedDate: string;
}

export interface VolunteerApplication {
  id: string;
  volunteerId: string;
  volunteerName: string;
  opportunityId: string;
  opportunityTitle: string;
  ngoName: string;
  skills: string[];
  appliedDate: string;
  status: 'Pending' | 'Accepted' | 'Completed' | 'Rejected';
  hoursLogged?: number;
}

export interface DisabilityResource {
  id: string;
  title: string;
  category: 'UDID Support' | 'Skill Development' | 'Employment' | 'Assistive Devices' | 'Scholarships';
  providerName: string;
  description: string;
  eligibility: string;
  location: string;
  officialLink?: string;
  contactEmail?: string;
  contactPhone?: string;
  iconName: string;
  actionText: string;
}

export interface BeneficiaryRequest {
  id: string;
  beneficiaryId: string;
  beneficiaryName: string;
  category: string;
  requiredAssistance: string;
  location: string;
  urgency: UrgencyLevel;
  status: 'Submitted' | 'Under Review' | 'Matched with NGO' | 'Support Dispatched' | 'Completed';
  matchedNgoName?: string;
  requestDate: string;
}

export interface AppNotification {
  id: string;
  userId?: string; // empty means broadcast or current persona
  roleTarget?: UserRole | 'all';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  type: 'match' | 'donation' | 'verification' | 'volunteer' | 'general';
  actionUrl?: string;
}

export interface NGOProfile {
  id: string;
  name: string;
  registrationNo: string;
  isVerified: boolean;
  verificationBadgeDate?: string;
  logo: string;
  coverImage: string;
  category: NGOCategory;
  location: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  description: string;
  areasOfWork: string[];
  beneficiariesSupported: number;
  activeRequirementsCount: number;
  surplusSharedCount: number;
  rating: number;
  reviewsCount: number;
  establishedYear: number;
}
