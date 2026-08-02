'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="relative z-50 bg-gradient-to-r from-[#7851A9]/10 via-[#FAFCFF] to-[#48BE9C]/10 border-b border-janus-purple/10 backdrop-blur-md py-2.5 px-4 text-xs md:text-sm text-center text-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-janus-purple/15 border border-janus-purple/30 text-janus-purple font-semibold text-xs">
          <Sparkles className="w-3.5 h-3.5 text-janus-purple animate-pulse" />
          Growth Breakthrough
        </span>
        <span className="font-medium text-slate-800">
          Facing Growth Challenges? Partner with Us for Personalised Solutions.
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 font-bold text-janus-purple hover:text-janus-mint transition-colors underline underline-offset-4"
        >
          Book a Free Consultation
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
