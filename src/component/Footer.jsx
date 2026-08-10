import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {

  const whatsappNumber = '9779803619762';
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about a tour package with Dawadi Tours.');

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com', 
      label: 'Instagram' 
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com', 
      label: 'YouTube' 
    },
    { 
      icon: MessageCircle, 
      href: `https://wa.me/${9803619762}?text=${Hello}`, 
      label: 'WhatsApp' 
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info & Social Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                D
              </div>
              <span className="text-2xl font-black text-white tracking-wide">Dawadi Tours</span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Your premier registered travel & tourism partner in Nepal. Providing customized tours, treks, hotel bookings, and vehicle rentals with safety and local expertise.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-xs"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/tours" className="hover:text-emerald-400 transition-colors">Tour Packages</Link></li>
              <li><Link to="/hotels" className="hover:text-emerald-400 transition-colors">Hotels & Resorts</Link></li>
              <li><Link to="/transportation" className="hover:text-emerald-400 transition-colors">Vehicle Rental</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* External Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="https://ntb.gov.np" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Nepal Tourism Board ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://immigration.gov.np" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Nepal Visa Information ↗
                </a>
              </li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li>
                <a 
                  href="tel:+9779800000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>+977 9800000000</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@dawaditours.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>info@dawaditours.com</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors font-semibold text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dawadi Tours & Travels Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}