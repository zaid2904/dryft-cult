"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 md:pt-20 pb-12 font-mono">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 md:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4 md:space-y-6">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold tracking-tighter uppercase font-mono inline-block"
            >
              DRYFT CULT
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              UNAPOLOGETIC SILHOUETTES. INDUSTRIAL SILENCE. CRAFTED FOR THE DISCIPLINED FEW IN INDIA AND BEYOND.
            </p>
            <div className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider">
              FLAGSHIP STUDIO: MUMBAI // BENGALURU // DELHI
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-6 text-xs tracking-widest">
            <div className="space-y-3">
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">NAVIGATION</span>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    SHOP ALL
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=tees" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    TEES
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=hoodies" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    HOODIES
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=bottoms" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    BOTTOMS
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    CULT / ABOUT
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">CLIENT CARE</span>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link href="/contact#shipping" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    SHIPPING
                  </Link>
                </li>
                <li>
                  <Link href="/contact#faq" className="text-neutral-300 hover:text-white transition-colors py-1 inline-block">
                    PRIVACY & TERMS
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/919328171761?text=Hi%20DRYFT%20CULT%2C%20I%20want%20to%20check%20availability%20for%20clothing%20drops."
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold py-1 inline-block"
                  >
                    WHATSAPP (+91 93281 71761) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors py-1 inline-block"
                  >
                    INSTAGRAM ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Form */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-neutral-500 block text-[10px] tracking-widest uppercase font-bold">
              DROP NOTIFICATION NETWORK
            </span>
            <h3 className="text-sm uppercase tracking-wider font-bold">
              JOIN THE CULT
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get direct priority SMS & Email alerts when the next limited release drops.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 border border-white/20 text-xs text-emerald-400 flex items-center gap-2">
                <Check size={16} />
                <span>CONFIRMED. YOU ARE ON THE DROP LIST.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/30 pt-2 pb-1 focus-within:border-white transition-colors min-h-[44px] items-center">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full text-xs text-white placeholder-neutral-600 focus:outline-none uppercase"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="text-neutral-400 hover:text-white px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[10px] sm:text-[11px] text-neutral-600 tracking-widest">
          <p suppressHydrationWarning>© {new Date().getFullYear()} DRYFT CULT CLOTHING CO. ALL RIGHTS RESERVED.</p>
          <p>BUILT TO DRYFT. NOT MADE FOR EVERYONE.</p>
          <p>MADE IN INDIA // WORLDWIDE COURIER</p>
        </div>
      </div>
    </footer>

  );
}
