'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PAAS_FAQS } from '@/data/janusContent';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function PersonalisationAsAServicePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const phases = [
    { step: '01', title: 'Audit & Discovery', desc: 'Understand business goals, audit maturity, map data sources, design data schema, and define personalization roadmaps.' },
    { step: '02', title: 'Building Foundation', desc: 'Setup event tracking, tag management, personalization tools, MVP use cases, dynamic UX, and automated retention flows.' },
    { step: '03', title: 'Execution', desc: 'Omnichannel journey maps, ID graph integration, campaign orchestration, experimentation, and crafting next-best-actions.' },
    { step: '04', title: 'Optimization', desc: 'Process standardization, value realization, automation, machine learning AI scale, and governance frameworks.' },
  ];

  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Personalisation-as-a-Service (PaaS)
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Because Every Customer <br />
              <span className="text-gradient">Deserves a Unique Experience</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Personalisation for Hire - Deliver Tailored Experiences and Next-Best-Actions Across All Channels.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Let's Chat Personalisation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Process Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            4-Phase Personalisation Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, idx) => (
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

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            PaaS Insights
          </span>
          <h2 className="text-3xl font-heading font-bold text-white">
            Personalisation FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {PAAS_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-heading font-bold text-white text-base md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-janus-mint transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
