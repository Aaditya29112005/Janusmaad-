'use client';

import React from 'react';
import Link from 'next/link';

export const POVSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="heading-lg tracking-tight leading-tight sticky top-32">
              AI is coming for your profits.
            </h2>
          </div>

          <div className="space-y-8 text-neutral-900 text-lg leading-relaxed font-normal">
            <p>
              Every brand now has access to the same tools, the same stock copy, the same landing page template with a gradient and a dog. Good enough is free. Good enough also doesn't convert.
            </p>

            <p>
              The moat moved. It's not in "having a website." It's in having a unified Customer Data Platform (CDP) and hyper-personalized customer journeys so precise that no generic AI model could replicate them without your customer data pipeline.
            </p>

            <p>
              We don't sell you an AI workflow or generic agency retainer theatre. We sell you a data-backed point of view, translated into pixels, measured in revenue, shipped in weeks. The part no model can do for you is decide what you actually believe.
            </p>
            
            <p className="font-bold text-black pb-4">
              Growth platforms that convert are platforms with opinions. Opinions that cost money to form. Which is why everyone else won't.
            </p>

            <div>
              <Link
                href="/contact"
                className="text-black font-bold border-b-2 border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
              >
                Let's form data opinions together.
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
