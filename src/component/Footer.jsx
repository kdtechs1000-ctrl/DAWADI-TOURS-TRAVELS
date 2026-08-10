import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Mountain className="h-6 w-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">Dawadi Tours</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier registered travel & tourism partner in Nepal. Providing customized tours, treks, hotel bookings, and vehicle rentals with safety and local expertise.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://wa.me/9779803619762" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/tours" className="hover:text-emerald-400 transition-colors">Tour Packages</Link></li>
              <li><Link to="/hotels" className="hover:text-emerald-400 transition-colors">Hotels & Resorts</Link></li>
              <li><Link to="/adventures" className="hover:text-emerald-400 transition-colors">Adventure Activities</Link></li>
              <li><Link to="/destinations" className="hover:text-emerald-400 transition-colors">Destinations</Link></li>
              <li><Link to="/transportation" className="hover:text-emerald-400 transition-colors">Vehicle Rental</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Himalayan Trekking Expeditions</li>
              <li>Cultural & Heritage Sightseeing</li>
              <li>White Water Rafting & Bungee</li>
              <li>Luxury Hotel Accommodations</li>
              <li>Airport Pickup & Drop Off</li>
              <li>Private Tourist Vehicle Rental</li>
              <li>Tailor-made Customized Itineraries</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Head Office</h4>
            <div className="flex items-start gap-3 text-xs text-slate-400">
              <MapPin className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Purano Naikap, Ward 13, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>+977 1 4250000 / +977 9851000000</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>info@dawaditours.com.np</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dawadi Tours & Travels Pvt. Ltd. All Rights Reserved.</p>
          <p className="text-[11px]">Designed for Excellence in Nepalese Tourism.</p>
        </div>
      </div>
    </footer>
  );
}