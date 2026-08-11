"use client";

import React from "react";
import { X, Ruler } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="relative bg-neutral-950 border border-white/20 p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto text-white font-mono z-10 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Ruler size={18} className="text-neutral-400 shrink-0" />
            <h3 className="text-xs sm:text-sm tracking-widest uppercase font-bold">
              SILHOUETTE SIZE SPECIFICATIONS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
            aria-label="Close size guide"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed">
          DRYFT CULT silhouettes feature an intentional extreme boxy, drop-shoulder cut.
          For a true oversized editorial look, select your standard size. For a fitted look, size down once.
        </p>

        {/* Size Table */}
        <div className="overflow-x-auto no-scrollbar border border-white/10">
          <table className="w-full text-left text-xs border-collapse min-w-[340px]">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-neutral-300">
                <th className="p-2.5 sm:p-3 border-r border-white/10">SIZE</th>
                <th className="p-2.5 sm:p-3 border-r border-white/10">CHEST (INCHES)</th>
                <th className="p-2.5 sm:p-3 border-r border-white/10">LENGTH (INCHES)</th>
                <th className="p-2.5 sm:p-3">SHOULDER (INCHES)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-neutral-400">
              <tr>
                <td className="p-2.5 sm:p-3 font-bold text-white border-r border-white/10">XS</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">42 - 44</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">27.5</td>
                <td className="p-2.5 sm:p-3">22.0</td>
              </tr>
              <tr>
                <td className="p-2.5 sm:p-3 font-bold text-white border-r border-white/10">S</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">44 - 46</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">28.5</td>
                <td className="p-2.5 sm:p-3">23.0</td>
              </tr>
              <tr>
                <td className="p-2.5 sm:p-3 font-bold text-white border-r border-white/10">M</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">46 - 48</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">29.5</td>
                <td className="p-2.5 sm:p-3">24.0</td>
              </tr>
              <tr>
                <td className="p-2.5 sm:p-3 font-bold text-white border-r border-white/10">L</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">48 - 50</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">30.5</td>
                <td className="p-2.5 sm:p-3">25.0</td>
              </tr>
              <tr>
                <td className="p-2.5 sm:p-3 font-bold text-white border-r border-white/10">XL</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">50 - 52</td>
                <td className="p-2.5 sm:p-3 border-r border-white/10">31.5</td>
                <td className="p-2.5 sm:p-3">26.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-2 text-[10px] sm:text-[11px] text-neutral-500 border-t border-white/10 flex justify-between items-center gap-2">
          <span>* MEASUREMENTS TAKEN FLAT IN INCHES</span>
          <button
            onClick={onClose}
            className="text-white hover:underline uppercase tracking-wider min-h-[44px] px-2 flex items-center shrink-0"
          >
            CLOSE GUIDE
          </button>
        </div>
      </div>
    </div>
  );
}

