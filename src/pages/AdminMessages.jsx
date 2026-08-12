import React, { useEffect, useState } from 'react';
import { Mail, User, Clock, MessageSquare, Loader2, RefreshCw, Trash2, Reply } from 'lucide-react';
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
        timeStyle: 'short', // e.g., "Aug 12, 2026, 7:04 PM"
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

  // Delete message handler
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      const { error } = await supabase.from('messages').delete().eq('id', id);
      if (error) throw error;
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (err) {
      alert('Failed to delete message: ' + err.message);
    }
  };

  useEffect(() => {
    fetchMessages();

    // Enable Realtime Listener for new incoming messages
    const channel = supabase
      .channel('public:messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-extrabold text-slate-900">Received Messages</h1>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
            {messages.length} Total
          </span>
        </div>
        
        <button
          onClick={fetchMessages}
          className="flex items-center gap-2 text-xs font-bold px-3.5 py-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Messages List */}
      {loading ? (
        <div className="flex justify-center py-16 text-slate-500">
          <Loader2 className="h-7 w-7 animate-spin text-emerald-600" />
        </div>
      ) : messages.length === 0 ? (
        <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500 space-y-2">
          <MessageSquare className="h-8 w-8 text-slate-300 mx-auto" />
          <p className="font-semibold">No messages received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-6 border border-slate-200 rounded-2xl space-y-4 shadow-2xs hover:border-slate-300 transition-all">
              
              {/* Header Info */}
              <div className="flex flex-wrap justify-between items-start gap-3 border-b border-slate-100 pb-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">{msg.subject || 'No Subject'}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-emerald-600" /> 
                      <strong className="text-slate-700">{msg.name}</strong>
                    </span>
                    <a 
                      href={`mailto:${msg.email}`} 
                      className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-600" /> 
                      {msg.email}
                    </a>
                  </div>
                </div>

                {/* Local Nepal Timestamp Badge */}
                <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 font-medium">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  {formatKathmanduTime(msg.created_at)}
                </span>
              </div>

              {/* Message Body */}
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                {msg.message}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-1">
                <a
                  href={`mailto:${msg.email}?subject=RE: ${encodeURIComponent(msg.subject || 'Inquiry')}`}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors"
                >
                  <Reply className="h-3.5 w-3.5" />
                  Reply
                </a>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}