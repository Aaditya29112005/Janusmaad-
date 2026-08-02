'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Database,
  PieChart,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { SERVICE_PACKAGES } from '@/data/janusContent';

export const BentoGridSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cdp' | 'attribution' | 'seo' | 'personalisation'>('cdp');

  return (
    <section className="py-24 relative z-10 bg-[#FAFCFF] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-janus-purple" />
            Enterprise Growth Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight">
            Designed for Speed, Scale & Precision Data
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal">
            Everything your business needs to un-fragment customer data, track multi-channel ROI, and scale web traffic by 500X.
          </p>
        </div>

        {/* XPay-Style Interactive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Large Highlight Box (CDP & Data Engine) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-panel p-8 sm:p-12 rounded-3xl border border-janus-purple/20 bg-white/95 backdrop-blur-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-janus-purple/10 border border-janus-purple/20 text-janus-purple">
                  <Database className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold">
                  Core CDP Engine
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
                  Customer Data Platform (CDP) Implementation
                </h3>
                <p className="text-janus-purple text-xs sm:text-sm font-semibold mb-4">
                  Unified 360° Customer Profiles & Real-time Event Streaming
                </p>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  Un-fragment your user journeys across Segment, Rudderstack, and Snowflake. Capture first-party data securely with zero data loss.
                </p>
              </div>

              {/* Interactive Widget Mockup */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Live Data Stream</span>
                  <span className="text-janus-mint flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-janus-mint animate-pulse" /> 99.98% Accuracy
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs text-slate-400 font-medium">Events/Sec</div>
                    <div className="text-lg font-heading font-bold text-slate-900">14,250</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs text-slate-400 font-medium">Identity Match</div>
                    <div className="text-lg font-heading font-bold text-janus-purple">98.4%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs text-slate-400 font-medium">Sync Latency</div>
                    <div className="text-lg font-heading font-bold text-janus-mint">&lt;12ms</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/services/customer-data-platform"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-janus-purple transition-colors"
              >
                <span>Explore CDP Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Search Everywhere SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-janus-mint/20 bg-white/95 backdrop-blur-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-janus-mint/10 border border-janus-mint/20 text-janus-mint">
                  <Search className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold">
                  Omnichannel SEO
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Search Everywhere Optimization
                </h3>
                <p className="text-xs text-janus-mint font-semibold mb-3">
                  Google, ChatGPT, TikTok & YouTube Visibility
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Be discovered wherever your customers search. 500X traffic boost verified across B2B & B2C brands.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-janus-mint shrink-0" />
                  <span>GEO & AI Answer Engine Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-janus-mint shrink-0" />
                  <span>High-Intent Commercial Keyword Dominance</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/services/search-everywhere-optimisation"
                className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-900 group-hover:text-janus-mint transition-colors"
              >
                <span>View Search Everywhere Strategy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Multi-Touch Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-janus-purple/20 bg-white/95 backdrop-blur-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="p-3.5 rounded-2xl bg-janus-purple/10 border border-janus-purple/20 text-janus-purple w-fit">
                <PieChart className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Multi-Touch Attribution
                </h3>
                <p className="text-xs text-janus-purple font-semibold mb-3">
                  Know Exactly Which Channel Drove Every Dollar
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  First-touch, last-touch, and linear algorithmic models to eliminate ad spend waste.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/services/attribution-as-a-service"
                className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-900 group-hover:text-janus-purple transition-colors"
              >
                <span>View Attribution Models</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Hyper-Personalisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 glass-panel p-8 rounded-3xl border border-janus-mint/20 bg-white/95 backdrop-blur-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-janus-mint/10 border border-janus-mint/20 text-janus-mint w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">
                  Personalisation-as-a-Service
                </h3>
                <p className="text-xs text-janus-mint font-semibold">
                  Dynamic Real-time Experiences for Every Visitor
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Deliver dynamic landing pages, tailored product recommendations, and behavioral triggers based on CDP audience segments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-800">Dynamic Segment Trigger</div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="text-slate-500 font-medium">Audience: Enterprise B2B SaaS</div>
                  <div className="text-janus-purple font-bold">Offer: Free CDP Architecture Audit</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/services/personalisation-as-a-service"
                className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-900 group-hover:text-janus-mint transition-colors"
              >
                <span>Learn Personalisation Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
