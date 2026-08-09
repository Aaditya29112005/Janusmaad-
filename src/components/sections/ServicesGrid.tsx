'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Smartphone, Code, ShieldCheck } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative z-10 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Table 1 Header */}
        <div className="mb-14 text-left max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-black tracking-tight mb-4">
            We Build for Conversions
          </h2>
          <p className="text-xl text-neutral-700 font-medium leading-relaxed">
            Choose the solution that fits your brand journey. Every solution starts with understanding your data, UI and funnel.
          </p>
        </div>

        {/* Live Audit Guarantee Callout */}
        <div className="bg-[#CCFF00] border-2 border-black p-6 md:p-8 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-black uppercase tracking-widest text-black block mb-1">
              LIVE AUDIT GUARANTEE
            </span>
            <p className="text-base md:text-lg text-black font-bold">
              We'll audit your store live on a call. Go through everything in detail. Promise to give you a clear growth roadmap - not a pitch deck.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 bg-black text-white px-6 py-3 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            <span>Claim Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Engagement Models Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Card 1: Landing Page Sprint */}
          <div className="bg-[#F9F8F3] border-2 border-black p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-black text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                  3–6 WEEK SPRINT
                </span>
                <span className="text-xs font-mono font-bold text-neutral-500">ONE-TIME SPRINT</span>
              </div>
              
              <h3 className="text-3xl font-heading font-black text-black mb-3">
                Landing Page Sprint
              </h3>
              <p className="text-base text-neutral-600 font-medium mb-6">
                All tested pre-launch and ready to convert high-intent ad traffic.
              </p>

              <div className="space-y-4 border-t border-b border-black/10 py-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-black">
                    Requirements: You share brand guidelines and Digital assets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-black">
                    Deliverables: UI/UX + Sitemap + narrative + Content + Development
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-black">
                    Pre-launch QA on real iOS/Android devices & Core Web Vitals tuned
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="w-full bg-black text-white py-4 text-center font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: CRO Retainer */}
          <div className="bg-[#F9F8F3] border-2 border-black p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#CCFF00] border-b-2 border-l-2 border-black px-4 py-1 font-mono font-black text-xs">
              MOST POPULAR
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                  ONGOING PARTNERSHIP
                </span>
              </div>

              <h3 className="text-3xl font-heading font-black text-black mb-3">
                CRO Retainer
              </h3>
              <p className="text-base text-black font-bold mb-6">
                Reduce the Bounce Rate. Optimise your landing pages for conversion.
              </p>

              <ul className="space-y-3 border-t border-b border-black/10 py-6 mb-8 text-sm font-bold text-neutral-800">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>Create a high converting version</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>Unlimited tasks, one task at a time</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>A/B tests, heatmaps, funnel audits</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>From Meta creatives to cross sell message</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>Weekly catchup, regular updates, cancel anytime</span>
                </li>
              </ul>
            </div>

            <Link
              href="#contact"
              className="w-full bg-[#CCFF00] text-black border-2 border-black py-4 text-center font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#b8e600] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <span>Subscribe to Retainer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Table 2: Data In. Design Out. */}
        <div id="process" className="pt-16 border-t-2 border-black">
          
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black tracking-tight mb-4">
              Data In. Design Out. Start Conversions from Day One.
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 font-medium max-w-4xl leading-relaxed">
              No creative exploration phase. No Delays. No 40-slide decks. We build for conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Principle 1 */}
            <div className="bg-[#F9F8F3] border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-black text-[#CCFF00] flex items-center justify-center font-mono font-black text-xl mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-black text-black mb-3">
                Mobile first, Conversion first, Perfected
              </h3>
              <p className="text-base text-neutral-800 font-normal leading-relaxed">
                Unlimited rounds of iteration until it's right. Every element earns its place. Conversion architecture built around your customer journey.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#F9F8F3] border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-black text-[#CCFF00] flex items-center justify-center font-mono font-black text-xl mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-black text-black mb-3">
                Hand-coded & Speed-tuned
              </h3>
              <p className="text-base text-neutral-800 font-normal leading-relaxed">
                Hand-coded, speed-optimised, QA'd on multiple devices. We don't call it done until the numbers do.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

