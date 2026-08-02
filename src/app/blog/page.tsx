'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/janusContent';
import { ContactForm } from '@/components/sections/ContactForm';

export default function BlogPage() {
  return (
    <div className="py-12 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-janus-purple/20 via-[#0A0C16] to-janus-mint/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-mint/20 border border-janus-mint/40 text-janus-mint text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Growth & MarTech Insights
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
              Actionable Strategies <br />
              <span className="text-gradient">For Enterprise Growth</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              Read up on modern Search Everywhere optimization, CDP deployment best practices, and multi-touch attribution models.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-janus-mint/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-janus-purple-light font-medium">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-janus-mint transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-semibold text-janus-mint">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
