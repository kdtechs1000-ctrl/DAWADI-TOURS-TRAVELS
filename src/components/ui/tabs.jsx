import * as React from 'react';
import { cn } from '@/lib/utils';

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
  return (
    <div className={cn('inline-flex h-12 items-center justify-center rounded-xl bg-slate-100 p-1 text-slate-500 w-full md:w-auto', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ value, activeTab, setActiveTab, children, className }) {
  const isActive = activeTab === value;
  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none',
        isActive ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children, className }) {
  if (activeTab !== value) return null;
  return <div className={cn('mt-4 focus-visible:outline-none', className)}>{children}</div>;
}