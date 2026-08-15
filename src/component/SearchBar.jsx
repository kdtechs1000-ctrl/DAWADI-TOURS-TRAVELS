import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [travelType, setTravelType] = useState('all');
  const [errorMessage, setErrorMessage] = useState('');

  // List of supported destinations
  const supportedDestinations = [
    'kathmandu', 'pokhara', 'everest', 'chitwan', 'lumbini', 
    'annapurna', 'mustang', 'nagarkot', 'bandipur', 'langtang', 'bhaktapur', 'patan', 'bardiya'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedDest = destination.trim().toLowerCase();

    // 1. Validate destination existence
    if (trimmedDest) {
      const isSupported = supportedDestinations.some(dest => trimmedDest.includes(dest));
      if (!isSupported) {
        setErrorMessage("We do not have service for this destination. If required, please contact us.");
        return;
      }
    }

    // 2. Validate specific incompatible combinations (e.g., Lowland regions with Trekking)
    if (
      trimmedDest.includes('bardiya') || 
      trimmedDest.includes('chitwan') || 
      trimmedDest.includes('lumbini')
    ) {
      if (travelType === 'trekking') {
        setErrorMessage(`We do not offer Trekking services in ${destination}. Please choose a different travel type or contact us.`);
        return;
      }
    }

    // Route based on selected travel type
    if (travelType === 'hotels') {
      navigate(`/hotels?search=${encodeURIComponent(destination)}`);
    } else if (travelType === 'adventures') {
      navigate(`/adventures?search=${encodeURIComponent(destination)}`);
    } else if (travelType === 'trekking') {
      navigate(`/tours?type=trekking&search=${encodeURIComponent(destination)}`);
    } else if (travelType === 'tours') {
      navigate(`/tours?type=sightseeing&search=${encodeURIComponent(destination)}`);
    } else {
      navigate(`/tours?search=${encodeURIComponent(destination)}`);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 text-slate-800 text-left">
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Destination */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            Destination
          </label>
          <input
            type="text"
            placeholder="Kathmandu, Pokhara, Everest..."
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          />
        </div>

        {/* Travel Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-emerald-700" />
            Travel Type
          </label>
          <select
            value={travelType}
            onChange={(e) => {
              setTravelType(e.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          >
            <option value="all">All Packages</option>
            <option value="tours">Tours & Sightseeing</option>
            <option value="trekking">Trekking</option>
            <option value="adventures">Adventure Sports</option>
            <option value="hotels">Hotels & Resorts</option>
          </select>
        </div>

        {/* Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-emerald-700" />
            Travel Date
          </label>
          <input
            type="date"
            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          />
        </div>

        {/* Search Button */}
        <div>
          <Button type="submit" className="w-full h-11 text-base font-bold gap-2 cursor-pointer bg-emerald-800 hover:bg-emerald-900 text-white">
            <Search className="h-4 w-4" />
            Search Trips
          </Button>
        </div>

      </form>

      {/* Error / Warning Message */}
      {errorMessage && (
        <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs font-semibold flex items-center justify-between shadow-xs">
          <span>{errorMessage}</span>
          <a 
            href="/contact" 
            className="bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ml-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}