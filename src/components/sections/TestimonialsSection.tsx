'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/janusContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center">
          <h2 className="heading-lg text-black mb-4">
            We don't just do marketing.<br/>We deliver growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="flex flex-col group border-t border-neutral-200 pt-8">
              <div className="mb-8">
                <p className="text-xl text-black font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-auto">
                <div className="font-bold text-black text-lg">{item.author}</div>
                <div className="text-neutral-500 font-medium">
                  {item.role}, <span className="text-black font-bold">{item.company}</span>
                </div>
                {item.metric && (
                  <div className="mt-4 text-sm font-bold text-black">
                    Result: {item.metric}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
