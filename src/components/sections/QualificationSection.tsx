'use client';

import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const QualificationSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            Client Selectivity
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
            Who we don't work with.
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We review new client inquiries weekly and select only brands where we can deliver transformational 500X growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Who we don't work with */}
          <div className="glass-card p-8 rounded-3xl border border-red-200 bg-red-50/30 space-y-6">
            <h3 className="text-xl font-heading font-bold text-red-900 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-500" />
              Not a Fit
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span>Brands looking for cheap $200 quick hacks without fixing core analytics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span>Companies unwilling to grant data layer or tracking access to setup clean CDP pipelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span>Businesses looking for vanity metrics rather than bottom-line revenue impact.</span>
              </li>
            </ul>
          </div>

          {/* Who we thrive with */}
          <div className="glass-card p-8 rounded-3xl border border-janus-mint/30 bg-janus-mint/5 space-y-6 shadow-md">
            <h3 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-janus-mint" />
              Ideal Janusmaad Partners
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-800 font-bold">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-janus-mint mt-2 shrink-0" />
                <span>Ambitious DTC & Enterprise B2B brands scaling beyond single-channel limitations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-janus-mint mt-2 shrink-0" />
                <span>Teams ready to deploy unified Customer Data Platforms (CDP) & Multi-Touch Attribution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-janus-mint mt-2 shrink-0" />
                <span>Companies wanting a dedicated senior growth partner working hand-in-hand with internal teams.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
