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
    <div className="min-h-screen bg-black text-white font-mono pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
      
      {/* Header & Search Input Box */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        <div className="space-y-2 text-center">
          <span className="text-xs text-neutral-500 tracking-widest uppercase block">
            // ARCHIVE DISCIPLINE SEARCH
          </span>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase">
            SEARCH THE CULT
          </h1>
        </div>

        {/* Big Brutalist Input Bar */}
        <div className="relative border-b-2 border-white pb-3 flex items-center">
          <Search size={24} className="text-neutral-400 mr-4 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="TYPE KEYWORD (E.G. 450 GSM, HOODIE, CARGO)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-lg md:text-2xl font-bold text-white placeholder-neutral-700 uppercase focus:outline-none tracking-tight"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-neutral-400 hover:text-white p-2"
              aria-label="Clear search query"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Suggested Quick Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="text-xs text-neutral-500 tracking-widest mr-2 uppercase">
            QUICK SIGNALS:
          </span>
          {suggestedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs font-mono tracking-widest uppercase py-1 px-3 border border-white/10 text-neutral-400 hover:border-white hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      {query.trim() !== "" && (
        <div className="space-y-8">
          <div className="flex justify-between items-center text-xs text-neutral-500 tracking-widest uppercase border-b border-white/10 pb-4">
            <span>SEARCH RESULTS FOR &quot;{query.toUpperCase()}&quot;</span>
            <span>{filteredProducts.length} SILHOUETTES FOUND</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <p className="text-sm text-neutral-500 uppercase tracking-widest">
                NO DISCIPLINE ITEMS MATCHED &quot;{query}&quot;.
              </p>
              <p className="text-xs text-neutral-600">
                TRY SEARCHING FOR &quot;TEE&quot;, &quot;HOODIE&quot;, &quot;CANVAS&quot;, OR &quot;450 GSM&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group border border-white/10 p-4 bg-neutral-950">
                  <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-bold uppercase tracking-wider">
                        <Link href={`/product/${product.slug}`}>{product.name}</Link>
                      </h3>
                      <span className="text-xs font-bold text-neutral-200">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 line-clamp-1">
                      {product.tagline}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <Link
                        href={`/product/${product.slug}`}
                        className="text-xs text-white hover:underline uppercase tracking-widest flex items-center gap-1 font-bold"
                      >
                        <span>VIEW DROP</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Default Recommendations if search is blank */}
      {query.trim() === "" && (
        <div className="space-y-8 border-t border-white/10 pt-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 text-center">
            FEATURED SILHOUETTES IN ARCHIVE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="border border-white/10 p-4 bg-neutral-950 group">
                <Link href={`/product/${p.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </Link>
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  <Link href={`/product/${p.slug}`}>{p.name}</Link>
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
