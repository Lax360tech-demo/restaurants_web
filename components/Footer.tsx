"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Mail, Phone, MapPin, Clock, ArrowUp, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F0E4D2] dark:bg-[#070302] border-t border-[#DEC398] dark:border-spice-gold/15 text-stone-700 dark:text-cream-muted transition-colors duration-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-600/40 dark:via-spice-gold/50 to-transparent" />

      <div className="max-w-screen-2xl mx-auto">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/lax360-logo.png"
                  alt="Lax360 Crest Logo"
                  width={48}
                  height={51}
                  className="h-full w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)]"
                />
              </div>
              <span className="font-black text-2xl tracking-wider uppercase text-stone-900 dark:text-white flex items-center">
                Lax<span className="bg-gradient-to-r from-red-600 via-red-500 to-amber-600 dark:from-red-500 dark:to-spice-gold bg-clip-text text-transparent">360</span>
              </span>
            </div>

            <p className="text-sm font-normal dark:font-light text-stone-700 dark:text-cream-muted leading-relaxed max-w-sm">
              &ldquo;Where tradition meets extraordinary taste.&rdquo; Bringing the lost culinary secrets of royal Indian courts to modern connoisseurs.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-spice-gold/10 border border-[#DEC398] dark:border-spice-gold/20 text-amber-900 dark:text-spice-gold text-xs font-semibold uppercase tracking-wider">
                Awarded Best Luxury Indian Dining 2026
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {["Home", "About", "Menu", "Story", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-800 dark:hover:text-spice-gold transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-cream">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed font-normal dark:font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 dark:text-spice-gold flex-shrink-0 mt-0.5" />
                <span>88 Heritage Boulevard, Palace Enclave, Indiranagar, Bengaluru</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-700 dark:text-spice-gold flex-shrink-0" />
                <span>+91 (80) 4892 7700</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-700 dark:text-spice-gold flex-shrink-0" />
                <span>concierge@spiceroyale.com</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1 border-t border-stone-300 dark:border-white/5">
                <Clock className="w-4 h-4 text-amber-700 dark:text-spice-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900 dark:text-cream">Lunch: 12:00 PM – 3:30 PM</p>
                  <p className="font-semibold text-stone-900 dark:text-cream">Dinner: 7:00 PM – 11:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Royal Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-cream">
              Imperial Journal
            </h4>
            <p className="text-xs font-normal dark:font-light text-stone-700 dark:text-cream-muted leading-relaxed">
              Subscribe for exclusive tasting menus, seasonal banquet invitations, and culinary insights from our master chefs.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Welcome to the Royal Circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#140804] border border-[#DEC398] dark:border-spice-gold/25 focus:border-amber-700 dark:focus:border-spice-gold text-stone-900 dark:text-cream text-xs focus:outline-none placeholder:text-stone-400 dark:placeholder:text-stone-600 transition-colors shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-300 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-500">
          <p>© {new Date().getFullYear()} Lax360 Hospitality Group. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-800 dark:hover:text-spice-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-800 dark:hover:text-spice-gold transition-colors">Terms of Dining</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-800 dark:text-spice-gold hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
