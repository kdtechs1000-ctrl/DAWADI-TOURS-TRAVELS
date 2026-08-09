import React from 'react';
import DestinationCard from '@/component/DestinationCard';
import { destinations } from '@/data/destinations';

export default function Destinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Explore Nepal Destinations</h1>
        <p className="text-sm text-slate-600 mt-2">Discover popular travel hubs across the Himalayan kingdom.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}