"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Trash2, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "CULT10") {
      setDiscountPercent(10);
      setPromoMessage("CULT10 APPLIED // 10% DISCIPLINE DISCOUNT");
    } else if (promoCode.trim().toUpperCase() === "DROP001") {
      setDiscountPercent(15);
      setPromoMessage("DROP001 APPLIED // 15% FOUNDER DISCOUNT");
    } else {
      setPromoMessage("INVALID PROMO SIGNAL");
    }
  };

  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = cartTotal - discountAmount;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto overflow-x-hidden">
      
      {/* Header */}
      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 border-b border-white/10 pb-6 sm:pb-8">
        <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block">
          // SHOPPING BAG & CHECKOUT
        </span>
        <h1 className="fluid-hero-title font-bold tracking-tighter uppercase">
          YOUR BAG ({cart.reduce((sum, i) => sum + i.quantity, 0)})
        </h1>
      </div>

      {orderComplete ? (
        <div className="max-w-2xl mx-auto py-12 sm:py-16 px-4 sm:px-8 bg-neutral-950 border border-white/20 text-center space-y-6">
          <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto">
            <Check size={32} />
          </div>
          <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight">
            ORDER CONFIRMED #DC-2026-8819
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-md mx-auto">
            YOUR SILHOUETTE HAS BEEN RESERVED IN THE DRYFT CULT DISCIPLINE ARCHIVE. SMS & EMAIL TRACKING CONCIERGE UPDATES ARE EN ROUTE.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-left space-y-2">
            <p>PAYMENT STATUS: SIMULATED PRE-PAID SUCCESS</p>
            <p>SHIPPING COURIER: BLUE DART AIR PRIORITY</p>
            <p>ESTIMATED DELIVERY: WITHIN 48 HOURS</p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 min-h-[48px] w-full sm:w-auto"
          >
            CONTINUE SHOPPING →
          </Link>
        </div>
      ) : cart.length === 0 ? (
        <div className="py-20 sm:py-24 text-center space-y-6 max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            YOUR BAG IS CURRENTLY EMPTY.
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            BROWSE DROP 001 TO ACCESS LIMITED SILHOUETTES CRAFTED FROM 450+ GSM COTTON.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 min-h-[48px]"
          >
            EXPLORE THE SHOP →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Item List */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="p-4 sm:p-6 bg-neutral-950 border border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between"
              >
                <div className="flex gap-3 sm:gap-4 items-center min-w-0 w-full sm:w-auto">
                  <div className="relative w-20 h-28 sm:w-24 sm:h-32 bg-neutral-900 border border-white/10 shrink-0 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0 flex-1">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                      {item.product.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide truncate">
                      <Link href={`/product/${item.product.slug}`} className="hover:underline">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-neutral-400">
                      SIZE: <span className="text-white font-bold">{item.size}</span>
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      ₹{item.product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  {/* Quantity Handlers */}
                  <div className="flex items-center border border-white/20">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                      className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                      className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <span className="text-xs sm:text-sm font-bold font-mono">
                    ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.product.id, item.size)}
                    className="text-neutral-500 hover:text-red-400 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-neutral-500 pt-4">
              <Link href="/shop" className="hover:text-white uppercase tracking-widest underline py-1">
                ← CONTINUE BROWSING DROPS
              </Link>
              <button
                onClick={clearCart}
                className="hover:text-red-400 uppercase tracking-widest py-1 min-h-[44px]"
              >
                CLEAR ALL BAG ITEMS
              </button>
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 bg-neutral-950 border border-white/10 space-y-6">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-4">
                ORDER SUMMARY
              </h2>

              {/* Promo Form */}
              <form onSubmit={applyPromo} className="space-y-2">
                <label className="text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider block">
                  PROMO CODE (TRY: CULT10)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ENTER CODE..."
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-black border border-white/20 px-3 py-2 text-xs uppercase text-white focus:outline-none min-h-[44px]"
                  />
                  <button
                    type="submit"
                    className="bg-neutral-800 text-white px-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors min-h-[44px] shrink-0"
                  >
                    APPLY
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] ${discountPercent > 0 ? "text-emerald-400" : "text-neutral-400"}`}>
                    {promoMessage}
                  </p>
                )}
              </form>

              {/* Pricing Breakdown */}
              <div className="space-y-3 text-xs border-t border-white/10 pt-4">
                <div className="flex justify-between text-neutral-400">
                  <span>SUBTOTAL</span>
                  <span className="text-white font-bold">₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>DISCOUNT ({discountPercent}%)</span>
                    <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="flex justify-between text-neutral-400">
                  <span>EXPRESS COURIER (PAN-INDIA)</span>
                  <span className="text-emerald-400 font-bold">COMPLIMENTARY</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base font-bold text-white border-t border-white/10 pt-3">
                  <span>TOTAL (GST INCL.)</span>
                  <span>₹{finalTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group min-h-[48px]"
              >
                {isCheckingOut ? (
                  <span>SECURING DISCIPLINE ORDER...</span>
                ) : (
                  <>
                    <span>COMPLETE ORDER — ₹{finalTotal.toLocaleString("en-IN")}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[10px] text-neutral-500 justify-center text-center">
                <ShieldCheck size={14} className="shrink-0" />
                <span>256-BIT ENCRYPTED // RAZORPAY & UPI READY</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

