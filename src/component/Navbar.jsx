import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Mountain, 
  Menu, 
  Compass, 
  PhoneCall, 
  Home, 
  Hotel, 
  Sparkles, 
  MapPin, 
  Car, 
  Info, 
  Briefcase 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items with custom active color themes for each route
  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      icon: Home, 
      activeBg: 'bg-emerald-50 text-emerald-800', 
      iconColor: 'text-emerald-600', 
      lineColor: 'bg-emerald-600' 
    },
    { 
      name: 'Tours', 
      path: '/tours', 
      icon: Compass, 
      activeBg: 'bg-blue-50 text-blue-800', 
      iconColor: 'text-blue-600', 
      lineColor: 'bg-blue-600' 
    },
    { 
      name: 'Hotels', 
      path: '/hotels', 
      icon: Hotel, 
      activeBg: 'bg-indigo-50 text-indigo-800', 
      iconColor: 'text-indigo-600', 
      lineColor: 'bg-indigo-600' 
    },
    { 
      name: 'Adventures', 
      path: '/adventures', 
      icon: Sparkles, 
      activeBg: 'bg-amber-50 text-amber-800', 
      iconColor: 'text-amber-600', 
      lineColor: 'bg-amber-600' 
    },
    { 
      name: 'Destinations', 
      path: '/destinations', 
      icon: MapPin, 
      activeBg: 'bg-rose-50 text-rose-800', 
      iconColor: 'text-rose-600', 
      lineColor: 'bg-rose-600' 
    },
    { 
      name: 'Transportation', 
      path: '/transportation', 
      icon: Car, 
      activeBg: 'bg-cyan-50 text-cyan-800', 
      iconColor: 'text-cyan-600', 
      lineColor: 'bg-cyan-600' 
    },
    { 
      name: 'About Us', 
      path: '/about', 
      icon: Info, 
      activeBg: 'bg-purple-50 text-purple-800', 
      iconColor: 'text-purple-600', 
      lineColor: 'bg-purple-600' 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: PhoneCall, 
      activeBg: 'bg-teal-50 text-teal-800', 
      iconColor: 'text-teal-600', 
      lineColor: 'bg-teal-600' 
    },
    { 
      name: 'My Bookings', 
      path: '/my-bookings', 
      icon: Briefcase, 
      activeBg: 'bg-orange-50 text-orange-800', 
      iconColor: 'text-orange-600', 
      lineColor: 'bg-orange-600' 
    },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 h-20 flex items-center justify-between gap-2">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative flex items-center justify-center h-11 w-11 rounded-2xl bg-gradient-to-tr from-emerald-950 via-emerald-800 to-emerald-600 text-white shadow-md shadow-emerald-900/15 group-hover:scale-105 transition-transform duration-300">
            <Mountain className="h-5 w-5 stroke-[2.2] text-emerald-100 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute -bottom-1 -right-1 bg-amber-400 p-0.5 rounded-full text-slate-950 border-2 border-white shadow-xs">
              <Compass className="h-2.5 w-2.5" />
            </div>
          </div>
          
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-lg font-black tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors leading-none">
              DAWADI
            </span>
            <span className="text-[9px] font-bold tracking-widest text-emerald-700 uppercase mt-0.5">
              Tours & Travels
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Forces Single-Line Layout */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-nowrap overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  active
                    ? `${link.activeBg} font-bold shadow-2xs`
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${active ? link.iconColor : 'text-slate-400'}`} />
                <span>{link.name}</span>
                {active && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 ${link.lineColor} rounded-full`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link to="/tours">
            <Button className="gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl px-4 xl:px-5 py-2 text-xs shadow-md shadow-emerald-900/10 transition-all hover:scale-[1.02] whitespace-nowrap">
              <Compass className="h-4 w-4 text-emerald-300" />
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <div className="flex flex-col gap-1 py-4">
          <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? `${link.activeBg} font-bold`
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? link.iconColor : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
          
          <div className="pt-6 border-t border-slate-100 mt-4 px-2 space-y-4">
            <Link to="/tours" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full h-12 text-sm bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                <Compass className="h-4 w-4" />
                Book Your Trip Now
              </Button>
            </Link>
            
            <a 
              href="tel:+9779800000000" 
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 py-2 transition-colors"
            >
              <PhoneCall className="h-4 w-4 text-emerald-700" />
              +977 1 4250000 / 9800000000
            </a>
          </div>
        </div>
      </Sheet>
    </header>
  );
}