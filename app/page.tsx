"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import FoodScroll from "@/components/FoodScroll";
import FoodTextOverlays from "@/components/FoodTextOverlays";
import AboutSection from "@/components/AboutSection";
import MenuCard from "@/components/MenuCard";
import FoodStory from "@/components/FoodStory";
import FreshnessShowcase from "@/components/FreshnessShowcase";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import ItemModal from "@/components/ItemModal";
import SectionReveal from "@/components/SectionReveal";
import { ALL_MENU_ITEMS, CATEGORIES, MenuItem, SIGNATURE_ITEMS } from "@/data/menu";
import { Sparkles, Utensils, Flame, ChevronRight, Calendar, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [inspectedItem, setInspectedItem] = useState<MenuItem | null>(null);

  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever currentIndex changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity: number = 1, portion?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (ci) => ci.item.id === item.id && ci.portion === portion
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { item, quantity, portion }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const filteredMenuItems =
    selectedCategory === "All"
      ? ALL_MENU_ITEMS
      : ALL_MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const currentThemeItem = SIGNATURE_ITEMS[currentIndex] || SIGNATURE_ITEMS[0];

  return (
    <div className="min-h-screen bg-[#FAF5EC] text-[#23120B] dark:bg-black dark:text-white transition-colors duration-300 selection:bg-orange-600 selection:text-white">
      {/* Top Fixed Luxury Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Orchestration with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* ============================================================
              1. HERO SCROLL EXPERIENCE (FoodScroll + FoodTextOverlays)
             ============================================================ */}
          <section ref={heroContainerRef} className="relative w-full">
            {/* Scrollytelling Canvas Engine (500vh container with sticky 100vh canvas) */}
            <FoodScroll totalFrames={120} imageFolderPath="/images/food" fileExtension="webp" />

            {/* Synchronized Cinematic Typography Overlays */}
            <FoodTextOverlays
              containerRef={heroContainerRef}
              onExploreMenu={() => {
                const el = document.getElementById("menu");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              onReserveTable={() => setIsReservationOpen(true)}
            />
          </section>

          {/* ============================================================
              2. ABOUT RESTAURANT SECTION
             ============================================================ */}
          <AboutSection />

          {/* ============================================================
              3. SIGNATURE MENU SECTION
             ============================================================ */}
          <section id="menu" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F7E7CE]/40 dark:bg-[#090402] transition-colors duration-300 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-300/20 dark:bg-spice-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <SectionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-4 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
                    <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-800 dark:text-spice-gold">
                      The Culinary Collection
                    </span>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-cream tracking-tight leading-tight">
                    OUR SIGNATURE <br />
                    <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                      ROYAL DELICACIES
                    </span>
                  </h2>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <p className="mt-6 text-stone-700 dark:text-cream-muted text-base sm:text-lg font-normal dark:font-light leading-relaxed">
                    From aromatic saffron-infused dum biryanis to charred tandoori cuts and slow-reduced gravies, every dish is an imperial celebration.
                  </p>
                </SectionReveal>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black shadow-md dark:shadow-gold-glow scale-105 font-bold"
                          : "border border-[#DEC398] text-stone-700 hover:text-stone-950 dark:border-spice-gold/20 dark:text-cream-muted dark:hover:text-white dark:hover:border-spice-gold/40 bg-white/70 dark:bg-deep-brown-dark/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMenuItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    onViewDetails={(selected) => setInspectedItem(selected)}
                    onAddToCart={(selected) => handleAddToCart(selected, 1)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================
              4. FOOD STORY SECTION
             ============================================================ */}
          <FoodStory />

          {/* ============================================================
              5. FRESHNESS SECTION
             ============================================================ */}
          <FreshnessShowcase />

          {/* ============================================================
              6. RESTAURANT GALLERY
             ============================================================ */}
          <Gallery />

          {/* ============================================================
              7. CUSTOMER REVIEWS
             ============================================================ */}
          <Reviews />

          {/* ============================================================
              8. ORDER NOW SECTION
             ============================================================ */}
          <OrderSection
            onAddToCart={(item, quantity, portion) =>
              handleAddToCart(item, quantity, portion)
            }
          />

          {/* ============================================================
              9. LOCATION & CONTACT SECTION
             ============================================================ */}
          <ContactSection onOpenReservation={() => setIsReservationOpen(true)} />

          {/* ============================================================
              10. FINAL CTA SECTION (Dramatic Slanted Luxury Backdrop)
             ============================================================ */}
          <section className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F7E7CE] dark:bg-[#0C0503] transition-colors duration-300 overflow-hidden">
            {/* Slanted Cinematic Cut */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/40 via-[#FAF5EC]/70 to-[#F7E7CE] dark:from-warm-amber/20 dark:via-black dark:to-black opacity-90" />
            <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7E7CE] dark:to-[#0C0503]" />

            <div className="relative max-w-5xl mx-auto text-center">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-deep-brown-light/80 border border-[#DEC398] dark:border-spice-gold/30 mb-6 shadow-sm">
                  <Sparkles className="w-4 h-4 text-amber-700 dark:text-spice-gold" />
                  <span className="text-xs uppercase tracking-[0.35em] font-bold text-amber-800 dark:text-spice-gold">
                    Your Table Awaits
                  </span>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-900 dark:text-cream tracking-tight leading-[1.05] mb-6">
                  EXPERIENCE THE <br />
                  <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-restaurant-red dark:from-spice-gold dark:via-warm-amber dark:to-restaurant-red-accent bg-clip-text text-transparent">
                    LEGENDARY TASTE
                  </span>
                </h2>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="text-lg sm:text-2xl text-stone-700 dark:text-cream-muted font-normal dark:font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                  &ldquo;Good food is not just served. It is remembered.&rdquo;
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsReservationOpen(true)}
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-warm-amber dark:via-spice-gold dark:to-restaurant-red-accent text-white dark:text-black font-extrabold text-sm uppercase tracking-widest hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Reserve A Table</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById("order-now");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-10 py-5 rounded-full border border-[#DEC398] hover:border-amber-600 text-stone-900 hover:text-stone-950 bg-white/70 hover:bg-white dark:border-spice-gold/40 dark:text-cream dark:hover:text-white dark:hover:bg-spice-gold/15 font-bold text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-sm"
                  >
                    Order Online
                  </button>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* ============================================================
              11. FOOTER
             ============================================================ */}
          <Footer />
        </motion.main>
      </AnimatePresence>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Recipe Details Modal */}
      <ItemModal
        item={inspectedItem}
        onClose={() => setInspectedItem(null)}
        onAddToCart={(item) => handleAddToCart(item, 1)}
      />
    </div>
  );
}
