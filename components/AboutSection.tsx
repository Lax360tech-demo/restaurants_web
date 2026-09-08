"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Sparkles, Award, ShieldCheck, Flame, Compass } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Flame,
      title: "Ancient Dum Cooking",
      desc: "Slow-sealed handis cooked over fragrant charcoal embers for unadulterated depth.",
    },
    {
      icon: Compass,
      title: "Imperial Spice Trails",
      desc: "Whole spices harvested from high-elevation plantations and stone-milled in-house.",
    },
    {
      icon: Award,
      title: "Master Culinary Team",
      desc: "Heritage chefs who have mastered century-old royal recipes across India.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Preservatives",
      desc: "100% farm-fresh meats, A2 Desi Ghee, pure saffron, and non-GMO grains.",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EC] dark:bg-gradient-to-b dark:from-black dark:via-[#140804] dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Background Decorative Ambient Radial Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/30 dark:bg-spice-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-restaurant-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                The Spice Royale Legacy
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              CRAFTED WITH <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                TIME-HONORED TRADITION
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              At Spice Royale, gastronomy is not merely cooking — it is an art of patience, passion, and heritage. We resurrect the forgotten grandeur of royal feasts by uniting authentic recipes, organic farm harvests, and cinematic presentation.
            </p>
          </SectionReveal>
        </div>

        {/* Split Grid: Cinematic Image & Heritage Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Image with Luxury Gold Frame */}
          <div className="lg:col-span-5 relative">
            <SectionReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-[#DEC398] dark:border-spice-gold/30 p-2 bg-[#F7E7CE] dark:bg-gradient-to-b dark:from-[#2A140A] dark:to-[#120703] shadow-xl">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food/biryani.webp"
                    alt="Spice Royale Handcrafted Feast"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Luxury Stamp */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-black/75 backdrop-blur-md border border-[#DEC398] dark:border-spice-gold/30 flex items-center justify-between shadow-md">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-amber-800 dark:text-spice-gold font-bold">Dum-Pukht Method</p>
                      <p className="text-sm font-semibold text-stone-900 dark:text-cream">Copper Handi Simmered</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 dark:bg-spice-gold/20 dark:text-spice-gold flex items-center justify-center font-mono font-bold text-xs">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Key Narrative and Pillar Cards */}
          <div className="lg:col-span-7 space-y-8">
            <SectionReveal direction="left" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-cream tracking-tight">
                  Where Ancient Secrets Meet Contemporary Elegance
                </h3>
                <p className="text-stone-700 dark:text-cream-muted leading-relaxed font-normal dark:font-light text-sm sm:text-base">
                  Every dish at Spice Royale tells a story that began hundreds of years ago. From our 24-hour slow-cooked Dal Makhani to our Kashmiri Saffron Dum Biryani sealed with wheat dough, our kitchen adheres strictly to traditional slow-food methods.
                </p>
              </div>
            </SectionReveal>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SectionReveal key={item.title} delay={0.15 + idx * 0.08}>
                    <div className="p-5 rounded-xl bg-white/85 dark:bg-deep-brown-card/80 border border-[#DEC398]/60 dark:border-spice-gold/15 hover:border-amber-600 dark:hover:border-spice-gold/40 transition-colors duration-300 shadow-sm dark:shadow-none">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-spice-gold/15 border border-[#DEC398] dark:border-spice-gold/30 flex items-center justify-center mb-3 text-amber-800 dark:text-spice-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-stone-900 dark:text-cream mb-1">{item.title}</h4>
                      <p className="text-xs text-stone-600 dark:text-cream-muted font-normal dark:font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Milestone Stats Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#F7E7CE]/90 dark:bg-gradient-to-r dark:from-[#1E0E08]/80 dark:via-[#2C140A]/60 dark:to-[#1E0E08]/80 border border-[#DEC398] dark:border-spice-gold/20 backdrop-blur-md shadow-md">
          {[
            { number: "24+", label: "Heritage Spices" },
            { number: "4.5h", label: "Slow Dum Cooking" },
            { number: "100%", label: "Pure Desi Ghee" },
            { number: "4.9★", label: "Culinary Rating" },
          ].map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-800 via-amber-600 to-red-700 dark:from-spice-gold-light dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-stone-700 dark:text-cream-muted font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
