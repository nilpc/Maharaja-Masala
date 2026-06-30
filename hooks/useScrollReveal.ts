'use client';
import { useAnimation, type AnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseScrollRevealReturn {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
}

export function useScrollReveal(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn {
  const { threshold = 0.15, triggerOnce = true } = options;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}
