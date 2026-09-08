"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface FoodTextOverlaysProps {
  containerRef: React.RefObject<HTMLDivElement>;
  onExploreMenu?: () => void;
  onReserveTable?: () => void;
}

export default function FoodTextOverlays({
  containerRef,
  onExploreMenu,
  onReserveTable,
}: FoodTextOverlaysProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Intro ~0.02 - 0.22 (peaks at ~0.10)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.16, 0.24], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.08, 0.16, 0.24], [40, 0, 0, -40]);

  // Section 2: Flavours ~0.24 - 0.44 (peaks at ~0.30)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.30, 0.38, 0.46], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.30, 0.38, 0.46], [40, 0, 0, -40]);

  // Section 3: Ingredients ~0.50 - 0.70 (peaks at ~0.60)
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.58, 0.68, 0.76], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.58, 0.68, 0.76], [40, 0, 0, -40]);

  // Section 4: Royal Taste Final ~0.76 - 0.98 (peaks at ~0.85)
  const opacity4 = useTransform(scrollYProgress, [0.76, 0.85, 0.94, 1.0], [0, 1, 1, 0.8]);
  const y4 = useTransform(scrollYProgress, [0.76, 0.85, 0.94, 1.0], [40, 0, 0, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 sm:px-12 md:px-20">
        {/* Overlay 1: Made With Passion */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-x-0 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-amber-800 dark:text-spice-gold font-semibold uppercase tracking-[0.4em] text-xs sm:text-sm mb-4">
            Culinary Craftsmanship
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-stone-900 dark:text-cream tracking-tight leading-[1.05] mb-6">
            MADE WITH <br />
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
              PASSION
            </span>
          </h1>
          <p className="text-stone-700 dark:text-cream-muted text-sm sm:text-lg max-w-xl mx-auto font-medium dark:font-light leading-relaxed">
            Where centuries-old culinary heritage meets the roaring flames of modern gastronomy.
          </p>
        </motion.div>

        {/* Overlay 2: Flavours That Tell A Story */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-0 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-amber-800 dark:text-spice-gold font-semibold uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">
            Slow Dum Traditions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-stone-900 dark:text-cream tracking-tight leading-[1.1] mb-6 max-w-3xl">
            FLAVOURS THAT <br />
            <span className="bg-gradient-to-r from-amber-700 to-amber-500 dark:from-spice-gold dark:to-warm-amber bg-clip-text text-transparent">
              TELL A STORY
            </span>
          </h2>
          <p className="text-stone-700 dark:text-cream-muted text-sm sm:text-base md:text-lg max-w-lg font-medium dark:font-light leading-relaxed">
            Sealed in handcrafted heavy handis. Every spice is an invitation to unforgettable royal feasts.
          </p>
        </motion.div>

        {/* Overlay 3: Fresh Ingredients. Bold Spices. */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-0 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-red-700 dark:text-restaurant-red-accent font-semibold uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">
            Uncompromising Purity
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-stone-900 dark:text-cream tracking-tight leading-[1.1] mb-6 max-w-2xl">
            FRESH INGREDIENTS. <br />
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-red-600 dark:from-warm-amber dark:via-spice-gold dark:to-cream bg-clip-text text-transparent">
              BOLD SPICES.
            </span>
          </h2>
          <p className="text-stone-700 dark:text-cream-muted text-sm sm:text-base md:text-lg max-w-md font-medium dark:font-light leading-relaxed">
            Kashmiri saffron, Tellicherry pepper, and stone-pressed oils harmonized to perfection.
          </p>
        </motion.div>

        {/* Overlay 4: Experience The Royal Taste */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-x-0 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-amber-800 dark:text-spice-gold font-semibold uppercase tracking-[0.4em] text-xs sm:text-sm mb-4">
            Spice Royale Signature
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-stone-900 dark:text-cream tracking-tight leading-[1.05] mb-6">
            EXPERIENCE THE <br />
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold-metallic dark:via-spice-gold dark:to-restaurant-red-accent bg-clip-text text-transparent">
              ROYAL TASTE
            </span>
          </h2>
          <p className="text-stone-700 dark:text-cream-muted text-sm sm:text-lg max-w-xl mx-auto font-medium dark:font-light leading-relaxed mb-8">
            The art of great food, elevated for today. A banquet prepared for those who seek the extraordinary.
          </p>

          {/* Interactive CTAs inside the final hero reveal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
            <button
              onClick={() => {
                if (onExploreMenu) onExploreMenu();
                else {
                  const el = document.getElementById("menu");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-warm-amber dark:via-spice-gold dark:to-restaurant-red-accent text-white dark:text-black font-bold text-sm uppercase tracking-widest hover:shadow-gold-glow hover:scale-105 transition-all duration-300 shadow-md"
            >
              Explore Our Menu
            </button>
            <button
              onClick={() => {
                if (onReserveTable) onReserveTable();
                else {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 rounded-full border border-[#DEC398] hover:border-amber-600 text-stone-800 hover:text-stone-950 bg-white/70 hover:bg-white dark:border-spice-gold/40 dark:text-cream dark:hover:text-white dark:hover:border-spice-gold dark:hover:bg-spice-gold/10 font-semibold text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-sm"
            >
              Reserve A Table
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
