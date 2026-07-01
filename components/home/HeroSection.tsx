'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_TAGLINE } from '@/lib/constants';
import { cn } from '@/lib/utils';

function FloatingOrbs() {
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  if (prefersReducedMotion.current) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-saffron/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-saffron/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
    </div>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 640;
    const particleCount = isMobile ? 30 : 80;
    const particles: {
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      opacity: number; color: string;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#C9A84C', '#FFFFFF', '#C9A84C', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.25 - 0.03,
        opacity: Math.random() * 0.2 + 0.05,
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

function DecorativeLine({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/40" />
      <span className="h-px w-8 bg-brand-gold/60" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/40" />
    </div>
  );
}

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const enterDur = isMobile ? 0.35 : 0.6;
  const scrollDelay = isMobile ? 0.5 : 0.8;
  const badgeDelay = isMobile ? 0.1 : 0.2;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-crimson via-brand-saffron/95 to-brand-crimson">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 0.5px, transparent 0.5px),
                            radial-gradient(circle at 80% 20%, white 0.3px, transparent 0.3px),
                            radial-gradient(circle at 50% 80%, white 0.4px, transparent 0.4px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

      <FloatingOrbs />
      <ParticleCanvas />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: enterDur, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.3 : 0.5, delay: badgeDelay }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-white/5 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.25em] font-semibold">
              Since 1950
            </span>
          </motion.div>

          <DecorativeLine className="justify-center mb-6" />

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6 text-balance">
            {SITE_TAGLINE}
          </h1>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Handpicked spices and artisanal masala blends from the heart of India.
            Pure, authentic, and crafted with centuries-old traditions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-brand-crimson hover:bg-white/90 shadow-lg shadow-black/10 px-8 h-12 text-base font-semibold"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-gold/50 text-white hover:bg-brand-gold/10 hover:text-white hover:border-brand-gold px-8 h-12 text-base backdrop-blur-sm bg-white/5"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: scrollDelay, duration: isMobile ? 0.4 : 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 motion-safe:animate-bounce">
          <span className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
