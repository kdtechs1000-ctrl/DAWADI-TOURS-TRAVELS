import React from 'react';
import { ShieldCheck, Award, Users, MapPin, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Dawadi Tours & Travels Pvt. Ltd.
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Founded with a vision to share Nepal’s natural grandeur and ancient heritage with the world, Dawadi Tours & Travels is a premier licensed travel agency based in Kathmandu.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We specialize in handcrafted Himalayan treks, culture tours, wildlife safaris, extreme sports, and private transportation.
          </p>
        </div>
        <div className="h-96 rounded-3xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80" alt="About Dawadi Tours" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900 text-white p-8 rounded-3xl text-center">
        <div>
          <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">10+</span>
          <span className="text-xs text-slate-400">Years Experience</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">5,000+</span>
          <span className="text-xs text-slate-400">Happy Travelers</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">50+</span>
          <span className="text-xs text-slate-400">Tour Packages</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">25+</span>
          <span className="text-xs text-slate-400">Destinations</span>
        </div>
      </div>
    </div>
  );
}