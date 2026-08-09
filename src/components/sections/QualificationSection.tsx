'use client';

import React from 'react';

export const QualificationSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#121212] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-[1.05]">
              Who we don't<br />
              <span className="text-[#A78BFA]">work with.</span>
            </h2>
          </div>
          <p className="text-neutral-400 font-mono text-sm max-w-md">
            We hate to say no, but sometimes it's the best option.
          </p>
        </div>

        {/* 2-Column Split Box */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800 shadow-2xl">
          
          {/* Left Column: Not For You If */}
          <div className="p-8 sm:p-12 space-y-8 bg-[#161618]">
            <h3 className="text-2xl font-heading font-bold text-[#A78BFA] flex items-center gap-2">
              <span>✕</span> Not for you if
            </h3>

            <ul className="space-y-6 font-mono text-sm text-neutral-300">
              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#A78BFA]">→</span>
                <span>
                  You are not clear who your customer is. <span className="text-neutral-500">(We won't guess for you.)</span>
                </span>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#A78BFA]">→</span>
                <span>
                  You want deliverables measured in pages, not ROAS. <span className="text-neutral-500">(Hire a freelancer.)</span>
                </span>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#A78BFA]">→</span>
                <span>
                  You treat agencies like vendors, not partners. <span className="text-neutral-500">(Life's too short.)</span>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#A78BFA]">→</span>
                <span>
                  You sell categories that violate Meta or Shopify policies. <span className="text-neutral-500">(Hard no.)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: For You If */}
          <div className="p-8 sm:p-12 space-y-8 bg-[#18181A]">
            <h3 className="text-2xl font-heading font-bold text-[#CCFF00] flex items-center gap-2">
              <span>✓</span> For you if
            </h3>

            <ul className="space-y-6 font-mono text-sm text-neutral-200">
              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#CCFF00]">→</span>
                <span>
                  You've hit a ceiling on ROAS or CVR and don't know why.
                </span>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#CCFF00]">→</span>
                <span>
                  You have a product that actually works. <span className="text-neutral-400">(We can't fix a bad one.)</span>
                </span>
              </li>

              <li className="flex items-start gap-3 pb-4 border-b border-neutral-800/60">
                <span className="text-[#CCFF00]">→</span>
                <span>
                  You'd rather see a 14-day test than a 40-slide deck.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00]">→</span>
                <span>
                  You want the person writing the strategy on the first call.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

