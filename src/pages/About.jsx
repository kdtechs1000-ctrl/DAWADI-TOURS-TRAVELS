import React from 'react';
import { ShieldCheck, Award, Users, MapPin, CheckCircle, Heart, Compass } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Dawadi Tours & Travels Pvt. Ltd.
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Founded with a vision to share Nepal's natural grandeur and ancient heritage with the world, Dawadi Tours & Travels has grown into one of Nepal's most trusted travel agencies.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We specialize in handcrafted Himalayan trekking expeditions, luxury vehicle rentals, cultural heritage tours, wildlife safaris, and extreme adventure sports across Nepal, Tibet, and Bhutan.
          </p>
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Government Registered
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 24/7 On-Trip Support
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Expert Local Guides
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Tailor-Made Itineraries
            </div>
          </div>
        </div>

        <div className="h-96 rounded-3xl overflow-hidden shadow-lg relative">
          <img 
            src="https://mountaintigernepal.com/storage/uploads/VAqNkYxfYwcyTtpZ6qAu.jpeg" 
            alt="Nepal Himalayas" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Owner / Founder Section */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHfKmfN5YHBsw/profile-displayphoto-crop_800_800/B56Z_HW6viJgAM-/0/1785756103778?e=1787788800&v=beta&t=HIiJgwVgaDchiKJZBOoA45bJfXqsHM8W4mM4Y--ScUk" 
                alt="Founder & Managing Director" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg">
              5+ Yrs Experience
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Meet Our Founder
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold">
              Mr. Kritan Dawadi
            </h2>
            <p className="text-emerald-400 font-medium text-sm">
              Founder & Managing Director
            </p>
            <blockquote className="italic text-slate-300 text-sm sm:text-base border-l-4 border-emerald-500 pl-4 py-1">
              "Travel in Nepal isn't just about visiting places; it's about connecting with the mountains, culture, and hospitable people. My goal has always been to offer safe, authentic, and unforgettable journeys to every traveler."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Born and raised near the lap of the Himalayas, Kritan started his career as an alpine trekking guide over 8 years ago. His deep passion for Himalayan tourism and commitment to local community welfare led to the inception of Dawadi Tours & Travels.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-emerald-50 rounded-3xl p-8 text-center border border-emerald-100">
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-emerald-800">20k+</h3>
          <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">Happy Travelers</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-emerald-800">15+</h3>
          <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">Tour Packages</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-emerald-800">10+</h3>
          <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-emerald-800">100%</h3>
          <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">Safety Record</p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Travel With Us?</h2>
          <p className="text-sm text-slate-600">We prioritize your safety, comfort, and authentic Himalayan experiences above all else.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
            <h3 className="font-bold text-slate-900">Safety First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with satellite communications, certified guides, and comprehensive emergency evacuation support on all high-altitude treks.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Award className="w-10 h-10 text-emerald-600" />
            <h3 className="font-bold text-slate-900">Guaranteed Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From our well-maintained 4WD fleet to handpicked tea houses and luxury resort stays, quality is guaranteed at every step.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Heart className="w-10 h-10 text-emerald-600" />
            <h3 className="font-bold text-slate-900">Sustainable Tourism</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We practice leave-no-trace principles and ensure fair wages and ethical treatment for all our Sherpa guides and porters.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}