import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Award, HeartHandshake, Headphones, 
  ArrowRight, Compass, Hotel, Mountain, Car, CheckCircle, Sparkles 
} from 'lucide-react';

import Hero from '@/component/Hero';
import TourCard from '@/component/TourCard';
import ReviewCard from '@/component/ReviewCard';
import BookingForm from '@/component/BookingForm';

import { supabase } from '@/lib/supabase';
import { tours as staticTours } from '@/data/tours';
import { reviews } from '@/data/reviews';
import { Button } from '@/components/ui/button';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Fetch tours from Supabase SQL database (fallback to local data if empty)
  useEffect(() => {
    fetchToursFromDatabase();
  }, []);

  const fetchToursFromDatabase = async () => {
    try {
      const { data, error } = await supabase
        .from('tours')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setTours(data);
      } else {
        setTours(staticTours); // Use static data if Supabase table is empty or error occurs
      }
    } catch (err) {
      setTours(staticTours);
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const services = [
    { icon: Compass, title: 'Tour Packages', desc: 'Carefully designed sightseeing & heritage packages.', link: '/tours' },
    { icon: Hotel, title: 'Hotels & Resorts', desc: 'Comfortable accommodations across all tourist hubs.', link: '/hotels' },
    { icon: Mountain, title: 'Adventure Sports', desc: 'Rafting, paragliding, bungee jumping, and extreme sports.', link: '/adventures' },
    { icon: Compass, title: 'Trekking Expeditions', desc: 'Explore Nepal’s iconic Himalayan mountain trails.', link: '/tours' },
    { icon: Car, title: 'Transportation', desc: 'Reliable private vehicles, Hiace, and 4WD Scorpio jeeps.', link: '/transportation' },
    { icon: HeartHandshake, title: 'Customized Trips', desc: 'Tailor-made itineraries based on your budget and group.', link: '/contact' },
  ];

  const whyChooseFeatures = [
    { icon: ShieldCheck, title: 'Trusted Local Service', desc: 'Officially registered tourism operator with verified safety certifications.' },
    { icon: Award, title: 'Local Heritage Expertise', desc: 'Experienced local Sherpa guides and licensed heritage historians.' },
    { icon: HeartHandshake, title: 'Best Value Guarantee', desc: 'Transparent pricing with zero hidden charges or unexpected booking fees.' },
    { icon: Headphones, title: '24/7 Ground Support', desc: 'Round-the-clock emergency assistance throughout your trek or tour.' },
    { icon: Compass, title: 'Custom Tailored Itineraries', desc: 'Flexible scheduling modified according to your personal fitness & budget.' },
    { icon: CheckCircle, title: '100% Guaranteed Departures', desc: 'Fixed departure dates that operate regardless of small group size.' },
  ];

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> What We Provide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Featured Travel Services</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From serene valley tours to thrilling Himalayan treks and luxury stays, we cover all your travel requirements across Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div key={idx} variants={fadeInUp}>
                <Link 
                  to={srv.link} 
                  className="group relative block p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-300 ease-out h-full"
                >
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{srv.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform duration-200">
                    Explore More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Popular Tour Packages */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Top Pick Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">Popular Nepal Tours</h2>
          </div>
          <Link to="/tours">
            <Button variant="outline" className="gap-2 text-xs font-bold hover:bg-emerald-50 hover:text-emerald-800 border-slate-300 transition-all duration-200">
              View All Packages
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.slice(0, 8).map((tour) => (
            <motion.div key={tour.id} variants={fadeInUp} className="h-full">
              <TourCard tour={tour} onBookNow={handleBookNow} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 shadow-inner">
              Why Dawadi Tours
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your Safety & Satisfaction First</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We bring over a decade of local experience to ensure every aspect of your Nepalese journey is seamless and unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm group"
                >
                  <FeatureIcon className="h-8 w-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Traveler Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What Our Guests Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <motion.div key={rev.id} variants={fadeInUp}>
              <ReviewCard review={rev} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Ready to Explore Nepal?</h2>
            <p className="text-sm sm:text-base text-emerald-100/90 font-normal leading-relaxed">
              Your next unforgettable mountain adventure, cultural heritage walk, or jungle safari starts here with Dawadi Tours & Travels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/tours" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 hover:scale-105 font-bold h-12 px-8 transition-all duration-200 shadow-md">
                  Browse All Packages
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 hover:border-white font-bold h-12 px-8 transition-all duration-200">
                  Contact Travel Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Booking Modal */}
      <BookingForm initialService={selectedService} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}