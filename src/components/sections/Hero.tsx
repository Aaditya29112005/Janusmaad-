'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Star, Calculator, Zap, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, METRICS_PROOF } from '@/data/janusContent';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-white to-slate-50 border-b border-slate-200/80">
      {/* Background ambient glowing light blobs */}
      <div className="ambient-blob-purple absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-janus-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="ambient-blob-mint absolute top-1/3 right-10 w-[500px] h-[500px] bg-janus-mint/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle grid mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7851a908_1px,transparent_1px),gradient(to_bottom,#7851a908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: XPay Style Headline & Taglines */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Pill Tagline Badge */}
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

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.05] text-slate-900"
            >
              Growth Architecture <br />
              <span className="text-gradient">Built for Enterprise Scale.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              We don't just do marketing. We deliver growth. Unified Customer Data Platforms (CDP), precision multi-touch attribution, and omnichannel Search Everywhere Optimization.
            </motion.p>

            {/* XPay Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-bold text-base shadow-xl shadow-janus-purple/25 hover:shadow-janus-mint/40 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <span>Book Strategy Call</span>
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

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-janus-mint" />
                <span>Verified 500X Traffic Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                </div>
                <span className="font-bold text-slate-900">{BRAND_INFO.rating} Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: XPay Style Floating Interactive Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Product Glass Card */}
            <div className="glass-panel p-8 rounded-3xl border border-janus-purple/20 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-janus-purple/10 space-y-6 relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-janus-purple/10 border border-janus-purple/20 flex items-center justify-center text-janus-purple">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm">Janusmaad CDP Control</h3>
                    <p className="text-[11px] text-janus-mint font-semibold">● Real-time Stream Active</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-janus-purple/10 text-janus-purple text-[10px] font-bold">
                  v2.0 Enterprise
                </span>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-[11px] text-slate-500 font-medium">Traffic Growth</div>
                  <div className="text-2xl font-heading font-black text-janus-purple mt-1">+500X</div>
                  <div className="text-[10px] text-janus-mint font-semibold mt-1">Verified Scale</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-[11px] text-slate-500 font-medium">Data Hygiene</div>
                  <div className="text-2xl font-heading font-black text-janus-mint mt-1">99.8%</div>
                  <div className="text-[10px] text-slate-500 font-semibold mt-1">Zero Event Loss</div>
                </div>
              </div>

              {/* Feature Chips */}
              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-janus-mint" />
                    <span>Segment & Rudderstack Sync</span>
                  </div>
                  <span className="text-janus-purple font-bold">Connected</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-janus-mint" />
                    <span>Multi-Touch Attribution</span>
                  </div>
                  <span className="text-janus-mint font-bold">Linear Model</span>
                </div>
              </div>
            </div>

            {/* XPay Style Floating Accent Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 z-20 p-4 rounded-2xl bg-white border border-janus-mint/30 shadow-xl text-xs font-bold text-slate-900 flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-janus-mint/15 text-janus-mint">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Client Revenue Boost</div>
                <div className="text-sm font-black text-slate-900">$1.2M+ Delivered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Metrics Proof Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20">
          {METRICS_PROOF.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-janus-purple/15 text-center relative overflow-hidden group bg-white/90 shadow-md"
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
