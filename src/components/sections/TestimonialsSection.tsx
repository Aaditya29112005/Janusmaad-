'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface VerifiedTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export const TestimonialsSection: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const ALL_TESTIMONIALS: VerifiedTestimonial[] = [
    // Frame 1 (1-6)
    {
      id: '1',
      company: 'Wellbeing Nutrition',
      quote: 'The architectural changes made to our landing pages directly resulted into 44% boost in conversion rate within the first 30 days.',
      author: 'Kala Singh',
      role: 'Head of Growth',
      metric: '+44% CVR',
    },
    {
      id: '2',
      company: 'Zeroharm',
      quote: 'The strategic CRO approach and rapid pre-launch testing brought to the project resulted in a 35% revenue jump.',
      author: 'Sachin Darbarwar',
      role: 'Founder',
      metric: '+35% Revenue',
    },
    {
      id: '3',
      company: 'Healthfab',
      quote: 'The improved user experience and hand-coded speed optimization led to higher engagement and a far more satisfied customer base.',
      author: 'Sourav',
      role: 'Co-founder',
      metric: '+28% AOV',
    },
    {
      id: '4',
      company: 'The Basic Women',
      quote: 'Our customers are more engaged, checkout drop-offs reduced by half, and our monthly ad spend ROI has never been better.',
      author: 'Suchita A Mukerji',
      role: 'Founder',
      metric: '-50% Drop-offs',
    },
    {
      id: '5',
      company: 'Itokri',
      quote: 'The changes they implemented led to a significant increase in our overall performance metrics and reduced acquisition costs.',
      author: 'Nitin Pamnani',
      role: 'Founder',
      metric: '-32% CAC',
    },
    {
      id: '6',
      company: 'Paper Bark Camp',
      quote: 'Motivated to keep things on track so we focus on scaling. Shining a bright light on digital advertising accuracy.',
      author: 'Ben Hutchings',
      role: 'General Manager',
      metric: '+52% RoAS',
    },

    // Frame 2 (7-12)
    {
      id: '7',
      company: 'Minimalist',
      quote: 'Redesigned our main product funnels with zero fluff. Conversion rate jumped from 1.8% to 3.4% across Meta campaigns.',
      author: 'Rohan Sharma',
      role: 'Performance Lead',
      metric: '+88% CVR Lift',
    },
    {
      id: '8',
      company: 'Foxtale',
      quote: 'Zero 40-slide decks, pure execution. They shipped custom modular landing pages that paid for themselves in week two.',
      author: 'Ananya Verma',
      role: 'VP Marketing',
      metric: '2.4x ROI',
    },
    {
      id: '9',
      company: 'Dr. Sheth\'s',
      quote: 'Our mobile bounce rate dropped from 68% down to 34%. Hand-coded velocity and instant loads made the whole difference.',
      author: 'Dr. Aneesh Sheth',
      role: 'Co-Founder',
      metric: '-34% Bounce Rate',
    },
    {
      id: '10',
      company: 'Kapiva',
      quote: 'A/B testing methodology is unmatched. They proved a +22% lift before we rolled out the layout sitewide.',
      author: 'Shantanu Kumar',
      role: 'Growth Director',
      metric: '+22% Proven Lift',
    },
    {
      id: '11',
      company: 'Bare Anatomy',
      quote: 'Cross-selling funnel sequences doubled our cart add-ons. Every dollar spent on design returned four in gross margin.',
      author: 'Vikas Aggarwal',
      role: 'E-commerce Head',
      metric: '4x Margin Return',
    },
    {
      id: '12',
      company: 'Happy Home',
      quote: 'Full customer journey mastery. Demonstrated strong technical depth in analytics, CRO, and lifecycle automation.',
      author: 'Prashant Alambara',
      role: 'Owner & Founder',
      metric: '500X Traffic Scale',
    },

    // Frame 3 (13-18)
    {
      id: '13',
      company: 'Snitch',
      quote: 'Extremely fast turnaround on high-velocity landing pages. Scaled our campaign ad spend 3x without diminishing returns.',
      author: 'Siddharth R',
      role: 'CMO',
      metric: '3x Ad Scale',
    },
    {
      id: '14',
      company: 'Earth Rhythm',
      quote: 'Stitched CDP event data directly with our ad sets. Cleanest conversion attribution setup we have ever operated with.',
      author: 'Harini Sivakumar',
      role: 'Founder & CEO',
      metric: '+41% Retainer LTV',
    },
    {
      id: '15',
      company: 'Perfora',
      quote: 'Landing pages designed around real customer psychology rather than generic templates. Highly recommended team.',
      author: 'Jatan Bawa',
      role: 'Co-Founder',
      metric: '+30% Repeat Sales',
    },
    {
      id: '16',
      company: 'Koparo Clean',
      quote: 'Transformed our subscription checkout flow. Reduced friction and boosted recurring customer signups by +45%.',
      author: 'Simran Radhawa',
      role: 'Head of Product',
      metric: '+45% Subscriptions',
    },
    {
      id: '17',
      company: 'Plum Goodness',
      quote: 'They don\'t call a page done until the data proves it. Relentless focus on hard revenue numbers and speed QA.',
      author: 'Divya Mohanti',
      role: 'VP Brand & Growth',
      metric: '+26% Net Profit',
    },
    {
      id: '18',
      company: 'Sublime Life',
      quote: 'Streamlined our entire hero section and value props. Immediate conversion boost on all paid search traffic.',
      author: 'Deepak Jain',
      role: 'Founder',
      metric: '+38% PPC CVR',
    },
  ];

  const TOTAL_FRAMES = 3;
  const ITEMS_PER_FRAME = 6;
  const visibleTestimonials = ALL_TESTIMONIALS.slice(
    currentFrame * ITEMS_PER_FRAME,
    (currentFrame + 1) * ITEMS_PER_FRAME
  );

  return (
    <section id="testimonials" className="py-24 bg-white relative z-10 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching exact user spec */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-black tracking-tight mb-4">
            Things we are happy about
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-medium">
            We don't do testimonials until there's a number next to them.
          </p>
        </div>

        {/* 6 in 1 Frame: 3 in a Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F8F3] border-2 border-black p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Rating Stars & Company Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                  <span className="font-heading font-black text-lg text-black">
                    {item.company}
                  </span>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-base text-neutral-800 font-normal leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Result Metric */}
              <div className="pt-4 border-t border-black/10 flex items-end justify-between">
                <div>
                  <div className="font-bold text-black text-sm">{item.author}</div>
                  <div className="text-xs text-neutral-500 font-mono">{item.role}</div>
                </div>
                <div className="bg-[#CCFF00] text-black border border-black px-2.5 py-1 font-mono font-black text-xs">
                  {item.metric}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Swipe / Frame Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
            FRAME {currentFrame + 1} OF {TOTAL_FRAMES} · ({ALL_TESTIMONIALS.length} VERIFIED RECEIPTS)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentFrame((prev) => (prev > 0 ? prev - 1 : TOTAL_FRAMES - 1))}
              className="p-3 border-2 border-black bg-white hover:bg-[#CCFF00] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Previous Frame"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            {/* Frame Indicator Dots */}
            <div className="flex gap-2 px-2">
              {[...Array(TOTAL_FRAMES)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentFrame(i)}
                  className={`w-3 h-3 border border-black ${
                    currentFrame === i ? 'bg-black' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentFrame((prev) => (prev < TOTAL_FRAMES - 1 ? prev + 1 : 0))}
              className="p-3 border-2 border-black bg-white hover:bg-[#CCFF00] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Next Frame"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

