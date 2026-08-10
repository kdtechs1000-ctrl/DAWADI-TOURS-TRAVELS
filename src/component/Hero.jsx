import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar, Mountain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/component/SearchBar';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-12 pb-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://t4.ftcdn.net/jpg/03/10/24/63/360_F_310246341_869grfwR1b87MN3qyFPe6yZZIRC83X31.jpg"
          alt="Nepal Himalayas"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-medium mb-6">
          <Mountain className="h-4 w-4 text-emerald-400" />
          <span>Your Trusted Partner for Unforgettable Journeys Across Nepal</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
          Explore Nepal. <span className="text-emerald-400 underline decoration-emerald-500/50 decoration-wavy">Experience More.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
          Discover breathtaking mountains, vibrant heritage cities, thrilling adventure sports, and personalized trekking journeys with Dawadi Tours & Travels.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/tours">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg shadow-emerald-900/40">
              <Compass className="h-5 w-5" />
              Explore Tours
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-white/30 text-white hover:bg-white/10 gap-2">
              Customized Trip
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Floating Search Bar */}
        <div className="mt-12 max-w-5xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}