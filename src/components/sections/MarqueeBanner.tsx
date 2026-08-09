'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeBanner: React.FC = () => {
  const CLIENT_BRANDS = [
    { name: 'Wellbeing Nutrition', category: 'D2C Health' },
    { name: 'Zeroharm', category: 'Nutraceuticals' },
    { name: 'Healthfab', category: 'Apparel & Tech' },
    { name: 'The Basic Women', category: 'Fashion & Wellness' },
    { name: 'Itokri', category: 'Artisan E-comm' },
    { name: 'Paper Bark Camp', category: 'Hospitality' },
    { name: 'Minimalist', category: 'Skincare D2C' },
    { name: 'Foxtale', category: 'Beauty Tech' },
    { name: 'Dr. Sheth\'s', category: 'Dermatology' },
    { name: 'Kapiva', category: 'Ayurveda Growth' },
    { name: 'Bare Anatomy', category: 'Personalized Care' },
    { name: 'Snitch', category: 'Fast Fashion' },
  ];

  return (
    <section className="py-20 bg-[#F9F8F3] border-b border-black/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline: Only 'The Guest List' as requested */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-black tracking-tight">
            The Guest List
          </h2>
        </div>

        {/* Clean Aligned Client Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENT_BRANDS.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-6 flex flex-col items-center justify-center text-center h-28 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#CCFF00] transition-colors group cursor-default"
            >
              <span className="font-heading font-black text-lg text-black group-hover:scale-105 transition-transform">
                {client.name}
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mt-1">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        {/* Ticker marquee underneath for dynamic motion */}
        <div className="mt-12 overflow-hidden border-y border-black py-4 bg-black text-white">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="flex items-center gap-12 shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-widest"
          >
            {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((b, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-[#CCFF00]">★</span>
                <span>{b.name}</span>
                <span className="text-neutral-500">• {b.category}</span>
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};


