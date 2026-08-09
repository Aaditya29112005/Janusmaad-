'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#F9F8F3] border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-black tracking-tight mb-4">
            Lets BUILD landing pages that earn their keep
          </h2>
          <p className="text-xl text-neutral-700 font-medium max-w-2xl mx-auto">
            Book a live audit call or drop us a message. We promise a clear growth roadmap — not a 40-slide pitch deck.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-black uppercase tracking-wider">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F9F8F3] border border-black p-3.5 text-black font-medium focus:ring-2 focus:ring-black outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-black uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#F9F8F3] border border-black p-3.5 text-black font-medium focus:ring-2 focus:ring-black outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-black uppercase tracking-wider">Work Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#F9F8F3] border border-black p-3.5 text-black font-medium focus:ring-2 focus:ring-black outline-none"
              placeholder="john@brand.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-black uppercase tracking-wider">Store URL / Message *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#F9F8F3] border border-black p-3.5 text-black font-medium focus:ring-2 focus:ring-black outline-none resize-none"
              placeholder="Tell us about your brand, current conversion rate, and ad spend..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CCFF00] text-black border-2 border-black font-black py-4 uppercase tracking-wider text-base hover:bg-[#b8e600] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
          >
            Submit Request & Book Audit
          </button>

          {submitted && (
            <div className="p-4 bg-[#CCFF00] border border-black text-black font-mono font-bold text-sm text-center">
              ✓ Thank you! Your request has been received. We will get back within 24 hours.
            </div>
          )}

        </form>

      </div>
    </section>
  );
};

