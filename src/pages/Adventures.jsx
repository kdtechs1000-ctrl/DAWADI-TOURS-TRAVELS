import React, { useState } from 'react';
import AdventureCard from '@/component/AdventureCard';
import BookingForm from '@/component/BookingForm';
import { adventures } from '@/data/adventures';

export default function Adventures() {
  const [selectedAdv, setSelectedAdv] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (adv) => {
    setSelectedAdv(adv);
    setIsBookingOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Extreme Adventure Activities</h1>
        <p className="text-sm text-slate-600 mt-2">Experience white water rafting, bungee jumping, tandem paragliding, and mountain flights.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map((adv) => (
          <AdventureCard key={adv.id} adventure={adv} onBookNow={handleBookNow} />
        ))}
      </div>

      <BookingForm initialService={selectedAdv} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}