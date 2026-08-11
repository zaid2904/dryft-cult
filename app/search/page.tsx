"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const suggestedTags = [
    "HEAVYWEIGHT",
    "450 GSM",
    "HOODIES",
    "ACID WASH",
    "BALLOON CARGO",
    "OVERSIZED TEE",
    "ACCESSORIES",
  ];

  const filteredProducts = query.trim() === ""
    ? []
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.details.material.toLowerCase().includes(q)
        );
      });

  return (
    <div className="min-h-screen bg-black text-white font-mono pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto overflow-x-hidden">
      
      {/* Header & Search Input Box */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-10 sm:mb-16">
        <div className="space-y-2 text-center">
          <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block">
            // ARCHIVE DISCIPLINE SEARCH
          </span>
          <h1 className="fluid-hero-title font-bold tracking-tighter uppercase">
            SEARCH THE CULT
          </h1>
        </div>

        {/* Big Brutalist Input Bar */}
        <div className="relative border-b-2 border-white pb-3 flex items-center min-h-[48px]">
          <Search size={22} className="text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="TYPE KEYWORD (E.G. 450 GSM, HOODIE)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base sm:text-2xl font-bold text-white placeholder-neutral-700 uppercase focus:outline-none tracking-tight"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-neutral-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-label="Clear search query"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Suggested Quick Tags */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 pt-2">
          <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase shrink-0">
            QUICK SIGNALS:
          </span>
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap">
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-xs font-mono tracking-widest uppercase py-2 px-3 border border-white/10 text-neutral-400 hover:border-white hover:text-white transition-colors shrink-0 min-h-[44px] flex items-center"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      {query.trim() !== "" && (
        <div className="space-y-6 sm:space-y-8">
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase border-b border-white/10 pb-4">
            <span className="truncate mr-2">SEARCH RESULTS FOR &quot;{query.toUpperCase()}&quot;</span>
            <span className="shrink-0">{filteredProducts.length} SILHOUETTES FOUND</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-16 sm:py-20 text-center space-y-3">
              <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
                NO DISCIPLINE ITEMS MATCHED &quot;{query}&quot;.
              </p>
              <p className="text-[11px] text-neutral-600">
                TRY SEARCHING FOR &quot;TEE&quot;, &quot;HOODIE&quot;, &quot;CANVAS&quot;, OR &quot;450 GSM&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group border border-white/10 p-2.5 sm:p-4 bg-neutral-950 flex flex-col justify-between">
                  <div>
                    <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-3 border border-white/5">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider line-clamp-1">
                          <Link href={`/product/${product.slug}`} className="hover:underline">{product.name}</Link>
                        </h3>
                        <span className="text-xs font-bold text-neutral-200">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-neutral-500 line-clamp-1">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 mt-3 flex justify-end">
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-xs text-white hover:underline uppercase tracking-widest flex items-center gap-1 font-bold min-h-[36px]"
                    >
                      <span>VIEW DROP</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Default Recommendations if search is blank */}
      {query.trim() === "" && (
        <div className="space-y-6 sm:space-y-8 border-t border-white/10 pt-12 sm:pt-16">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 text-center">
            FEATURED SILHOUETTES IN ARCHIVE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="border border-white/10 p-2.5 sm:p-4 bg-neutral-950 group">
                <Link href={`/product/${p.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-3 border border-white/5">
                  <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform" />
                </Link>
                <h3 className="text-xs font-bold uppercase tracking-wider line-clamp-1">
                  <Link href={`/product/${p.slug}`} className="hover:underline">{p.name}</Link>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">₹{p.price.toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

