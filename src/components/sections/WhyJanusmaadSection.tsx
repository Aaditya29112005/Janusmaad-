'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { WHY_JANUSMAAD } from '@/data/janusContent';

export const WhyJanusmaadSection: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <Heart className="w-6 h-6 text-janus-purple" />;
      case '02': return <Sparkles className="w-6 h-6 text-janus-mint" />;
      case '03': return <Shield className="w-6 h-6 text-janus-purple" />;
      case '04': return <TrendingUp className="w-6 h-6 text-janus-mint" />;
      default: return <Sparkles className="w-6 h-6 text-janus-mint" />;
    }
  };

  return (
    <section className="py-24 relative z-10 bg-slate-50/50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold uppercase tracking-wider">
            Why Choose Janusmaad
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Accountable Partners Who Genuinely Care
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal">
            We fuel sustainable growth through transparent data modeling, audience orchestration, and high-impact ROI priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_JANUSMAAD.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-janus-purple/15 relative overflow-hidden group hover:border-janus-mint/50 bg-white/95 shadow-md"
            >
              {/* Number Accent */}
              <div className="absolute top-4 right-6 text-5xl font-heading font-black text-slate-200 group-hover:text-janus-purple/20 transition-colors pointer-events-none">
                {item.number}
              </div>

              <div className="p-3.5 rounded-2xl bg-janus-purple/10 border border-janus-purple/20 w-fit mb-6 group-hover:scale-110 transition-transform">
                {getIcon(item.number)}
              </div>

              <span className="text-xs font-bold text-janus-mint uppercase tracking-wider block mb-1">
                {item.subtitle}
              </span>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
