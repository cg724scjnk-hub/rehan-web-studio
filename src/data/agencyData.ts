import { ServiceItem, PortfolioProject, PricingPlan, Testimonial, FaqItem, WhyChooseReason } from '../types';

export const FOUNDER_INFO = {
  name: 'Rehan',
  brandName: 'Rehan Web Studio',
  role: 'Professional Website Developer & SEO Expert',
  location: 'Kahuta, Punjab, Pakistan',
  phone: '03359853498',
  phoneInternational: '+92 335 9853498',
  whatsappNumber: '923359853498',
  status: 'Worldwide Remote - Available for freelance',
  availability: 'Available for New Projects (2026)',
  experienceYears: '6+',
  completedProjects: '120+',
  satisfactionRate: '99.8%',
  heroTagline: 'Build. Rank. Grow.',
  heroHeadline: "We Don't Just Build Websites, We Build Your Business That Gets Customers.",
  heroSubtext: "AI-powered, SEO-optimized, high-converting websites for local businesses in Pakistan and worldwide.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Hi Rehan, I saw your portfolio at Rehan Web Studio and would like to discuss a website project for my business.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${FOUNDER_INFO.whatsappNumber}?text=${text}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-dev',
    title: 'Business Website Development',
    shortDesc: 'Corporate & service sites built to generate consistent client inquiries.',
    description: 'Bespoke high-performance corporate websites tailored for businesses, consultancies, private clinics, and local enterprises.',
    iconName: 'Layout',
    tag: 'Core Specialization',
    deliverables: [
      'Multi-page custom responsive layout',
      'Ultra-fast load time (Sub-second)',
      'WhatsApp click-to-chat & lead forms',
      'Mobile-first responsive optimization',
      'SSL security & high-grade encryption'
    ],
    idealFor: 'Clinics, Law Firms, Consultancies, Real Estate Agencies, Contractors'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Online Store',
    shortDesc: 'High-converting online shops built for sales, repeat orders, and local logistics.',
    description: 'Full-featured online storefronts with streamlined checkout, inventory management, automated order notifications, and payment gateways.',
    iconName: 'ShoppingBag',
    tag: 'Revenue Driver',
    deliverables: [
      'Seamless product catalog & variation management',
      'Cash on Delivery (COD) + Online Gateway support',
      'WhatsApp order notification integration',
      'Speed-optimized checkout experience',
      'Automated sales invoices & inventory tracking'
    ],
    idealFor: 'Clothing & Pret Brands, Shoe Stores, Electronics, Perfumes, Retail Outlets'
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Page',
    shortDesc: 'Laser-focused single-page sales funnels engineered for maximum conversion rates.',
    description: 'Designed specifically for ad campaigns (Meta Ads, TikTok, Google Ads) with persuasive copywriting structure, social proof, and one-click WhatsApp action.',
    iconName: 'Zap',
    tag: 'Maximum ROI',
    deliverables: [
      'Single-page direct-response design',
      'Meta Pixel & Google Analytics setup',
      'Sticky WhatsApp & phone call triggers',
      'A/B tested lead capture forms',
      'Turnaround in 48-72 hours'
    ],
    idealFor: 'Ad Campaigns, Event Launches, Single Product Drops, Real Estate Projects'
  },
  {
    id: 'seo-ranking',
    title: 'SEO & Google Ranking',
    shortDesc: 'Dominate Google search results and attract high-intent local and global buyers.',
    description: 'Comprehensive Search Engine Optimization covering technical audits, on-page schema, keyword dominance, and Google My Business (GMB) local pack ranking.',
    iconName: 'TrendingUp',
    tag: 'Rank #1 on Google',
    deliverables: [
      'Targeted keyword research & competitor analysis',
      'Google My Business (GMB) Local SEO optimization',
      'Schema markup & structured data implementation',
      'Google Search Console & Bing Webmaster setup',
      'PageSpeed 95+ Core Web Vitals optimization'
    ],
    idealFor: 'Local businesses in Rawalpindi, Islamabad, Punjab & Global Brands'
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseReason[] = [
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    subtitle: 'No endless delays',
    description: 'Get your one-page landing page in 48 hours or full business platform in 5 to 7 days, fully tested and ready to accept customers.',
    badge: '48h - 7 Days',
    iconName: 'Clock',
    metric: '99.4%',
    metricLabel: 'On-Time Delivery Rate'
  },
  {
    id: 'modern-design',
    title: 'Modern Design',
    subtitle: '2026 aesthetics',
    description: 'Sleek, dark-mode luxury styling, razor-sharp typography, and smooth interactive animations that make your brand look like an international leader.',
    badge: 'Pixel Perfect',
    iconName: 'Sparkles',
    metric: '100%',
    metricLabel: 'Bespoke UI Crafted'
  },
  {
    id: 'seo-ready',
    title: 'SEO Ready',
    subtitle: 'Built for Google #1',
    description: 'Every headline, tag, image, and schema is programmed from day one so Google immediately indexes and ranks your website above competitors.',
    badge: 'Top 3 Guarantee',
    iconName: 'Search',
    metric: '#1',
    metricLabel: 'Google Page Ranking Focus'
  },
  {
    id: 'affordable-price',
    title: 'Affordable Price',
    subtitle: 'Transparent & honest',
    description: 'World-class agency quality without corporate overhead. Clear pricing starting at just Rs 15,000 with zero hidden costs or recurring surprises.',
    badge: 'Clear Pricing',
    iconName: 'Coins',
    metric: 'Rs 15k',
    metricLabel: 'Starting Package'
  },
  {
    id: 'lifetime-support',
    title: 'Lifetime Support',
    subtitle: 'Always in your corner',
    description: 'We do not disappear after launch. You get direct WhatsApp access to Rehan for maintenance, backups, security patches, and instant troubleshooting.',
    badge: 'Direct WhatsApp',
    iconName: 'ShieldCheck',
    metric: '24/7',
    metricLabel: 'Founder WhatsApp Access'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'restaurant-project',
    title: 'The Royal Dawat Cuisine',
    category: 'Business',
    clientName: 'Royal Dawat Hospitality Group',
    location: 'F-7 Markaz, Islamabad',
    description: 'Luxury restaurant website with digital interactive visual menu, table reservation engine, and instant WhatsApp food ordering system.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'Fine Dining & Online Table Booking',
    metrics: {
      label: 'Table Bookings',
      value: '+210% in 60 Days'
    },
    technologies: ['React', 'Tailwind CSS', 'WhatsApp API', 'Local SEO Schema'],
    features: [
      'Interactive culinary menu with dietary tags',
      'Instant WhatsApp table reservation button',
      'Google Maps local business integration',
      'Mobile-optimized ordering experience'
    ]
  },
  {
    id: 'salon-project',
    title: 'Luxe Glow Aesthetic Salon',
    category: 'Landing Page',
    clientName: 'Luxe Glow Studio',
    location: 'Bahria Town Phase 7, Rawalpindi',
    description: 'High-ticket beauty and bridal salon booking website with service price calculator, before/after gallery, and appointment scheduler.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'Bridal & Aesthetic Clinic',
    metrics: {
      label: 'Appointment Inquiries',
      value: '180+ Per Month'
    },
    technologies: ['Vite', 'Modern UI/UX', 'SEO Schema', 'WhatsApp Bookings'],
    features: [
      'Service catalog with bridal package breakdown',
      'One-tap WhatsApp booking with stylist selection',
      'Customer video reviews and photo transformations',
      'Sub-second load times on 4G cellular networks'
    ]
  },
  {
    id: 'real-estate-project',
    title: 'Capital Heights Properties',
    category: 'Business',
    clientName: 'Capital Heights Realty',
    location: 'Blue Area, Islamabad',
    description: 'Premier real estate investor portal featuring interactive luxury villa floor plans, investment ROI projections, and lead capture funnels.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'Commercial & Luxury Realty',
    metrics: {
      label: 'Qualified Inquiries',
      value: 'Rs 140M+ Pipeline'
    },
    technologies: ['React', 'Tailwind CSS', 'Google Maps API', 'Lead Analytics'],
    features: [
      'Property filter by sector, price, and category',
      'Downloadable PDF brochures via WhatsApp gate',
      'Direct WhatsApp chat with property consultants',
      'High-resolution virtual walkthroughs'
    ]
  },
  {
    id: 'clothing-store-project',
    title: 'Zahra Attire & Pret Couture',
    category: 'E-commerce',
    clientName: 'Zahra Fashion House',
    location: 'Saddar, Rawalpindi & Worldwide',
    description: 'Ultra-fast luxury Eastern fashion storefront with Cash on Delivery (COD) validation, international multi-currency pricing, and Instagram shop sync.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'E-commerce Fashion Store',
    metrics: {
      label: 'Monthly Online Revenue',
      value: 'Rs 2.8M+'
    },
    technologies: ['Next-Gen E-commerce', 'Payment Gateway', 'TCS / Leopard API', 'Speed 99'],
    features: [
      '1-click checkout with automated COD verification',
      'Instant WhatsApp order tracking alerts',
      'Dynamic size guides and high-resolution lookbooks',
      'Automated inventory and stock alerts'
    ]
  },
  {
    id: 'medical-project',
    title: 'PulseCare Specialist Medical Center',
    category: 'Healthcare',
    clientName: 'PulseCare Health',
    location: 'Kahuta & Rawalpindi',
    description: 'Healthcare website with doctor appointment scheduling, telemedicine consultation forms, and dominant Google local pack rankings.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'Multi-Specialty Clinic & Diagnostics',
    metrics: {
      label: 'Google Search Traffic',
      value: '#1 Ranked Locally'
    },
    technologies: ['React', 'Medical Schema', 'HIPAA compliant forms', 'Local SEO'],
    features: [
      'Doctor roster with available slots and specialties',
      'Online lab test booking & WhatsApp report inquiry',
      'Emergency direct hotline click-to-call',
      'Ranked #1 for local clinic search terms'
    ]
  },
  {
    id: 'digital-saas-project',
    title: 'ApexFlow Automation Solutions',
    category: 'Landing Page',
    clientName: 'ApexFlow B2B',
    location: 'Worldwide Remote / USA & UAE Clients',
    description: 'High-converting SaaS landing page engineered for an enterprise AI automation company targeting clients across the UK, UAE, and USA.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75&fm=webp',
    liveTag: 'B2B Tech & AI Platform',
    metrics: {
      label: 'Ad Conversion Rate',
      value: '8.4% (Industry Avg: 2.1%)'
    },
    technologies: ['React', 'Motion', 'Tailwind CSS', 'CRM Webhooks'],
    features: [
      'Interactive pricing ROI calculator',
      'Social proof ticker with enterprise logos',
      'Direct Calendly and WhatsApp demo booking',
      'Lighthouse 100 performance score'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-plan',
    name: 'Basic',
    pricePKR: 'Rs 15,000',
    priceUSD: '$55',
    subtitle: 'One Page Business Site',
    description: 'Ideal for local businesses, freelancers, clinics, or consultants needing a high-impact digital presence quickly.',
    isPopular: false,
    deliveryTime: '48 to 72 Hours',
    revisions: '3 Rounds of Revisions',
    features: [
      'High-impact single-page responsive design',
      'Direct WhatsApp "Chat on WhatsApp" button',
      'Click-to-call and quick contact form',
      'Google Maps location embed',
      'Social media profile links',
      'Mobile-friendly & fast loading',
      '14 days post-launch support'
    ],
    notIncluded: [
      'Multi-page structure',
      'E-commerce shopping cart',
      'Advanced Google search ranking campaign'
    ],
    whatsappMessage: 'Hi Rehan, I would like to order the Basic Plan (Rs 15,000 - One Page Business Site). Can we discuss details?'
  },
  {
    id: 'standard-plan',
    name: 'Standard',
    pricePKR: 'Rs 30,000',
    priceUSD: '$110',
    subtitle: 'Full Business Website + SEO',
    description: 'Our most popular comprehensive package. Built for established companies that want to dominate Google and look like a premium market leader.',
    isPopular: true,
    deliveryTime: '5 to 7 Days',
    revisions: 'Unlimited Revisions Until Satisfied',
    features: [
      'Complete multi-page website (Up to 6-8 pages)',
      'Full On-Page SEO & Keyword Optimization',
      'Google Search Console & Analytics Setup',
      'Google My Business (GMB) map optimization',
      'Ultra-fast PageSpeed score (90+ score)',
      'Custom contact forms + WhatsApp lead routing',
      'Dynamic photo/portfolio gallery showcase',
      '30 days priority maintenance & backups'
    ],
    notIncluded: [
      'Online payment gateway checkout'
    ],
    whatsappMessage: 'Hi Rehan, I am interested in the Standard Plan (Rs 30,000 - Full Business Website + SEO). Let us get started!'
  },
  {
    id: 'premium-plan',
    name: 'Premium',
    pricePKR: 'Rs 55,000',
    priceUSD: '$199',
    subtitle: 'E-commerce Store + Everything',
    description: 'The complete enterprise-grade digital solution. Sell unlimited products, accept online payments/COD, and dominate your niche with full SEO firepower.',
    isPopular: false,
    deliveryTime: '7 to 12 Days',
    revisions: 'Unlimited Revisions & VIP Onboarding',
    features: [
      'Full E-Commerce online store with cart & checkout',
      'Payment gateways (COD, JazzCash/EasyPaisa, Stripe)',
      'Product inventory & stock management system',
      'Automated WhatsApp order confirmation alerts',
      'Complete Advanced SEO + Rich Schema tags',
      'Speed optimization for high-traffic campaigns',
      'Free banner & marketing graphics setup',
      'Lifetime technical support & emergency backup'
    ],
    whatsappMessage: 'Hi Rehan, I want the Premium Plan (Rs 55,000 - E-commerce Store + Everything). How soon can we start?'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Hamza Malik',
    role: 'Founder & Managing Partner',
    business: 'Islamabad Grill & Bistro',
    location: 'F-7 Markaz, Islamabad',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=75&fm=webp',
    rating: 5,
    review: "Rehan transformed our dining business. Before working with him, we relied solely on Instagram DMs. Rehan built a high-speed website with direct WhatsApp table bookings. Our weekend reservations increased by over 200%, and customers constantly praise how sleek the website looks on mobile!",
    projectType: 'Restaurant Website & Table Booking',
    verified: true
  },
  {
    id: 'testimonial-2',
    name: 'Dr. Ayesha Tariq',
    role: 'Lead Dental Surgeon & Aesthetic Consultant',
    business: 'Rawalpindi Dental & Aesthetic Center',
    location: 'Saddar / Bahria, Rawalpindi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=75&fm=webp',
    rating: 5,
    review: "Rehan is a true SEO and web master. When people in Rawalpindi search for aesthetic dental treatments, our clinic now ranks right at the top of Google. The website is clean, modern, and loads instantly. Inquiries through the WhatsApp button come in every single day. Highly recommended!",
    projectType: 'Medical Clinic & Google Ranking',
    verified: true
  },
  {
    id: 'testimonial-3',
    name: 'Bilal Chaudhry',
    role: 'CEO & Creative Director',
    business: 'Silk & Cotton Apparel',
    location: 'Blue Area, Islamabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=75&fm=webp',
    rating: 5,
    review: "We needed a modern e-commerce store with Cash on Delivery integration and fast mobile loading for our Facebook ad campaigns. Rehan delivered within 8 days. Our ad return on ad spend (ROAS) jumped because the checkout experience is so seamless. His lifetime support is 100% genuine.",
    projectType: 'E-commerce Fashion Store',
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to deliver a completed website?',
    answer: 'Turnaround depends on the scope: our Basic one-page landing page takes 48 to 72 hours, the Standard full business website takes 5 to 7 days, and full E-commerce platforms take 7 to 12 days. We pride ourselves on meeting deadlines with zero delays.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide domain and web hosting?',
    answer: 'Yes! We guide you on securing your brand name (.com, .pk, etc.) and high-speed cloud hosting. We also handle the complete technical setup, DNS configuration, and free SSL certificate installation for complete peace of mind.'
  },
  {
    id: 'faq-3',
    question: 'How does your SEO help rank my website on Google?',
    answer: 'Every website we engineer is built with Google ranking principles: lightning-fast page loading (Core Web Vitals 90+), structured JSON-LD schema markup, keyword-rich header hierarchies, clean code semantics, and Google Search Console & Google My Business local map indexing.'
  },
  {
    id: 'faq-4',
    question: 'Can I easily update text, images, and prices myself later?',
    answer: 'Absolutely. We ensure your website is user-friendly and provide a quick screen-recorded tutorial or live WhatsApp walkthrough showing you how to edit content, post new products, and view incoming leads.'
  },
  {
    id: 'faq-5',
    question: 'How do payments work?',
    answer: 'We operate with transparent milestones: typically a 50% deposit to commence work and the remaining 50% upon final review, testing, and your 100% satisfaction before live deployment. We accept Bank Transfers (Meezan, HBL, Allied, etc.), JazzCash, EasyPaisa, or international transfers (Wise, Payoneer).'
  },
  {
    id: 'faq-6',
    question: 'Can we communicate directly on WhatsApp during the project?',
    answer: 'Yes! Direct WhatsApp communication with founder Rehan is our signature advantage. You get fast replies, voice note updates, screenshot previews, and zero bureaucratic delays.'
  }
];

export const CLIENT_STATS = [
  { label: 'Completed Projects', value: '120+' },
  { label: 'Google 5-Star Reviews', value: '4.9/5' },
  { label: 'Avg Google Speed Score', value: '98+' },
  { label: 'Client Satisfaction', value: '99.8%' }
];
