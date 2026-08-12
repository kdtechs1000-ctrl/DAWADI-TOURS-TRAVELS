import React, { useState } from 'react';
import { Shield, Lock, EyeOff, UserCheck, Database, Mail, ChevronDown, Trash2, CheckCircle2 } from 'lucide-react';

export default function Privacy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Hero Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
            <Shield className="h-3.5 w-3.5" />
            Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Your privacy is paramount. Learn how Dawadi Tours collects, protects, and uses your personal information when you use our website and services.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <Lock className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Encrypted Storage</h3>
            <p className="text-slate-500 text-xs">All user credentials and booking records are encrypted via Supabase protocols.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <EyeOff className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Zero Third-Party Sales</h3>
            <p className="text-slate-500 text-xs">We never sell, trade, or rent your personal information to external advertisers.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <UserCheck className="h-6 w-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm mb-1">Full Control</h3>
            <p className="text-slate-500 text-xs">You can request data deletion or account removal at any time.</p>
          </div>
        </div>

        {/* Main Privacy Breakdown */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-emerald-600 shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            </div>
            <p className="text-slate-600">
              We collect details required to fulfill your travel services, including your full name, email address, contact number, and trip specifics when submitting a booking or contact request.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-600 shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">2. How Your Data Is Used</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
              <li>To confirm and process hotel, tour, and vehicle reservations.</li>
              <li>To issue official permits required by the Nepal Tourism Board.</li>
              <li>To provide customer support and emergency contact assistance.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-emerald-600 shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">3. Cookies & Local Storage</h2>
            </div>
            <p className="text-slate-600">
              Our website uses minimal local storage to remember your login session and offline booking preferences. We do not track cross-site browsing history.
            </p>
          </section>

          {/* Collapsible Privacy Accordion */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-6 text-left text-white flex items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              <div>
                <h4 className="font-bold text-base">Questions about your data?</h4>
                <p className="text-xs text-slate-400">Click to expand data access options and deletion requests.</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center gap-2 shrink-0">
                <Mail className="h-4 w-4" />
                <span>Privacy Inquiries</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Expandable Content */}
            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-800 text-slate-300 text-xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-800 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <Trash2 className="h-4 w-4" />
                      <span>Data Deletion Request</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      To delete your user profile and stored booking history, email <strong className="text-slate-200">privacy@dawaditours.com</strong> with your registered email ID.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-800 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Data Access & Export</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      You can request a full JSON/CSV copy of all records stored under your account at any time free of cost.
                    </p>
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