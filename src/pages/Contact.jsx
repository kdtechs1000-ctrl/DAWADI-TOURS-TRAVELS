import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact Us</h1>
        <p className="text-sm text-slate-600 mt-2">Have questions about tour packages or need a custom trip? Get in touch with our travel planners.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6 bg-emerald-900 text-white p-8 rounded-3xl">
          <h3 className="text-xl font-bold">Office Information</h3>
          
          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Purano Naikap, Ward 13, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>+977 1 4250000 / 9851000000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>info@dawaditours.com.np</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Sun - Fri: 8:00 AM - 7:00 PM</span>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-800/80">
            <a href="https://wa.me/9779803619762" target="_blank" rel="noreferrer">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-xs text-slate-600">Thank you for reaching out. Our team will email or call you shortly.</p>
              <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                  <input required type="text" className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs outline-none focus:ring-2 focus:ring-emerald-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email *</label>
                  <input required type="email" className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs outline-none focus:ring-2 focus:ring-emerald-600" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                <input type="text" placeholder="Customized Trip Request" className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Message *</label>
                <textarea required rows="4" className="w-full p-3 rounded-xl border border-slate-200 text-xs outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>

              <Button type="submit" className="w-full h-11 font-bold gap-2">
                <Send className="h-4 w-4" />
                Send Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}