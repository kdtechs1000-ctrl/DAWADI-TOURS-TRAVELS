import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TourCard from '@/component/TourCard';
import BookingForm from '@/component/BookingForm';
import { tours } from '@/data/tours';
import { Filter, Search } from 'lucide-react';

export default function Tours() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = ['All', 'Cultural', 'Nature & Sightseeing', 'Wildlife & Nature', 'Spiritual', 'Trekking', 'Adventure Drive'];

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || tour.category === selectedCategory;
    const matchesPrice = tour.price <= maxPrice;
    return matchesSearch && matchesCat && matchesPrice;
  });

  const handleBookNow = (tour) => {
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Nepal Tour Packages</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Handcrafted travel itineraries including heritage sightseeing, Himalayan treks, and jungle adventures.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by destination or package..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-9 pr-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-600 outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat} Packages</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-600">
              <span>Max Budget:</span>
              <span className="text-emerald-800">NPR {maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-emerald-700 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onBookNow={handleBookNow} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <Filter className="h-10 w-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No matching tour packages found</h3>
          <p className="text-xs text-slate-500">Try adjusting your filters or search keywords.</p>
        </div>
      )}

      {/* Booking Form Modal */}
      <BookingForm initialService={selectedTour} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}