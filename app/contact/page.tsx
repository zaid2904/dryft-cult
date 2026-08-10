"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, ShieldAlert, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNo: "",
    inquiryType: "ORDER STATUS",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
      
      {/* Header */}
      <div className="space-y-4 mb-16 border-b border-white/10 pb-8">
        <span className="text-xs text-neutral-500 tracking-widest uppercase block">
          // CLIENT CONCIERGE & INQUIRIES
        </span>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">
          CONTACT CONCIERGE
        </h1>
        <p className="text-xs text-neutral-400 max-w-lg leading-relaxed">
          DIRECT LINE TO THE DRYFT CULT DISCIPLINE TEAM. FOR ORDER ASSISTANCE, PRESS INQUIRIES, OR SIZE CONSULTATIONS.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Form */}
        <div className="lg:col-span-7 space-y-8">
          {submitted ? (
            <div className="p-8 bg-neutral-900 border border-white/20 text-center space-y-6 animate-fade-in">
              <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
              <h2 className="text-2xl font-bold uppercase tracking-tight">
                INQUIRY LOGGED
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-md mx-auto">
                YOUR TRANSMISSION HAS BEEN RECEIVED BY OUR CLIENT CARE DESK. WE RESPOND WITHIN 12 HOURS TO ALL DISCIPLINE INQUIRIES.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 border border-white/30 text-xs font-bold uppercase tracking-widest hover:border-white"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. ARJUN SHARMA"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/20 p-4 text-xs text-white uppercase focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="NAME@DOMAIN.COM"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/20 p-4 text-xs text-white uppercase focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                    ORDER NUMBER (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. #DC-2026-9021"
                    value={formData.orderNo}
                    onChange={(e) => setFormData({ ...formData, orderNo: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/20 p-4 text-xs text-white uppercase focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                    INQUIRY TYPE
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/20 p-4 text-xs text-white uppercase focus:border-white focus:outline-none font-mono"
                  >
                    <option value="ORDER STATUS">ORDER STATUS & SHIPPING</option>
                    <option value="SIZE CONSULTATION">SIZE & FIT CONSULTATION</option>
                    <option value="RETURNS EXCHANGES">RETURNS & EXCHANGES</option>
                    <option value="PRESS EDITORIAL">PRESS & EDITORIAL INQUIRY</option>
                    <option value="VIP ACCESS">VIP EARLY DROP ACCESS</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-400 tracking-wider uppercase block">
                  MESSAGE TRANSMISSION *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="WRITE YOUR DETAILED INQUIRY HERE..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-950 border border-white/20 p-4 text-xs text-white uppercase focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>TRANSMIT INQUIRY</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-8 bg-neutral-950 border border-white/10 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-4">
              DIRECT DESK CHANNELS
            </h3>

            <div className="space-y-4 text-xs text-neutral-300 font-mono">
              <div className="flex items-start gap-4">
                <MessageSquare size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-400 block text-[10px]">WHATSAPP INSTANT AVAILABILITY CHECK</span>
                  <a
                    href="https://wa.me/919328171761?text=Hi%20DRYFT%20CULT%2C%20I%20want%20to%20check%20availability%20for%20clothing%20drops."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors block"
                  >
                    +91 93281 71761 ↗
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px]">CLIENT SUPPORT EMAIL</span>
                  <p className="font-bold text-white">CONCIERGE@DRYFTCULT.IN</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px]">VIP PHONE DESK (MON-SAT)</span>
                  <p className="font-bold text-white">+91 93281 71761 / +91 (022) 4981-0021</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[10px]">FLAGSHIP DESIGN STUDIO</span>
                  <p className="font-bold text-white">INDUSTRIAL WAREHOUSE 04, LOWER PAREL, MUMBAI, MH 400013</p>
                </div>
              </div>
            </div>
          </div>

          <div id="faq" className="p-8 bg-neutral-950 border border-white/10 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-4">
              EXPRESS DISPATCH POLICIES
            </h3>
            <div className="text-xs text-neutral-400 space-y-3 leading-relaxed">
              <p><strong className="text-white">SHIPPING:</strong> We ship to all Tier-1, 2, and 3 Indian PIN codes via Blue Dart Air within 24-48 hours of drop confirmation.</p>
              <p><strong className="text-white">RETURNS:</strong> Returns accepted within 7 days of delivery for store credit or instant size exchange.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
