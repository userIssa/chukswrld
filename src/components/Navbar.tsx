"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fafaf7]/80 backdrop-blur-md border-b border-black/[0.04] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand Pill */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 border border-neutral-900/15 hover:border-neutral-900/35 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm transition-all"
        >
          <span className="font-serif italic font-medium text-lg tracking-tight text-neutral-900">
            ChuksWRLD
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8a931c]"></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-neutral-600 font-medium tracking-tight">
          <a
            href="#about"
            className="hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-neutral-900 transition-colors"
          >
            Experience
          </a>
          <a
            href="#services"
            className="hover:text-neutral-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#founder"
            className="hover:text-neutral-900 transition-colors"
          >
            Founder &amp; Legal
          </a>
          <a
            href="#stories"
            className="hover:text-neutral-900 transition-colors"
          >
            Stories
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/447845072105?text=Hello%20ChuksWRLD%20Logistics%2C%20I%20would%20like%20to%20enquire%20about%20a%20calm%20move."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-900/15 hover:border-neutral-900/40 px-4 py-2 rounded-full transition-all shadow-sm"
          >
            <span>Contact us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
          </a>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#8a931c] hover:bg-[#788015] active:scale-[0.98] px-5 py-2.5 rounded-full transition-all shadow-sm shadow-[#8a931c]/20"
          >
            <span>Request Move</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="text-xs font-semibold text-white bg-[#8a931c] px-3.5 py-1.5 rounded-full"
          >
            Move
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.06] bg-[#fafaf7] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-neutral-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              Experience
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              Services
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              Founder &amp; Legal
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              Stories
            </a>
          </nav>
          <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-2">
            <a
              href="https://wa.me/447845072105"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full border border-neutral-900/15 text-sm font-medium text-neutral-800"
            >
              Chat on WhatsApp (+44 7845 072105)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center py-2.5 rounded-full bg-[#8a931c] text-white text-sm font-semibold shadow-sm"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
