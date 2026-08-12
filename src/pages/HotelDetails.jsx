import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hotels } from '@/data/hotels';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BookingForm from '@/component/BookingForm';
import NotFound from '@/pages/NotFound';
import { formatPrice } from '@/lib/utils';

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  if (!hotel) return <NotFound />;

  const handleBookRoom = (room) => {
    setSelectedRoom({ name: `${hotel.name} - ${room.type}`, price: room.price });
    setIsBookingOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: hotel.starRating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">{hotel.name}</h1>
        <p className="text-sm font-semibold text-slate-600 flex items-center gap-1">
          <MapPin className="h-4 w-4 text-emerald-700" />
          {hotel.location}
        </p>
      </div>

      <div className="h-96 w-full rounded-3xl overflow-hidden shadow-sm">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold">About the Hotel</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{hotel.description}</p>
            <h4 className="text-sm font-bold pt-2">Amenities & Facilities</h4>
            <div className="flex flex-wrap gap-2">
              {hotel.facilities.map((fac) => (
                <Badge key={fac} variant="secondary">{fac}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Available Rooms</h3>
            <div className="space-y-4">
              {hotel.rooms.map((room, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{room.type}</h4>
                    <p className="text-xs text-slate-500">{room.capacity}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {room.features.map((feat, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                    <span className="text-lg font-black text-emerald-800 block">{formatPrice(room.price)}</span>
                    <span className="text-[10px] text-slate-400">per night</span>
                    <Button onClick={() => handleBookRoom(room)} size="sm" className="w-full mt-2 font-bold">
                      Select Room
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 sticky top-28 space-y-4">
            <h3 className="text-lg font-bold">Reservation Summary</h3>
            <div className="text-xs space-y-2 text-slate-600 border-b border-slate-100 pb-4">
              <p>✔ Free Cancellation up to 24 hours</p>
              <p>✔ Pay at hotel or via direct transfer</p>
              <p>✔ Instant booking confirmation</p>
            </div>
            <Button onClick={() => setIsBookingOpen(true)} className="w-full font-bold">
              Book Hotel Room Now
            </Button>
          </div>
        </div>
      </div>

      <BookingForm initialService={selectedRoom || hotel} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}