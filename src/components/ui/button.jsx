import * as React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]';
  
  const variants = {
    default: 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-md hover:shadow-emerald-900/20',
    secondary: 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200',
    outline: 'border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50',
    ghost: 'hover:bg-slate-100 text-slate-700 hover:text-slate-900',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    default: 'h-11 px-5 py-2.5 text-sm',
    sm: 'h-9 px-3 text-xs rounded-lg',
    lg: 'h-13 px-8 text-base rounded-2xl',
    icon: 'h-10 w-10 p-0',
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';