"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/data/menu";
import SectionReveal from "./SectionReveal";
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Dishes", "Ambiance", "Craft"];

  const filteredItems =
    activeTab === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(filteredItems[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(filteredItems[prevIdx]);
  };

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EC] dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Visual Sanctuary
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              A GLIMPSE OF <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                THE SPICE ROYALE REALM
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              Step into a dining hall imbued with royal heritage, glowing charcoal tandoors, and sensory culinary artistry.
            </p>
          </SectionReveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black shadow-md dark:shadow-gold-glow"
                    : "border border-[#DEC398] text-stone-700 hover:text-stone-950 dark:border-spice-gold/20 dark:text-cream-muted dark:hover:text-white dark:hover:border-spice-gold/40 bg-white/70 dark:bg-deep-brown-dark/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(item, index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-[#DEC398]/60 dark:border-spice-gold/20 hover:border-amber-600 dark:hover:border-spice-gold/60 shadow-md dark:shadow-xl bg-white dark:bg-deep-brown-card"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-spice-gold/30 flex items-center justify-center text-spice-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-spice-gold">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-cream group-hover:text-spice-gold-light transition-colors mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream-muted line-clamp-2 mt-1 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-spice-gold hover:text-black text-white transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-spice-gold hover:text-black text-white transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-3xl overflow-hidden bg-deep-brown-card border border-spice-gold/30 shadow-2xl"
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-[#160B07] border-t border-spice-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-spice-gold font-semibold">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-bold text-cream mt-1">{selectedItem.title}</h3>
                  <p className="text-sm text-cream-muted mt-1 font-light max-w-xl">
                    {selectedItem.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="font-mono text-xs text-stone-400">
                    {currentIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
