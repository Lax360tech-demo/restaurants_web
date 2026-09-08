"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
} from "lucide-react";

interface ContactSectionProps {
  onOpenReservation?: () => void;
}

export default function ContactSection({ onOpenReservation }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: "2",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "19:30",
        guests: "2",
        specialRequests: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EC] dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-200/30 dark:bg-warm-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Dine In Grandeur
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              RESERVE YOUR TABLE & <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                LOCATION DETAILS
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              Step into our dining sanctuary. Experience imperial hospitality, live kitchen aromas, and unforgettable service.
            </p>
          </SectionReveal>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Fast Reservation */}
          <div className="lg:col-span-6 space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#180C07] border border-[#DEC398] dark:border-spice-gold/20 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-spice-gold/15 border border-[#DEC398] dark:border-spice-gold/30 flex items-center justify-center text-amber-800 dark:text-spice-gold mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-cream mb-1">Our Location</h4>
                <p className="text-xs text-stone-600 dark:text-cream-muted leading-relaxed font-normal dark:font-light">
                  88 Heritage Boulevard, Palace Enclave, Indiranagar, Bengaluru - 560038
                </p>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#180C07] border border-[#DEC398] dark:border-spice-gold/20 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-spice-gold/15 border border-[#DEC398] dark:border-spice-gold/30 flex items-center justify-center text-amber-800 dark:text-spice-gold mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-cream mb-1">Opening Hours</h4>
                <p className="text-xs text-stone-600 dark:text-cream-muted leading-relaxed font-normal dark:font-light">
                  Lunch: 12:00 PM – 3:30 PM <br />
                  Dinner: 7:00 PM – 11:30 PM <br />
                  <span className="text-amber-800 dark:text-spice-gold font-semibold">Open 7 Days a Week</span>
                </p>
              </div>
            </div>

            {/* Direct Instant Booking / WhatsApp Actions */}
            <div className="p-6 rounded-2xl bg-[#F7E7CE]/90 dark:bg-gradient-to-r dark:from-[#221008] dark:to-[#140804] border border-[#DEC398] dark:border-spice-gold/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-800 dark:text-spice-gold font-bold">
                  Direct Concierge Line
                </p>
                <p className="text-lg font-black text-stone-900 dark:text-cream mt-0.5">+91 (80) 4892 7700</p>
                <p className="text-xs text-stone-600 dark:text-stone-400">Available 10 AM to 11 PM daily</p>
              </div>

              <a
                href="https://wa.me/918048927700?text=Hello%20Spice%20Royale,%20I%20would%20like%20to%20reserve%20a%20table."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Reservation Form */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#160B06] border border-[#DEC398] dark:border-spice-gold/25 shadow-xl">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-cream tracking-tight mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-700 dark:text-spice-gold" />
                Book Your Table Online
              </h3>
              <p className="text-xs text-stone-600 dark:text-cream-muted mb-6 font-normal dark:font-light">
                Reserve your dining slot instantly with instant SMS confirmation.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-stone-900 dark:text-cream">Table Reserved!</h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-200 mt-1 font-medium">
                    We have sent your reservation details to your phone. We look forward to welcoming you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Aditya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                      >
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:30">01:30 PM (Lunch)</option>
                        <option value="19:30">07:30 PM (Dinner)</option>
                        <option value="20:30">08:30 PM (Dinner)</option>
                        <option value="21:30">09:30 PM (Dinner)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="8">8+ Grand Table</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Special Dietary / Seating Requests
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Anniversary celebration, window table preference, Jain preparation, etc."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-amber-50/50 dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-warm-amber dark:via-spice-gold dark:to-restaurant-red-accent text-white dark:text-black font-bold text-xs uppercase tracking-widest hover:shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps & Ambience Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#DEC398] dark:border-spice-gold/30 bg-[#F7E7CE] dark:bg-[#160B06] shadow-xl">
              {/* Google Maps Embed iframe with dynamic theme styling */}
              <iframe
                title="Spice Royale Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9854497672153!2d77.63884817578278!3d12.972772514849842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7bb432f83%3A0x6b77ecf1469e32f5!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300 dark:grayscale dark:invert dark:contrast-125 dark:opacity-75"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 p-4 rounded-2xl bg-white/95 dark:bg-black/85 backdrop-blur-md border border-[#DEC398] dark:border-spice-gold/30 max-w-xs shadow-md">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-stone-900 dark:text-cream">Spice Royale Dining Hall</span>
                </div>
                <p className="text-[11px] text-stone-600 dark:text-cream-muted leading-relaxed">
                  Valet parking available for all dinner & lunch guests.
                </p>
                <a
                  href="https://maps.google.com/?q=Spice+Royale+Indiranagar+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-amber-800 dark:text-spice-gold hover:underline font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Banquet & Private Dining Notice */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1A0C06] border border-[#DEC398] dark:border-spice-gold/20 flex items-center justify-between gap-4 shadow-md">
              <div>
                <h4 className="text-base font-bold text-stone-900 dark:text-cream">Host A Royal Celebration</h4>
                <p className="text-xs text-stone-600 dark:text-cream-muted mt-1 font-normal dark:font-light">
                  Private banquet hall available for up to 120 guests with custom curated royal menus.
                </p>
              </div>
              <a
                href="mailto:events@spiceroyale.com"
                className="px-4 py-2.5 rounded-xl border border-[#DEC398] hover:border-amber-600 bg-white/80 hover:bg-white text-stone-800 dark:border-spice-gold/40 dark:hover:bg-spice-gold/15 dark:text-cream text-xs font-semibold uppercase tracking-wider flex-shrink-0 transition-colors shadow-sm"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
