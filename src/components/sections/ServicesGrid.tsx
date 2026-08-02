'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Database,
  PieChart,
  Sparkles,
  Target,
  Search,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  BarChart3
} from 'lucide-react';
import { SERVICE_PACKAGES, SERVICE_PILLARS } from '@/data/janusContent';

export const ServicesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-janus-purple" />;
      case 'Database': return <Database className="w-6 h-6 text-janus-mint" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-janus-purple" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-janus-mint" />;
      case 'Target': return <Target className="w-6 h-6 text-janus-purple" />;
      case 'Search': return <Search className="w-6 h-6 text-janus-mint" />;
      case 'Repeat': return <Repeat className="w-6 h-6 text-janus-purple" />;
      default: return <Sparkles className="w-6 h-6 text-janus-mint" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-janus-purple" />;
      case 'Zap': return <Zap className="w-6 h-6 text-janus-mint" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-janus-purple" />;
      case 'Database': return <Database className="w-6 h-6 text-janus-mint" />;
      default: return <Layers className="w-6 h-6 text-janus-purple" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
            Tailored Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Our Enterprise Service Packages
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal">
            From complete growth marketing teams on hire to real-time customer data platforms and multi-channel SEO.
          </p>
        </div>

        {/* 7 Core Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-8 rounded-3xl border border-janus-purple/15 flex flex-col justify-between group hover:border-janus-purple/40 relative overflow-hidden bg-white/95 shadow-md"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-janus-purple/10 border border-janus-purple/20 group-hover:scale-105 transition-transform">
                    {getIcon(pkg.iconName)}
                  </div>
                  {pkg.badge && (
                    <span className="px-3 py-1 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-janus-purple transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-xs text-janus-purple font-semibold mb-4">
                  {pkg.tagline}
                </p>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {pkg.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                  {pkg.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-janus-mint shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Link Action */}
              <Link
                href={pkg.href}
                className="w-full inline-flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-900 group-hover:text-janus-purple transition-colors"
              >
                <span>Learn More & View Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Pillars Sub-Grid */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-janus-purple/15 bg-white/95 backdrop-blur-2xl shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-janus-mint block mb-2">
              Foundational Capabilities
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
              The 4 Janusmaad Service Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="glass-card p-6 rounded-2xl border border-slate-200 hover:border-janus-mint/50 transition-all group bg-slate-50/50"
              >
                <div className="p-3 rounded-xl bg-white border border-slate-200 w-fit mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 group-hover:text-janus-purple transition-colors mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-janus-purple font-semibold mb-2">
                  {pillar.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
