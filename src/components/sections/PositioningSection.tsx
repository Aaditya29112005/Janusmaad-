'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
            Agency Positioning
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Brand ∩ Data Engineering ∩ Growth Marketing. <br />
            <span className="text-gradient">Most agencies pick two.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Traditional agencies give you pretty designs without analytics schemas, or media buyers who burn cash without tracking data lineage. We build all three under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Traditional Creative Agencies */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Option A: Design Studios
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-800">
              Brand ∩ Creative
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Great aesthetics, but zero tracking plans, broken server-side events, and zero attribution visibility.
            </p>
            <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <XCircle className="w-4 h-4" /> No CDP Infrastructure
              </div>
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <XCircle className="w-4 h-4" /> Blind Ad Spend
              </div>
            </div>
          </div>

          {/* Performance Media Agencies */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Option B: Media Buyers
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-800">
              Growth ∩ Media Spend
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fast execution, but relies on black-box platform algorithms and burns cash without proper data hygiene.
            </p>
            <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <XCircle className="w-4 h-4" /> Disconnected Data
              </div>
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <XCircle className="w-4 h-4" /> No Personalization
              </div>
            </div>
          </div>

          {/* Janusmaad Studio */}
          <div className="glass-card p-8 rounded-3xl border border-janus-purple/30 bg-gradient-to-b from-white via-white to-janus-purple/5 space-y-4 shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-janus-purple">
              Option C: Janusmaad Studio
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900">
              Brand ∩ Data ∩ Growth
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              We bridge engineering, analytics, and marketing. Unified CDP setups, accurate attribution, and Search Everywhere SEO.
            </p>
            <div className="pt-4 border-t border-janus-purple/20 space-y-2 text-xs text-janus-purple font-bold">
              <div className="flex items-center gap-2 text-janus-mint">
                <CheckCircle2 className="w-4 h-4" /> Unified Customer Data Platform
              </div>
              <div className="flex items-center gap-2 text-janus-purple">
                <CheckCircle2 className="w-4 h-4" /> 500X Web Traffic Trajectory
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
