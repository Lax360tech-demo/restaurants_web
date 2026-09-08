"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu as MenuIcon, X, Calendar, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenReservation,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7E7CE]/90 dark:bg-black/80 backdrop-blur-xl border-b border-[#DEC398]/70 dark:border-spice-gold/20 py-3 shadow-lg dark:shadow-2xl"
          : "bg-[#F7E7CE]/60 dark:bg-black/20 backdrop-blur-md border-b border-[#DEC398]/40 dark:border-spice-gold/10 py-4"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Icon */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Custom Lax360 Shield Crest Logo */}
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/lax360-logo.png"
                alt="Lax360 Crest Logo"
                width={50}
                height={53}
                priority
                className="h-full w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-black text-xl sm:text-2xl tracking-wider uppercase text-stone-900 dark:text-white flex items-center leading-none">
                Lax<span className="bg-gradient-to-r from-red-600 via-red-500 to-amber-600 dark:from-red-500 dark:to-spice-gold bg-clip-text text-transparent">360</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-amber-900/80 dark:text-stone-300 font-bold mt-1 leading-none">
                Haute Cuisine Indienne
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.25em] text-stone-800 hover:text-amber-800 dark:text-stone-200 dark:hover:text-spice-gold transition-colors duration-200 font-semibold relative group py-1 drop-shadow-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-600 to-restaurant-red dark:from-spice-gold dark:to-restaurant-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#DEC398] hover:border-amber-600 text-stone-800 hover:text-stone-950 bg-white/70 hover:bg-white dark:border-spice-gold/30 dark:hover:border-spice-gold dark:text-cream dark:hover:text-white dark:bg-deep-brown-dark/60 dark:hover:bg-spice-gold/15 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-700 dark:text-spice-gold" />
              <span>Book Table</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full border border-[#DEC398] hover:border-amber-600 bg-white/70 hover:bg-white text-stone-800 dark:border-spice-gold/30 dark:hover:border-spice-gold dark:bg-deep-brown-dark/60 dark:hover:bg-spice-gold/15 dark:text-cream transition-all duration-300 group shadow-sm"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-700 dark:text-spice-gold group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-restaurant-red text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Theme Toggle Button (Light/Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[#DEC398] hover:border-amber-600 bg-white/70 hover:bg-white text-stone-800 dark:border-spice-gold/30 dark:hover:border-spice-gold dark:bg-deep-brown-dark/60 dark:hover:bg-spice-gold/15 dark:text-cream transition-all duration-300 shadow-sm group"
              aria-label={theme === "dark" ? "Switch to Champagne Light Mode" : "Switch to Dark Mode"}
              title={theme === "dark" ? "Switch to Champagne Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-spice-gold group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-amber-800 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Order Now Button */}
            <button
              onClick={() => {
                const el = document.getElementById("order-now");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-warm-amber dark:via-spice-gold dark:to-restaurant-red-accent text-white dark:text-black font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/80 dark:bg-deep-brown-card border border-[#DEC398] dark:border-spice-gold/30 text-amber-800 dark:text-spice-gold shadow-sm"
              aria-label={theme === "dark" ? "Switch to Champagne Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-white/80 dark:bg-deep-brown-card border border-[#DEC398] dark:border-spice-gold/30 text-amber-800 dark:text-spice-gold shadow-sm"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-restaurant-red text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/80 dark:bg-deep-brown-card border border-[#DEC398] dark:border-spice-gold/30 text-amber-800 dark:text-spice-gold hover:text-black dark:hover:text-cream focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAF5EC]/95 dark:bg-black/95 backdrop-blur-2xl border-b border-[#DEC398] dark:border-spice-gold/20 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm uppercase tracking-[0.2em] text-stone-800 hover:text-amber-800 dark:text-cream-muted dark:hover:text-spice-gold font-medium py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-[#DEC398]/50 dark:border-spice-gold/20 flex flex-col gap-3">
                {/* Mobile Menu Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-full border border-[#DEC398] dark:border-spice-gold/30 text-stone-800 dark:text-cream text-xs font-semibold uppercase tracking-wider bg-white/80 dark:bg-deep-brown-dark"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4 text-spice-gold" />
                      <span>Switch to Champagne Theme</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-amber-800" />
                      <span>Switch to Dark Theme</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#DEC398] dark:border-spice-gold/40 text-stone-800 dark:text-cream text-xs font-semibold uppercase tracking-wider bg-white/90 dark:bg-deep-brown-dark"
                >
                  <Calendar className="w-4 h-4 text-amber-700 dark:text-spice-gold" />
                  Reserve A Table
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("order-now");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 dark:from-warm-amber dark:to-spice-gold text-white dark:text-black font-bold text-xs uppercase tracking-widest"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
