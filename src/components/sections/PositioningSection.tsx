'use client';

import React from 'react';
import { RollingText } from '@/components/animations/RollingText';

export const PositioningSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-lg text-black mb-12">
          <RollingText text="Brand ∩ Tech ∩ Marketing." />
          <RollingText text="Most agencies pick two." delay={0.1} />
        </h2>
        
        <div className="text-xl leading-relaxed text-neutral-600 font-medium space-y-8 max-w-2xl mx-auto text-left">
          <p>
            Traditional agencies give you pretty designs without analytics schemas, or media buyers who burn cash without tracking data lineage.
          </p>
          <p>
            We build all three under one roof. Unified Customer Data Platforms (CDP), precise multi-touch attribution, and omnichannel SEO architecture.
          </p>
        </div>
      </div>
    </section>
  );
};
