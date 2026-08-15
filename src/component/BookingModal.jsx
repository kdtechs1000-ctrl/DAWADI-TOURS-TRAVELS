import React, { useState } from 'react';
import { X, Loader2, Calendar, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function BookingModal({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Verify user authentication session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        alert('You must be logged in to book a service.');
        navigate('/login');
        return;
      }

      // 2. Insert booking record associated with the logged-in user's ID
      const { error: insertError } = await supabase.from('bookings').insert([
        {
          user_id: session.user.id,
          full_name: formData.fullName,
          email_address: formData.email,
          phone: formData.phone,
          package_service: serviceName || 'General Tour Booking',
          status: 'Confirmed'
        }
      ]);

      if (insertError) throw insertError;

      setSuccess(true);
    } catch (err) {
      alert('Failed to save booking: ' + (err.message || 'Unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-xl relative border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="h-14 w-14 text-emerald-600 mx-auto" />
            <h2 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h2>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Your reservation for <span className="font-bold text-slate-900">{serviceName}</span> has been successfully registered. View it anytime under My Bookings.
            </p>
            <Button
              onClick={() => {
                setSuccess(false);
                onClose();
                navigate('/my-bookings');
              }}
              className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl px-6 py-2.5 cursor-pointer"
            >
              Go to My Bookings
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Reservation Request
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Book Your Trip</h2>
              <p className="text-xs text-slate-500 mt-1">
                Securing booking for: <span className="font-bold text-slate-800">{serviceName}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977 9800000000"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing Reservation...
                    </>
                  ) : (
                    <>
                      <Calendar className="h-4 w-4" />
                      Confirm & Complete Booking
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}