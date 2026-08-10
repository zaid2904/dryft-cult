import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertOctagon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl space-y-6">
        <span className="text-xs text-neutral-500 tracking-[0.4em] uppercase block">
          // ERROR SIGNAL 404
        </span>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
          DROP EXPIRED OR PAGE NOT FOUND
        </h2>

        <p className="text-xs text-neutral-400 leading-relaxed tracking-wider max-w-md mx-auto">
          THE SPECIFIED SILHOUETTE OR ROUTE DOES NOT EXIST IN THE DRYFT CULT ARCHIVE. IT MAY HAVE BEEN PURGED FROM THE DISCIPLINE QUEUE.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors"
          >
            EXPLORE SHOP ARCHIVE →
          </Link>
        </div>
      </div>
    </div>
  );
}
