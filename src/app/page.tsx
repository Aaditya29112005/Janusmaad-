import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { GrowthSimulator } from '@/components/dashboard/GrowthSimulator';
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
      {/* 1. Big Hero Section */}
      <Hero />

      {/* 2. "Do the Math" Interactive Growth & ROI Simulator */}
      <section id="math-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 scroll-mt-24">
        <GrowthSimulator />
      </section>

      {/* 3. Positioning Section: Brand ∩ Data Engineering ∩ Growth */}
      <PositioningSection />

      {/* 4. Statement POV: AI is coming for your profits */}
      <POVSection />

      {/* 5. Service Packages & Core Pillars */}
      <ServicesGrid />

      {/* 6. Why Janusmaad: Receipts & Accountability */}
      <WhyJanusmaadSection />

      {/* 7. Team Culture: We don't hire fast. We keep people longer. */}
      <TeamCultureSection />

      {/* 8. Client Qualification: Who we don't work with */}
      <QualificationSection />

      {/* 9. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 10. MarTech & Tech Stack Grid */}
      <TechStackGrid />

      {/* 11. Engagement & Contact Form */}
      <ContactForm />
    </div>
  );
}
