import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ children, className }) {
  return <div className={cn('space-y-3', className)}>{children}</div>;
}

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={cn('h-5 w-5 text-slate-500 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>
      {isOpen && <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">{children}</div>}
    </div>
  );
}