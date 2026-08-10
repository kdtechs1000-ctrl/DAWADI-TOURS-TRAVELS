import React, { useState, useEffect } from 'react';
import { getBookings, cancelBooking } from '@/lib/storage';
import { Calendar, User, Phone, Trash2, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';

export default function MyBookings() {
  const [bookingList, setBookingList] = useState([]);
  const [cancelTargetId, setCancelTargetId] = useState(null);

  useEffect(() => {
    setBookingList(getBookings());
  }, []);

  const handleConfirmCancel = () => {
    if (cancelTargetId) {
      const updated = cancelBooking(cancelTargetId);
      setBookingList(updated);
      setCancelTargetId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">My Saved Bookings</h1>
        <p className="text-sm text-slate-600 mt-2">View and manage your saved booking requests.</p>
      </div>

      {bookingList.length > 0 ? (
        <div className="space-y-4">
          {bookingList.map((b) => (
            <div key={b.id} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{b.id}</span>
                  <Badge variant="secondary">{b.status}</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{b.serviceName}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-emerald-700" /> {b.travelDate}</span>
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-emerald-700" /> {b.fullName} ({b.travelers} Persons)</span>
                  <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5 text-emerald-700" /> {b.phone}</span>
                </div>
              </div>

              <Button variant="destructive" size="sm" onClick={() => setCancelTargetId(b.id)} className="gap-1 font-bold text-xs">
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
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-bold text-slate-900">Cancel Booking Request?</h3>
          <p className="text-xs text-slate-600">Are you sure you want to remove booking <strong>{cancelTargetId}</strong>? This action cannot be undone.</p>
          <div className="flex gap-3 justify-center pt-2">
            <Button variant="outline" onClick={() => setCancelTargetId(null)}>Keep Booking</Button>
            <Button variant="destructive" onClick={handleConfirmCancel}>Yes, Cancel</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}