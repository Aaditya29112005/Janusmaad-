'use client';

import React, { useEffect, useState } from 'react';

export const MouseSpotlight: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-70"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(120, 81, 169, 0.09), rgba(72, 190, 156, 0.05) 50%, transparent 80%)`,
      }}
    />
  );
};
