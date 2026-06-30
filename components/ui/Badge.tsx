import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'new' | 'bestseller' | 'limited';
  className?: string;
}

const variantStyles = {
  new: 'bg-brand-crimson text-white',
  bestseller: 'bg-brand-saffron text-white',
  limited: 'bg-brand-charcoal text-white',
};

export function Badge({ children, variant = 'new', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
