import React from 'react';
import { Users, Luggage, Wind, Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function VehicleCard({ vehicle, onBookNow }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
      <div className="h-48 w-full bg-slate-100 overflow-hidden">
        <img src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover" />
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-3">{vehicle.name}</h3>

        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-emerald-700" />
            <span>{vehicle.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Luggage className="h-4 w-4 text-emerald-700" />
            <span>{vehicle.luggage}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Wind className="h-4 w-4 text-emerald-700" />
            <span>{vehicle.ac ? 'Full AC Comfort' : 'Standard Air Vents'}</span>
          </div>
        </div>

        <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
          {vehicle.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Rate / Day</span>
            <span className="text-lg font-extrabold text-emerald-800">{formatPrice(vehicle.pricePerDay)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button onClick={() => onBookNow(vehicle)} className="w-full text-xs font-bold h-10">
          Book Vehicle
        </Button>
      </CardFooter>
    </Card>
  );
}