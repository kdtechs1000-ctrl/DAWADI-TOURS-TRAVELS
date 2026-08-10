import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Home from '@/pages/Home';
import Tours from '@/pages/Tours';
import TourDetails from '@/pages/TourDetails';
import Hotels from '@/pages/Hotels';
import HotelDetails from '@/pages/HotelDetails';
import Adventures from '@/pages/Adventures';
import AdventureDetails from '@/pages/AdventureDetails';
import Destinations from '@/pages/Destinations';
import Transportation from '@/pages/Transportation';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import MyBookings from '@/pages/MyBookings';
import NotFound from '@/pages/NotFound';
import AdminPage from '@/pages/AdminPage';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/adventures/:id" element={<AdventureDetails />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            
            {/* Admin Route */}
            <Route path="/admin" element={<AdminPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}