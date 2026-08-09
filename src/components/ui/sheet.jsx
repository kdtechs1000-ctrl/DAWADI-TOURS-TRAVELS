import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sheet({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity" onClick={() => onOpenChange(false)} />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="font-bold text-lg text-emerald-900">Dawadi Tours</span>
            <button onClick={() => onOpenChange(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}