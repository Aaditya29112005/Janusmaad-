'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, ArrowRight, Shield, Users, DollarSign } from 'lucide-react';
import { GAAS_TIMELINE, GAAS_WHY_PILLARS } from '@/data/janusContent';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function GrowthAsAServicePage() {
  return (
    <div className="py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/30 border border-janus-purple/50 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              Growth-as-a-Service (GaaS)
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Growth for Hire — <span className="text-gradient">From Audit to Execution</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Growth for hire — from Audit, Discovery, Strategy & Coaching, through to Technical Execution. All your growth needs are covered under a unified partnership.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Let's Chat About GaaS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Execution Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            The 5-Step Growth Roadmap
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            How we systematically identify bottlenecks, build technical foundations, and orchestrate omnichannel growth.
          </p>
        </div>

        <div className="space-y-6">
          {GAAS_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start gap-6 group hover:border-janus-purple/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-janus-purple to-janus-mint p-[1px] shrink-0">
                <div className="w-full h-full bg-[#0D0F1A] rounded-[15px] flex items-center justify-center font-heading font-black text-2xl text-white group-hover:text-janus-mint transition-colors">
                  {item.step}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                  {item.step}. {item.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why GaaS Depth Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0B0D17]/95">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-janus-purple-light block mb-2">
              Why Hire Janusmaad Growth
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Why Growth-as-a-Service Beats Traditional Hiring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GAAS_WHY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-janus-purple/20 border border-janus-purple/40 flex items-center justify-center text-janus-mint">
                  {idx === 0 ? <TrendingUp className="w-5 h-5" /> : idx === 1 ? <Users className="w-5 h-5" /> : <DollarSign className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
