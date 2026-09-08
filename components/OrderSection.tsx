"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SIGNATURE_ITEMS, MenuItem } from "@/data/menu";
import SectionReveal from "./SectionReveal";
import {
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Flame,
  Clock,
  Plus,
  Minus,
  CheckCircle2,
  HelpCircle,
  Truck,
} from "lucide-react";

interface OrderSectionProps {
  onAddToCart: (item: MenuItem, quantity: number, portion?: string) => void;
}

export default function OrderSection({ onAddToCart }: OrderSectionProps) {
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);
  const [selectedPortionIdx, setSelectedPortionIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const currentDish = SIGNATURE_ITEMS[selectedDishIndex] || SIGNATURE_ITEMS[0];
  const portions = currentDish.orderSection.availablePortions;
  const currentPortion = portions[selectedPortionIdx] || portions[0];

  const calculatedPrice = Math.round(
    currentDish.numericPrice * (currentPortion?.priceMultiplier || 1) * quantity
  );

  const handleAdd = () => {
    onAddToCart(currentDish, quantity, currentPortion?.size);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <section id="order-now" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF5EC] dark:bg-gradient-to-b dark:from-black dark:via-[#160B06] dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-200/30 dark:bg-spice-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                Direct Royal Dispatch
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
              ORDER SIGNATURE <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                CULINARY FEASTS
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
              Experience hot, dum-sealed royal dishes delivered straight from our charcoal ovens to your dining table.
            </p>
          </SectionReveal>

          {/* Dish Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {SIGNATURE_ITEMS.map((dish, idx) => (
              <button
                key={dish.id}
                onClick={() => {
                  setSelectedDishIndex(idx);
                  setSelectedPortionIdx(0);
                  setQuantity(1);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedDishIndex === idx
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black shadow-md dark:shadow-gold-glow scale-105 font-bold"
                    : "border border-[#DEC398] text-stone-700 hover:text-stone-950 dark:border-spice-gold/20 dark:text-cream-muted dark:hover:text-white bg-white/70 dark:bg-deep-brown-card"
                }`}
              >
                {dish.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Order Showcase Card */}
        <SectionReveal>
          <div className="relative rounded-3xl bg-[#FFFDF9] dark:bg-gradient-to-b dark:from-[#221008] dark:via-[#160A05] dark:to-[#0A0402] border border-[#DEC398] dark:border-spice-gold/30 shadow-xl dark:shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Food Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#DEC398] dark:border-spice-gold/30 shadow-xl bg-[#F7E7CE] dark:bg-black">
                  <Image
                    src={currentDish.image}
                    alt={currentDish.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-restaurant-red to-amber-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    {currentDish.orderSection.badge}
                  </div>

                  {/* Delivery time pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-[#DEC398] dark:border-spice-gold/25 flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-2 text-amber-800 dark:text-spice-gold text-xs font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>Est. Delivery: {currentDish.orderSection.estimatedDelivery}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      Live Kitchen
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dish Configurator & Order Action */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-[0.25em] font-bold text-amber-800 dark:text-spice-gold">
                      {currentDish.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-amber-600 dark:bg-spice-gold" />
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      {currentDish.detailsSection.serves}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-cream tracking-tight">
                    {currentDish.name}
                  </h3>

                  <p className="text-sm text-stone-600 dark:text-cream-muted mt-3 font-normal dark:font-light leading-relaxed">
                    {currentDish.description}
                  </p>
                </div>

                {/* Portion / Size Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-2.5">
                    Select Portion Size:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {portions.map((portion, pIdx) => (
                      <button
                        key={portion.size}
                        type="button"
                        onClick={() => setSelectedPortionIdx(pIdx)}
                        className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                          selectedPortionIdx === pIdx
                            ? "bg-amber-100/80 border-amber-600 text-stone-900 dark:bg-spice-gold/15 dark:border-spice-gold dark:text-white shadow-md dark:shadow-gold-glow"
                            : "bg-white/70 dark:bg-black/50 border-[#DEC398] dark:border-spice-gold/20 text-stone-600 dark:text-stone-400 hover:border-amber-600 dark:hover:border-spice-gold/40"
                        }`}
                      >
                        <p className="text-xs font-bold text-stone-900 dark:text-cream">{portion.size}</p>
                        <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-1">
                          {portion.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Live Price Row */}
                <div className="pt-4 border-t border-[#DEC398]/50 dark:border-spice-gold/20 flex flex-wrap items-center justify-between gap-6">
                  {/* Quantity Counter */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300">
                      Quantity:
                    </span>
                    <div className="flex items-center rounded-xl bg-white dark:bg-black/60 border border-[#DEC398] dark:border-spice-gold/30 p-1 shadow-sm">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-deep-brown-card hover:bg-amber-100 dark:hover:bg-spice-gold/20 text-stone-900 dark:text-cream flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center font-bold text-base text-stone-900 dark:text-cream">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-deep-brown-card hover:bg-amber-100 dark:hover:bg-spice-gold/20 text-stone-900 dark:text-cream flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Calculated Price */}
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">
                      Total Amount
                    </span>
                    <span className="text-3xl font-black text-amber-800 dark:text-spice-gold tracking-tight">
                      ₹{calculatedPrice}
                    </span>
                  </div>
                </div>

                {/* Add To Cart CTA Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    onClick={handleAdd}
                    className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-warm-amber dark:via-spice-gold dark:to-restaurant-red-accent text-white dark:text-black font-extrabold text-sm uppercase tracking-widest hover:shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>{addedToast ? "Added To Royal Cart!" : "Add To Royal Cart"}</span>
                  </button>
                </div>

                {/* 3 Processing Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-cream-muted">
                    <Flame className="w-4 h-4 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                    <span>Freshly Prepared</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-cream-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Quality Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-cream-muted">
                    <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-spice-gold flex-shrink-0" />
                    <span>Secure Ordering</span>
                  </div>
                </div>

                {/* Delivery & Cancellation Policy Notice */}
                <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-black/40 border border-[#DEC398] dark:border-spice-gold/15 text-[11px] text-stone-700 dark:text-cream-muted space-y-1">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-spice-gold font-semibold">
                    <Truck className="w-3.5 h-3.5" />
                    <span>{currentDish.orderSection.deliveryPromise}</span>
                  </div>
                  <p className="text-stone-500 dark:text-stone-400 pl-5">
                    Cancellation Info: {currentDish.orderSection.cancellationPolicy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
