import React, { useState } from 'react';
import VehicleCard from "@/component/VehicleCard";
import BookingForm from "@/component/BookingForm";
import { vehicles } from '@/data/vehicles';

export default function Transportation() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (veh) => {
    setSelectedVehicle(veh);
    setIsBookingOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Private Vehicle Rentals & Transfers</h1>
        <p className="text-sm text-slate-600 mt-2">Hire air-conditioned cars, 4x4 Scorpio jeeps, Hiace, and tourist buses with professional drivers.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <VehicleCard key={v.id} vehicle={v} onBookNow={handleBookNow} />
        ))}
      </div>

      <BookingForm initialService={selectedVehicle} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}