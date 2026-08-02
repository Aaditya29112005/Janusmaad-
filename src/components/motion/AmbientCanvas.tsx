'use client';

import React, { useEffect, useRef } from 'react';

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles for light canvas
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.5 ? 'rgba(120, 81, 169, ' : 'rgba(72, 190, 156, ',
      alpha: Math.random() * 0.4 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      // Glow 1: Purple Ambient Spot
      const pGlowX = width * 0.25 + Math.sin(time * 0.4) * 100;
      const pGlowY = height * 0.25 + Math.cos(time * 0.3) * 80;
      const pGlow = ctx.createRadialGradient(pGlowX, pGlowY, 0, pGlowX, pGlowY, width * 0.45);
      pGlow.addColorStop(0, 'rgba(120, 81, 169, 0.14)');
      pGlow.addColorStop(1, 'rgba(250, 252, 255, 0)');
      ctx.fillStyle = pGlow;
      ctx.fillRect(0, 0, width, height);

      // Glow 2: Mint Ambient Spot
      const mGlowX = width * 0.75 + Math.cos(time * 0.5) * 110;
      const mGlowY = height * 0.55 + Math.sin(time * 0.4) * 90;
      const mGlow = ctx.createRadialGradient(mGlowX, mGlowY, 0, mGlowX, mGlowY, width * 0.4);
      mGlow.addColorStop(0, 'rgba(72, 190, 156, 0.12)');
      mGlow.addColorStop(1, 'rgba(250, 252, 255, 0)');
      ctx.fillStyle = mGlow;
      ctx.fillRect(0, 0, width, height);

      // Nodes network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(120, 81, 169, ${0.12 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
};
