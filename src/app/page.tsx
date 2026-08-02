import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { GrowthSimulator } from '@/components/dashboard/GrowthSimulator';
import { BentoGridSection } from '@/components/sections/BentoGridSection';
import { PositioningSection } from '@/components/sections/PositioningSection';
import { POVSection } from '@/components/sections/POVSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyJanusmaadSection } from '@/components/sections/WhyJanusmaadSection';
import { TeamCultureSection } from '@/components/sections/TeamCultureSection';
import { QualificationSection } from '@/components/sections/QualificationSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { ContactForm } from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* 1. XPay-Style Hero Section with Floating Interactive Preview Card */}
      <Hero />

      {/* 2. XPay Infinite Trust Marquee Ticker */}
      <MarqueeBanner />

      {/* 3. Interactive Growth & ROI Spend Simulator */}
      <section id="math-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 scroll-mt-24">
        <GrowthSimulator />
      </section>

      {/* 4. XPay Feature Bento Grid Showcase */}
      <BentoGridSection />

      {/* 5. Positioning Section: Brand ∩ Data Engineering ∩ Growth */}
      <PositioningSection />

      {/* 6. Glow White Point of View Block */}
      <POVSection />

      {/* 7. Enterprise Service Packages & Core Pillars */}
      <ServicesGrid />

      {/* 8. Why Janusmaad & Verified Receipts */}
      <WhyJanusmaadSection />

      {/* 9. Studio Culture & Senior Architects */}
      <TeamCultureSection />

      {/* 10. Qualification: Who We Don't Work With */}
      <QualificationSection />

      {/* 11. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 12. MarTech & Tech Stack Grid */}
      <TechStackGrid />

      {/* 13. Consultation Booking & Lead Form */}
      <ContactForm />
    </div>
  );
}
