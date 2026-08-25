'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#F9F8F3] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Main Display Headline */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-black tracking-tight leading-[1.05]">
            Landing pages<br />
            that pay for themselves.<br />
            Make more money<br />
            from the same ad spend
          </h1>
        </div>

        {/* Guarantee Banner Block */}
        <div className="bg-[#F2EFE9] border border-black/20 p-6 md:p-8 rounded-none mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-lg md:text-xl text-black font-medium leading-relaxed max-w-3xl">
            We're India's biggest CRO-led landing page company. We ship pages that convert <strong className="font-bold underline text-black">at least 20% better</strong> than what's running today — or we keep working until they do.
          </p>
          <div className="shrink-0 flex flex-col items-start md:items-end border-l md:border-l-0 md:border-r-0 border-black/10 pl-4 md:pl-0">
            <span className="text-4xl md:text-5xl font-mono font-black text-blue-600 tracking-tight">+20%</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">MIN. GUARANTEED LIFT</span>
          </div>
        </div>

        {/* Dual CTAs matching exact spec */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="#contact"
            className="bg-[#CCFF00] text-black border-2 border-black px-8 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-[#b8e600] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
          >
            <span>Book a call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#math-section"
            className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-neutral-50 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
          >
            <span>Run the math</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};


