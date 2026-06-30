'use client';
import { motion, type Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  },
};

export function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  className,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollReveal({ threshold });

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
