'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Send,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { BRAND_INFO, SERVICE_PACKAGES, SERVICE_PILLARS, TECH_STACK } from '@/data/janusContent';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-20 bg-[#FAFCFF] border-t border-slate-200/80 pt-24 pb-12 overflow-hidden text-slate-600 text-sm">
      {/* Radiant background glowing lighting blobs */}
      <div className="ambient-blob-purple absolute top-0 left-1/3 w-[600px] h-[600px] bg-janus-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="ambient-blob-mint absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-janus-mint/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7851a906_1px,transparent_1px),linear-gradient(to_bottom,#7851a906_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* World-Class Top CTA Glass Card */}
        <div className="glass-panel p-8 md:p-14 rounded-3xl border border-janus-purple/20 mb-20 relative overflow-hidden bg-gradient-to-br from-white via-white to-janus-purple/5 shadow-2xl shadow-janus-purple/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-janus-mint/15 border border-janus-mint/30 text-janus-mint text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                World-Class Growth Architecture
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                Ready to Scale Your Business by <span className="text-gradient">500X?</span>
              </h3>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
                Schedule a 1-on-1 strategy session with our senior MarTech architects. Unified CDPs, omni-channel Search Everywhere Optimization, and zero retainer theatre.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-bold text-base shadow-xl shadow-janus-purple/25 hover:shadow-janus-mint/40 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <span>Book Free Strategy Call</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* World's Best 5-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20">
          {/* Column 1: Brand Profile & Live Operational Status */}
          <div className="lg:col-span-4 space-y-6">
            {/* Official Logo */}
            <Link href="/" className="inline-block group">
              <div className="relative h-12 w-56 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Janusmaad — Mad About Growth"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              We don't just do marketing. We deliver growth. Building enterprise-grade Customer Data Platforms (CDP), multi-touch attribution, and Search Everywhere Optimization.
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-janus-mint/40 shadow-sm text-xs font-bold text-slate-800">
              <span className="flex h-2.5 w-2.5 rounded-full bg-janus-mint animate-pulse" />
              <span>All Systems Operational</span>
              <span className="text-slate-300">|</span>
              <span className="text-janus-purple font-semibold">500X Scale</span>
            </div>

            {/* Contact details */}
            <div className="space-y-3 text-xs text-slate-700 font-medium pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-janus-mint shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-janus-purple shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-janus-purple transition-colors font-semibold">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-janus-mint shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-janus-purple transition-colors font-semibold">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Client rating badge */}
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="font-bold text-slate-900">{BRAND_INFO.rating} / 5.0</span>
              </div>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 font-medium">{BRAND_INFO.reviewCount}</span>
            </div>
          </div>

          {/* Column 2: 7 Enterprise Service Packages */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-slate-900 text-sm tracking-wider uppercase flex items-center gap-2">
              <Zap className="w-4 h-4 text-janus-purple" />
              Service Packages
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium">
              {SERVICE_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    href={pkg.href}
                    className="hover:text-janus-purple transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-janus-mint transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{pkg.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 4 Core Pillars & Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-slate-900 text-sm tracking-wider uppercase flex items-center gap-2">
              <Globe className="w-4 h-4 text-janus-mint" />
              Company
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link href={pillar.href} className="hover:text-janus-purple transition-colors">
                    {pillar.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-200">
                <Link href="/partners" className="hover:text-janus-purple transition-colors">
                  Partners Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-janus-purple transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-janus-purple transition-colors">
                  Growth Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-janus-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Tech Ecosystem Badges */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-slate-900 text-sm tracking-wider uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-janus-purple" />
              Growth Newsletter
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Bi-weekly technical breakdowns on CDP data pipelines, multi-touch attribution, and omnichannel SEO.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-janus-purple transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-janus-purple to-janus-mint text-white hover:opacity-90 transition-opacity flex items-center justify-center shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-janus-purple font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              )}
            </form>

            {/* Quick MarTech Badges */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Tech Ecosystem Badges
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.slice(0, 6).map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-700 shadow-2xs"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Interactive Scroll To Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>{BRAND_INFO.copyright}</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact & Support
            </Link>

            {/* Scroll-To-Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-janus-purple hover:text-janus-purple transition-all shadow-sm flex items-center gap-1.5 font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
