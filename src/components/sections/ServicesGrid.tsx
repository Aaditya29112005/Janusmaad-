'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0F0F11] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1 Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-[1.05]">
              Three ways in.<br />
              <span className="text-[#8B5CF6]">One direction.</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-sm max-w-md leading-relaxed">
            Pick the engagement that matches where your brand is right now. Every service starts with understanding your data — not a generic onboarding deck.
          </p>
        </div>

        {/* 3 Tier Dark Cards Container */}
        <div className="bg-[#18181B] border border-neutral-800 rounded-3xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-2xl mb-32">
          
          {/* Tier 01: Diagnostic */}
          <div className="bg-[#202024] border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
                Tier · 01 · Diagnostic
              </div>

              <h3 className="text-3xl font-heading font-black text-white mb-4">
                Live growth audit.<br />60 mins.
              </h3>

              <div className="mb-6">
                <span className="text-sm font-mono text-neutral-400">Free </span>
                <span className="text-2xl font-mono font-bold text-[#8B5CF6]">₹0</span>
                <span className="text-sm font-mono text-neutral-400"> if selected</span>
              </div>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed mb-8">
                Apply and we'll audit your store live on a call. If you're not selected, you can still pay for it. Either way, you leave with a clear growth roadmap — not a pitch deck.
              </p>

              <div className="space-y-4 font-mono text-xs text-neutral-300 pt-6 border-t border-neutral-800">
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>Full-funnel teardown</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>10 growth gaps identified</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>ROAS + CPA benchmarks vs category</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>Recorded + documented, yours to keep</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>No deck. No upsell. Just findings.</span>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="w-full bg-white text-black font-bold py-3.5 px-6 rounded-lg text-center text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule a call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tier 02: Build (Highlighted Card) */}
          <div className="bg-[#141416] border-2 border-[#8B5CF6]/50 rounded-2xl p-8 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Tier · 02 · Build
                </span>
                <span className="bg-[#CCFF00] text-black font-mono font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Most booked
                </span>
              </div>

              <h3 className="text-3xl font-heading font-black text-white mb-6">
                Full Shopify Store Development
              </h3>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed mb-8">
                From sitemap to conversion architecture. Your store stops being a brochure and starts earning. Design, dev, and conversion logic — one team, zero handoffs.
              </p>

              <div className="space-y-4 font-mono text-xs text-neutral-300 pt-6 border-t border-neutral-800">
                <div className="flex items-start gap-2">
                  <span className="text-[#CCFF00]">→</span>
                  <span>Sitemap + narrative + conversion structure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#CCFF00]">→</span>
                  <span>UI/UX + Content + Graphics + Dev</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#CCFF00]">→</span>
                  <span>12–24 pages, all tested pre-launch</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#CCFF00]">→</span>
                  <span>8–10 week sprint</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#CCFF00]">→</span>
                  <span>You share brand assets + photo library</span>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="w-full bg-[#CCFF00] text-black font-bold py-3.5 px-6 rounded-lg text-center text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule a call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tier 03: Retainer */}
          <div className="bg-[#202024] border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
                Tier · 03 · Retainer
              </div>

              <h3 className="text-3xl font-heading font-black text-white mb-6">
                CRO retainer. Per landing page.
              </h3>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed mb-8">
                Choose the number of landing pages. For each one we build a high-converting version and a test variation. Runs until the numbers move.
              </p>

              <div className="space-y-4 font-mono text-xs text-neutral-300 pt-6 border-t border-neutral-800">
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>High-converting version + test variation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>Weekly async, monthly live review</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>A/B tests, heatmaps, funnel audits</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>Meta creatives to cross-sell messaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">→</span>
                  <span>Ongoing, cancel anytime</span>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="w-full bg-white text-black font-bold py-3.5 px-6 rounded-lg text-center text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule a call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Section 2: How we actually work. */}
        <div id="process" className="pt-16 border-t border-neutral-800">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-[1.05]">
                How we actually<br />
                <span className="text-[#8B5CF6]">work.</span>
              </h2>
            </div>
            <p className="text-neutral-400 font-mono text-sm max-w-lg leading-relaxed">
              Data in. Conversion out. Shipped live. No "creative exploration phase." No 40-slide decks. We're builders who happen to be researchers — and that order matters.
            </p>
          </div>

          <div className="bg-[#18181B] border border-neutral-800 rounded-3xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-2xl">
            
            {/* Step 01 */}
            <div className="bg-[#202024] border border-neutral-800/80 rounded-2xl p-8 space-y-6">
              <div className="text-4xl font-heading font-black text-[#8B5CF6]">01</div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Data in</div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Deep platform analysis.
              </h3>
              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                We pull signal from Meta, Shopify, GA4, Clarity, and every other platform that matters. Heatmaps, funnels, drop-offs, session recordings — the full picture before we touch a pixel.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#202024] border border-neutral-800/80 rounded-2xl p-8 space-y-6">
              <div className="text-4xl font-heading font-black text-[#8B5CF6]">02</div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Design out</div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Conversion-first design.
              </h3>
              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                Every element earns its place. Real copy, real assets, conversion architecture built around your customer journey. Unlimited rounds of iteration until the data says it's right.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#202024] border border-neutral-800/80 rounded-2xl p-8 space-y-6">
              <div className="text-4xl font-heading font-black text-[#8B5CF6]">03</div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Shipped live</div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Development + live link.
              </h3>
              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                Hand-coded, speed-tuned, QA'd on real devices. You get a live link to test, click, break. We don't call it done until the numbers do.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


