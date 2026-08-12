import React, { useState } from 'react';
import { FileText, ShieldCheck, RefreshCw, AlertTriangle, Scale, Mail, ChevronDown, Phone, Clock } from 'lucide-react';

export default function Terms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Hero Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
            <Scale className="h-3.5 w-3.5" />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Please read these terms carefully before booking your Nepal adventure with Dawadi Tours. By reserving a package, hotel, or transportation, you agree to these guidelines.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <ShieldCheck className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Guaranteed Safety</h3>
            <p className="text-slate-500 text-xs">All treks and vehicle rentals strictly adhere to government safety protocols.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <RefreshCw className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Flexible Booking</h3>
            <p className="text-slate-500 text-xs">Seamless itinerary adjustments with clear notice prior to trip departure.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <AlertTriangle className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Transparent Fees</h3>
            <p className="text-slate-500 text-xs">No hidden costs. Everything included is clearly stated in your package voucher.</p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <h2 className="text-lg font-bold text-slate-900">Reservations & Payments</h2>
            </div>
            <p className="pl-10 text-slate-600">
              A deposit is required at the time of booking to secure your reservations for hotels, transportation, and mountain guides. The remaining balance must be cleared prior to commencing the tour or trip.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <h2 className="text-lg font-bold text-slate-900">Cancellation & Refund Policy</h2>
            </div>
            <div className="pl-10 space-y-2 text-slate-600">
              <p>We understand plans change. Our standard refund structure is as follows:</p>
              <ul className="list-disc list-inside pl-2 space-y-1 text-slate-500">
                <li><strong className="text-slate-700">15+ days before departure:</strong> 90% refund of total cost.</li>
                <li><strong className="text-slate-700">7–14 days before departure:</strong> 50% refund.</li>
                <li><strong className="text-slate-700">Less than 7 days:</strong> Non-refundable due to vendor lock-ins.</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <h2 className="text-lg font-bold text-slate-900">Travel Insurance & Liability</h2>
            </div>
            <p className="pl-10 text-slate-600">
              High-altitude trekking and adventures carry inherent risks. Travelers are strongly required to purchase comprehensive travel and emergency medical evacuation insurance. Dawadi Tours is not responsible for weather-related flight delays, natural events, or landslides in Nepal.
            </p>
          </section>

          {/* Collapsible Contact Accordion */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-6 text-left text-white flex items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              <div>
                <h4 className="font-bold text-base">Have legal or booking questions?</h4>
                <p className="text-xs text-slate-400">Click to view our direct contact channels and response times.</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center gap-2 shrink-0">
                <Mail className="h-4 w-4" />
                <span>Contact Support</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Expandable Content */}
            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-800 text-slate-300 text-xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <a href="mailto:info@dawaditours.com" className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">Email Us</p>
                      <p className="text-[11px] text-slate-400">info@dawaditours.com</p>
                    </div>
                  </a>
                  <a href="tel:+9779800000000" className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">Phone Support</p>
                      <p className="text-[11px] text-slate-400">+977 9800000000</p>
                    </div>
                  </a>
                  <div className="p-3 bg-slate-800 rounded-xl flex items-center gap-3">
                    <Clock className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">Response Time</p>
                      <p className="text-[11px] text-slate-400">Within 24 hours guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}