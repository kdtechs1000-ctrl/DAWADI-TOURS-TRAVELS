import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    secondary: 'bg-slate-100 text-slate-800 border-slate-200',
    outline: 'text-slate-950 border-slate-300',
    accent: 'bg-amber-100 text-amber-800 border-amber-200',
  };

  return (
    <div className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors', variants[variant], className)} {...props} />
  );
}