import React, { useState } from 'react';
import HotelCard from '@/component/HotelCard';
import BookingModal from '@/component/BookingModal';
import { hotels } from '@/data/hotels';

export default function Hotels() {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated locations list containing all specific regions/districts
  const locations = [
    'All', 
    'Kathmandu', 
    'Pokhara', 
    'Chitwan', 
    'Lumbini', 
    'Nagarkot', 
    'Mustang', 
    'Bandipur', 
    'Rara', 
    'Bhaktapur', 
    'Janakpurpurdham', 
    'Namche Bazaar', 
    'Ilam',
    'Mugu',
  ];

  // Filter hotels strictly based on the selected location button
  const filteredHotels = hotels.filter((h) => {
    if (selectedLocation === 'All') return true;
    
    const query = selectedLocation.toLowerCase();
    const categoryMatch = h.category?.toLowerCase() === query;
    const locationMatch = h.location?.toLowerCase().includes(query);

    return categoryMatch || locationMatch;
  });

  const handleBookNow = (hotel) => {
    setSelectedService(hotel.name || hotel.title || 'Hotel Stay');
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Hotels & Resorts in Nepal</h1>
        <p className="text-sm text-slate-600 mt-2">Book handpicked luxury resorts, heritage hotels, and cozy mountain lodges.</p>
      </div>

      {/* Scrollable Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedLocation === loc
                ? 'bg-emerald-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onBookNow={handleBookNow} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-500">
            No hotels available for {selectedLocation}.
          </div>
        )}
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={selectedService} 
      />
    </div>
  );
}