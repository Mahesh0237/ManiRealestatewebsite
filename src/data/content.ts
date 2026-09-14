import type { Service, Project, Stat, NavItem, Slide, Value, ContactInfo } from '../types';

export const COMPANY_NAME = 'My Dream';
export const COMPANY_TAGLINE = 'Building Better Spaces. Creating Better Futures.';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Real Estate', href: '/services/real-estate' },
  { label: 'Construction', href: '/services/construction' },
  { label: 'Interior Design', href: '/services/interior-design' },
  { label: 'Loans', href: '/services/loans' },
  { label: 'Contact Us', href: '/contact' },
];

export const HERO_SLIDES: Slide[] = [
  {
    image: '/images/hero-realestate.png',
    eyebrow: 'REAL ESTATE SOLUTIONS',
    heading: 'Find Your Perfect Space',
    description: 'From property solutions to construction and interiors, we bring your vision to life under one roof.',
  },
  {
    image: '/images/hero-construction.png',
    eyebrow: 'CONSTRUCTION EXCELLENCE',
    heading: 'Building Tomorrow\'s Landmarks',
    description: 'Expert construction services from planning to completion, delivering projects that stand the test of time.',
  },
  {
    image: '/images/hero-interior.png',
    eyebrow: 'INTERIOR DESIGN',
    heading: 'Spaces That Inspire',
    description: 'Transform your space with our award-winning interior design team. Where function meets sophistication.',
  },
  {
    image: '/images/hero-building.png',
    eyebrow: 'COMPLETE PROPERTY SOLUTIONS',
    heading: 'Your Vision, Our Expertise',
    description: 'A trusted partner for all your property needs — from acquisition to design and financing.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate',
    description: 'Property buying, selling, investment, and real estate consulting for residential and commercial properties.',
    image: '/images/service-realestate.png',
    link: '/services/real-estate',
    features: [
      'Property Buying & Selling',
      'Property Consultation',
      'Investment Assistance',
      'Property Management',
      'Market Analysis',
    ],
  },
  {
    id: 'construction',
    number: '02',
    title: 'Construction',
    description: 'Residential and commercial construction solutions from planning to completion with unmatched quality.',
    image: '/images/service-construction.png',
    link: '/services/construction',
    features: [
      'Residential Construction',
      'Commercial Construction',
      'Project Planning',
      'Construction Management',
      'Renovation & Remodeling',
    ],
  },
  {
    id: 'interior-design',
    number: '03',
    title: 'Interior Design',
    description: 'Modern, functional, and customized interior design solutions that transform spaces into experiences.',
    image: '/images/service-interior.png',
    link: '/services/interior-design',
    features: [
      'Residential Interiors',
      'Commercial Interiors',
      'Space Planning',
      'Furniture Selection',
      'Custom Design Solutions',
    ],
  },
  {
    id: 'loans',
    number: '04',
    title: 'Loans',
    description: 'Loan assistance and financing solutions to help customers achieve their property goals seamlessly.',
    image: '/images/service-loans.png',
    link: '/services/loans',
    features: [
      'Home Loans',
      'Property Loans',
      'Loan Consultation',
      'Financing Assistance',
      'Documentation Guidance',
    ],
  },
];

export const STATS: Stat[] = [
  { value: 12, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Transparent Process' },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Modern Villa', category: 'Residential', image: '/images/project-villa.png' },
  { id: '2', title: 'Contemporary Residence', category: 'Residential', image: '/images/project-residence.png' },
  { id: '3', title: 'Luxury Interior', category: 'Interior Design', image: '/images/project-luxury-interior.png' },
  { id: '4', title: 'Premium Lounge', category: 'Commercial', image: '/images/project-lounge.png' },
  { id: '5', title: 'Private Residence', category: 'Residential', image: '/images/project-private.png' },
  { id: '6', title: 'Modern Commercial Space', category: 'Commercial', image: '/images/hero-building.png' },
];

export const CORE_VALUES: Value[] = [
  { title: 'Trust', description: 'Building lasting relationships through honesty, integrity, and reliable partnerships.', icon: 'shield' },
  { title: 'Quality', description: 'Delivering exceptional craftsmanship and attention to detail in every project.', icon: 'award' },
  { title: 'Transparency', description: 'Open communication and clear processes at every stage of your journey.', icon: 'eye' },
  { title: 'Customer First', description: 'Your vision and satisfaction drive every decision we make.', icon: 'heart' },
  { title: 'Innovation', description: 'Embracing modern techniques and creative solutions for better outcomes.', icon: 'lightbulb' },
  { title: 'Excellence', description: 'Striving for the highest standards in everything we deliver.', icon: 'star' },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 81065 25150',
  email: 'mydreamhomesandinteriors@gmail.com',
  address: 'BR Homes 5th floor ramalayam street fathenagar Hyderabad 500018',
  hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
};

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'One Trusted Partner',
    description: 'Complete property, construction, and interior solutions under one roof.',
  },
  {
    number: '02',
    title: 'Made Around Your Needs',
    description: 'Personalized solutions designed around each customer\'s unique requirements.',
  },
  {
    number: '03',
    title: 'Quality Without Compromise',
    description: 'A strong focus on quality, transparency, and customer satisfaction in every project.',
  },
];
