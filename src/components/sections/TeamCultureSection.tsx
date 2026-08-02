'use client';

import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TeamCultureSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
              Studio Culture
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
              We don't hire fast. <br />
              <span className="text-gradient">We keep people longer.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Most agencies churn account managers every 12 months. We plant our champions in the ground and grow them. Small by design. Every project has a named senior owner, not a junior "account handoff."
            </p>

            <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-janus-purple shrink-0" />
                <span>Named Senior Architect on every account</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-janus-mint shrink-0" />
                <span>10+ Years hands-on MarTech & Growth experience</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-janus-purple shrink-0" />
                <span>100% transparent data & zero retainer theatre</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-md space-y-3">
              <div className="text-4xl font-heading font-black text-janus-purple">100%</div>
              <h4 className="font-heading font-bold text-slate-900 text-base">Client Transparency</h4>
              <p className="text-xs text-slate-500">We share live dashboards and raw data schemas directly with your internal team.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-md space-y-3">
              <div className="text-4xl font-heading font-black text-janus-mint">500X</div>
              <h4 className="font-heading font-bold text-slate-900 text-base">Traffic Acceleration</h4>
              <p className="text-xs text-slate-500">Verified single-digit to triple-digit traffic scaling recorded across enterprise clients.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-md space-y-3 sm:col-span-2">
              <div className="text-4xl font-heading font-black text-slate-900">4.8 / 5</div>
              <h4 className="font-heading font-bold text-slate-900 text-base">Client Satisfaction Score</h4>
              <p className="text-xs text-slate-500">Measured quarterly across B2B and B2C enterprise partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
