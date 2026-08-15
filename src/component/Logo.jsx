import React from 'react';

export default function Logo({ className = "h-10 w-auto" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-10 w-10 shrink-0"
      >
        {/* Background Shield/Rounded Container */}
        <rect width="48" height="48" rx="12" className="fill-emerald-900" />
        
        {/* Mountain Peaks & Travel Path */}
        <path 
          d="M12 33L22 17L28 26L32 20L38 33H12Z" 
          className="fill-emerald-100" 
        />
        <path 
          d="M22 33L28 23L34 33H22Z" 
          className="fill-emerald-400" 
        />
        {/* Rising Sun / Compass Accent */}
        <circle cx="32" cy="15" r="3" className="fill-amber-400" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-wider text-slate-900 leading-none">
          DAWADI
        </span>
        <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase mt-1">
          Tours & Travels
        </span>
      </div>
    </div>
  );
}