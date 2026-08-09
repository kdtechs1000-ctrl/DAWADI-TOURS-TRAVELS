import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DestinationCard({ destination }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-80 flex flex-col justify-end p-6 text-white">
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative z-10 space-y-2">
        <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 uppercase tracking-widest">
          <MapPin className="h-3.5 w-3.5" />
          <span>Nepal</span>
        </div>
        <h3 className="text-2xl font-bold">{destination.name}</h3>
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {destination.shortDescription}
        </p>

        <div className="pt-2">
          <Link to={`/tours?search=${encodeURIComponent(destination.name)}`}>
            <Button size="sm" className="bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/30 backdrop-blur-md text-xs font-bold gap-2">
              Explore Trips
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}