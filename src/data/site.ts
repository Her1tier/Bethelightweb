export const site = {
  name: 'Be the Light',
  tagline: 'Change the world one act of kindness at a time.',
  email: 'hello@bethelight.org',
  phone: '+1 (555) 123-4567',
  address: '184 Main Collins Street, Victoria 8007',
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  },
} as const

export const navLinks = [
  { label: 'Mission', href: '/mission' },
  { label: 'Programs', href: '/programs' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
] as const

export const aboutSummary =
  'Be the Light exists to bring practical help and lasting hope to communities overlooked by traditional aid. Founded by community leaders, we grew from a weekend food drive into an NGO serving 28 communities — with dignity, transparency, and programs in food relief, education, health, and housing.'

export const impactStats = [
  { value: '12,400+', label: 'Lives touched' },
  { value: '340+', label: 'Volunteers' },
  { value: '28', label: 'Communities served' },
  { value: '$1.2M', label: 'Funds directed to programs' },
] as const

export const programs = [
  {
    id: 'food-relief',
    title: 'Food Relief',
    problem: 'Families facing hunger in underserved communities.',
    action: 'Weekly food distributions and emergency meal kits.',
    impact: '8,200 meals delivered last year.',
    raised: 62000,
    goal: 80000,
  },
  {
    id: 'education',
    title: 'Education Access',
    problem: 'Children without school supplies or safe learning spaces.',
    action: 'Scholarships, tutoring, and classroom resources.',
    impact: '450 students supported across 12 schools.',
    raised: 45000,
    goal: 60000,
  },
  {
    id: 'health',
    title: 'Community Health',
    problem: 'Limited access to basic healthcare and wellness support.',
    action: 'Mobile clinics, health workshops, and maternal care.',
    impact: '1,800 health consultations provided.',
    raised: 38000,
    goal: 50000,
  },
  {
    id: 'shelter',
    title: 'Shelter & Housing',
    problem: 'Families displaced or living in unsafe conditions.',
    action: 'Temporary housing, repairs, and relocation support.',
    impact: '92 families placed in safe housing.',
    raised: 71000,
    goal: 90000,
  },
] as const

export const testimonials = [
  {
    quote:
      'Be the Light showed up when we had nowhere else to turn. They didn\'t just give us food — they gave us dignity.',
    name: 'Maria Santos',
    role: 'Community member, São Paulo',
  },
  {
    quote:
      'Volunteering here changed how I see service. Every hour matters, and the team makes sure of it.',
    name: 'James Okonkwo',
    role: 'Volunteer since 2023',
  },
  {
    quote:
      'As a partner organization, we trust Be the Light completely. Transparent, fast, and deeply human.',
    name: 'Dr. Elena Vasquez',
    role: 'Partner, Health First Initiative',
  },
] as const

export const events = [
  {
    id: '1',
    title: 'Annual Charity Walk',
    date: '2026-06-14',
    location: 'Riverside Park',
    description: 'Walk with us to raise funds for food relief programs.',
  },
  {
    id: '2',
    title: 'Volunteer Orientation',
    date: '2026-05-22',
    location: 'Community Center, Hall B',
    description: 'New volunteer onboarding and team introductions.',
  },
  {
    id: '3',
    title: 'Fundraising Gala',
    date: '2026-09-08',
    location: 'Grand Hall, Downtown',
    description: 'An evening of stories, music, and giving.',
  },
] as const

export const stories = [
  {
    id: '1',
    title: 'A meal that changed everything',
    excerpt:
      'When the Santos family lost their home, a single delivery became the first step back to stability.',
    date: '2026-04-02',
    category: 'Impact',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7b6a063709?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Back to school, back to hope',
    excerpt:
      '450 students received supplies and tutoring support through our education program.',
    date: '2026-03-18',
    category: 'Education',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Mobile clinic reaches remote village',
    excerpt:
      'Our health team traveled 6 hours to bring care to a community with no local clinic.',
    date: '2026-02-28',
    category: 'Health',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Volunteer spotlight: James',
    excerpt:
      'From weekend helper to program lead — one volunteer\'s journey with Be the Light.',
    date: '2026-02-10',
    category: 'Volunteers',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  },
] as const

export const volunteerRoles = [
  {
    title: 'Food Distribution',
    commitment: '4 hrs/week',
    description: 'Help pack and deliver meals to families in need.',
  },
  {
    title: 'Tutoring & Mentorship',
    commitment: '2 hrs/week',
    description: 'Support students with homework and learning activities.',
  },
  {
    title: 'Event Support',
    commitment: 'Flexible',
    description: 'Assist at fundraisers, walks, and community events.',
  },
  {
    title: 'Admin & Outreach',
    commitment: 'Remote, flexible',
    description: 'Help with communications, social media, and coordination.',
  },
] as const

export const team = [
  { name: 'Sarah Mitchell', role: 'Executive Director' },
  { name: 'David Chen', role: 'Programs Director' },
  { name: 'Amara Osei', role: 'Community Outreach Lead' },
  { name: 'Lucas Ferreira', role: 'Finance & Operations' },
] as const

export const values = [
  { title: 'Compassion', description: 'We meet people where they are, without judgment.' },
  { title: 'Transparency', description: 'Every dollar is accounted for and reported openly.' },
  { title: 'Dignity', description: 'Aid that respects the humanity of those we serve.' },
  { title: 'Community', description: 'Lasting change is built with, not for, local people.' },
] as const

export const donationPresets = [10, 25, 50, 100] as const

export const impactPerAmount = [
  { amount: 10, impact: 'Provides 3 nutritious meals' },
  { amount: 25, impact: 'School supplies for one child' },
  { amount: 50, impact: 'Basic health kit for a family' },
  { amount: 100, impact: 'One week of emergency shelter support' },
] as const
