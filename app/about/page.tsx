import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShieldAlert, Disc, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dryft Cult — Modern Streetwear Culture & Philosophy",
  description: "Explore the philosophy behind Dryft Cult. Architectural silhouettes, 450+ GSM heavy cottons, and unapologetic minimalism engineered in India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black">
      
      {/* Editorial Hero */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-16 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=2000&q=90"
            alt="Dryft Cult Underground Fashion Studio"
            fill
            priority
            className="object-cover filter grayscale contrast-150 brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1800px] w-full mx-auto space-y-4">
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block">
            // CULT MANIFESTO
          </span>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none max-w-5xl">
            &quot;DRYFT IS A STATE OF MIND.&quot;
          </h1>
        </div>
      </section>

      {/* Chapter 1: The Origin */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-b border-white/10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs text-neutral-500 tracking-widest uppercase block">
              // CHAPTER 01 — THE ANOMALY
            </span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
              BORN FROM URBAN NOISE. REFINED IN SILENCE.
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wider">
              DRYFT CULT WAS CREATED TO REJECT THE SANITIZED, TEMPLATE-BASED WORLD OF MASS FAST FASHION. WE DO NOT DESIGN APPAREL TO FIT IN. WE ENGINEER STRUCTURAL SILHOUETTES THAT ASSERT INDIVIDUALITY.
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              ORIGINATING FROM THE CONCRETE STREETS OF INDIA, WE INTEGRATE HEAVYWEIGHT COMPONENT MATERIALS WITH CONTEMPORARY MINIMALIST ART DIRECTION.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
                alt="Minimalist streetwear texture"
                fill
                className="object-cover filter grayscale contrast-125"
              />
            </div>
            <div className="relative aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden translate-y-8">
              <Image
                src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85"
                alt="Streetwear concrete look"
                fill
                className="object-cover filter grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Core Pillars */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-neutral-950 border-b border-white/10">
        <div className="max-w-[1800px] mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs text-neutral-500 tracking-widest uppercase block">
              // DISCIPLINE DOCTRINE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              THE THREE PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black border border-white/10 space-y-4 hover:border-white/40 transition-colors">
              <span className="text-xs text-neutral-500 font-mono">01 // STRUCTURAL INTEGRITY</span>
              <h3 className="text-xl font-bold uppercase tracking-tight">450+ GSM ARCHITECTURE</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                WE DO NOT COMPROMISE ON WEIGHT. EVERY TEE IS 400-450 GSM; EVERY HOODIE IS 500 GSM FLEECE. BUILT LIKE ARMOR TO HOLD ITS SILHOUETTE FOR DECADES.
              </p>
            </div>

            <div className="p-8 bg-black border border-white/10 space-y-4 hover:border-white/40 transition-colors">
              <span className="text-xs text-neutral-500 font-mono">02 // EXCLUSIVITY & SCARCITY</span>
              <h3 className="text-xl font-bold uppercase tracking-tight">LIMITED SERIALIZED DROPS</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                WE DO NOT RE-RESTOCK DROPS PREMATURELY. ONCE A RELEASE IS EXHAUSTED IN THE ARCHIVE, IT LOCKS FOREVER. DISCIPLINE OVER VOLUME.
              </p>
            </div>

            <div className="p-8 bg-black border border-white/10 space-y-4 hover:border-white/40 transition-colors">
              <span className="text-xs text-neutral-500 font-mono">03 // UNAPOLOGETIC MINIMALISM</span>
              <h3 className="text-xl font-bold uppercase tracking-tight">LESS UI. MORE BRAND.</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                NO FLASHY LOGO STUFFING. NO CHEAP DECORATION. CLEAN HAUL SILHOUETTES, HIGHEST QUALITY DYED COTTONS, AND MONOCHROMATIC DOMINANCE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Large Editorial Quote */}
      <section className="py-28 md:py-40 px-6 md:px-12 text-center max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
          &quot;WE DO NOT FOLLOW THE CALENDAR. WE RELEASE WHEN THE PIECE BECOMES MONOLITHIC.&quot;
        </h2>
        <p className="text-xs text-neutral-500 uppercase tracking-widest">
          — DRYFT CULT ART DIRECTION // MUMBAI STUDIO
        </p>
        <div className="pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
          >
            <span>ENTER THE ARCHIVE</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
