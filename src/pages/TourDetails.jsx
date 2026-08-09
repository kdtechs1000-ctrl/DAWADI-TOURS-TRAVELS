import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tours } from '@/data/tours';
import { MapPin, Clock, Star, Check, X, Shield, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import BookingForm from '@/component/BookingForm';
import NotFound from '@/pages/NotFound';
import { formatPrice } from '@/lib/utils';

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!tour) return <NotFound />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{tour.category}</Badge>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            {tour.location}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">{tour.title}</h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-700" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{tour.rating} ({tour.reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Package Price</span>
              <span className="text-2xl font-black text-emerald-800">{formatPrice(tour.price)}</span>
            </div>
            <Button onClick={() => setIsBookingOpen(true)} size="lg" className="font-bold px-8">
              Book This Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-md">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="itinerary">Detailed Itinerary</TabsTrigger>
          <TabsTrigger value="inclusions">Inclusions & Exclusions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Trip Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{tour.overview}</p>

            <h4 className="text-base font-bold text-slate-900 pt-4">Key Tour Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tour.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="itinerary">
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Day by Day Schedule</h3>
            <Accordion>
              {tour.itinerary.map((item, idx) => (
                <AccordionItem key={idx} title={`${item.day}: ${item.title}`} defaultOpen={idx === 0}>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2">{item.details}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="inclusions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <h4 className="text-base font-bold text-emerald-900 flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-700" />
                What's Included
              </h4>
              <ul className="space-y-2">
                {tour.included.map((inc, i) => (
                  <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-3">
              <h4 className="text-base font-bold text-red-900 flex items-center gap-2">
                <X className="h-5 w-5 text-red-600" />
                What's Excluded
              </h4>
              <ul className="space-y-2">
                {tour.excluded.map((exc, i) => (
                  <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <BookingForm initialService={tour} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}