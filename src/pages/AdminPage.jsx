import React, { useState, useEffect } from 'react';
import { Trash2, Loader2, RefreshCw, ShieldAlert, Mail, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const checkAdminAndFetch = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.email !== 'admin@dawadi.com') {
      alert('Access denied. Admin only.');
      navigate('/');
      return;
    }

    setIsAdmin(true);

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error.message);
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAdminAndFetch();
  }, []);

  const handleDeleteBooking = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;

    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) {
      alert('Failed to delete: ' + error.message);
    } else {
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex items-center justify-between border-b pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="text-emerald-600 h-8 w-8" /> Admin Dashboard
          </h1>
          <p className="text-sm text-slate-600 mt-1">Manage all customer bookings across Dawadi Tours & Travels.</p>
        </div>
        <Button onClick={checkAdminAndFetch} variant="outline" className="gap-2 cursor-pointer">
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
        </div>
      ) : bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    #BK-{b.id ? String(b.id).slice(0, 8) : 'TEMP'}
                  </span>
                  <Badge>{b.status || 'Confirmed'}</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{b.package_service || b.serviceName}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-emerald-600" /> {b.full_name || b.fullName}</span>
                  <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-emerald-600" /> {b.email_address || b.email}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-emerald-600" /> {b.created_at ? new Date(b.created_at).toLocaleString() : 'Recent'}</span>
                </div>
              </div>
              <Button variant="destructive" size="sm" onClick={() => handleDeleteBooking(b.id)} className="gap-1 cursor-pointer">
                <Trash2 className="h-4 w-4" /> Delete Booking
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-slate-500 text-sm">No bookings found in the database.</p>
        </div>
      )}
    </div>
  );
}