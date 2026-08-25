'use client';

import React from 'react';
import { TECH_STACK } from '@/data/janusContent';

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="heading-lg text-black mb-4">
            Our Tech Stack Expertise
          </h2>
          <p className="text-xl text-neutral-900 font-normal max-w-2xl mx-auto">
            Our clients work with a wide range of technologies — and so do we. Here are some of the platforms we focus on.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-4 border border-black/10 rounded-2xl bg-[#F9F8F3] hover:border-black transition-colors shadow-sm">
              <div className="w-14 h-14 bg-black text-[#CCFF00] rounded-full flex items-center justify-center font-heading font-black text-xl mb-3 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {tech.name.charAt(0)}
              </div>
              <div className="font-heading font-black text-black text-center text-sm">
                {tech.name}
              </div>
              <div className="text-xs text-neutral-800 font-mono font-bold text-center mt-1">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
