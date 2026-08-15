import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X,
  Compass, 
  PhoneCall, 
  Home, 
  Hotel, 
  Sparkles, 
  MapPin, 
  Car, 
  Info, 
  Briefcase,
  User,
  LogOut,
  Shield,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    navigate('/');
  };

  const isAdmin = user?.email === 'admin1@dawadi.com';

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, activeBg: 'bg-emerald-50 text-emerald-800', iconColor: 'text-emerald-600' },
    { name: 'Tours', path: '/tours', icon: Compass, activeBg: 'bg-blue-50 text-blue-800', iconColor: 'text-blue-600' },
    { name: 'Hotels', path: '/hotels', icon: Hotel, activeBg: 'bg-indigo-50 text-indigo-800', iconColor: 'text-indigo-600' },
    { name: 'Adventures', path: '/adventures', icon: Sparkles, activeBg: 'bg-amber-50 text-amber-800', iconColor: 'text-amber-600' },
    { name: 'Destinations', path: '/destinations', icon: MapPin, activeBg: 'bg-rose-50 text-rose-800', iconColor: 'text-rose-600' },
    { name: 'Transport', path: '/transportation', icon: Car, activeBg: 'bg-cyan-50 text-cyan-800', iconColor: 'text-cyan-600' },
    { name: 'About', path: '/about', icon: Info, activeBg: 'bg-purple-50 text-purple-800', iconColor: 'text-purple-600' },
    { name: 'Contact', path: '/contact', icon: PhoneCall, activeBg: 'bg-teal-50 text-teal-800', iconColor: 'text-teal-600' },
    { name: 'Bookings', path: '/my-bookings', icon: Briefcase, activeBg: 'bg-orange-50 text-orange-800', iconColor: 'text-orange-600' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full group-hover:scale-105 transition-transform duration-300 shadow-md shadow-emerald-900/15 rounded-xl"
            >
              <rect width="48" height="48" rx="12" className="fill-emerald-900" />
              <path d="M12 33L22 17L28 26L32 20L38 33H12Z" className="fill-emerald-100" />
              <path d="M22 33L28 23L34 33H22Z" className="fill-emerald-400" />
              <circle cx="32" cy="15" r="3" className="fill-amber-400" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-tight text-emerald-950 leading-none">
              DAWADI
            </span>
            <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-emerald-700 uppercase mt-0.5">
              Tours & Travels
            </span>
          </div>
        </Link>

        {/* Desktop / Tablet Navigation (Now shows from 'md' breakpoint onwards) */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1.5 lg:px-2.5 lg:py-2 rounded-xl text-[11px] lg:text-xs font-bold transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                  active
                    ? `${link.activeBg} shadow-2xs ring-1 ring-emerald-200/50`
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`h-3 w-3 lg:h-3.5 lg:w-3.5 ${active ? link.iconColor : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Auth / Dashboard Controller */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 transition-colors cursor-pointer"
              >
                <div className="bg-emerald-600 text-white p-1 rounded-full">
                  <User className="h-3 w-3" />
                </div>
                <span className="max-w-[80px] lg:max-w-[100px] truncate">{user.email.split('@')[0]}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 text-[11px] text-slate-500 truncate">
                    Signed in as <br /><span className="font-bold text-slate-800">{user.email}</span>
                  </div>

                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      <Shield className="h-3.5 w-3.5 text-emerald-600" /> Admin Dashboard
                    </Link>
                  )}

                  <Link
                    to="/my-bookings"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <Briefcase className="h-3.5 w-3.5 text-emerald-600" /> My Bookings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 text-left border-t border-slate-100 cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={() => navigate('/login')}
              className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-900/10 transition-all hover:scale-[1.02]"
            >
              <LogIn className="h-3.5 w-3.5 text-emerald-200" /> Login / Sign Up
            </Button>
          )}
        </div>

        {/* Mobile Hamburger Button (Shows only on small mobile screens below 'md') */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(true);
            }}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer relative z-50"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Custom Native Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="relative w-[300px] sm:w-[350px] bg-white h-full shadow-2xl flex flex-col z-10">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 shrink-0">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-lg shadow-sm">
                    <rect width="48" height="48" rx="12" className="fill-emerald-900" />
                    <path d="M12 33L22 17L28 26L32 20L38 33H12Z" className="fill-emerald-100" />
                    <path d="M22 33L28 23L34 33H22Z" className="fill-emerald-400" />
                    <circle cx="32" cy="15" r="3" className="fill-amber-400" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black tracking-tight text-emerald-950 leading-none">DAWADI</span>
                  <span className="text-[7px] font-bold tracking-widest text-emerald-700 uppercase mt-0.5">Tours & Travels</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links List */}
            <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Menu</div>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                      active
                        ? `${link.activeBg}`
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? link.iconColor : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Footer / Auth Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
              {user ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 text-[11px] text-slate-500 bg-white border border-slate-200 rounded-xl">
                    Signed in as <span className="font-bold text-slate-800 block truncate">{user.email}</span>
                  </div>
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full h-10 text-xs bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 mb-2">
                        <Shield className="h-3.5 w-3.5" /> Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button 
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="w-full h-10 text-xs bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" /> Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-10 text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                    <LogIn className="h-3.5 w-3.5 text-emerald-200" /> Login / Sign Up
                  </Button>
                </Link>
              )}
              
              <a 
                href="tel:+9779800000000" 
                className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 py-1 transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-700" />
                +977 9800000000
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}