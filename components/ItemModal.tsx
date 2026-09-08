"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Flame, Users, Sparkles, Plus, AlertCircle, ChefHat } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export default function ItemModal({ item, onClose, onAddToCart }: ItemModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
      >
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative z-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF5EC] dark:bg-gradient-to-b dark:from-[#221008] dark:via-[#140804] dark:to-[#0A0402] border border-[#DEC398] dark:border-spice-gold/30 shadow-2xl p-6 sm:p-8 text-[#23120B] dark:text-cream"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Banner Image */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-[#DEC398] dark:border-spice-gold/20 shadow-xl bg-stone-100 dark:bg-black">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-[#DEC398] dark:border-spice-gold/30 text-xs uppercase font-bold text-amber-900 dark:text-spice-gold tracking-wider shadow-sm">
                {item.category}
              </span>
              <span className="text-2xl font-black text-amber-400 dark:text-spice-gold drop-shadow-md">{item.price}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-cream tracking-tight">
              {item.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-amber-700 dark:text-warm-amber font-semibold mt-1">
              {item.tagline}
            </p>
            <p className="text-sm text-stone-600 dark:text-cream-muted mt-3 font-light leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Meta Info Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-[#DEC398] dark:border-spice-gold/15 text-center shadow-sm">
              <Clock className="w-4 h-4 text-amber-700 dark:text-spice-gold mx-auto mb-1" />
              <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase">Prep Time</p>
              <p className="text-xs font-bold text-stone-900 dark:text-cream mt-0.5">{item.detailsSection.prepTime}</p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-[#DEC398] dark:border-spice-gold/15 text-center shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 dark:text-orange-400 mx-auto mb-1" />
              <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase">Spice Level</p>
              <p className="text-xs font-bold text-stone-900 dark:text-cream mt-0.5">{item.detailsSection.spiceLevel}</p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-[#DEC398] dark:border-spice-gold/15 text-center shadow-sm">
              <Users className="w-4 h-4 text-amber-700 dark:text-spice-gold mx-auto mb-1" />
              <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase">Portion</p>
              <p className="text-xs font-bold text-stone-900 dark:text-cream mt-0.5">{item.detailsSection.serves}</p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-[#DEC398] dark:border-spice-gold/15 text-center shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-warm-amber mx-auto mb-1" />
              <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase">Energy</p>
              <p className="text-xs font-bold text-stone-900 dark:text-cream mt-0.5">{item.detailsSection.calories}</p>
            </div>
          </div>

          {/* Ingredients List */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 dark:text-stone-300 mb-2">
              Key Ingredients:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-3 py-1 rounded-lg bg-white dark:bg-deep-brown-card border border-[#DEC398] dark:border-spice-gold/20 text-xs text-stone-700 dark:text-cream-muted shadow-sm"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Chef Note */}
          {item.detailsSection.chefNote && (
            <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-gradient-to-r dark:from-spice-gold/10 dark:to-transparent border border-[#DEC398] dark:border-spice-gold/20 mb-6 flex items-start gap-3">
              <ChefHat className="w-5 h-5 text-amber-700 dark:text-spice-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-800 dark:text-spice-gold uppercase tracking-wider">
                  Chef&apos;s Tasting Guidance
                </p>
                <p className="text-xs text-stone-700 dark:text-cream-muted mt-1 font-light leading-relaxed">
                  {item.detailsSection.chefNote}
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-[#DEC398]/50 dark:border-spice-gold/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
              <AlertCircle className="w-4 h-4 text-amber-700 dark:text-spice-gold" />
              <span>Allergens: {item.detailsSection.allergens.join(", ") || "None"}</span>
            </div>

            <button
              onClick={() => {
                onAddToCart(item);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-warm-amber via-spice-gold to-restaurant-red-accent text-black font-extrabold text-xs uppercase tracking-widest hover:shadow-gold-glow transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add To Cart ({item.price})</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
