'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { BRAND_INFO, SERVICE_PACKAGES, SERVICE_PILLARS } from '@/data/janusContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA area */}
        <div className="mb-24">
          <h3 className="heading-lg mb-8">
            Ready to Scale Your Business by 500X?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-bold px-8 py-4 hover:bg-neutral-200 transition-colors"
          >
            Book Free Strategy Call
          </Link>
        </div>

        <div className="h-px w-full bg-neutral-800 mb-16" />

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <Link href="/" className="inline-block text-2xl font-bold font-heading">
              JANUSMAAD.
            </Link>
            <p className="text-neutral-400 font-medium">
              We don't just do marketing. We deliver growth. Building enterprise-grade Customer Data Platforms (CDP), multi-touch attribution, and Search Everywhere Optimization.
            </p>
            <div className="space-y-2 text-sm text-neutral-300 font-medium">
              <p>{BRAND_INFO.address}</p>
              <a href={`tel:${BRAND_INFO.phone}`} className="block hover:text-white transition-colors">{BRAND_INFO.phone}</a>
              <a href={`mailto:${BRAND_INFO.email}`} className="block hover:text-white transition-colors">{BRAND_INFO.email}</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Service Packages</h4>
            <ul className="space-y-3 font-medium text-neutral-400">
              {SERVICE_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link href={pkg.href} className="hover:text-white transition-colors">
                    {pkg.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 font-medium text-neutral-400">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link href={pillar.href} className="hover:text-white transition-colors">
                    {pillar.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners Ecosystem</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Growth Insights Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-neutral-400 font-medium mb-4">
              Bi-weekly technical breakdowns on CDP data pipelines, multi-touch attribution, and omnichannel SEO.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-500 transition-colors"
              />
              <button
                type="button"
                className="bg-white text-black font-bold px-4 hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 font-medium">
          <p>{BRAND_INFO.copyright}</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 font-bold"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
