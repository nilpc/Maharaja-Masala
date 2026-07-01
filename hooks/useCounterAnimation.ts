'use client';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  suffix?: string;
}

export function useCounterAnimation({ end, duration = 2000 }: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    let rafId: number;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [inView, end, duration]);

  return { count, ref };
}
