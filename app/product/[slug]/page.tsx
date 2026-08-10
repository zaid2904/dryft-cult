"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, ChevronDown, ChevronUp, Ruler, Truck, RefreshCw, MessageCircle } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { SizeGuideModal } from "@/components/SizeGuideModal";
import { ProductJsonLd } from "@/components/JsonLd";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL'>(
    product.sizes[1] || product.sizes[0]
  );
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, 1);
    window.location.href = "/cart";
  };

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.fullDescription}
        images={product.images}
        price={product.price}
        sku={product.sku}
        url={`https://dryftcult.in/product/${product.slug}`}
      />

      <div className="min-h-screen bg-black text-white font-mono pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="text-xs text-neutral-500 tracking-widest uppercase mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white">SHOP</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-white">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-white line-clamp-1">{product.name}</span>
        </div>

        {/* Main Grid: Left Gallery | Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Large Image */}
            <div className="relative aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="object-cover object-center"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 tracking-widest">
                  DROP 001
                </span>
              )}
            </div>

            {/* Thumbnails list */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-[3/4] bg-neutral-900 border overflow-hidden transition-all ${
                      selectedImage === idx
                        ? "border-white ring-1 ring-white"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Info Panel (Sticky 5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            <div className="space-y-3 border-b border-white/10 pb-6">
              <span className="text-xs text-neutral-500 tracking-widest uppercase block">
                SKU: {product.sku}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                {product.name}
              </h1>
              <p className="text-xs text-neutral-400 tracking-wider">
                {product.tagline}
              </p>
              
              <div className="pt-2 flex items-baseline gap-4">
                <span className="text-2xl font-bold tracking-wider text-white">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-neutral-500 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-[10px] text-emerald-400 border border-emerald-400/30 px-2 py-0.5 uppercase tracking-widest">
                  TAX INCLUDED // FREE EXPRESS COURIER
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xs text-neutral-300 leading-relaxed font-mono tracking-wider">
              {product.shortDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-4 border-b border-white/10 pb-6">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 tracking-widest uppercase font-bold">
                  SELECT SILHOUETTE SIZE
                </span>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-neutral-400 hover:text-white flex items-center gap-1.5 underline uppercase tracking-widest"
                >
                  <Ruler size={14} />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => {
                  const isAvailable = product.sizes.includes(size as any);
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      disabled={!isAvailable}
                      onClick={() => setSelectedSize(size as any)}
                      className={`py-3 text-xs font-mono tracking-widest uppercase border transition-all ${
                        !isAvailable
                          ? "opacity-30 border-white/5 cursor-not-allowed line-through text-neutral-600"
                          : isSelected
                          ? "bg-white text-black font-bold border-white"
                          : "bg-transparent text-neutral-300 border-white/20 hover:border-white hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, selectedSize, 1)}
                className="w-full bg-white text-black py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors border border-white flex items-center justify-center gap-2 group"
              >
                <span>ADD TO BAG — SIZE {selectedSize}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-neutral-900 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors border border-white/20"
              >
                BUY NOW // INSTANT CHECKOUT
              </button>

              <a
                href={`https://wa.me/919328171761?text=${encodeURIComponent(`Hi DRYFT CULT, I would like to check availability for ${product.name} [Size: ${selectedSize}].`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900 hover:text-emerald-100 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors border border-emerald-500/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>CHECK AVAILABILITY ON WHATSAPP (+91 93281 71761) ↗</span>
              </a>
            </div>

            {/* Accordion Specs */}
            <div className="border-t border-white/10 pt-4 divide-y divide-white/10 text-xs font-mono">
              
              {/* Accordion Item 1: Material & Specs */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion("details")}
                  className="w-full flex items-center justify-between text-left font-bold uppercase tracking-wider text-white hover:text-neutral-300"
                >
                  <span>FABRIC & MATERIAL SPECS</span>
                  {openAccordion === "details" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === "details" && (
                  <div className="mt-3 text-neutral-400 space-y-2 leading-relaxed">
                    <p><strong className="text-white">COMPOSITION:</strong> {product.details.material}</p>
                    <p><strong className="text-white">FIT STANCE:</strong> {product.details.fit}</p>
                    <p><strong className="text-white">FULL STORY:</strong> {product.fullDescription}</p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2: Care Instructions */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion("care")}
                  className="w-full flex items-center justify-between text-left font-bold uppercase tracking-wider text-white hover:text-neutral-300"
                >
                  <span>GARMENT CARE</span>
                  {openAccordion === "care" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === "care" && (
                  <div className="mt-3 text-neutral-400 leading-relaxed">
                    {product.details.care}
                  </div>
                )}
              </div>

              {/* Accordion Item 3: Shipping & Returns */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full flex items-center justify-between text-left font-bold uppercase tracking-wider text-white hover:text-neutral-300"
                >
                  <span>SHIPPING & RETURNS (INDIA)</span>
                  {openAccordion === "shipping" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === "shipping" && (
                  <div className="mt-3 text-neutral-400 space-y-3 leading-relaxed">
                    <div className="flex items-center gap-2 text-white">
                      <Truck size={14} />
                      <span>{product.details.shipping}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <RefreshCw size={14} />
                      <span>Hassle-free 7-day returns & exchange available for size adjustments.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Authenticity Badge */}
            <div className="p-4 bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck size={20} className="text-white shrink-0" />
              <span>OFFICIAL DRYFT CULT SERIALIZED ITEM. INCLUDES AUTHENTICITY NFC CERTIFICATE.</span>
            </div>

          </div>
        </div>

        {/* Recommended Drops Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-white/10 pt-20">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs text-neutral-500 tracking-widest uppercase block mb-2">
                  // COMPLEMENTARY SILHOUETTES
                </span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase">
                  RECOMMENDED DROPS
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white"
              >
                VIEW ALL →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="group border border-white/10 p-4 bg-neutral-950">
                  <Link href={`/product/${rel.slug}`} className="block relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-4">
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      <Link href={`/product/${rel.slug}`}>{rel.name}</Link>
                    </h3>
                    <p className="text-xs text-neutral-400">₹{rel.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </>
  );
}
