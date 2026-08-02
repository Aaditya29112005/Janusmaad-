'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, CheckCircle2, ChevronDown, Sparkles, Youtube, Facebook, Instagram, Video, ShoppingCart } from 'lucide-react';
import { SEO_PACKAGES, SEO_FAQS } from '@/data/janusContent';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function SearchEverywhereOptimisationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pillars = [
    { title: 'Holistic Approach', desc: 'We optimise for a wide range of platforms including search engines, social media, e-commerce, and video, ensuring your brand is visible everywhere your audience searches.' },
    { title: 'Integrated Marketing Strategy', desc: 'Search Everywhere Optimisation supports a cohesive and integrated marketing strategy. By aligning efforts across all digital touchpoints we deliver a unified brand message.' },
    { title: 'Omni-Platforms Optimisation', desc: 'We boost your online presence with tailored Social, Youtube, E-Comm SEO driving higher visibility, engagement, and organic growth.' },
    { title: 'Expert Keyword Research', desc: 'Our in-depth keyword research identifies the most relevant and high-traffic keywords for each platform, helping you attract the right audience organically.' },
    { title: 'Technical SEO', desc: 'We enhance your on-page elements and fix technical issues to improve search engine rankings and ensure your site is easily accessible.' },
    { title: 'Continuous Improvement', desc: 'Our team continuously monitors performance and adapts strategies to stay ahead of algorithm changes and industry trends.' },
  ];

  return (
    <div className="py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              Search Everywhere Optimisation
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              If They Don't See You, <br />
              <span className="text-gradient">They Won't Find You.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Discover our holistic approach to optimising digital content across Google, YouTube, Amazon, TikTok, Facebook, and Instagram. Become searchable everywhere.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-semibold text-sm shadow-xl shadow-janus-purple/30 hover:scale-105 transition-all"
              >
                <span>Get Found With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Holistic Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            Organic Growth Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Organic Growth is Possible.
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Discover where your audience is searching and become searchable with Janusmaad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 group hover:border-janus-mint/40"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-janus-mint group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
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

      {/* 3 SEO Tier Pricing Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-purple-light">
            Flexible Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Search Optimisation Plans
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Flexible SEM & SEO plans depending on your budget, targets, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SEO_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-janus-muted leading-relaxed mb-4">
                    {pkg.subtitle}
                  </p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-janus-mint space-y-1">
                    <div>{pkg.keywords}</div>
                    <div className="text-slate-300 font-normal">{pkg.backlinks}</div>
                    <div className="text-slate-400 font-normal">{pkg.blogPosts}</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {pkg.highlights.map((feat, i) => (
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
                  <span>Choose Plan & Let's Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Accordion FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-janus-mint">
            SEO FAQs
          </span>
          <h2 className="text-3xl font-heading font-bold text-white">
            Search Everywhere Optimization FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden"
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
