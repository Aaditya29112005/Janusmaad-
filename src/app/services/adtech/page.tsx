'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';
import { SERVICE_PILLARS } from '@/data/janusContent';
import { ContactForm } from '@/components/sections/ContactForm';

export default function AdtechPage() {
  const pillar = SERVICE_PILLARS.find((p) => p.id === 'adtech')!;

  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/25 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Core Pillar: {pillar.title}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              {pillar.tagline}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              {pillar.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Consult on Adtech Infrastructure</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
