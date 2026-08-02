'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  Database,
  PieChart,
  Sparkles,
  Target,
  Search,
  Repeat,
  Layers,
  Zap,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { SERVICE_PACKAGES, SERVICE_PILLARS } from '@/data/janusContent';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
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

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-black" />;
      case 'Database': return <Database className="w-5 h-5 text-black" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-black" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-black" />;
      case 'Target': return <Target className="w-5 h-5 text-black" />;
      case 'Search': return <Search className="w-5 h-5 text-black" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-black" />;
      case 'Layers': return <Layers className="w-5 h-5 text-black" />;
      case 'Zap': return <Zap className="w-5 h-5 text-black" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-black" />;
      default: return <Sparkles className="w-5 h-5 text-black" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-black py-3'
          : 'bg-white border-b border-neutral-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="font-heading font-black text-2xl tracking-tighter">
            JANUSMAAD.
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-black ${
                pathname === '/' ? 'text-black' : 'text-neutral-500'
              }`}
            >
              Home
            </Link>

            {/* Mega Menu Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-black ${
                  pathname.startsWith('/services') ? 'text-black' : 'text-neutral-500'
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Overlay */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-20 w-[820px] pt-6 z-50"
                  >
                    <div className="bg-white border-2 border-black p-8 grid grid-cols-12 gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      {/* Left: 7 Core Packages */}
                      <div className="col-span-8 space-y-6">
                        <div className="flex items-center justify-between pb-4 border-b-2 border-black">
                          <span className="text-sm font-black uppercase tracking-widest text-black">
                            Enterprise Service Packages
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {SERVICE_PACKAGES.map((pkg) => (
                            <Link
                              key={pkg.id}
                              href={pkg.href}
                              className="group flex items-start gap-4 p-4 border-2 border-transparent hover:border-black transition-all"
                            >
                              <div className="mt-1">
                                {getIconComponent(pkg.iconName)}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-black mb-1">
                                  {pkg.shortTitle}
                                </div>
                                <p className="text-xs text-neutral-600 font-medium">
                                  {pkg.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right: 4 Pillars & Quick CTA */}
                      <div className="col-span-4 flex flex-col justify-between pl-8 border-l-2 border-neutral-200">
                        <div>
                          <span className="text-sm font-black uppercase tracking-widest text-black block mb-6">
                            Core Pillars
                          </span>
                          <div className="space-y-4">
                            {SERVICE_PILLARS.map((pillar) => (
                              <Link
                                key={pillar.id}
                                href={pillar.href}
                                className="block text-sm font-bold text-neutral-600 hover:text-black transition-colors"
                              >
                                {pillar.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-neutral-200">
                          <Link
                            href="/contact"
                            className="flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity"
                          >
                            <span>Book Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/partners"
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-black ${
                pathname === '/partners' ? 'text-black' : 'text-neutral-500'
              }`}
            >
              Partners
            </Link>

            <Link
              href="/team"
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-black ${
                pathname === '/team' ? 'text-black' : 'text-neutral-500'
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-black ${
                pathname === '/blog' ? 'text-black' : 'text-neutral-500'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Let's Chat
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 border-2 border-black text-black hover:bg-neutral-100 transition-colors"
            >
              {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-white border-b-2 border-black px-6 py-6 space-y-6"
          >
            <Link
              href="/"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-xl font-black uppercase tracking-wider text-black"
            >
              Home
            </Link>
            <div className="space-y-4 pt-4 border-t-2 border-neutral-100">
              <span className="text-sm font-black text-black uppercase tracking-widest">
                Services
              </span>
              <div className="grid grid-cols-1 gap-4 pl-4">
                {SERVICE_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={pkg.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="text-base font-bold text-neutral-600 hover:text-black flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {pkg.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t-2 border-neutral-100">
              <Link
                href="/partners"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-xl font-black uppercase tracking-wider text-black"
              >
                Partners
              </Link>
              <Link
                href="/team"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-xl font-black uppercase tracking-wider text-black"
              >
                Our Team
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-xl font-black uppercase tracking-wider text-black"
              >
                Blog
              </Link>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-black text-lg uppercase tracking-wider"
              >
                <span>Let's Chat</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
