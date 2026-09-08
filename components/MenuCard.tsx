"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";
import { Sparkles, Plus, Eye, Flame } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  onViewDetails: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuCard({ item, onViewDetails, onAddToCart }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-2xl bg-[#FFFDF9] dark:bg-gradient-to-b dark:from-[#1E0E08]/90 dark:via-[#140804]/95 dark:to-[#0A0402] border border-[#DEC398]/70 dark:border-spice-gold/15 hover:border-amber-600 dark:hover:border-spice-gold/40 transition-all duration-500 overflow-hidden shadow-md dark:shadow-xl hover:shadow-xl dark:hover:shadow-gold-glow flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-black/40">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-0.5"
        />

        {/* Ambient Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent dark:from-[#140804] dark:via-black/20" />

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10">
          <div
            className={`w-3.5 h-3.5 border ${
              item.isVeg ? "border-emerald-500" : "border-red-500"
            } flex items-center justify-center p-[1px]`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-white">
            {item.isVeg ? "Veg" : "Non-Veg"}
          </span>
        </div>

        {/* Bestseller Badge */}
        {item.isBestseller && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-600 to-restaurant-red text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>Signature</span>
          </div>
        )}

        {/* Quick View Floating Button */}
        <button
          onClick={() => onViewDetails(item)}
          className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-black/75 hover:bg-amber-600 dark:hover:bg-spice-gold hover:text-white dark:hover:text-black text-amber-800 dark:text-spice-gold flex items-center justify-center backdrop-blur-md border border-[#DEC398] dark:border-spice-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md"
          title="View Recipe Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Tagline */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-amber-800 dark:text-spice-gold">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-medium">
              <Flame className="w-3 h-3 text-orange-500" />
              <span>{item.detailsSection.spiceLevel}</span>
            </div>
          </div>

          {/* Dish Name */}
          <h3 className="text-xl font-bold text-stone-900 dark:text-cream group-hover:text-amber-700 dark:group-hover:text-spice-gold-light transition-colors duration-300 tracking-tight mb-2">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-stone-600 dark:text-cream-muted line-clamp-2 leading-relaxed font-normal dark:font-light mb-4">
            {item.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-[#DEC398]/50 dark:border-spice-gold/15 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">Price</span>
            <span className="text-2xl font-black text-amber-800 dark:text-spice-gold tracking-tight">
              {item.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(item)}
              className="px-3 py-2 rounded-lg border border-[#DEC398] hover:border-amber-600 text-stone-800 hover:text-stone-950 bg-white/70 hover:bg-white dark:border-spice-gold/30 dark:hover:border-spice-gold dark:text-cream dark:hover:text-white dark:bg-transparent text-xs font-medium transition-all shadow-sm"
            >
              Details
            </button>
            <button
              onClick={() => onAddToCart(item)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
