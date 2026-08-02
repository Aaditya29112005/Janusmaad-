import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_PACKAGES } from '@/data/janusContent';
import { ArrowRight, CheckCircle2, Repeat, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Lifecycle Marketing Automation — Janusmaad Studio',
  description: 'Turn one-time buyers into lifelong brand advocates with automated email/SMS workflows and real-time CDP triggers.',
};

export default function LifecycleMarketingPage() {
  const pkg = SERVICE_PACKAGES.find(p => p.id === 'lifecycle-marketing-automation') || SERVICE_PACKAGES[6];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider">
          Enterprise Retention Engine
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-slate-900 tracking-tight">
          {pkg.title}
        </h1>
        <p className="text-janus-purple text-sm sm:text-base font-semibold">
          {pkg.tagline}
        </p>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {pkg.description}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-janus-purple/15 bg-white/95 backdrop-blur-2xl shadow-xl max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900">
          Package Deliverables & Strategic Scope
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pkg.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-janus-mint shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-medium">
            Ready to automate your customer LTV? Book a consultation today.
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-janus-purple to-janus-mint text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
