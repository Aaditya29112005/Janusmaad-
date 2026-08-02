'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '@/data/janusContent';

export default function PrivacyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0B0D17]/95 space-y-6">
        <div className="flex items-center gap-3 text-janus-mint">
          <ShieldCheck className="w-8 h-8" />
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Privacy Policy
          </h1>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed">
          Last updated: 2024. Janusmaad ("we", "our", "us") is committed to respecting your privacy and safeguarding any personal or technical data collected through our website and services.
        </p>

        <div className="space-y-6 border-t border-white/10 pt-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-heading font-bold text-white mb-2">1. Data Collection & Usage</h2>
            <p>We collect information you voluntarily provide through contact forms, consultation booking requests, and newsletter subscriptions (e.g. name, work email, phone number, company name). We use this information solely to communicate with you and evaluate growth strategy needs.</p>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-white mb-2">2. Data Security & CDP Governance</h2>
            <p>As experts in Customer Data Platforms (CDP) and data governance, we prioritize security and compliance with strict encryption, anonymization, and access protocols. We never sell or share your personal data with third-party brokers.</p>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-white mb-2">3. Contact Us</h2>
            <p>If you have questions regarding this Privacy Policy or wish to request data removal, please contact us at <a href={`mailto:${BRAND_INFO.email}`} className="text-janus-mint underline">{BRAND_INFO.email}</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
