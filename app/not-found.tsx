import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertOctagon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-center overflow-x-hidden">
      <div className="max-w-xl space-y-4 sm:space-y-6">
        <span className="text-[10px] sm:text-xs text-neutral-500 tracking-[0.3em] uppercase block">
          // ERROR SIGNAL 404
        </span>

        <h1 className="fluid-hero-title font-black tracking-tighter uppercase leading-none">
          404
        </h1>

        <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight">
          DROP EXPIRED OR PAGE NOT FOUND
        </h2>

        <p className="text-xs text-neutral-400 leading-relaxed tracking-wider max-w-md mx-auto">
          THE SPECIFIED SILHOUETTE OR ROUTE DOES NOT EXIST IN THE DRYFT CULT ARCHIVE. IT MAY HAVE BEEN PURGED FROM THE DISCIPLINE QUEUE.
        </p>

        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors flex items-center justify-center min-h-[48px]"
          >
            EXPLORE SHOP ARCHIVE →
          </Link>
        </div>
      </div>
    </div>
  );
}

