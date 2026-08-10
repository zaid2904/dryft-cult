"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const pathname = usePathname();
  const { cartCount, toggleCart, toastMessage } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/shop", label: "SHOP" },
    { href: "/shop?category=hoodies", label: "COLLECTION" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left / Brandmark */}
          <div className="flex items-center space-x-12">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white hover:opacity-70 p-1 focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>

            <Link
              href="/"
              className="text-lg md:text-xl font-bold tracking-tighter uppercase font-mono text-white hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              DRYFT CULT
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 tracking-widest text-neutral-400 font-normal">
                001
              </span>
            </Link>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-mono tracking-widest transition-colors ${
                      isActive
                        ? "text-white font-bold border-b border-white pb-1"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/919328171761?text=Hi%20DRYFT%20CULT%2C%20I%20want%20to%20check%20availability%20for%20clothing%20drops."
              target="_blank"
              rel="noopener noreferrer"
              title="Check Availability on WhatsApp (+91 93281 71761)"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-xs font-mono tracking-wider"
            >
              <MessageCircle size={17} />
              <span className="hidden xl:inline">WA CHECK</span>
            </a>

            <Link
              href="/search"
              aria-label="Search drops"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono tracking-wider"
            >
              <Search size={18} />
              <span className="hidden sm:inline">SEARCH</span>
            </Link>

            <button
              onClick={toggleCart}
              aria-label="Open cart"
              className="relative text-white hover:opacity-80 transition-opacity flex items-center gap-2 text-xs font-mono tracking-wider py-1 px-3 border border-white/20 hover:border-white"
            >
              <ShoppingBag size={16} />
              <span>BAG</span>
              <span className="bg-white text-black text-[11px] font-bold px-1.5 py-0.2">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-white/20 text-white px-5 py-3 shadow-2xl flex items-center gap-3 animate-fade-in font-mono text-xs tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-8 animate-fade-in lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-sm font-mono tracking-widest text-neutral-400 uppercase">
              // DISCIPLINE ARCHIVE
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto py-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between text-3xl font-mono tracking-tighter uppercase text-white hover:text-neutral-400 transition-colors border-b border-white/10 pb-4"
              >
                <span>
                  <span className="text-xs text-neutral-500 font-normal mr-4">
                    0{idx + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
                />
              </Link>
            ))}
            <Link
              href="/cart"
              className="group flex items-center justify-between text-3xl font-mono tracking-tighter uppercase text-white hover:text-neutral-400 transition-colors border-b border-white/10 pb-4"
            >
              <span>
                <span className="text-xs text-neutral-500 font-normal mr-4">05</span>
                BAG ({cartCount})
              </span>
              <ArrowRight size={20} />
            </Link>
          </nav>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-2 font-mono text-xs text-neutral-500">
            <p>DRYFT CULT // INDIA EDITION</p>
            <p>BUILT TO DRYFT. NOT MADE FOR EVERYONE.</p>
          </div>
        </div>
      )}
    </>
  );
}
