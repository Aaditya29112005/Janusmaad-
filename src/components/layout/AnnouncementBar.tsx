'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-black text-white py-2 px-4 text-xs md:text-sm text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-medium">
        <span>
          Facing Growth Challenges? Partner with Us for Personalised Solutions.
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 font-bold underline underline-offset-4 hover:text-neutral-300 transition-colors"
        >
          Book a Free Consultation
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
