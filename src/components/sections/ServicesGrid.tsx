'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PACKAGES, SERVICE_PILLARS } from '@/data/janusContent';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative z-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="heading-lg text-black mb-4">Our services. All about growth.</h2>
          <p className="text-xl text-neutral-600 font-medium">
            From complete growth marketing teams on hire to real-time customer data platforms.
          </p>
        </div>

        {/* Core Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32">
          {SERVICE_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="flex flex-col group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                  {/* Clean stark icon placeholder */}
                  <div className="w-6 h-6 bg-black rounded-sm" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black mb-3">
                  {pkg.title}
                </h3>
                <p className="text-base text-neutral-600 font-medium mb-6">
                  {pkg.description}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={pkg.href}
                  className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-transparent hover:border-black transition-all pb-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-neutral-200 mb-20" />

        {/* Foundational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold text-black">4 Pillars</h3>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {SERVICE_PILLARS.map((pillar) => (
              <div key={pillar.id}>
                <h4 className="text-lg font-bold text-black mb-2">{pillar.title}</h4>
                <p className="text-neutral-600 font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
