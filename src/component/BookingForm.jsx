import React, { useState, useEffect } from 'react';
import { User, Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

export default function BookingForm({ initialService = null, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceName: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: initialService.title || initialService.name || '',
      }));
    }
  }, [initialService, isOpen]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid Email is required';
    }
    if (!formData.serviceName.trim()) {
      errs.serviceName = 'Please enter or select a package/service';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // 1. Get the current logged-in user session
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id || null;

      // 2. Insert booking record into Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            user_id: userId,
            full_name: formData.fullName,
            email_address: formData.email,
            package_service: formData.serviceName,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // 3. Save a local backup copy to LocalStorage
      const existingLocalBookings = JSON.parse(
        localStorage.getItem('saved_bookings') || '[]'
      );
      const updatedLocalBookings = [data, ...existingLocalBookings];
      localStorage.setItem('saved_bookings', JSON.stringify(updatedLocalBookings));

      // 4. Set confirmation state
      setConfirmedBooking({
        id: data.id,
        fullName: data.full_name,
        email: data.email_address,
        serviceName: data.package_service,
      });
    } catch (err) {
      alert('Failed to save booking: ' + (err.message || 'Unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const handleDone = () => {
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      email: '',
      serviceName: '',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {confirmedBooking ? (
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Booking Requested!</h2>
          <p className="text-xs text-slate-500">Your reservation code is:</p>
          <div className="bg-slate-100 p-3 rounded-xl font-mono text-lg font-bold text-emerald-900 tracking-wider">
            #BK-{confirmedBooking.id}
          </div>
          <div className="text-xs text-slate-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100 space-y-1 text-left">
            <p><strong>Name:</strong> {confirmedBooking.fullName}</p>
            <p><strong>Email:</strong> {confirmedBooking.email}</p>
            <p><strong>Service:</strong> {confirmedBooking.serviceName}</p>
          </div>
          <Button onClick={handleDone} className="w-full mt-4 cursor-pointer">Close & View Bookings</Button>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Book Your Trip</h2>
            <p className="text-xs text-slate-500">Fill in details to make a reservation with Dawadi Tours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ram Bahadur"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
              {errors.fullName && <p className="text-[10px] text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="ram@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
              {errors.email && <p className="text-[10px] text-red-600 mt-1 font-semibold">{errors.email}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Package / Service Name *</label>
              <input
                type="text"
                value={formData.serviceName}
                onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                placeholder="e.g. Kathmandu Valley Heritage Tour"
                className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-600 outline-none"
              />
              {errors.serviceName && <p className="text-[10px] text-red-600 mt-1 font-semibold">{errors.serviceName}</p>}
            </div>

            <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-bold mt-2 flex items-center justify-center gap-2 cursor-pointer bg-emerald-800 hover:bg-emerald-900 text-white">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving Reservation...
                </>
              ) : (
                'Confirm Reservation Request'
              )}
            </Button>
          </form>
        </div>
      )}
    </Dialog>
  );
}