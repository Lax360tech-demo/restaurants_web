"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Sparkles, Leaf, Flame, HeartHandshake, Hourglass } from "lucide-react";

export default function FoodStory() {
  const storyPillars = [
    {
      num: "01",
      icon: Leaf,
      title: "Fresh Ingredients",
      tagline: "Sourced Daily From Local Organic Farms",
      desc: "Only the freshest farm poultry, crisp organic herbs, cold-pressed mustard oils, and single-estate Himalayan basmati rice enter our preparation chambers.",
    },
    {
      num: "02",
      icon: Sparkles,
      title: "Authentic Spices",
      tagline: "Stone-Ground In Small Daily Batches",
      desc: "Pure Kashmiri saffron, Tellicherry whole black peppercorns, green cardamom, star anise, and cinnamon sticks are ground gently to lock in natural essential oils.",
    },
    {
      num: "03",
      icon: Hourglass,
      title: "Slow Crafted",
      tagline: "Traditional Dum Sealed With Wheat Dough",
      desc: "We practice the meditative Dum Pukht technique. By cooking food in its own trapped steam over dying charcoal embers, flavors achieve unbelievable harmony.",
    },
    {
      num: "04",
      icon: HeartHandshake,
      title: "Served With Passion",
      tagline: "Hospitality Befitting Emperors & Royalty",
      desc: "From hand-hammered copper vessels to warm fragrant steam, every element is designed to turn your dining moment into an indelible memory.",
    },
  ];

  return (
    <section id="story" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EC] dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent dark:from-[#241008] dark:via-black dark:to-black opacity-80 pointer-events-none" />

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Our Food Philosophy
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              THE ARTISTRY OF <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                SLOW CULINARY EXCELLENCE
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              We reject shortcuts. In an age of rushed cooking, we honor centuries of culinary wisdom, taking hours to achieve perfection in every bite.
            </p>
          </SectionReveal>
        </div>

        {/* 4 Story Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storyPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full p-8 rounded-2xl bg-white/90 dark:bg-gradient-to-b dark:from-[#1C0E08]/90 dark:via-[#130704]/90 dark:to-[#0A0402] border border-[#DEC398]/60 dark:border-spice-gold/15 hover:border-amber-600 dark:hover:border-spice-gold/40 transition-all duration-500 flex flex-col justify-between shadow-md dark:shadow-xl"
                >
                  {/* Subtle Top Glow on Hover */}
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-600 dark:via-spice-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Header with Step Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-3xl font-black text-amber-800/30 dark:text-spice-gold/30 group-hover:text-amber-800 dark:group-hover:text-spice-gold transition-colors duration-300">
                        {item.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-spice-gold/10 border border-[#DEC398] dark:border-spice-gold/30 flex items-center justify-center text-amber-800 dark:text-spice-gold group-hover:bg-amber-700 dark:group-hover:bg-spice-gold group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-cream mb-2 tracking-tight group-hover:text-amber-700 dark:group-hover:text-spice-gold-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-800 dark:text-warm-amber uppercase tracking-wider mb-4">
                      {item.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-cream-muted font-normal dark:font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-stone-200 dark:border-white/5 flex items-center gap-2 text-[11px] uppercase tracking-widest text-stone-500 group-hover:text-amber-800 dark:group-hover:text-spice-gold transition-colors">
                    <span>Mastered Daily</span>
                    <span className="w-6 h-px bg-amber-600/40 dark:bg-spice-gold/40" />
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
