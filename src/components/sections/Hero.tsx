'use client';

import React from 'react';
import Link from 'next/link';
import { RollingText } from '@/components/animations/RollingText';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-24 lg:pt-36 lg:pb-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Display Headline with GSAP Rolling Text */}
        <h1 className="heading-xl text-black mb-6">
          <RollingText text="Growth Architecture" delay={0.1} />
          <RollingText text="Built for Enterprise Scale." delay={0.2} />
        </h1>

        {/* Subtitle */}
        <div className="text-xl sm:text-2xl text-neutral-600 max-w-3xl leading-relaxed font-normal mb-10">
          <RollingText 
            text="We don't just do marketing. We deliver growth. Unified Customer Data Platforms (CDP), precision multi-touch attribution, and omnichannel Search Everywhere Optimization."
            delay={0.3} 
          />
        </div>

        {/* Dual CTAs matching Landing Page Company style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards]">
          <Link
            href="/contact"
            className="btn-primary w-full sm:w-auto"
          >
            <span>Book Strategy Call</span>
          </Link>

          <a
            href="#math-section"
            className="btn-secondary w-full sm:w-auto"
          >
            <span>Run the Math</span>
          </a>
        </div>
      </div>
    </section>
  );
};

