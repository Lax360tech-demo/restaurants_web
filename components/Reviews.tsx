"use client";

import React from "react";
import { motion } from "framer-motion";
import { REVIEWS } from "@/data/menu";
import SectionReveal from "./SectionReveal";
import { Sparkles, Star, Quote, CheckCircle2 } from "lucide-react";

export default function Reviews() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F7E7CE]/30 dark:bg-gradient-to-b dark:from-black dark:via-[#140804] dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-amber-200/30 dark:bg-spice-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Guest Commendations
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              VOICES OF <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                THE ROYAL PATRONS
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              Discover why food connoisseurs, Michelin reviewers, and families cherish dining with us.
            </p>
          </SectionReveal>
        </div>

        {/* Reviews 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, index) => (
            <SectionReveal key={rev.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-6 rounded-2xl bg-white/95 dark:bg-gradient-to-b dark:from-[#1C0E08]/90 dark:via-[#130704]/90 dark:to-[#0A0402] border border-[#DEC398]/60 dark:border-spice-gold/20 hover:border-amber-600 dark:hover:border-spice-gold/50 transition-all duration-300 shadow-md dark:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-amber-800/20 dark:text-spice-gold/30" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-stone-800 dark:text-cream leading-relaxed font-normal dark:font-light mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#DEC398]/40 dark:border-spice-gold/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-stone-900 dark:text-cream">{rev.author}</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold flex-shrink-0" />
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">{rev.role}</p>
                    </div>
                    <span className="text-[10px] text-stone-400 dark:text-stone-500 font-mono">{rev.date}</span>
                  </div>

                  {/* Dish Recommended */}
                  <div className="mt-3 inline-block px-2.5 py-1 rounded-full bg-amber-100 dark:bg-spice-gold/10 border border-[#DEC398] dark:border-spice-gold/20 text-[10px] text-amber-900 dark:text-spice-gold font-medium">
                    Fav: {rev.dish}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
