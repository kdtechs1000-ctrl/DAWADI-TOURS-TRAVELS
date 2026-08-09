import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, Compass, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Adventures', path: '/adventures' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Transportation', path: '/transportation' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'My Bookings', path: '/my-bookings' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-md group-hover:bg-emerald-900 transition-colors">
            <Mountain className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-black text-emerald-900 tracking-tight block leading-none">DAWADI</span>
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">Tours & Travels</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive(link.path)
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/tours">
            <Button className="gap-2 shadow-emerald-800/10">
              <Compass className="h-4 w-4" />
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
        <div className="flex flex-col gap-2 py-4">
          <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-emerald-50 text-emerald-800 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-slate-100 mt-4 px-2">
            <Link to="/tours" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full h-12 text-base">Book Your Trip Now</Button>
            </Link>
            <a href="tel:+97714250000" className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 mt-4 py-2">
              <PhoneCall className="h-4 w-4 text-emerald-700" />
              +977 1 4250000 / 9851000000
            </a>
          </div>
        </div>
      </Sheet>
    </header>
  );
}