'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    'Forbes', 'TechCrunch', 'Shopify', 'Vercel', 'Stripe', 'Linear', 'Framer', 'Next.js', 'Google', 'Meta'
  ];

  return (
    <section className="py-24 bg-white border-y border-neutral-100 overflow-hidden relative z-10 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-2">1000+ Happy Clients</p>
        <h2 className="heading-lg text-black">The guest list.</h2>
      </div>

      <div className="flex w-full whitespace-nowrap overflow-hidden py-10 opacity-70">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex items-center gap-16 shrink-0"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={idx}
              className="text-3xl font-heading font-black text-neutral-800"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

