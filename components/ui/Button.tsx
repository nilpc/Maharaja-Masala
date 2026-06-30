'use client';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  primary:
    'bg-brand-saffron text-white hover:bg-brand-saffron/90 shadow-lg shadow-brand-saffron/25',
  secondary:
    'bg-brand-crimson text-white hover:bg-brand-crimson/90',
  outline:
    'border-2 border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-white',
  ghost:
    'text-brand-charcoal hover:bg-brand-charcoal/5',
  light:
    'border-2 border-white text-white hover:bg-white hover:text-brand-saffron',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'inline-flex items-center justify-center font-body font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-saffron focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
