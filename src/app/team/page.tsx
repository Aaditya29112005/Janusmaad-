'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Parag',
      role: 'Growth Lead & Founder',
      bio: 'Deep expertise in digital marketing, analytics architecture, social media marketing, data integration, and customer lifecycle strategy.',
    },
    {
      name: 'MarTech & Data Engineering Team',
      role: 'Data Scientists & Engineers',
      bio: 'Skilled professionals who plan, maintain and track targets onboard, bridging gaps between engineering, marketing, and product.',
    },
    {
      name: 'Search & Media Specialists',
      role: 'Omnichannel SEO & Paid Media',
      bio: 'Experts in Search Everywhere optimization across Google, YouTube, Amazon, TikTok, Meta, and Bing.',
    },
  ];

  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/30 border border-janus-purple/50 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Leadership & Experts
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Meet the Growth Engineers <br />
              <span className="text-gradient">Behind Janusmaad</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Our entrepreneurial team comprises marketers, data scientists, and developers dedicated to turning complex data into revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-janus-purple to-janus-mint p-[1px]">
                <div className="w-full h-full bg-[#0D0F1A] rounded-[15px] flex items-center justify-center font-heading font-bold text-2xl text-white">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-janus-mint transition-colors">
                {member.name}
              </h3>
              <p className="text-xs text-janus-purple-light font-semibold uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
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
