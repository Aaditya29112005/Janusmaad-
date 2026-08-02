'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  PhoneCall
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
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-janus-purple" />;
      case 'Database': return <Database className="w-5 h-5 text-janus-mint" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-janus-purple" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-janus-mint" />;
      case 'Target': return <Target className="w-5 h-5 text-janus-purple" />;
      case 'Search': return <Search className="w-5 h-5 text-janus-mint" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-janus-purple" />;
      case 'Layers': return <Layers className="w-5 h-5 text-janus-purple" />;
      case 'Zap': return <Zap className="w-5 h-5 text-janus-mint" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-janus-purple" />;
      default: return <Sparkles className="w-5 h-5 text-janus-mint" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-janus-purple/10 shadow-lg shadow-janus-purple/5 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Janusmaad Logo Image */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Janusmaad — Mad About Growth"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-janus-purple relative py-1 ${
                pathname === '/' ? 'text-janus-purple font-bold' : 'text-slate-700'
              }`}
            >
              Home
              {pathname === '/' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-janus-purple to-janus-mint rounded-full"
                />
              )}
            </Link>

            {/* Mega Menu Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-semibold py-1 transition-colors hover:text-janus-purple ${
                  pathname.startsWith('/services') ? 'text-janus-purple font-bold' : 'text-slate-700'
                }`}
              >
                Service Packages
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180 text-janus-purple' : ''
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
                    className="absolute top-full -left-20 w-[820px] pt-4 z-50"
                  >
                    <div className="glass-panel rounded-2xl p-6 border border-janus-purple/15 shadow-2xl bg-white/95 backdrop-blur-2xl grid grid-cols-12 gap-6">
                      {/* Left: 7 Core Packages */}
                      <div className="col-span-8 space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <span className="text-xs font-bold uppercase tracking-wider text-janus-purple">
                            Enterprise Service Packages
                          </span>
                          <span className="text-xs text-janus-muted">7 Tailored Solutions</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {SERVICE_PACKAGES.map((pkg) => (
                            <Link
                              key={pkg.id}
                              href={pkg.href}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-janus-purple/5 border border-transparent hover:border-janus-purple/15 transition-all"
                            >
                              <div className="p-2 rounded-lg bg-janus-purple/10 border border-janus-purple/20 group-hover:scale-105 transition-transform">
                                {getIconComponent(pkg.iconName)}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover:text-janus-purple flex items-center gap-1.5">
                                  {pkg.shortTitle}
                                  {pkg.badge && (
                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-janus-purple/15 text-janus-purple font-semibold">
                                      {pkg.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-janus-muted line-clamp-1 mt-0.5">
                                  {pkg.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right: 4 Pillars & Quick CTA */}
                      <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-janus-mint block mb-3">
                            Core Pillars
                          </span>
                          <div className="space-y-2">
                            {SERVICE_PILLARS.map((pillar) => (
                              <Link
                                key={pillar.id}
                                href={pillar.href}
                                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-janus-purple p-2 rounded-lg hover:bg-white transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-janus-purple" />
                                {pillar.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200">
                          <Link
                            href="/contact"
                            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-janus-purple to-janus-mint text-white text-xs font-bold shadow-md hover:opacity-95 transition-opacity"
                          >
                            <span>Book Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
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
              className={`text-sm font-semibold transition-colors hover:text-janus-purple relative py-1 ${
                pathname === '/partners' ? 'text-janus-purple font-bold' : 'text-slate-700'
              }`}
            >
              Partners
              {pathname === '/partners' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-janus-purple to-janus-mint rounded-full"
                />
              )}
            </Link>

            <Link
              href="/team"
              className={`text-sm font-semibold transition-colors hover:text-janus-purple relative py-1 ${
                pathname === '/team' ? 'text-janus-purple font-bold' : 'text-slate-700'
              }`}
            >
              Our Team
              {pathname === '/team' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-janus-purple to-janus-mint rounded-full"
                />
              )}
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-semibold transition-colors hover:text-janus-purple relative py-1 ${
                pathname === '/blog' ? 'text-janus-purple font-bold' : 'text-slate-700'
              }`}
            >
              Blog
              {pathname === '/blog' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-janus-purple to-janus-mint rounded-full"
                />
              )}
            </Link>
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-janus-purple via-janus-purple-light to-janus-mint text-white text-xs font-bold tracking-wide shadow-lg shadow-janus-purple/25 hover:shadow-janus-purple/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
              <span>Let's Chat</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-900 hover:text-janus-purple transition-colors shadow-sm"
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
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl"
          >
            <Link
              href="/"
              onClick={() => setMobileDrawerOpen(false)}
              className="block text-base font-bold text-slate-900 hover:text-janus-purple"
            >
              Home
            </Link>
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-janus-purple uppercase">
                Services
              </span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SERVICE_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={pkg.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-janus-purple flex items-center gap-2 py-1"
                  >
                    <ArrowRight className="w-3 h-3 text-janus-mint" />
                    {pkg.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <Link
                href="/partners"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-base font-bold text-slate-900 hover:text-janus-purple"
              >
                Partners
              </Link>
              <Link
                href="/team"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-base font-bold text-slate-900 hover:text-janus-purple"
              >
                Our Team
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-base font-bold text-slate-900 hover:text-janus-purple"
              >
                Blog
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-janus-purple to-janus-mint text-white font-bold text-sm shadow-lg shadow-janus-purple/20"
              >
                <span>Let's Chat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
