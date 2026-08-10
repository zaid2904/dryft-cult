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
    <div className="min-h-screen bg-black text-white font-mono pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
      {/* Header */}
      <div className="space-y-4 mb-12 border-b border-white/10 pb-8">
        <span className="text-xs text-neutral-500 tracking-widest uppercase block">
          // ARCHIVE DISCIPLINE
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">
            SHOP DROPS
          </h1>
          <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
            EXPLORE THE FULL DRYFT CULT DISCIPLINE ARCHIVE. HEAVYWEIGHT FABRICS, EXTREME SILHOUETTES.
          </p>
        </div>
      </div>

      {/* Toolbar: Categories & Sort & Grid Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-6">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-mono tracking-widest uppercase py-2 px-4 border transition-colors ${
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
        <div className="flex items-center justify-between lg:justify-end gap-6 text-xs border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-neutral-400">
            <SlidersHorizontal size={14} />
            <span className="hidden sm:inline">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort drops by category or price"
              className="bg-neutral-900 border border-white/20 text-white py-1.5 px-3 focus:outline-none uppercase font-mono"
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
              className={`p-1.5 border transition-colors ${
                gridColumns === 2 ? "border-white bg-white/10 text-white" : "border-white/10 text-neutral-500 hover:text-white"
              }`}
              title="2 Columns Grid"
            >
              <Grid2X2 size={16} />
            </button>
            <button
              onClick={() => setGridColumns(3)}
              className={`p-1.5 border transition-colors ${
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
      <div className="flex justify-between items-center text-xs text-neutral-500 tracking-widest uppercase mb-8">
        <span>SHOWING {filteredProducts.length} SILHOUETTES</span>
        <span>EXPRESS DISPATCH PAN-INDIA</span>
      </div>

      {/* Product Editorial Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4">
          <p className="text-sm text-neutral-400 uppercase tracking-widest">
            NO SILHOUETTES FOUND IN THIS CATEGORY.
          </p>
          <button
            onClick={() => setSelectedCategory("all")}
            className="px-6 py-3 border border-white/30 text-xs uppercase tracking-widest hover:border-white"
          >
            RESET FILTERS →
          </button>
        </div>
      ) : (
        <div
          className={`grid gap-8 ${
            gridColumns === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : gridColumns === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between border border-white/10 p-4 bg-neutral-950 hover:border-white/40 transition-all duration-300"
            >
              <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4 border border-white/5">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {product.images[1] && (
                  <Image
                    src={product.images[1]}
                    alt={`${product.name} alternate`}
                    fill
                    className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                  />
                )}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-0.5 tracking-widest">
                    NEW
                  </span>
                )}
              </Link>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <Link
                    href={`/product/${product.slug}`}
                    className="text-xs font-bold tracking-tight uppercase hover:underline line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <span className="text-xs font-bold tracking-wider text-neutral-200 ml-2">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                </div>
                
                <p className="text-[11px] text-neutral-500 tracking-wider">
                  {product.tagline}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <div className="flex gap-1 text-[10px] text-neutral-400">
                    {product.sizes.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => addToCart(product, product.sizes[2] || "M")}
                    className="text-white hover:text-neutral-400 text-xs tracking-widest uppercase font-bold flex items-center gap-1"
                  >
                    <span>ADD</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
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
