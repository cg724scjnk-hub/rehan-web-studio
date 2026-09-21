export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  tag: string;
  deliverables: string[];
  idealFor: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business' | 'E-commerce' | 'Landing Page' | 'Healthcare';
  clientName: string;
  location: string;
  description: string;
  image: string;
  liveTag: string;
  metrics: {
    label: string;
    value: string;
  };
  technologies: string[];
  features: string[];
  link?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  pricePKR: string;
  priceUSD: string;
  subtitle: string;
  description: string;
  isPopular?: boolean;
  deliveryTime: string;
  revisions: string;
  features: string[];
  notIncluded?: string[];
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  projectType: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WhyChooseReason {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  metric: string;
  metricLabel: string;
}
