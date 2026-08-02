'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { TECH_STACK } from '@/data/janusContent';

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-20 relative z-10 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            MarTech & AdTech Ecosystem
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            Our Tech Stack Expertise
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-normal">
            Our clients work with a wide range of technologies — and so do we. Here are some of the platforms we focus on.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="glass-card p-5 rounded-2xl border border-slate-200 text-center flex flex-col justify-center items-center group hover:border-janus-purple/40 bg-white shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-janus-purple/10 border border-janus-purple/20 flex items-center justify-center font-heading font-bold text-lg text-janus-purple mb-2 group-hover:scale-110 transition-transform">
                {tech.name.charAt(0)}
              </div>
              <div className="font-heading font-bold text-slate-900 text-sm group-hover:text-janus-purple transition-colors">
                {tech.name}
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
