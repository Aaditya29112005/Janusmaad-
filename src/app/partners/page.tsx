'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { TECH_STACK } from '@/data/janusContent';
import { ContactForm } from '@/components/sections/ContactForm';

export default function PartnersPage() {
  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Technology Partners Ecosystem
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Neutral, Objective <br />
              <span className="text-gradient">MarTech Partners</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              We never take commissions from any tool vendors we recommend. You get 100% honest, unbiased advice tailored to your budget, stack, and growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-heading font-bold text-xl text-janus-mint">
                {tech.name.charAt(0)}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{tech.name}</h3>
              <p className="text-xs text-janus-purple-light font-medium">{tech.category}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Expert implementation, data routing setup, custom tracking schema, and automated destination synchronization.
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
