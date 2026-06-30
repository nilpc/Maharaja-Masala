'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_TAGLINE } from '@/lib/constants';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 640;
    const particleCount = isMobile ? 25 : 60;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#CC0000', '#CC0000', '#C9A84C', '#CC0000'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.3 - 0.05,
        opacity: Math.random() * 0.15 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y + p.size < 0) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15% 30%, #CC0000 0.5px, transparent 0.5px),
                            radial-gradient(circle at 45% 15%, #CC0000 0.7px, transparent 0.7px),
                            radial-gradient(circle at 70% 85%, #CC0000 0.4px, transparent 0.4px),
                            radial-gradient(circle at 85% 40%, #C9A84C 0.6px, transparent 0.6px),
                            radial-gradient(circle at 8% 65%, #CC0000 0.5px, transparent 0.5px),
                            radial-gradient(circle at 55% 50%, #C9A84C 0.3px, transparent 0.3px),
                            radial-gradient(circle at 75% 55%, #CC0000 0.8px, transparent 0.8px),
                            radial-gradient(circle at 95% 10%, #CC0000 0.4px, transparent 0.4px),
                            radial-gradient(circle at 25% 90%, #C9A84C 0.5px, transparent 0.5px),
                            radial-gradient(circle at 40% 5%, #CC0000 0.6px, transparent 0.6px),
                            radial-gradient(circle at 60% 30%, #CC0000 0.3px, transparent 0.3px),
                            radial-gradient(circle at 5% 45%, #CC0000 0.7px, transparent 0.7px)`,
          backgroundSize: '180px 180px',
        }} />
      </div>
      <ParticleCanvas />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand-saffron font-mono text-sm uppercase tracking-[0.2em] font-semibold mb-6">
            Since 1950
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-brand-charcoal leading-tight mb-6 text-balance">
            {SITE_TAGLINE}
          </h1>
          <p className="text-brand-charcoal/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Handpicked spices and artisanal masala blends from the heart of India.
            Pure, authentic, and crafted with centuries-old traditions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Explore Products
            </Button>
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6 text-brand-charcoal/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
