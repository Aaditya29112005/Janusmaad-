'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ACQUIRE_LINKS = [
    { label: 'Performance Marketing', href: '/services/advertising-as-a-service' },
    { label: 'SEO (Search Everywhere)', href: '/services/search-everywhere-optimisation' },
    { label: 'SMM (Social Media)', href: '/services/advertising-as-a-service' },
  ];

  const CONVERT_LINKS = [
    { label: 'Build (Design & Dev)', href: '/services/growth-as-a-service' },
    { label: 'CRO (Conversion Rate)', href: '/services/personalisation-as-a-service' },
  ];

  const RETAIN_LINKS = [
    { label: 'Retention Marketing', href: '/services/lifecycle-marketing-automation' },
    { label: 'CEP (Customer Engagement)', href: '/services/martech' },
    { label: 'CDP (Customer Data Platform)', href: '/services/customer-data-platform' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F8F3] border-b border-black py-3 shadow-md'
          : 'bg-[#F9F8F3] border-b border-black/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left Side — links to homepage */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/JM_Logo.png"
              alt="Janusmaad Logo"
              className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold uppercase tracking-wider">
            <Link href="#testimonials" className="text-neutral-700 hover:text-black transition-colors">
              Receipts
            </Link>

            {/* Acquire Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('acquire')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-neutral-700 hover:text-black py-2">
                <span>Acquire</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'acquire' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 w-64 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2 z-50"
                  >
                    {ACQUIRE_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-2 hover:bg-[#CCFF00] text-black font-mono font-bold text-xs transition-colors rounded-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Convert Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('convert')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-neutral-700 hover:text-black py-2">
                <span>Convert</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'convert' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 w-64 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2 z-50"
                  >
                    {CONVERT_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-2 hover:bg-[#CCFF00] text-black font-mono font-bold text-xs transition-colors rounded-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Retain Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('retain')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-neutral-700 hover:text-black py-2">
                <span>Retain</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'retain' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 w-64 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2 z-50"
                  >
                    {RETAIN_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-2 hover:bg-[#CCFF00] text-black font-mono font-bold text-xs transition-colors rounded-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/team" className="text-neutral-700 hover:text-black transition-colors">
              About
            </Link>

            <Link href="/blog" className="text-neutral-700 hover:text-black transition-colors">
              Blog
            </Link>

            <Link
              href="#contact"
              className="text-[#7851A9] hover:text-[#48BE9C] transition-colors border-b border-[#7851A9]"
            >
              Get Free Growth Audit
            </Link>
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="bg-[#CCFF00] text-black border-2 border-black px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#b8e600] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-[#CCFF00] text-black border border-black px-3 py-1.5 font-bold text-xs uppercase tracking-wider flex items-center gap-1"
            >
              <span>Book call</span>
            </Link>
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 border-2 border-black text-black bg-white"
            >
              {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F9F8F3] border-b-2 border-black px-6 py-6 space-y-4 font-mono"
          >
            <Link
              href="#testimonials"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-sm font-bold uppercase text-black py-2 border-b border-neutral-300"
            >
              Receipts
            </Link>

            <div className="space-y-2 pt-2">
              <span className="text-xs text-neutral-500 font-bold uppercase block">Acquire</span>
              {ACQUIRE_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block text-xs font-medium text-neutral-800 hover:text-black pl-3 py-1"
                >
                  → {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs text-neutral-500 font-bold uppercase block">Convert</span>
              {CONVERT_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block text-xs font-medium text-neutral-800 hover:text-black pl-3 py-1"
                >
                  → {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs text-neutral-500 font-bold uppercase block">Retain</span>
              {RETAIN_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block text-xs font-medium text-neutral-800 hover:text-black pl-3 py-1"
                >
                  → {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/team"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-sm font-bold uppercase text-black py-2 border-b border-neutral-300"
            >
              About
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-sm font-bold uppercase text-black py-2 border-b border-neutral-300"
            >
              Blog
            </Link>

            <Link
              href="#contact"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-sm font-bold uppercase text-[#7851A9] py-2"
            >
              Get Free Growth Audit
            </Link>

            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#CCFF00] text-black border-2 border-black font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


