'use client';

import React from 'react';

export const TeamCultureSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="heading-lg tracking-tight leading-tight sticky top-32">
              We don't hire fast.<br/>We keep people longer.
            </h2>
          </div>

          <div className="space-y-8 text-neutral-600 text-lg leading-relaxed font-medium">
            <p>
              Only two people have left the studio in two years. One went to London, another moved to another city.
            </p>

            <p>
              Most agencies churn in 14 months. We plant our champions in the ground and grow them. Small by design. Every project has a named senior owner, not a junior "account lead."
            </p>

            <div className="py-8 border-t border-b border-neutral-200 my-8">
              <div className="flex items-end gap-6">
                <div className="text-6xl font-heading font-black text-black">
                  4.8
                </div>
                <div className="pb-1">
                  <p className="font-bold text-black">Client Satisfaction Score</p>
                  <p className="text-sm">Measured quarterly, shared publicly. Above industry benchmarks.</p>
                </div>
              </div>
            </div>
            
            <p className="font-bold text-black pb-4">
              We share live dashboards and raw data schemas directly with your internal team. 100% transparent data & zero retainer theatre.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
