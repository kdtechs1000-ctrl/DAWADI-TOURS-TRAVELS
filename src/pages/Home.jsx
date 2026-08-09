import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/component/Hero';
import TourCard from '@/component/TourCard';
import ReviewCard from '@/component/ReviewCard';
import BookingForm from '@/component/BookingForm';
import { tours } from '@/data/tours';
import { reviews } from '@/data/reviews';
import { ShieldCheck, Award, HeartHandshake, Headphones, ArrowRight, Compass, Hotel, Mountain, Car, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
            What We Provide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Featured Travel Services</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            From serene valley tours to thrilling Himalayan treks and luxury stays, we cover all your travel requirements across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Compass, title: 'Tour Packages', desc: 'Carefully designed sightseeing & heritage packages.', link: '/tours' },
            { icon: Hotel, title: 'Hotels & Resorts', desc: 'Comfortable accommodations across all tourist hubs.', link: '/hotels' },
            { icon: Mountain, title: 'Adventure Sports', desc: 'Rafting, paragliding, bungee jumping, and extreme sports.', link: '/adventures' },
            { icon: Compass, title: 'Trekking Expeditions', desc: 'Explore Nepal’s iconic Himalayan mountain trails.', link: '/tours' },
            { icon: Car, title: 'Transportation', desc: 'Reliable private vehicles, Hiace, and 4WD Scorpio jeeps.', link: '/transportation' },
            { icon: HeartHandshake, title: 'Customized Trips', desc: 'Tailor-made itineraries based on your budget and group.', link: '/contact' },
          ].map((srv, idx) => (
            <Link key={idx} to={srv.link} className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <srv.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">{srv.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{srv.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:underline">
                Explore More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tour Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
              Top Pick Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Popular Nepal Tours</h2>
          </div>
          <Link to="/tours">
            <Button variant="outline" className="gap-2 text-xs font-bold">
              View All 8 Packages
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.slice(0, 8).map((tour) => (
            <TourCard key={tour.id} tour={tour} onBookNow={handleBookNow} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              Why Dawadi Tours
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Your Safety & Satisfaction First</h2>
            <p className="text-sm text-slate-400">
              We bring over a decade of local experience to ensure every aspect of your Nepalese journey is seamless and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Trusted Local Service', desc: 'Officially registered tourism operator with verified safety certifications.' },
              { icon: Award, title: 'Local Heritage Expertise', desc: 'Experienced local Sherpa guides and licensed heritage historians.' },
              { icon: HeartHandshake, title: 'Best Value Guarantee', desc: 'Transparent pricing with zero hidden charges or unexpected booking fees.' },
              { icon: Headphones, title: '24/7 Ground Support', desc: 'Round-the-clock emergency assistance throughout your trek or tour.' },
              { icon: Compass, title: 'Custom Tailored Itineraries', desc: 'Flexible scheduling modified according to your personal fitness & budget.' },
              { icon: CheckCircle, title: '100% Guaranteed Departures', desc: 'Fixed departure dates that operate regardless of small group size.' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/50 transition-colors">
                <feature.icon className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
            Traveler Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Our Guests Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black">Ready to Explore Nepal?</h2>
            <p className="text-sm sm:text-base text-emerald-100 font-normal">
              Your next unforgettable mountain adventure, cultural heritage walk, or jungle safari starts here with Dawadi Tours & Travels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/tours">
                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold h-12 px-8">
                  Browse All Packages
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold h-12 px-8">
                  Contact Travel Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingForm initialService={selectedService} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
