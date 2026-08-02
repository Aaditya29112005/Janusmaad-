'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PieChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function AttributionAsAServicePage() {
  const steps = [
    { step: '01', title: 'Setup and Integration', desc: 'Identify objectives, gather requirements, select tech stack, design schema/mapping, and establish data governance.' },
    { step: '02', title: 'Data Collection', desc: 'Cross-channel tracking, event tracking setup, user segmentation, anonymization, and historical data quality assurance.' },
    { step: '03', title: 'Attribution Modeling', desc: 'Multi-model comparison, conversion funnel tracking, custom algorithmic model creation, and continuous refinement.' },
    { step: '04', title: 'Analysis and Insights', desc: 'Conversion path analysis, touchpoint synergy, anomaly detection, ROI evaluation, and performance dashboards.' },
    { step: '05', title: 'Recommendation & Optimization', desc: 'Budget reallocation, A/B testing, channel optimization, feedback loop setup, and ongoing executive reports.' },
  ];

  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/30 border border-janus-purple/50 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <PieChart className="w-3.5 h-3.5" />
              Attribution-as-a-Service
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Gain Clarity & <span className="text-gradient">Accurate Multi-Touch Attribution</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Gain Clarity, Data analytics, Accurate Attribution, Anomaly Detection and Actionable Insights to Drive Data-Driven-Decision-Making.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Let's Chat Attribution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Attribution Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            5-Phase Attribution Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 group hover:border-janus-mint/40"
            >
              <span className="text-2xl font-heading font-black text-janus-mint">{item.step}</span>
              <h3 className="text-lg font-heading font-bold text-white group-hover:text-janus-mint transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
