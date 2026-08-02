'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const GsapScrollEffects: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Stagger reveal on all headings and glass cards on scroll
      const cards = gsap.utils.toArray<HTMLElement>('.glass-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 2. Parallax background floating blobs
      gsap.to('.ambient-blob-purple', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      gsap.to('.ambient-blob-mint', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      // 3. Section Title Smooth Reveal
      const titles = gsap.utils.toArray<HTMLElement>('.gsap-title');
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
