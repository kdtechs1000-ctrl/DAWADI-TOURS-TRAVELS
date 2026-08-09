import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function TourCard({ tour, onBookNow }) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
      {/* Card Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="default" className="bg-emerald-900/80 text-white backdrop-blur-md border-none">
            {tour.category || 'Tour'}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-slate-800 shadow-sm">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{tour.rating}</span>
          <span className="text-slate-400">({tour.reviewsCount})</span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-2">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            {tour.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-emerald-700" />
            {tour.duration}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1 mb-2">
          {tour.title}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {tour.description}
        </p>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Starts from</span>
            <span className="text-lg font-extrabold text-emerald-800">{formatPrice(tour.price)}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-5 pt-0 gap-2">
        <Link to={`/tours/${tour.id}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs font-bold h-10">
            View Details
          </Button>
        </Link>
        <Button onClick={() => onBookNow(tour)} className="flex-1 text-xs font-bold h-10 gap-1">
          Book Now
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
}