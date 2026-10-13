"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

interface CtaFooterProps {
  onOpenBooking: () => void;
}

export default function CtaFooter({ onOpenBooking }: CtaFooterProps) {
  const [routeInput, setRouteInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (routeInput.trim()) {
      const msg = encodeURIComponent(
        `Hello ChuksWRLD Logistics, I would like a quote for a move. Route/Details: ${routeInput.trim()}`
      );
      window.open(`https://wa.me/447845072105?text=${msg}`, "_blank");
    } else {
      onOpenBooking();
    }
  };

  return (
    <footer className="relative w-full bg-[#fafaf7] overflow-hidden pt-24 pb-12 border-t border-black/[0.04]">
      {/* Background Landscape at Bottom (Matching Image 4) */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none select-none z-0">
        <Image
          src="/images/misty-hills-bg.jpg"
          alt="Misty green hills footer landscape"
          fill
          className="object-cover object-bottom opacity-85"
        />
        {/* Top Gradient to fade the hills softly into white */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#fafaf7]/80 to-[#fafaf7]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Header of the Footer Block (From Image 4) */}
        <div className="flex items-center justify-between mb-20">
          <div className="inline-flex items-center gap-2 border border-neutral-900/20 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 shadow-sm">
            <span className="font-serif italic text-sm">ChuksWRLD</span>
          </div>

          <span className="text-xs sm:text-sm font-sans text-neutral-800 font-medium tracking-tight">
            Designed for calm minds
          </span>
        </div>

        {/* Centered Editorial Call to Action */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-neutral-950 font-normal tracking-tight leading-[1.05] mb-6">
            Built for people who <br />
            <span className="italic font-light">value clarity over noise.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 max-w-lg mx-auto font-medium leading-relaxed mb-10">
            Get an instant, calm estimate for moving homes, single items, or store collections across the UK.
          </p>

          {/* Minimalist Input + Olive Button (Exact visual from Image 4) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center max-w-md mx-auto bg-white/90 backdrop-blur-md border border-neutral-300/80 rounded-full p-1.5 shadow-lg shadow-black/[0.03] transition-all focus-within:border-neutral-800"
          >
            <input
              type="text"
              value={routeInput}
              onChange={(e) => setRouteInput(e.target.value)}
              placeholder="e.g. Sheffield to London / S2 to N1"
              className="flex-1 px-5 py-3 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent outline-none w-full"
            />
            <button
              type="submit"
              className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 rounded-full bg-[#8a931c] hover:bg-[#788015] text-white text-xs font-semibold tracking-wide transition-all shadow-sm shrink-0 flex items-center justify-center gap-2"
            >
              <span>Start Invisibly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-[11px] text-neutral-500 font-mono mt-4">
            Takes 60 seconds • Fixed prices from £40 • No spam
          </p>
        </div>

        {/* Minimalist Bottom Bar (From Image 4) */}
        <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-neutral-800">
            <a
              href="https://www.instagram.com/chukswrld_logistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/447845072105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:+447845072105"
              className="hover:text-black transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:chukswrld@gmail.com"
              className="hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-neutral-700">
            <button
              onClick={onOpenBooking}
              className="hover:text-neutral-950 transition-colors"
            >
              Request Quote
            </button>
            <a
              href="mailto:chukswrld@gmail.com"
              className="hover:text-neutral-950 transition-colors"
            >
              Contact us
            </a>
            <a href="#services" className="hover:text-neutral-950 transition-colors">
              Services
            </a>
            <a href="#founder" className="hover:text-neutral-950 transition-colors">
              Registration
            </a>
          </div>

          {/* Copyright & Company Reg */}
          <div className="text-neutral-600 text-[11px] font-mono text-center md:text-right">
            <span>© 2026 ChuksWRLD Limited. Co. 17263579</span>
            <span className="block text-[10px] text-neutral-500">Sheffield, England, S2 3WX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
