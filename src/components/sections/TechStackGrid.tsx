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
          <p className="text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
            Our clients work with a wide range of technologies — and so do we. Here are some of the platforms we focus on.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xl text-black mb-4">
                {tech.name.charAt(0)}
              </div>
              <div className="font-bold text-black text-center">
                {tech.name}
              </div>
              <div className="text-sm text-neutral-500 font-medium text-center mt-1">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
