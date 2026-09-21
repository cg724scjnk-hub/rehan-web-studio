import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header with Logo & Verified Badge */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 1. Services Grid (4 boxes with icons) */}
        <ServicesGrid />

        {/* 2. Why Choose Rehan Web Studio? */}
        <WhyChooseUs />

        {/* 3. Recent Work / Portfolio (6 projects) */}
        <PortfolioSection />

        {/* 4. Pricing Table (Basic Rs 15k, Standard Rs 30k, Premium Rs 55k) */}
        <PricingSection />

        {/* 5. Testimonials (3 clients from Rawalpindi / Islamabad) */}
        <TestimonialsSection />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Contact / WhatsApp Quick Estimator */}
        <ContactSection />
      </main>

      {/* Footer with Kahuta location & WhatsApp */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
