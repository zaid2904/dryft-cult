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
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-12 font-mono">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter uppercase font-mono block"
            >
              DRYFT CULT
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              UNAPOLOGETIC SILHOUETTES. INDUSTRIAL SILENCE. CRAFTED FOR THE DISCIPLINED FEW IN INDIA AND BEYOND.
            </p>
            <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
              FLAGSHIP STUDIO: MUMBAI // BENGALURU // DELHI
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-6 text-xs tracking-widest">
            <div className="space-y-4">
              <span className="text-neutral-500 block text-[10px]">NAVIGATION</span>
              <ul className="space-y-3">
                <li>
                  <Link href="/shop" className="text-neutral-300 hover:text-white transition-colors">
                    SHOP ALL
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=tees" className="text-neutral-300 hover:text-white transition-colors">
                    TEES
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=hoodies" className="text-neutral-300 hover:text-white transition-colors">
                    HOODIES
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=bottoms" className="text-neutral-300 hover:text-white transition-colors">
                    BOTTOMS
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                    CULT / ABOUT
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-neutral-500 block text-[10px]">CLIENT CARE</span>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link href="/contact#shipping" className="text-neutral-300 hover:text-white transition-colors">
                    SHIPPING
                  </Link>
                </li>
                <li>
                  <Link href="/contact#faq" className="text-neutral-300 hover:text-white transition-colors">
                    PRIVACY & TERMS
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/919328171761?text=Hi%20DRYFT%20CULT%2C%20I%20want%20to%20check%20availability%20for%20clothing%20drops."
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                  >
                    WHATSAPP (+91 93281 71761) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    INSTAGRAM ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Form */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-neutral-500 block text-[10px] tracking-widest">
              DROP NOTIFICATION NETWORK
            </span>
            <h3 className="text-sm uppercase tracking-wider font-bold">
              JOIN THE CULT
            </h3>
            <p className="text-xs text-neutral-400">
              Get direct priority SMS & Email alerts when the next limited release drops.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 border border-white/20 text-xs text-emerald-400 flex items-center gap-2">
                <Check size={16} />
                <span>CONFIRMED. YOU ARE ON THE DROP LIST.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/30 pt-2 pb-1 focus-within:border-white transition-colors">
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
                  className="text-neutral-400 hover:text-white px-2 py-1"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 tracking-widest">
          <p suppressHydrationWarning>© {new Date().getFullYear()} DRYFT CULT CLOTHING CO. ALL RIGHTS RESERVED.</p>
          <p>BUILT TO DRYFT. NOT MADE FOR EVERYONE.</p>
          <p>MADE IN INDIA // WORLDWIDE COURIER</p>
        </div>
      </div>
    </footer>
  );
}
