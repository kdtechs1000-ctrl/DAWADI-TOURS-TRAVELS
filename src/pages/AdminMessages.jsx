import React, { useEffect, useState } from 'react';
import { Mail, User, Clock, MessageSquare, Loader2, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Convert UTC timestamp to exact Kathmandu local time
  const formatKathmanduTime = (dateStr) => {
    if (!dateStr) return 'N/A';
    try {
      let isoString = String(dateStr).trim().replace(' ', 'T');
      if (!isoString.endsWith('Z') && !isoString.includes('+')) {
        isoString += 'Z';
      }
      return new Date(isoString).toLocaleString('en-US', {
        timeZone: 'Asia/Kathmandu',
        dateStyle: 'medium',
        timeStyle: 'medium', // Shows exact hour, minute, and second
      });
    } catch {
      return 'Invalid date';
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      console.error('Error fetching messages:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-slate-900">Received Messages</h1>
        <button
          onClick={fetchMessages}
          className="flex items-center gap-2 text-xs font-bold px-3 py-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12 text-slate-500">
          <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />
        </div>
      ) : messages.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500">
          No messages received yet.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-6 border border-slate-200 rounded-2xl space-y-3 shadow-xs">
              <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{msg.subject || 'No Subject'}</h3>
                  <div className="flex gap-4 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-emerald-600" /> {msg.name}</span>
                    <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-emerald-600" /> {msg.email}</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  {formatKathmanduTime(msg.created_at)}
                </span>
              </div>
              <p className="text-xs text-slate-700 whitespace-pre-wrap">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}