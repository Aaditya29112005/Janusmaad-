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
    <section id="contact" className="py-32 relative z-10 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="heading-lg text-black mb-6">Let's connect.</h2>
          <p className="text-xl text-neutral-600 font-medium">
            Have questions about setting up a CDP, multi-touch attribution, or Search Everywhere SEO? Let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 border border-neutral-200">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-black uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-100 border-0 p-4 text-black focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-black uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-neutral-100 border-0 p-4 text-black focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-black uppercase tracking-wider">Work Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-neutral-100 border-0 p-4 text-black focus:ring-2 focus:ring-black transition-shadow"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-black uppercase tracking-wider">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-neutral-100 border-0 p-4 text-black focus:ring-2 focus:ring-black transition-shadow resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-5 hover:bg-neutral-800 transition-colors"
          >
            Submit Request
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 text-green-800 font-bold text-sm text-center">
              Thank you! Your message has been received.
            </div>
          )}

          <div className="text-sm text-neutral-500 font-medium text-center">
            By completing this form, you agree to our{' '}
            <Link href="/privacy" className="text-black font-bold border-b border-black">
              Privacy Policy
            </Link>.
          </div>

        </form>

      </div>
    </section>
  );
};
