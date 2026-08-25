'use client';

import React from 'react';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Parag',
      role: 'Founder & Technology Head',
      bio: 'A leader with a decade of expertise in Analytics, Marketing, Advertising, and Data. Multi-solution architect with experience across Adobe, Westpac, Woolworths, NAB, Domain, and Prezzee across USA, UK, India & Australia.',
    },
    {
      name: 'Meetu',
      role: 'Co Founder & Operations Head',
      bio: 'Accomplished IT Service Management professional with 15+ years of experience in Service Delivery and Operations across Accenture, Optus, Reliance, and Bharti Airtel.',
    },
    {
      name: 'Kushank',
      role: 'Regional Acquisition Head (IND)',
      bio: 'Business management graduate from Delhi University with over a decade of entrepreneurial experience. Partner & Director at Eppcon Lubricants focusing on value-centric financial strategy.',
    },
    {
      name: 'Anubhav',
      role: 'AI & ML Engineer',
      bio: 'Skilled Artificial Intelligence and Machine Learning Engineer specializing in Python, TensorFlow, PyTorch, and deploying machine learning models that transform data into actionable insights.',
    },
    {
      name: 'Surbhi',
      role: 'Martech Specialist',
      bio: 'MarTech and AdTech consultant helping businesses connect marketing, advertising, and technology. Specializes in CRM systems, analytics platforms, and responsive frontend development.',
    },
    {
      name: 'Sangavi',
      role: 'Business Development Executive',
      bio: 'Computer science background with 2.5+ years of experience in lead generation, LinkedIn/email campaigns, and HubSpot Academy Digital Marketing certification.',
    },
    {
      name: 'Kunal',
      role: 'Digital Marketing Intern',
      bio: 'BCA Graduate with a solid foundation in programming, software development, and data management in Python, Java, and C++. Passionate about technology-driven growth.',
    },
    {
      name: 'Srajan',
      role: 'Search & Performance Marketing Specialist',
      bio: 'Dynamic Search & Performance Marketing Specialist with 2+ years of experience in digital marketing, SEO, Google Ads, social media advertising, and performance analytics.',
    },
  ];

  return (
    <div className="py-12 space-y-20 bg-[#F9F8F3]">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-black text-white p-8 sm:p-14 border-2 border-black shadow-[6px_6px_0px_0px_rgba(120,81,169,1)] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#7851A9] text-[#CCFF00] text-xs font-mono font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Meet The Team
            </span>

            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight leading-tight">
              Our Story & The Minds Behind Janusmaad
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Inspired by multi-faced Janus, the Roman God of transitions, doorways and beginnings, we embrace looking at past data to pave the way for future data-driven growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid — 4 Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight">
            Meet The Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-[#7851A9] transition-all group"
            >
              {/* Circular Avatar Badge */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#7851A9] to-[#48BE9C] p-[2px] mx-auto">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-heading font-black text-2xl text-white group-hover:text-[#CCFF00] transition-colors">
                  {member.name.charAt(0)}
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-xl font-heading font-black text-black group-hover:text-[#7851A9] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-bold text-[#48BE9C] uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed font-normal text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

