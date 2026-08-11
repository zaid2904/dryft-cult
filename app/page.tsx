"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, Zap, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();

  // Featured products for Drop 001
  const featuredProducts = PRODUCTS.filter((p) => p.isDropFeatured).slice(0, 4);

  // Category filter state for section 4
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCollection =
    activeTab === "all"
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="bg-black text-white font-mono selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* ==================================================
          HERO SECTION — CINEMATIC EDITORIAL
          ================================================== */}
      <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-end pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 border-b border-white/10 overflow-hidden pt-28">
        {/* Background Editorial Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=2000&q=90"
            alt="DRYFT CULT Drop 001 Campaign Visual"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%] md:object-center filter grayscale contrast-125 brightness-50 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Floating Ticker / Drop Tag */}
        <div className="absolute top-20 sm:top-24 md:top-28 left-4 sm:left-6 md:left-12 z-10 flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs tracking-widest text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0"></span>
          <span className="truncate">DROP 001 // NOW LIVE ACROSS INDIA</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1800px] w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-neutral-400 block font-normal">
              VOL. I — DISCIPLINE SILHOUETTES
            </span>
            <h1 className="fluid-hero-title font-bold tracking-tighter uppercase leading-[0.88] text-white">
              DRYFT CULT
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-neutral-300 italic pt-1 sm:pt-2">
              &quot;BUILT TO DRYFT.&quot;
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4 pt-2 md:pt-0">
            <p className="text-[11px] sm:text-xs text-neutral-400 max-w-xs md:text-right leading-relaxed uppercase">
              MINIMALIST HEAVYWEIGHT ARMOR. 450 GSM COTTON. NO COMPROMISE.
            </p>
            <Link
              href="/shop"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all border border-white min-h-[48px]"
            >
              <span>EXPLORE DROP 001</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 1 — FEATURED DROP
          ================================================== */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/10 max-w-[1800px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block mb-1.5">
              // RELEASE 001 HIGHLIGHTS
            </span>
            <h2 className="fluid-section-title font-bold tracking-tighter uppercase">
              FEATURED DROPS
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors flex items-center gap-2 py-1 min-h-[44px]"
          >
            <span>VIEW ALL SILHOUETTES</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 2-Column Mobile / 4-Column Desktop Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between border border-white/10 p-2.5 sm:p-4 bg-neutral-950 hover:border-white/40 transition-colors">
              <div>
                <Link href={`/product/${product.slug}`} className="block overflow-hidden relative aspect-[3/4] bg-neutral-900 border border-white/5 mb-3">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {product.images[1] && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} alternate view`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                    />
                  )}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white text-black text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 tracking-widest">
                      NEW DROP
                    </span>
                  )}
                  <div className="hidden sm:flex absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-between items-center">
                    <span className="text-[10px] text-neutral-300 uppercase tracking-widest">
                      QUICK VIEW
                    </span>
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </Link>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-xs font-bold tracking-tight uppercase hover:underline line-clamp-1"
                    >
                      {product.name}
                    </Link>
                    <span className="text-xs font-bold tracking-wider text-neutral-200">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 tracking-wider line-clamp-1">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => addToCart(product, product.sizes[2] || "M")}
                  className="w-full py-2.5 sm:py-3 bg-neutral-900 hover:bg-white hover:text-black border border-white/20 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-colors min-h-[44px] flex items-center justify-center font-bold"
                >
                  + ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — BRAND STATEMENT (BRUTALIST TYPOGRAPHY)
          ================================================== */}
      <section className="py-20 sm:py-28 md:py-44 px-4 sm:px-6 md:px-12 bg-neutral-950 border-b border-white/10 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <span className="text-[10px] sm:text-xs font-mono text-neutral-500 tracking-[0.3em] sm:tracking-[0.4em] uppercase block">
            // CULT PRINCIPLE 01
          </span>
          <h2 className="fluid-statement font-black tracking-tighter uppercase text-white">
            &quot;NOT MADE FOR EVERYONE.&quot;
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl mx-auto leading-relaxed tracking-wider px-2">
            WE REJECT FAST FASHION. WE REJECT INFERIOR FABRICS. DRYFT CULT IS ENGINEERED FOR INDIVIDUALS WHO DEMAND RAW UNAPOLOGETIC POWER IN SILHOUETTE.
          </p>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — EDITORIAL CULTURE LOOKBOOK
          ================================================== */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 relative aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85"
              alt="Dryft Cult Streetwear Lookbook Campaign"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs text-neutral-400 tracking-widest uppercase">
                LOCATION // MUMBAI INDUSTRIAL DOCKS
              </span>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-tighter">
                MONOLITH ARCHITECTURE
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:pl-6 xl:pl-10">
            <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block">
              // EDITORIAL ESSAY
            </span>
            <h2 className="fluid-subheading font-bold tracking-tighter uppercase leading-tight">
              INDUSTRIAL SILENCE. UNCOMPROMISING FORM.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono tracking-wider">
              Every garment in Drop 001 undergoes rigorous stress testing. From custom 500 GSM loopback cotton fleece to hand-abraded cement washes, our silhouettes are designed to stand as architectural statements against urban noise.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white block">450+</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                  GSM FRENCH COTTON
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white block">LIMITED</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                  SERIALIZED RUNS
                </span>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase underline text-white hover:text-neutral-400 transition-colors pt-2 min-h-[44px]"
            >
              <span>READ THE CULT MANIFESTO</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — COLLECTION GRID
          ================================================== */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/10 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block mb-1.5">
              // CURATED ARCHIVE
            </span>
            <h2 className="fluid-section-title font-bold tracking-tighter uppercase">
              THE COLLECTION
            </h2>
          </div>

          {/* Touch-Scrollable Filter Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 border-b border-white/10 pb-3 flex-nowrap md:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: "all", label: "ALL" },
              { id: "tees", label: "TEES" },
              { id: "hoodies", label: "HOODIES" },
              { id: "bottoms", label: "BOTTOMS" },
              { id: "outerwear", label: "OUTERWEAR" },
              { id: "accessories", label: "ACCESSORIES" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-mono tracking-widest uppercase py-2 px-4 border shrink-0 transition-colors min-h-[44px] flex items-center justify-center ${
                  activeTab === tab.id
                    ? "bg-white text-black border-white font-bold"
                    : "text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Mobile / 3-Column Desktop Product Layout Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filteredCollection.map((product) => (
            <div key={product.id} className="group flex flex-col justify-between border border-white/10 p-2.5 sm:p-4 bg-neutral-950 hover:border-white/30 transition-colors">
              <Link href={`/product/${product.slug}`} className="block relative aspect-[4/5] bg-neutral-900 overflow-hidden mb-3 border border-white/5">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </Link>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-xs font-bold uppercase tracking-wider">
                  <Link href={`/product/${product.slug}`} className="hover:underline line-clamp-1">
                    {product.name}
                  </Link>
                  <span className="text-neutral-300">₹{product.price.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] border-t border-white/10">
                  <span className="text-neutral-500 uppercase">{product.category}</span>
                  <Link
                    href={`/product/${product.slug}`}
                    className="text-white hover:underline uppercase tracking-wider font-bold py-1 min-h-[36px] flex items-center"
                  >
                    VIEW DROP →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — CULT STATEMENT
          ================================================== */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-white text-black text-center font-mono">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <span className="text-[10px] sm:text-xs text-neutral-500 tracking-[0.3em] uppercase block font-bold">
            PHILOSOPHY // DISCIPLINE 02
          </span>
          <h2 className="fluid-subheading font-bold tracking-tighter uppercase">
            &quot;DRYFT IS A STATE OF MIND.&quot;
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl mx-auto leading-relaxed tracking-wider font-normal">
            WE ARE NOT BOUND BY SEASONS OR RETAIL CALENDARS. WE RELEASE WHEN THE PIECES MEET ABSOLUTE PERFECTION.
          </p>
          <div className="pt-2 sm:pt-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors min-h-[48px] w-full sm:w-auto"
            >
              DISCOVER OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — NEWSLETTER SIGNUP
          ================================================== */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-white/10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block">
          // VIP DISCIPLINE ACCESS
        </span>
        <h2 className="fluid-section-title font-bold tracking-tighter uppercase">
          JOIN THE CULT
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 tracking-wider max-w-md mx-auto">
          Get notified when the next limited drop lands. No spam. Only release signals.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("YOUR ACCESS CODE IS REGISTERED.");
          }}
          className="max-w-md mx-auto flex border-b border-white/40 pb-2 focus-within:border-white transition-colors min-h-[48px] items-center"
        >
          <input
            type="email"
            required
            placeholder="YOUR EMAIL ADDRESS..."
            className="w-full bg-transparent text-xs text-white uppercase placeholder-neutral-600 focus:outline-none tracking-widest"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors shrink-0 min-h-[44px] flex items-center justify-center"
          >
            JOIN →
          </button>
        </form>
      </section>

    </div>
  );
}

