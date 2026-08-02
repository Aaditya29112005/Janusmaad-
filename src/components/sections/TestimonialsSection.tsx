'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '@/data/janusContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
            Verified Client Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            We Don't Just Do Marketing. We Deliver Growth.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal">
            Hear from founders, general managers, and business leaders who scaled with Janusmaad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-janus-purple/15 flex flex-col justify-between relative overflow-hidden group hover:border-janus-purple/40 bg-white/95 shadow-md"
            >
              <div className="space-y-6">
                {/* Quote icon & rating */}
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-janus-purple/30 group-hover:text-janus-purple transition-colors" />
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
                {item.metric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold mb-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.metric}
                  </div>
                )}
                <div>
                  <div className="font-heading font-bold text-slate-900 text-base">{item.author}</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.role} • <span className="text-slate-800 font-bold">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
