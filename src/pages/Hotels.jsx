import React, { useState } from 'react';
import HotelCard from '@/component/HotelCard';
import BookingForm from '@/component/BookingForm';
import { hotels } from '@/data/hotels';

export default function Hotels() {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const locations = ['All', 'Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Nagarkot', 'Mustang'];

  const filteredHotels = hotels.filter((h) => {
    return selectedLocation === 'All' || h.location.toLowerCase().includes(selectedLocation.toLowerCase());
  });

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setIsBookingOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Hotels & Resorts in Nepal</h1>
        <p className="text-sm text-slate-600 mt-2">Book handpicked luxury resorts, heritage hotels, and cozy mountain lodges.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedLocation === loc
                ? 'bg-emerald-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBookNow={handleBookNow} />
        ))}
      </div>

      <BookingForm initialService={selectedHotel} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}