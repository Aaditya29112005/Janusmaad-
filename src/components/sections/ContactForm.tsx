'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, PhoneCall, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '@/data/janusContent';

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
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7851A9', '#48BE9C', '#0F172A'],
      });
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-14 rounded-3xl border border-janus-purple/15 bg-white/95 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-janus-purple/10 border border-janus-purple/20 text-janus-purple text-xs font-bold uppercase tracking-wider mb-4">
                  Let's Connect
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">
                  Book Your Free Growth Strategy Consultation
                </h2>
                <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed font-normal">
                  Have questions about setting up a CDP, multi-touch attribution, or Search Everywhere SEO? Speak directly with our senior growth architects.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-janus-mint/10 border border-janus-mint/20 text-janus-mint">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Headquarters
                    </h4>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      {BRAND_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-janus-purple/10 border border-janus-purple/20 text-janus-purple">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-janus-purple transition-colors mt-1 block"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-janus-mint/10 border border-janus-mint/20 text-janus-mint">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-janus-purple transition-colors mt-1 block"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-2">
                      Full Name <span className="text-janus-purple">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prashant Alambara"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-janus-purple transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-janus-purple transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-2">
                      Work Email <span className="text-janus-purple">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-janus-purple transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="CDP Implementation / SEO Strategy"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-janus-purple transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-2">
                    How can we help your business grow? <span className="text-janus-purple">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-janus-purple transition-colors resize-none shadow-sm"
                  />
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  By completing this form, you agree to the Janusmaad{' '}
                  <Link href="/privacy" className="text-janus-purple underline font-bold">
                    Privacy Policy
                  </Link>.
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white font-bold text-sm shadow-xl shadow-janus-purple/25 hover:shadow-janus-purple/40 hover:scale-105 transition-all"
                >
                  <span>Submit Consultation Request</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="p-4 rounded-xl bg-janus-mint/15 border border-janus-mint/30 text-janus-mint font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
