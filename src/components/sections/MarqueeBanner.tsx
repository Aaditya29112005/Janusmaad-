'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';
import { TECH_STACK } from '@/data/janusContent';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    { label: '500X Web Traffic Boost', icon: <TrendingUp className="w-4 h-4 text-janus-purple" /> },
    { label: 'Unified Customer Data Platform (CDP)', icon: <Sparkles className="w-4 h-4 text-janus-mint" /> },
    { label: '4.8/5.0 Verified Rating', icon: <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> },
    { label: 'Multi-Touch Attribution', icon: <Zap className="w-4 h-4 text-janus-purple" /> },
    { label: 'Search Everywhere Optimization', icon: <ShieldCheck className="w-4 h-4 text-janus-mint" /> },
    { label: 'Named Senior Growth Architect', icon: <Award className="w-4 h-4 text-janus-purple" /> },
  ];

  return (
    <div className="py-6 bg-white border-y border-slate-200 overflow-hidden relative z-10">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex items-center gap-8 shrink-0"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
