import React, { useState, useEffect } from 'react';
import { Calendar, User, Mail, Trash2, Clock, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

export default function MyBookings() {
  const [bookingList, setBookingList] = useState([]);
  const [cancelTargetId, setCancelTargetId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch bookings and merge localStorage with Supabase safely
  const fetchBookings = async () => {
    setLoading(true);

    // 1. Load cached data from localStorage for instant display
    const localData = JSON.parse(localStorage.getItem('saved_bookings') || '[]');
    if (localData.length > 0) {
      setBookingList(localData);
    }

    // 2. Fetch fresh records from Supabase
    try {
      const { data: supabaseData, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (supabaseData) {
        // Merge Supabase and localStorage using Map to prevent duplicate IDs
        const combinedMap = new Map();

        // Add remote records first
        supabaseData.forEach((item) => {
          if (item.id) combinedMap.set(String(item.id), item);
        });

        // Retain local records if not yet deleted
        localData.forEach((item) => {
          if (item.id && !combinedMap.has(String(item.id))) {
            combinedMap.set(String(item.id), item);
          }
        });

        const mergedList = Array.from(combinedMap.values());
        setBookingList(mergedList);
        localStorage.setItem('saved_bookings', JSON.stringify(mergedList));
      }
    } catch (err) {
      console.error('Supabase fetch failed, relying on local storage:', err.message);
      setBookingList(localData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleConfirmCancel = async () => {
    if (!cancelTargetId) return;

    try {
      // 1. Remove record from Supabase
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', cancelTargetId);

      if (error) console.warn('Supabase record delete error:', error.message);

      // 2. Remove record from local React state and update localStorage
      const updatedList = bookingList.filter((b) => String(b.id) !== String(cancelTargetId));
      setBookingList(updatedList);
      localStorage.setItem('saved_bookings', JSON.stringify(updatedList));
    } catch (err) {
      alert('Failed to cancel booking: ' + err.message);
    } finally {
      setCancelTargetId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">My Saved Bookings</h1>
          <p className="text-sm text-slate-600 mt-2">View and manage your saved booking requests.</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchBookings}
          className="gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border-emerald-200 cursor-pointer"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {loading && bookingList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-3 text-slate-500">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          <p className="text-xs font-medium">Fetching reservations...</p>
        </div>
      ) : bookingList.length > 0 ? (
        <div className="space-y-4">
          {bookingList.map((b) => (
            <div
              key={b.id || Math.random()}
              className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    #BK-{b.id}
                  </span>
                  <Badge variant="secondary">{b.status || 'Confirmed'}</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{b.package_service || b.serviceName}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-emerald-700" /> {b.full_name || b.fullName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-emerald-700" /> {b.email_address || b.email}
                  </span>
                  {b.created_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-emerald-700" />
                      {new Date(b.created_at).toLocaleString('en-US', {
                        timeZone: 'Asia/Kathmandu',
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </span>
                  )}
                </div>
              </div>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCancelTargetId(b.id)}
                className="gap-1 font-bold text-xs cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Cancel Booking
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <Clock className="h-10 w-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No active bookings found</h3>
          <p className="text-xs text-slate-500">You haven't requested any tour or hotel reservations yet.</p>
        </div>
      )}

      {/* Cancellation Confirmation Dialog */}
      <Dialog open={!!cancelTargetId} onOpenChange={() => setCancelTargetId(null)}>
        <div className="space-y-4 text-center p-2">
          <h3 className="text-xl font-bold text-slate-900">Cancel Booking Request?</h3>
          <p className="text-xs text-slate-600">
            Are you sure you want to remove booking <strong>#BK-{cancelTargetId}</strong>? This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Button variant="outline" onClick={() => setCancelTargetId(null)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={handleConfirmCancel}>
              Yes, Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}