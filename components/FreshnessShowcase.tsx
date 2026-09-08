"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Sparkles, CheckCircle2, Flame, Droplets, Sun, Wind } from "lucide-react";

export default function FreshnessShowcase() {
  const freshnessItems = [
    {
      title: "Wild Kashmiri Saffron",
      region: "Pampore Valley",
      description: "Hand-plucked Mongra grade saffron offering deep crimson tint and intoxicating floral aromatics.",
      icon: Sun,
    },
    {
      title: "Tellicherry Black Pepper",
      region: "Malabar Coast",
      description: "Sun-dried whole extra-bold peppercorns delivering bold citrus warmth without harsh bitterness.",
      icon: Wind,
    },
    {
      title: "Charcoal Clay Oven",
      region: "Live 500°C Tandoor",
      description: "Natural lump charcoal radiating intense dry heat that traps juices while crisping marinades.",
      icon: Flame,
    },
    {
      title: "Fresh Farm Herbs",
      region: "Daily Harvest",
      description: "Crisp mint leaves, tender cilantro, and mountain ginger crushed fresh for every single course.",
      icon: Droplets,
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F7E7CE]/40 dark:bg-gradient-to-b dark:from-black dark:via-[#160B06] dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Warm Steam / Particle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-200/30 dark:bg-warm-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Ingredients Of Distinction
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              FRESHNESS IN <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                EVERY SACRED GRAIN
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              We travel directly to origin estates across the Indian subcontinent to source untouched, non-hybridized spices and farm produce.
            </p>
          </SectionReveal>
        </div>

        {/* Dynamic Split Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4 Interactive Spice & Herb Cards */}
          <div className="lg:col-span-6 space-y-4">
            {freshnessItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.title} delay={idx * 0.1} direction="right">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-white/90 dark:bg-gradient-to-r dark:from-[#20100A]/80 dark:to-[#120703]/80 border border-[#DEC398]/60 dark:border-spice-gold/15 hover:border-amber-600 dark:hover:border-spice-gold/40 transition-colors flex items-start gap-4 shadow-sm dark:shadow-lg backdrop-blur-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-spice-gold/15 border border-[#DEC398] dark:border-spice-gold/30 flex-shrink-0 flex items-center justify-center text-amber-800 dark:text-spice-gold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-stone-900 dark:text-cream">{item.title}</h4>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100/70 text-amber-900 dark:bg-spice-gold/10 dark:text-spice-gold border border-[#DEC398] dark:border-spice-gold/20 font-medium">
                          {item.region}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-cream-muted font-normal dark:font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Right: Rich Imagery Showcase with Floating Ingredients */}
          <div className="lg:col-span-6 relative">
            <SectionReveal direction="left">
              <div className="relative rounded-3xl overflow-hidden border border-[#DEC398] dark:border-spice-gold/30 p-2.5 bg-[#F7E7CE] dark:bg-gradient-to-b dark:from-[#2A140A] dark:via-[#1A0C06] dark:to-[#0A0402] shadow-xl">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food/tandoori.webp"
                    alt="Spice Royale Fresh Tandoori Grills"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Trust Indicators */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-[#DEC398] dark:border-white/10 flex items-center gap-2.5 shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-stone-900 dark:text-cream">100% Cold-Pressed Oils</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-[#DEC398] dark:border-white/10 flex items-center gap-2.5 shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-stone-900 dark:text-cream">Zero MSG or Additives</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
