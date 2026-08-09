import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Wifi, Coffee, Car } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function HotelCard({ hotel, onBookNow }) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-1">
          {Array.from({ length: hotel.starRating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span className="flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            {hotel.location}
          </span>
          <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded text-[11px]">
            {hotel.guestRating} / 5.0
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1 mb-2">
          {hotel.name}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {hotel.description}
        </p>

        {/* Facilities badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.facilities.slice(0, 4).map((f) => (
            <Badge key={f} variant="secondary" className="text-[10px] font-medium py-0 px-2">
              {f}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Per night from</span>
            <span className="text-lg font-extrabold text-emerald-800">{formatPrice(hotel.pricePerNight)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-2">
        <Link to={`/hotels/${hotel.id}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs font-bold h-10">
            View Hotel
          </Button>
        </Link>
        <Button onClick={() => onBookNow(hotel)} className="flex-1 text-xs font-bold h-10">
          Book Room
        </Button>
      </CardFooter>
    </Card>
  );
}