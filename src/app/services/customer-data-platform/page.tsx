'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Lock,
  Layers,
  Award
} from 'lucide-react';
import { CDP_PACKAGES, CDP_FAQS } from '@/data/janusContent';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function CustomerDataPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const cdpPillars = [
    { title: 'Deep Expertise', desc: 'Trust our extensive experience with B2B and B2C clients for precision and reliability in CDP implementation.', icon: Award },
    { title: 'Rapid Deployment', desc: 'We fast-track your CDP implementation, minimising downtime and allowing you to focus on core business activities.', icon: Zap },
    { title: 'Tailored Solutions', desc: 'Flexible options to fit your budget and internal resources, providing a customised approach to meet your needs.', icon: Layers },
    { title: 'Scalable Architecture', desc: 'CDP implementations designed to scale with your business, ensuring they continue to meet your needs as you grow.', icon: Database },
    { title: 'Client Empowerment', desc: 'Our training programs equip your team with the skills and knowledge to manage your CDP effectively for long-term success.', icon: Users },
    { title: 'Industry Best Practices', desc: 'Leverage our industry-leading expertise to ensure your CDP implementation follows the latest best practices.', icon: CheckCircle2 },
    { title: 'In-Depth Understanding', desc: 'We deeply understand your business, delivering a solution tailored to your unique requirements.', icon: Users },
    { title: 'Security and Compliance', desc: 'We prioritize data security and compliance, ensuring your CDP meets all regulatory requirements.', icon: Lock },
  ];

  return (
    <div className="py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/25 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              Customer Data Platform (CDP)
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              What Truly Unlocks Growth <br />
              <span className="text-gradient">is a Unified CDP</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Implementing various Marketing, Advertising and Analytics tools might help. But what truly unlocks Growth is a unified CDP setup avoiding common gotchas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Book CDP Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 CDP Advantages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Implementation Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Setting up a CDP can be tricky. We help you avoid the gotchas.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cdpPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 group hover:border-janus-mint/40"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-janus-mint group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-janus-mint transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CDP Tiered Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-purple-light">
            Flexible Service Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            CDP Packages That Suit You
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Flexible CDP implementation depending on your budget, engineering bandwidth, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CDP_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden ${
                pkg.badge ? 'border-janus-mint/60 bg-gradient-to-b from-[#0D0F1A] via-[#0D0F1A] to-janus-mint/10' : 'border-white/10'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-janus-mint text-slate-950 text-xs font-bold uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-janus-muted leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-janus-mint shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs transition-all ${
                    pkg.badge
                      ? 'bg-gradient-to-r from-janus-purple to-janus-mint text-white shadow-lg shadow-janus-mint/20 hover:scale-105'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Let's Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CDP Accordion FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Got Questions?
          </span>
          <h2 className="text-3xl font-heading font-bold text-white">
            CDP Implementation FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {CDP_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
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
