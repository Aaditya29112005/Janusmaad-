'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: 'Receipts', href: '#testimonials' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us ?', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Blogs', href: '/blog' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F8F3] border-b border-black py-3 shadow-sm'
          : 'bg-[#F9F8F3] border-b border-black/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand Badge & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/JM_Logo.png"
              alt="Janusmaad Logo"
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-700 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Status Ticker & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Live Ticker Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>SHIPPING · Q2 '26 · <strong className="text-blue-600 font-bold">+34% AVG LIFT</strong></span>
            </div>

            {/* Book a Call Yellow CTA */}
            <Link
              href="#contact"
              className="bg-[#CCFF00] text-black border border-black px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#b8e600] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>Book a call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-[#CCFF00] text-black border border-black px-3 py-1.5 font-bold text-xs uppercase tracking-wider flex items-center gap-1"
            >
              <span>Book call</span>
            </Link>
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 border border-black text-black bg-white"
            >
              {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F9F8F3] border-b-2 border-black px-6 py-6 space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-base font-mono font-bold uppercase tracking-wider text-black py-2 border-b border-neutral-200"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>SHIPPING · Q2 '26 · <strong className="text-blue-600">+34% AVG LIFT</strong></span>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#CCFF00] text-black border border-black font-bold text-sm uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

