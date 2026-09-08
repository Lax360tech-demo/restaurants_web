"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { MenuItem } from "@/data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
  portion?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [orderTrackingId, setOrderTrackingId] = useState("");

  const subtotal = items.reduce((sum, curr) => {
    return sum + curr.item.numericPrice * curr.quantity;
  }, 0);

  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + deliveryFee + taxes;

  const handleCheckout = () => {
    const randomId = "SR-" + Math.floor(100000 + Math.random() * 900000);
    setOrderTrackingId(randomId);
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#FAF5EC] dark:bg-gradient-to-b dark:from-[#1C0E08] dark:via-[#120703] dark:to-[#080302] border-l border-[#DEC398] dark:border-spice-gold/30 shadow-2xl flex flex-col justify-between text-[#23120B] dark:text-cream"
            >
              {/* Top Header */}
              <div className="p-6 border-b border-[#DEC398]/50 dark:border-spice-gold/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/15 dark:bg-spice-gold/15 text-amber-700 dark:text-spice-gold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-cream">Your Royal Order</h3>
                    <p className="text-[11px] text-stone-600 dark:text-cream-muted">
                      {items.length} {items.length === 1 ? "dish" : "dishes"} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {checkoutSuccess ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-stone-900 dark:text-cream">Order Dispatched!</h4>
                    <p className="text-xs text-stone-600 dark:text-cream-muted">
                      Order ID: <span className="font-mono text-amber-800 dark:text-spice-gold font-bold">{orderTrackingId}</span>
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 max-w-xs mx-auto font-light">
                      Your meal is now being freshly assembled in our dum handis. Live driver tracking will be sent via SMS.
                    </p>
                  </div>
                ) : items.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#F7E7CE] dark:bg-deep-brown-card border border-[#DEC398] dark:border-spice-gold/20 flex items-center justify-center text-amber-700 dark:text-spice-gold/40 mx-auto">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900 dark:text-cream">Your Royal Cart is Empty</h4>
                    <p className="text-xs text-stone-600 dark:text-cream-muted max-w-xs mx-auto font-light">
                      Explore our signature chicken biryani, tandoori grills, and slow-braised curries.
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        const el = document.getElementById("menu");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-warm-amber to-spice-gold text-black font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all"
                    >
                      Browse Signature Menu
                    </button>
                  </div>
                ) : (
                  items.map(({ item, quantity, portion }) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-white dark:bg-black/50 border border-[#DEC398] dark:border-spice-gold/15 shadow-sm flex items-center gap-3"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 dark:bg-black">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-stone-900 dark:text-cream truncate">{item.name}</h5>
                        {portion && (
                          <p className="text-[10px] text-amber-700 dark:text-spice-gold font-medium">{portion}</p>
                        )}
                        <p className="text-xs font-bold text-amber-800 dark:text-warm-amber mt-0.5">
                          ₹{item.numericPrice * quantity}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg bg-[#FAF5EC] dark:bg-deep-brown-dark border border-[#DEC398] dark:border-spice-gold/20 p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-900 dark:text-cream">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Bill Breakdown & Checkout */}
              {items.length > 0 && !checkoutSuccess && (
                <div className="p-6 border-t border-[#DEC398]/50 dark:border-spice-gold/20 bg-[#F7E7CE]/50 dark:bg-black/60 space-y-3">
                  <div className="space-y-1.5 text-xs text-stone-700 dark:text-cream-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-stone-900 dark:text-cream">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-stone-900 dark:text-cream">
                        {deliveryFee === 0 ? (
                          <span className="text-emerald-700 dark:text-emerald-400">FREE</span>
                        ) : (
                          `₹${deliveryFee}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%)</span>
                      <span className="font-semibold text-stone-900 dark:text-cream">₹{taxes}</span>
                    </div>
                    <div className="pt-2 border-t border-[#DEC398]/50 dark:border-white/10 flex justify-between text-sm font-bold text-stone-900 dark:text-cream">
                      <span>Total Amount</span>
                      <span className="text-base text-amber-800 dark:text-spice-gold font-black">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-warm-amber via-spice-gold to-restaurant-red-accent text-black font-extrabold text-xs uppercase tracking-widest hover:shadow-gold-glow flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Proceed To Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-stone-600 dark:text-stone-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                    <span>256-Bit SSL Encrypted Royal Checkout</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
