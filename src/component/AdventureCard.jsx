import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function AdventureCard({ adventure, onBookNow }) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="accent" className="font-bold">
            <Zap className="h-3 w-3 mr-1" />
            {adventure.difficulty}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-2">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            {adventure.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-emerald-700" />
            {adventure.duration}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1 mb-2">
          {adventure.title}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {adventure.description}
        </p>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Activity Fee</span>
            <span className="text-lg font-extrabold text-emerald-800">{formatPrice(adventure.price)}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {adventure.rating}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-2">
        <Link to={`/adventures/${adventure.id}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs font-bold h-10">
            Details
          </Button>
        </Link>
        <Button onClick={() => onBookNow(adventure)} className="flex-1 text-xs font-bold h-10">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}