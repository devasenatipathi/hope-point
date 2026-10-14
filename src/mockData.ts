import {
  NGOProfile,
  RequirementItem,
  SurplusItem,
  SmartMatch,
  DonationRecord,
  VolunteerOpportunity,
  DisabilityResource,
  BeneficiaryRequest,
  AppNotification,
  UserProfile
} from './types';

export const DEMO_USERS: Record<string, UserProfile> = {
  ngo: {
    id: 'ngo-caretrust',
    name: 'CareTrust Foundation',
    email: 'contact@caretrust.org',
    role: 'ngo',
    phone: '+91 98765 43210',
    location: 'Puducherry, India',
    ngoName: 'CareTrust Foundation',
    ngoRegistrationNo: 'PY/NGO/2018/8892',
    ngoCategory: 'Food & Shelter',
    isVerified: true,
    verificationStatus: 'Verified',
    description: 'Providing shelter, winter relief, and daily nutrition to homeless and rural vulnerable populations across Puducherry and Tamil Nadu.',
    avatar: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=150&auto=format&fit=crop&q=80'
  },
  donor: {
    id: 'donor-ananya',
    name: 'Ananya Roy',
    email: 'ananya.roy@example.com',
    role: 'donor',
    phone: '+91 98201 11223',
    location: 'Chennai, India',
    preferredCauses: ['Healthcare & Medical', 'Disability & Rehab', 'Education & Child Care'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  volunteer: {
    id: 'vol-rahul',
    name: 'Rahul Sharma',
    email: 'rahul.vol@example.com',
    role: 'volunteer',
    phone: '+91 97112 33445',
    location: 'Puducherry, India',
    skills: ['Teaching', 'Logistics', 'First Aid', 'Social Work'],
    availability: 'Weekends & Evenings',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  beneficiary: {
    id: 'ben-lakshmi',
    name: 'Lakshmi Narayanan',
    email: 'lakshmi.n@example.com',
    role: 'beneficiary',
    phone: '+91 94432 55667',
    location: 'Puducherry, India',
    supportNeeded: 'Assistive Wheelchair & UDID Card Application Guidance',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  },
  admin: {
    id: 'admin-master',
    name: 'HopePoint Master Admin',
    email: 'admin@hopepoint.org',
    role: 'admin',
    phone: '+91 80000 11111',
    location: 'Global Operations',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  }
};

export const INITIAL_NGO_PROFILES: NGOProfile[] = [
  {
    id: 'ngo-caretrust',
    name: 'CareTrust Foundation',
    registrationNo: 'PY/NGO/2018/8892',
    isVerified: true,
    verificationBadgeDate: '2023-04-12',
    logo: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80',
    category: 'Food & Shelter',
    location: 'Puducherry, India',
    address: 'No. 42, Heritage Street, White Town, Puducherry - 605001',
    email: 'contact@caretrust.org',
    phone: '+91 98765 43210',
    website: 'https://caretrust.org',
    description: 'CareTrust Foundation is dedicated to empowering vulnerable communities in Puducherry. We run nighttime shelter homes, organize relief distribution drives, and support families affected by seasonal hardship.',
    areasOfWork: ['Shelter & Blankets', 'Daily Meal Drives', 'Disaster Relief', 'Elderly Care'],
    beneficiariesSupported: 3450,
    activeRequirementsCount: 3,
    surplusSharedCount: 8,
    rating: 4.9,
    reviewsCount: 84,
    establishedYear: 2018
  },
  {
    id: 'ngo-sunshine',
    name: 'Sunshine Children Home',
    registrationNo: 'TN/NGO/2015/4412',
    isVerified: true,
    verificationBadgeDate: '2022-09-18',
    logo: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&auto=format&fit=crop&q=80',
    category: 'Education & Child Care',
    location: 'Chennai, India',
    address: '15 Anna Salai, Guindy, Chennai - 600032',
    email: 'info@sunshinechildren.org',
    phone: '+91 98400 22334',
    website: 'https://sunshinechildren.org',
    description: 'A sanctuary providing education, nutrition, psychological support, and safe housing to orphans and underprivileged young children.',
    areasOfWork: ['Child Education', 'School Book Bank', 'Nutritious Meals', 'Skill Development'],
    beneficiariesSupported: 1820,
    activeRequirementsCount: 2,
    surplusSharedCount: 5,
    rating: 4.8,
    reviewsCount: 62,
    establishedYear: 2015
  },
  {
    id: 'ngo-healwell',
    name: 'HealWell Mobility & Health Society',
    registrationNo: 'PY/NGO/2020/9901',
    isVerified: true,
    verificationBadgeDate: '2023-01-20',
    logo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    category: 'Disability & Rehab',
    location: 'Puducherry, India',
    address: '88 Mission Street, Puducherry - 605001',
    email: 'support@healwellsociety.org',
    phone: '+91 94421 88776',
    description: 'Providing assistive devices, physical therapy, UDID documentation support, and inclusive vocational training for persons with physical and sensory disabilities.',
    areasOfWork: ['Assistive Devices', 'UDID Enrollment', 'Physiotherapy', 'Inclusive Employment'],
    beneficiariesSupported: 2100,
    activeRequirementsCount: 2,
    surplusSharedCount: 4,
    rating: 5.0,
    reviewsCount: 110,
    establishedYear: 2020
  },
  {
    id: 'ngo-hopebridge',
    name: 'HopeBridge Welfare Trust',
    registrationNo: 'KA/NGO/2019/3321',
    isVerified: false, // Pending verification demo
    logo: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&auto=format&fit=crop&q=80',
    category: 'Healthcare & Medical',
    location: 'Bengaluru, India',
    address: '102 Indiranagar 100ft Road, Bengaluru - 560038',
    email: 'contact@hopebridge.org',
    phone: '+91 99000 44556',
    description: ' grassroots medical aid society supplying essential diagnostic equipment, emergency first aid kits, and hygiene packages to rural primary health centers.',
    areasOfWork: ['Rural Clinics', 'Medical Kit Supplies', 'Free Screening Camps'],
    beneficiariesSupported: 950,
    activeRequirementsCount: 1,
    surplusSharedCount: 2,
    rating: 4.6,
    reviewsCount: 18,
    establishedYear: 2019
  }
];

export const INITIAL_REQUIREMENTS: RequirementItem[] = [
  {
    id: 'req-blankets-puducherry',
    ngoId: 'ngo-caretrust',
    ngoName: 'CareTrust Foundation',
    ngoLocation: 'Puducherry',
    ngoVerified: true,
    ngoCategory: 'Food & Shelter',
    title: 'Winter Relief Woolen Blankets',
    category: 'Shelter & Clothing',
    quantityRequired: 50,
    quantityFulfilled: 20,
    unit: 'Pieces',
    urgency: 'High',
    requiredBy: '2026-08-15',
    description: 'Urgent need for heavy-duty warm blankets for 50 night shelter residents and destitute elders in coastal Puducherry.',
    location: 'Puducherry, India',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-20',
    financialTarget: 25000,
    financialRaised: 10000
  },
  {
    id: 'req-wheelchairs-healwell',
    ngoId: 'ngo-healwell',
    ngoName: 'HealWell Mobility & Health Society',
    ngoLocation: 'Puducherry',
    ngoVerified: true,
    ngoCategory: 'Disability & Rehab',
    title: 'Folding Wheelchairs for Beneficiaries',
    category: 'Assistive Devices',
    quantityRequired: 20,
    quantityFulfilled: 6,
    unit: 'Units',
    urgency: 'High',
    requiredBy: '2026-08-25',
    description: '20 standard folding manual wheelchairs needed for beneficiaries with spinal mobility challenges awaiting UDID authorization.',
    location: 'Puducherry, India',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-22',
    financialTarget: 120000,
    financialRaised: 36000
  },
  {
    id: 'req-books-sunshine',
    ngoId: 'ngo-sunshine',
    ngoName: 'Sunshine Children Home',
    ngoLocation: 'Chennai',
    ngoVerified: true,
    ngoCategory: 'Education & Child Care',
    title: 'Educational Science & Math Textbooks',
    category: 'Education & Books',
    quantityRequired: 120,
    quantityFulfilled: 75,
    unit: 'Books',
    urgency: 'Medium',
    requiredBy: '2026-08-30',
    description: 'Class 6th to 10th science, mathematics, and English literature books for 80 young residential orphans.',
    location: 'Chennai, India',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-18',
    financialTarget: 30000,
    financialRaised: 18750
  },
  {
    id: 'req-medkits-hopebridge',
    ngoId: 'ngo-hopebridge',
    ngoName: 'HopeBridge Welfare Trust',
    ngoLocation: 'Bengaluru',
    ngoVerified: false,
    ngoCategory: 'Healthcare & Medical',
    title: 'First Aid & Diagnostic Medical Kits',
    category: 'Healthcare & Medical',
    quantityRequired: 30,
    quantityFulfilled: 5,
    unit: 'Kits',
    urgency: 'Emergency',
    requiredBy: '2026-08-10',
    description: 'Emergency primary clinic kits containing digital BP monitors, glucometers, antiseptic dressings, and pulse oximeters.',
    location: 'Bengaluru, India',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-25',
    financialTarget: 45000,
    financialRaised: 7500
  }
];

export const INITIAL_SURPLUS: SurplusItem[] = [
  {
    id: 'surplus-blankets-puducherry',
    ngoId: 'ngo-caretrust',
    ngoName: 'CareTrust Foundation',
    ngoLocation: 'Puducherry',
    title: 'Surplus Woolen Blankets (Brand New)',
    category: 'Shelter & Clothing',
    quantityAvailable: 100,
    unit: 'Pieces',
    condition: 'New',
    availableUntil: '2026-09-30',
    description: '100 brand new thick fleece blankets donated by corporate sponsor Apex Capital available for redistribution to other verified regional NGOs.',
    location: 'Puducherry, India',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-24'
  },
  {
    id: 'surplus-desks-sunshine',
    ngoId: 'ngo-sunshine',
    ngoName: 'Sunshine Children Home',
    ngoLocation: 'Chennai',
    title: 'Dual Study Benches & Student Desks',
    category: 'Education & Furniture',
    quantityAvailable: 25,
    unit: 'Sets',
    condition: 'Gently Used',
    availableUntil: '2026-10-15',
    description: '25 sturdy wooden classroom desks and bench pairs in excellent refurbished condition ready to gift to rural learning centers.',
    location: 'Chennai, India',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-21'
  },
  {
    id: 'surplus-crutches-healwell',
    ngoId: 'ngo-healwell',
    ngoName: 'HealWell Mobility & Health Society',
    ngoLocation: 'Puducherry',
    title: 'Adjustable Aluminum Elbow Crutches',
    category: 'Assistive Devices',
    quantityAvailable: 40,
    unit: 'Pairs',
    condition: 'New',
    availableUntil: '2026-11-01',
    description: '40 lightweight adjustable ergonomic crutches suitable for youth and adults recovering from orthopedic procedures.',
    location: 'Puducherry, India',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
    createdAt: '2026-07-26'
  }
];

export const INITIAL_SMART_MATCHES: SmartMatch[] = [
  {
    id: 'match-1',
    surplusItemId: 'surplus-blankets-puducherry',
    requirementItemId: 'req-blankets-puducherry',
    offeringNgoName: 'CareTrust Foundation',
    offeringNgoId: 'ngo-caretrust',
    offeringLocation: 'Puducherry',
    requestingNgoName: 'Community Relief Center (Sub-Branch)',
    requestingNgoId: 'ngo-caretrust-sub',
    requestingLocation: 'Puducherry',
    resourceTitle: 'Heavy-Duty Winter Woolen Blankets',
    matchedQuantity: 50,
    unit: 'Pieces',
    matchScore: 94,
    matchReasons: [
      'Exact Category & Item Type Match (Shelter & Clothing)',
      'Same Geographic Radius (< 5 km in Puducherry)',
      'Surplus Surplus Quantity (100) exceeds Request Need (50)',
      'High Urgency alignment'
    ],
    status: 'Pending Review',
    urgency: 'High',
    distanceKm: 3.2,
    createdAt: '2026-07-27'
  },
  {
    id: 'match-2',
    surplusItemId: 'surplus-crutches-healwell',
    requirementItemId: 'req-wheelchairs-healwell',
    offeringNgoName: 'HealWell Mobility & Health Society',
    offeringNgoId: 'ngo-healwell',
    offeringLocation: 'Puducherry',
    requestingNgoName: 'Rural Rehabilitation Network',
    requestingNgoId: 'ngo-ruralrehab',
    requestingLocation: 'Cuddalore / Puducherry border',
    resourceTitle: 'Mobility Support Devices (Crutches / Canes)',
    matchedQuantity: 20,
    unit: 'Pairs',
    matchScore: 88,
    matchReasons: [
      'Complementary Mobility Category Match (Assistive Devices)',
      'Nearby Coastal District (< 18 km)',
      'Immediate availability window'
    ],
    status: 'Accepted',
    urgency: 'Medium',
    distanceKm: 16.5,
    createdAt: '2026-07-26'
  }
];

export const INITIAL_VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  {
    id: 'vol-teach-puducherry',
    ngoId: 'ngo-sunshine',
    ngoName: 'Sunshine Children Home',
    ngoLocation: 'Puducherry',
    title: 'Weekend Math & English Tutor',
    category: 'Education & Teaching',
    skillsRequired: ['Teaching', 'English', 'Mathematics', 'Patience'],
    location: 'Puducherry, India',
    type: 'On-site',
    duration: '2 Weeks (Saturdays 10 AM - 1 PM)',
    description: 'Guide 15 eager middle-school students through basic algebra and conversational English reading sessions.',
    spotsTotal: 5,
    spotsFilled: 3,
    urgency: 'High',
    postedDate: '2026-07-20'
  },
  {
    id: 'vol-udid-counselor',
    ngoId: 'ngo-healwell',
    ngoName: 'HealWell Mobility & Health Society',
    ngoLocation: 'Puducherry',
    title: 'UDID Disability Enrollment Volunteer',
    category: 'Disability & Advocacy',
    skillsRequired: ['Data Entry', 'Tamil Communication', 'Empathy', 'Basic Computer'],
    location: 'Puducherry, India',
    type: 'On-site',
    duration: '1 Month (Flexi-hours)',
    description: 'Assist persons with disabilities and elderly citizens in filling out digital Unique Disability ID (UDID) government application forms.',
    spotsTotal: 8,
    spotsFilled: 5,
    urgency: 'Emergency',
    postedDate: '2026-07-22'
  },
  {
    id: 'vol-food-drive',
    ngoId: 'ngo-caretrust',
    ngoName: 'CareTrust Foundation',
    ngoLocation: 'Puducherry',
    title: 'Night Food & Blanket Distribution Lead',
    category: 'Logistics & Community Care',
    skillsRequired: ['Logistics', 'Driving', 'Community Service'],
    location: 'Puducherry Coastal Region',
    type: 'On-site',
    duration: 'Single Evening Drive (7 PM - 10 PM)',
    description: 'Help load vehicles and safely distribute warm dinners and blankets to coastal fisherman families during monsoon night watches.',
    spotsTotal: 10,
    spotsFilled: 7,
    urgency: 'Medium',
    postedDate: '2026-07-25'
  }
];

export const INITIAL_DISABILITY_RESOURCES: DisabilityResource[] = [
  {
    id: 'dis-1',
    title: 'UDID Application & Verification Guide',
    category: 'UDID Support',
    providerName: 'Department of Empowerment of Persons with Disabilities',
    description: 'Comprehensive guide and digital assistance to register for the Unique Disability ID (UDID) card. Enables nationwide access to government social welfare benefits.',
    eligibility: 'Individuals with 40%+ benchmark disability verified by a certified medical authority.',
    location: 'All India / Puducherry Portal',
    officialLink: 'https://www.swavlambancard.gov.in',
    contactEmail: 'support@swavlambancard.gov.in',
    contactPhone: '1800-11-1223',
    iconName: 'CreditCard',
    actionText: 'UDID Step-by-Step Portal'
  },
  {
    id: 'dis-2',
    title: 'Inclusive Digital & IT Vocational Training',
    category: 'Skill Development',
    providerName: 'National Institute for Empowerment & Skill Development',
    description: 'Free 3-month certified computer literacy, graphic design, and customer support training for youth with motor or visual challenges.',
    eligibility: 'Age 18-35, basic literacy, UDID cardholder.',
    location: 'Puducherry & Online Hybrid',
    officialLink: 'https://disabilityskills.org',
    contactEmail: 'skills@disabilityskills.org',
    contactPhone: '+91 413 2233445',
    iconName: 'GraduationCap',
    actionText: 'View Training Batches'
  },
  {
    id: 'dis-3',
    title: 'Equal Opportunity Inclusive Employment Desk',
    category: 'Employment',
    providerName: 'HopePoint Employer Network',
    description: 'Connect with verified inclusive corporate partners hiring for remote and on-site roles in IT, accounting, back-office operations, and telecalling.',
    eligibility: 'Job seekers with disabilities across all education backgrounds.',
    location: 'Puducherry / Remote',
    contactEmail: 'jobs@hopepoint.org',
    contactPhone: '+91 98765 00100',
    iconName: 'Briefcase',
    actionText: 'Explore Open Positions'
  },
  {
    id: 'dis-4',
    title: 'Assistive Device Distribution Drive',
    category: 'Assistive Devices',
    providerName: 'HealWell Mobility & Health Society',
    description: 'Free sponsorship and distribution of customized wheelchairs, digital hearing aids, trikes, and braille slate kits.',
    eligibility: 'Low-income family certificate or UDID card.',
    location: 'Puducherry Rehabilitation Center',
    contactEmail: 'devices@healwellsociety.org',
    contactPhone: '+91 94421 88776',
    iconName: 'Accessibility',
    actionText: 'Request Device Support'
  },
  {
    id: 'dis-5',
    title: 'National Disability Higher Education Scholarship',
    category: 'Scholarships',
    providerName: 'Ministry of Social Justice & Empowerment',
    description: 'Financial aid covering 100% of college tuition fees, hostel allowance, and book stipends for undergraduate and postgraduate students.',
    eligibility: 'Students with disability enrolled in recognized higher education institutes.',
    location: 'National Portal',
    officialLink: 'https://scholarships.gov.in',
    contactEmail: 'scholarship@gov.in',
    iconName: 'BookOpen',
    actionText: 'Apply for Scholarship'
  }
];

export const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'don-1001',
    donorId: 'donor-ananya',
    donorName: 'Ananya Roy',
    ngoId: 'ngo-caretrust',
    ngoName: 'CareTrust Foundation',
    requirementId: 'req-blankets-puducherry',
    type: 'In-Kind',
    itemTitle: '20 Heavy-Duty Woolen Blankets',
    quantityOrAmount: '20 Pieces',
    status: 'Distributed',
    date: '2026-07-22',
    trackingCode: 'HP-DON-882190',
    impactNote: 'Blankets delivered to night shelter residents in coastal Puducherry. Photo proof logged.',
    proofImageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'don-1002',
    donorId: 'donor-ananya',
    donorName: 'Ananya Roy',
    ngoId: 'ngo-healwell',
    ngoName: 'HealWell Mobility & Health Society',
    requirementId: 'req-wheelchairs-healwell',
    type: 'Financial',
    itemTitle: 'Wheelchair Sponsorship Fund',
    quantityOrAmount: '₹ 18,000',
    amountNumber: 18000,
    status: 'Received by NGO',
    date: '2026-07-25',
    trackingCode: 'HP-DON-994312',
    impactNote: 'Fund assigned to purchase 3 specialized foldable wheelchairs for beneficiaries.',
    proofImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    roleTarget: 'all',
    title: '⭐ New Smart Resource Match Found!',
    message: 'CareTrust Foundation has 100 blankets surplus matching 50 blankets needed in Puducherry (94% Compatibility).',
    timestamp: '10 minutes ago',
    isRead: false,
    type: 'match'
  },
  {
    id: 'notif-2',
    roleTarget: 'ngo',
    title: '❤️ In-Kind Donation Received',
    message: 'Donor Ananya Roy contributed 20 Woolen Blankets for your winter relief drive.',
    timestamp: '2 hours ago',
    isRead: false,
    type: 'donation'
  },
  {
    id: 'notif-3',
    roleTarget: 'volunteer',
    title: '🎉 Application Approved',
    message: 'Sunshine Children Home accepted your application for Weekend Math & English Tutor!',
    timestamp: '1 day ago',
    isRead: true,
    type: 'volunteer'
  },
  {
    id: 'notif-4',
    roleTarget: 'beneficiary',
    title: '🪪 UDID Registration Help Available',
    message: 'HealWell Mobility Society is hosting a free assistance camp this Saturday in Puducherry.',
    timestamp: '2 days ago',
    isRead: true,
    type: 'general'
  }
];

export const INITIAL_BENEFICIARY_REQUESTS: BeneficiaryRequest[] = [
  {
    id: 'benreq-1',
    beneficiaryId: 'ben-lakshmi',
    beneficiaryName: 'Lakshmi Narayanan',
    category: 'Assistive Devices',
    requiredAssistance: 'Manual folding wheelchair for home & clinic mobility',
    location: 'Puducherry',
    urgency: 'High',
    status: 'Matched with NGO',
    matchedNgoName: 'HealWell Mobility & Health Society',
    requestDate: '2026-07-24'
  }
];
