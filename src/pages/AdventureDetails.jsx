import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { adventures } from '@/data/adventures';
import { MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BookingForm from '@/component/BookingForm';
import NotFound from '@/pages/NotFound';
import { formatPrice } from '@/lib/utils';

export default function AdventureDetails() {
  const { id } = useParams();
  const adv = adventures.find((a) => a.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!adv) return <NotFound />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3">
        <Badge variant="accent">{adv.difficulty}</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">{adv.title}</h1>
        <p className="text-sm font-semibold text-slate-600 flex items-center gap-1">
          <MapPin className="h-4 w-4 text-emerald-700" />
          {adv.location} • <Clock className="h-4 w-4 text-emerald-700 inline ml-2" /> {adv.duration}
        </p>
      </div>

      <div className="h-96 w-full rounded-3xl overflow-hidden shadow-sm">
        <img src={adv.image} alt={adv.title} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xl font-bold">Activity Description</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{adv.description}</p>
          </div>

          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/60 space-y-2">
            <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2">
              <Shield className="h-4 w-4 text-amber-700" />
              Safety & Requirements
            </h4>
            <p className="text-xs text-amber-800">
              <strong>Safety:</strong> {adv.safetyInfo}
            </p>
            <p className="text-xs text-amber-800">
              <strong>Requirements:</strong> {adv.requirements}
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs text-slate-400 block">Activity Fee</span>
              <span className="text-3xl font-black text-emerald-800">{formatPrice(adv.price)}</span>
            </div>
            <Button onClick={() => setIsBookingOpen(true)} className="w-full font-bold">
              Book Activity Now
            </Button>
          </div>
        </div>
      </div>

      <BookingForm initialService={adv} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}