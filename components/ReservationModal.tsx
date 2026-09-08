"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, Phone, Mail, User } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:30",
    guests: "2",
    experience: "Royal Dining Hall",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative z-10 max-w-xl w-full rounded-3xl bg-[#FAF5EC] dark:bg-gradient-to-b dark:from-[#201008] dark:via-[#140804] dark:to-[#0A0402] border border-[#DEC398] dark:border-spice-gold/30 p-6 sm:p-8 shadow-2xl overflow-hidden text-[#23120B] dark:text-cream"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-[#DEC398] dark:bg-spice-gold/15 dark:border-spice-gold/30 text-amber-800 dark:text-spice-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" />
                Table Reservation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-cream tracking-tight">
                Reserve Your Imperial Experience
              </h3>
              <p className="text-xs text-stone-600 dark:text-cream-muted mt-1 font-light">
                Complimentary dessert and chef&apos;s amuse-bouche included with all advance bookings.
              </p>
            </div>

            {confirmed ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900 dark:text-cream">Reservation Confirmed</h4>
                <p className="text-xs text-stone-600 dark:text-cream-muted max-w-sm mx-auto">
                  Thank you, <span className="text-amber-800 dark:text-spice-gold font-bold">{formData.name}</span>. A confirmation SMS with directions and your table number has been dispatched.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-700 dark:text-spice-gold/60" />
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-700 dark:text-spice-gold/60" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                    >
                      <option value="12:30">12:30 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="20:30">08:30 PM</option>
                      <option value="21:30">09:30 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8">8+ Grand Banquet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-400 mb-1">
                    Special Seating Preference
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/20 focus:border-amber-600 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none shadow-sm"
                  >
                    <option value="Royal Dining Hall">Main Royal Dining Sanctuary</option>
                    <option value="Tandoor View Table">Live Tandoor Counter View</option>
                    <option value="Candlelight Alcove">Private Candlelight Alcove</option>
                    <option value="Garden Terrace">Courtyard Garden Terrace</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-warm-amber via-spice-gold to-restaurant-red-accent text-black font-extrabold text-xs uppercase tracking-widest hover:shadow-gold-glow transition-all duration-300 mt-2"
                >
                  Confirm Table Booking
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
