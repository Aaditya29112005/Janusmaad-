'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Star, Calculator } from 'lucide-react';
import { BRAND_INFO, METRICS_PROOF } from '@/data/janusContent';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-white to-slate-50">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-janus-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-janus-mint/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Background subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7851a908_1px,transparent_1px),linear-gradient(to_bottom,#7851a908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Landing Page Co. Style Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-janus-purple/20 backdrop-blur-md shadow-md text-xs sm:text-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-janus-mint animate-ping" />
            <span className="font-bold text-janus-purple">Janusmaad Studio</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-semibold">Enterprise CDP & Growth Engine</span>
            <Sparkles className="w-3.5 h-3.5 text-janus-mint" />
          </motion.div>

          {/* Landing Page Co. Big Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[1.05] text-slate-900"
          >
            Growth that pays for itself. <br />
            <span className="text-gradient">Make more revenue from same ad spend.</span>
          </motion.h1>

          {/* Powerful Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            From Customer Data Platforms (CDP) & Multi-Touch Attribution to Search Everywhere Optimization and Hyper-Personalization — we scale your funnel with precision data engineering.
          </motion.p>

          {/* Landing Page Co. Style Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-bold text-base shadow-xl shadow-janus-purple/25 hover:shadow-janus-mint/40 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <span>Book a Free Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#math-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold text-base hover:border-janus-purple/30 hover:bg-slate-50 transition-all duration-300 shadow-sm"
            >
              <Calculator className="w-4 h-4 text-janus-purple" />
              <span>Run the Math</span>
            </a>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-600 border-t border-slate-200/80 mt-12"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-janus-mint" />
              <span>Verified Enterprise Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-bold text-slate-900">{BRAND_INFO.rating} / 5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-janus-purple" />
              <span>500X Web Traffic Increase</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Metrics Preview Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {METRICS_PROOF.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-janus-purple/15 text-center relative overflow-hidden group bg-white/90 shadow-lg shadow-janus-purple/5"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-gradient mb-2 group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mb-1">{metric.label}</div>
              <div className="text-xs text-janus-muted font-medium">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
