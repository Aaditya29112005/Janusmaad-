'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '@/data/janusContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0B] text-white pt-24 pb-16 relative z-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Massive Display Headline matching Screenshot 5 */}
        <div className="mb-20">
          <div className="flex justify-end mb-6">
            <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-ping inline-block" />
            </div>
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.9] text-left">
            landing<br />
            pages that<br />
            <span className="text-[#CCFF00]">earn their keep.</span>
          </h2>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px w-full bg-neutral-800/80 mb-16" />

        {/* 4-Column Footer Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 font-mono text-xs">
          
          {/* Column 1: The Promise */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span className="text-neutral-600">●</span> THE PROMISE
            </div>
            
            <p className="text-neutral-300 font-normal text-sm leading-relaxed max-w-md">
              We ship landing pages that convert <strong className="text-[#CCFF00] font-bold">at least +20% better</strong> than what's running today. If they don't, we keep working. No retainer theatre.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-bold px-6 py-3.5 text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <span>Send your URL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Column 2: Work */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span className="text-neutral-600">●</span> WORK
            </div>
            <ul className="space-y-3 text-neutral-400 font-medium text-sm">
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Receipts</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Hall of Fame</Link></li>
            </ul>
          </div>

          {/* Column 3: Words */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span className="text-neutral-600">●</span> WORDS
            </div>
            <ul className="space-y-3 text-neutral-400 font-medium text-sm">
              <li><Link href="#math-section" className="hover:text-white transition-colors">The math</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why CRO</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog Insights</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span className="text-neutral-600">●</span> LOCATION & SOCIALS
            </div>
            <ul className="space-y-3 text-neutral-400 font-medium text-sm">
              <li className="text-white font-bold">Surat · IN / Noida · IN</li>
              <li><a href={BRAND_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={BRAND_INFO.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">{BRAND_INFO.email}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Top Scroll */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <p>{BRAND_INFO.copyright}</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 font-bold text-white"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

