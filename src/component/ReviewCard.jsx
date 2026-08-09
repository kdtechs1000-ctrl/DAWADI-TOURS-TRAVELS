import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ReviewCard({ review }) {
  return (
    <Card className="relative p-6 bg-white border-slate-200/80 hover:shadow-lg transition-all">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-emerald-100" />
      <CardContent className="p-0 space-y-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm text-slate-700 italic leading-relaxed">"{review.comment}"</p>
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
          <img src={review.image} alt={review.name} className="h-10 w-10 rounded-full object-cover border border-emerald-200" />
          <div>
            <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
            <p className="text-xs text-slate-500">{review.country} • <span className="text-emerald-700">{review.tourName}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}