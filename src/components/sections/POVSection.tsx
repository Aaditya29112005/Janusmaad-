'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

export const POVSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-gradient-to-br from-white via-janus-purple/5 to-janus-mint/5 border-y border-janus-purple/15 overflow-hidden text-slate-900">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-janus-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-janus-mint/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          Point of View
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-slate-900">
          AI is coming for your ad profits. <br />
          <span className="text-gradient">The moat moved to unified data & personalisation.</span>
        </h2>

        <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Every brand now has access to the same tools, the same stock copy, the same landing page template with a gradient and a dog. Good enough is free. Good enough also doesn't convert.
          </p>

          <p>
            The moat moved. It's not in "having a website." It's in having a unified Customer Data Platform (CDP) and hyper-personalized customer journeys so precise that no generic AI model could replicate them without your customer data pipeline.
          </p>

          <p className="text-slate-900 font-bold text-lg sm:text-xl pt-2 border-l-4 border-janus-purple pl-4">
            We don't sell you generic agency retainer theatre. We sell you a data-backed point of view, translated into pixels, measured in revenue, shipped in weeks.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-bold text-sm shadow-xl shadow-janus-purple/20 hover:shadow-janus-mint/30 hover:scale-105 transition-all duration-300"
          >
            <span>Let's Form Data Opinions Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
