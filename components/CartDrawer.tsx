"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderId, setOrderId] = useState("DC-2026-9021");

  // Lock body scroll when cart is open
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    const newId = `DC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newId);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutComplete(false);
        }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-full sm:max-w-md bg-neutral-950 border-l border-white/10 text-white flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold">
                YOUR BAG
              </h2>
              <span className="text-[11px] bg-white text-black font-mono font-bold px-2 py-0.5">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} ITEMS
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutComplete(false);
              }}
              aria-label="Close cart"
              className="text-neutral-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
            >
              <X size={22} />
            </button>
          </div>

          {/* Checkout Success View */}
          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 text-center space-y-6 overflow-y-auto">
              <CheckCircle2 size={56} className="text-emerald-400 animate-pulse" />
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-mono tracking-tighter uppercase font-bold">
                  DROP CONFIRMED
                </h3>
                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                  ORDER #{orderId} IS PROCESSED.
                  CONFIRMATION SENT TO YOUR REGISTERED CONCIERGE EMAIL.
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 w-full text-left space-y-1">
                <p>ESTIMATED DISPATCH: WITHIN 24 HOURS</p>
                <p>COURIER: EXPRESS BLUE DART AIR</p>
                <p>STATUS: IN DISCIPLINE QUEUE</p>
              </div>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  setIsCartOpen(false);
                }}
                className="w-full bg-white text-black py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors min-h-[48px]"
              >
                RETURN TO ARCHIVE
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 divide-y divide-white/10">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <p className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-widest">
                      YOUR BAG IS EMPTY
                    </p>
                    <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-mono">
                      EXPLORE DROP 001 TO ACCESS LIMITED SILHOUETTES.
                    </p>
                    <Link
                      href="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-6 py-3.5 border border-white/20 text-xs font-mono tracking-widest uppercase hover:border-white transition-colors min-h-[44px] inline-flex items-center"
                    >
                      EXPLORE SHOP →
                    </Link>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="pt-6 first:pt-0 flex gap-3 sm:gap-4">
                      <div className="relative w-20 h-24 bg-neutral-900 flex-shrink-0 border border-white/10 overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-xs font-mono tracking-wider uppercase font-bold text-white truncate">
                              {item.product.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-neutral-500 hover:text-red-400 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 -mt-2 shrink-0"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                            SIZE: <span className="text-white font-bold">{item.size}</span>
                          </p>
                          <p className="text-xs font-mono font-bold text-neutral-200 mt-0.5">
                            ₹{item.product.price.toLocaleString("en-IN")}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-white/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="text-xs font-mono font-bold text-white">
                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && (
                <div className="p-4 sm:p-6 border-t border-white/10 bg-neutral-900/90 space-y-4 shrink-0">
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-neutral-400">
                      <span>SUBTOTAL</span>
                      <span className="text-white font-bold">
                        ₹{cartTotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>EXPRESS SHIPPING (INDIA)</span>
                      <span className="text-emerald-400 font-bold">COMPLIMENTARY</span>
                    </div>
                    <div className="flex justify-between text-neutral-400 pt-2 border-t border-white/10 text-sm">
                      <span className="text-white font-bold">TOTAL TAX INCL.</span>
                      <span className="text-white font-bold">
                        ₹{cartTotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-white text-black py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group min-h-[48px]"
                    >
                      {isCheckingOut ? (
                        <span>SECURING DISCIPLINE ORDER...</span>
                      ) : (
                        <>
                          <span>PROCEED TO CHECKOUT</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <Link
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="block text-center text-[11px] font-mono text-neutral-400 hover:text-white uppercase tracking-widest py-2 underline"
                    >
                      VIEW BAG & PROMO CODES
                    </Link>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500 pt-1 text-center">
                    <ShieldCheck size={14} className="shrink-0" />
                    <span>AUTHENTICITY GUARANTEED // SECURE 256-BIT ENCRYPTED</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

