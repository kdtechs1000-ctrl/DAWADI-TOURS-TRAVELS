import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle typing inside text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form payload directly to Supabase `messages` table
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      alert('Failed to send inquiry: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact Us</h1>
        <p className="text-sm text-slate-600 mt-2">
          Have questions about tour packages or need a custom trip? Get in touch with our travel planners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Sidebar: Office Info */}
        <div className="bg-emerald-950 text-white p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold">Office Information</h2>
          <ul className="space-y-4 text-xs text-emerald-100/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Purano Naikap, Ward 13, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>+977 1 4250000 / 9851000000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>info@dawaditours.com.np</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Sun - Fri: 8:00 AM - 7:00 PM</span>
            </li>
          </ul>

          <a
            href="https://wa.me/9779851000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-bold py-3 px-4 rounded-xl text-xs transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900">Message Sent!</h2>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you for reaching out. Our team will email or call you shortly.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl px-6 py-2.5"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Customized Trip Request"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip plans or questions..."
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}