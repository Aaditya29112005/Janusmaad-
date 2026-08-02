'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RollingTextProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
}

export const RollingText: React.FC<RollingTextProps> = ({ text, className = '', delay = 0 }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    
    // Animate the container itself, but clip the overflow for a "rolling up" effect
    gsap.fromTo(container.current, 
      { y: 80, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        delay: delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
        }
      }
    );
  }, { scope: container });

  return (
    <div className="overflow-hidden py-1">
      <div ref={container} className={`${className}`}>
        {text}
      </div>
    </div>
  );
};
