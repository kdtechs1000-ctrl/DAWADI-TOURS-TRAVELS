import React, { useState } from 'react';
import TourCard from '@/component/TourCard';
import BookingModal from '@/component/BookingModal';
import { tours } from '@/data/tours';

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Cultural', 'Adventure', 'Wildlife', 'Mountain', 'Pilgrimage'];

  const filteredTours = tours.filter((tour) => {
    return selectedCategory === 'All' || tour.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handleBookNow = (tour) => {
    setSelectedService(tour.name || tour.title || 'Tour Package');
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Explore Nepal Tours</h1>
        <p className="text-sm text-slate-600 mt-2">Discover breathtaking landscapes, rich heritage sites, and thrilling expeditions.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-emerald-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} onBookNow={handleBookNow} />
        ))}
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={selectedService} 
      />
    </div>
  );
}