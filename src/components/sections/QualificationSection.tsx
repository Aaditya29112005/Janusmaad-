'use client';

import React from 'react';

export const QualificationSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8F9FA] relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-black mb-16 text-center">
          Who we don't work with.
        </h2>

        <div className="bg-white p-12 lg:p-16 space-y-10 border border-neutral-200">
          
          <div className="flex gap-6 items-start">
            <div className="text-xl font-bold text-black w-8 shrink-0">1</div>
            <div>
              <p className="text-lg font-bold text-black mb-1">Hack-seeking brands.</p>
              <p className="text-neutral-600">Brands looking for cheap $200 quick hacks without fixing core analytics.</p>
            </div>
          </div>
          
          <div className="h-px bg-neutral-100 w-full" />

          <div className="flex gap-6 items-start">
            <div className="text-xl font-bold text-black w-8 shrink-0">2</div>
            <div>
              <p className="text-lg font-bold text-black mb-1">Black-box operators.</p>
              <p className="text-neutral-600">Companies unwilling to grant data layer or tracking access to setup clean CDP pipelines.</p>
            </div>
          </div>

          <div className="h-px bg-neutral-100 w-full" />

          <div className="flex gap-6 items-start">
            <div className="text-xl font-bold text-black w-8 shrink-0">3</div>
            <div>
              <p className="text-lg font-bold text-black mb-1">Vanity metric chasers.</p>
              <p className="text-neutral-600">Businesses looking for vanity metrics rather than bottom-line revenue impact.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
