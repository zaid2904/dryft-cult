"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, LayoutGrid, Grid2X2, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "newest">("featured");
  const [gridColumns, setGridColumns] = useState<2 | 3 | 4>(3);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filter and sort products
  let filteredProducts: Product[] = [...PRODUCTS];

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto overflow-x-hidden">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 border-b border-white/10 pb-6 sm:pb-8">
        <span className="text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase block">
          // ARCHIVE DISCIPLINE
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <h1 className="fluid-hero-title font-bold tracking-tighter uppercase">
            SHOP DROPS
          </h1>
          <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
            EXPLORE THE FULL DRYFT CULT DISCIPLINE ARCHIVE. HEAVYWEIGHT FABRICS, EXTREME SILHOUETTES.
          </p>
        </div>
      </div>

      {/* Toolbar: Categories & Sort & Grid Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 border-b border-white/10 pb-6">
        
        {/* Category Filters (Touch Scrollable on Mobile) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap lg:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-mono tracking-widest uppercase py-2 px-4 border transition-colors shrink-0 min-h-[44px] flex items-center justify-center ${
                  isActive
                    ? "bg-white text-black border-white font-bold"
                    : "bg-transparent text-neutral-400 border-white/10 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Controls: Sort & Grid Layout */}
        <div className="flex items-center justify-between lg:justify-end gap-4 sm:gap-6 text-xs border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-neutral-400 w-full sm:w-auto">
            <SlidersHorizontal size={14} className="shrink-0" />
            <span className="hidden sm:inline">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort drops by category or price"
              className="bg-neutral-900 border border-white/20 text-white py-2 px-3 focus:outline-none uppercase font-mono w-full sm:w-auto min-h-[44px]"
            >
              <option value="featured">FEATURED DROPS</option>
              <option value="newest">NEWEST RELEASES</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>

          {/* Grid Toggle Icons */}
          <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6">
            <button
              onClick={() => setGridColumns(2)}
              className={`p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border transition-colors ${
                gridColumns === 2 ? "border-white bg-white/10 text-white" : "border-white/10 text-neutral-500 hover:text-white"
              }`}
              title="2 Columns Grid"
            >
              <Grid2X2 size={16} />
            </button>
            <button
              onClick={() => setGridColumns(3)}
              className={`p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border transition-colors ${
                gridColumns === 3 ? "border-white bg-white/10 text-white" : "border-white/10 text-neutral-500 hover:text-white"
              }`}
              title="3 Columns Grid"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase mb-6 sm:mb-8">
        <span>SHOWING {filteredProducts.length} SILHOUETTES</span>
        <span className="hidden xs:inline">EXPRESS DISPATCH PAN-INDIA</span>
      </div>

      {/* Product Editorial Grid — 2 columns on mobile, 3 on tablet, 4 on desktop */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
            NO SILHOUETTES FOUND IN THIS CATEGORY.
          </p>
          <button
            onClick={() => setSelectedCategory("all")}
            className="px-6 py-3 border border-white/30 text-xs uppercase tracking-widest hover:border-white min-h-[44px]"
          >
            RESET FILTERS →
          </button>
        </div>
      ) : (
        <div
          className={`grid gap-3 sm:gap-6 lg:gap-8 ${
            gridColumns === 2
              ? "grid-cols-2"
              : gridColumns === 3
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between border border-white/10 p-2.5 sm:p-4 bg-neutral-950 hover:border-white/40 transition-all duration-300"
            >
              <div>
                <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-3 border border-white/5">
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
                      alt={`${product.name} alternate`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                    />
                  )}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white text-black text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 tracking-widest">
                      NEW
                    </span>
                  )}
                </Link>

                <div className="space-y-1.5 sm:space-y-3">
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

              <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between">
                <div className="hidden xs:flex gap-1 text-[9px] sm:text-[10px] text-neutral-400">
                  {product.sizes.slice(0, 3).map((s) => (
                    <span key={s} className="px-1 py-0.5 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => addToCart(product, product.sizes[2] || "M")}
                  className="w-full xs:w-auto text-white hover:text-neutral-400 text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-1 min-h-[44px] py-1 px-2"
                >
                  <span>ADD</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-32 font-mono">LOADING ARCHIVE...</div>}>
      <ShopContent />
    </Suspense>
  );
}
