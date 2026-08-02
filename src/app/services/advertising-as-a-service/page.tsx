'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, ArrowRight, CheckCircle2, TrendingUp, Award, Zap, Users } from 'lucide-react';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function AdvertisingAsAServicePage() {
  const adPillars = [
    { title: 'Data-Driven Excellence', desc: 'Our data-driven strategies are designed to optimise ad spend, create highly targeted campaigns, and deliver personalised messages that resonate with your audience.' },
    { title: 'Personalized Campaigns', desc: 'We specialise in delivering data-driven personalised ad campaigns that connect with your target audience on a deeper level, increasing engagement and conversions.' },
    { title: 'Tailored Solutions', desc: 'Our services are tailored to meet the unique needs of businesses of all sizes, from startups to large enterprise organizations.' },
    { title: 'Decade of Expertise', desc: 'With over a decade of experience in creating and executing paid advertising campaigns across Meta, Google, TikTok, and Programmatic ad networks.' },
  ];

  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/30 border border-janus-purple/50 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              Advertising-as-a-Service
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Experience Next-Level <br />
              <span className="text-gradient">Paid Advertising Precision</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Making Ads Profitable is tough. But with Janusmaad your Ad Conversions are Guaranteed through data-backed creative, bidding optimization, and segment orchestration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Let's Chat Paid Advertising</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 group hover:border-janus-purple/50"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-janus-mint group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
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
