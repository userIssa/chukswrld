"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownLeft, Check, Bell, Shield, Navigation } from "lucide-react";

interface MobileShowcaseProps {
  onOpenBooking: () => void;
}

export default function MobileShowcase({ onOpenBooking }: MobileShowcaseProps) {
  return (
    <section id="about" className="py-24 bg-[#fafaf7] overflow-hidden border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-neutral-900/15 bg-white px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 mb-6">
            <span className="font-serif italic">About</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal tracking-tight max-w-2xl">
            Calm logistics <br />
            <span className="italic font-light">for modern life</span>
          </h2>
        </div>

        {/* Showcase Composition with Dual Smartphones & Editorial Annotation Lines */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
          {/* Left Editorial Annotations */}
          <div className="lg:col-span-3 flex flex-col gap-16 order-2 lg:order-1">
            <div className="relative group">
              <h4 className="font-serif text-xl sm:text-2xl text-neutral-900 font-normal mb-1">
                Designed for homes and studios
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Whether relocating an entire 3-bed family home or transferring a single designer armchair.
              </p>
              {/* Subtle line connector for desktop */}
              <div className="hidden lg:block absolute -right-12 top-4 w-10 h-[1px] bg-neutral-300" />
            </div>

            <div className="relative group">
              <h4 className="font-serif text-xl sm:text-2xl text-neutral-900 font-normal mb-1">
                Peace of mind over moving chaos
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Transparent upfront quotes from £40. No hidden hourly creep, parking excuses, or surprises.
              </p>
              <div className="hidden lg:block absolute -right-12 top-4 w-10 h-[1px] bg-neutral-300" />
            </div>
          </div>

          {/* Center Phones Composition (Reference from Image 3) */}
          <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6 order-1 lg:order-2">
            {/* Phone 1: Splash / Minimal Booking Mode */}
            <div className="w-[230px] sm:w-[270px] aspect-[9/19] rounded-[44px] p-3 bg-neutral-950 border-4 border-neutral-800/90 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/50" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-white flex flex-col justify-between p-5 pt-8 text-neutral-900">
                {/* Screen Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/misty-hills-bg.jpg"
                    alt="Misty landscape on phone"
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="font-serif italic text-xs font-semibold text-neutral-900">
                    ChuksWRLD
                  </span>
                  <div className="mt-8">
                    <h3 className="font-serif text-2xl font-normal leading-tight text-neutral-950">
                      Ultra- <br />
                      minimal <br />
                      moving
                    </h3>
                    <p className="text-[10px] text-neutral-600 mt-2 font-medium">
                      Privacy &amp; care is the new luxury
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-full bg-white/90 border border-black/10 text-[11px] font-semibold text-neutral-900 shadow-sm backdrop-blur-sm"
                  >
                    Start Invisibly
                  </button>
                </div>
              </div>
            </div>

            {/* Phone 2: Live Move Ledger & Inventory Tracking */}
            <div className="w-[230px] sm:w-[270px] aspect-[9/19] rounded-[44px] p-3 bg-neutral-950 border-4 border-neutral-800/90 shadow-2xl relative overflow-hidden flex flex-col justify-between -translate-y-4 sm:-translate-y-6">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/50" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[#fafaf7] flex flex-col justify-between p-4 pt-8 text-neutral-900">
                {/* Header inside phone */}
                <div className="flex items-center justify-between text-[11px] pb-3 border-b border-black/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#8a931c]/20 flex items-center justify-center text-[#788015] font-bold text-[9px]">
                      C
                    </div>
                    <span className="font-medium text-xs">Live Dispatch</span>
                  </div>
                  <Bell className="w-3.5 h-3.5 text-neutral-500" />
                </div>

                {/* Status Card */}
                <div className="my-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                  <p className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">
                    Active Route
                  </p>
                  <p className="text-xs font-serif font-medium text-neutral-900 mt-0.5">
                    Sheffield S2 ➔ London N1
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#788015] font-semibold bg-[#8a931c]/10 px-2 py-0.5 rounded-full">
                      On Time
                    </span>
                    <span className="text-neutral-500">Fixed £140</span>
                  </div>
                </div>

                {/* Items / Route Ledger */}
                <div className="space-y-2 flex-1 overflow-hidden">
                  <p className="text-[9px] font-mono tracking-widest uppercase text-neutral-400">
                    Manifest Items
                  </p>

                  <div className="p-2 rounded-xl bg-white border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#788015]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium leading-tight">Master Bedroom</p>
                        <p className="text-[8px] text-neutral-400">Protected &amp; Loaded</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-600">✓ In van</span>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#788015]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium leading-tight">IKEA Desk &amp; Books</p>
                        <p className="text-[8px] text-neutral-400">Blanket Wrapped</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-600">✓ In van</span>
                  </div>
                </div>

                {/* Phone Bottom CTA */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 rounded-xl bg-[#8a931c] text-white text-[10px] font-semibold shadow-2xs"
                >
                  Contact Driver on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right Editorial Annotations */}
          <div className="lg:col-span-3 flex flex-col gap-16 order-3">
            <div className="relative group">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute -left-12 top-4 w-10 h-[1px] bg-neutral-300" />
              <h4 className="font-serif text-xl sm:text-2xl text-neutral-900 font-normal mb-1">
                Emotional clarity
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                We handle the heavy lifting, awkward stairs, and tight parking. You simply point and supervise.
              </p>
            </div>

            <div className="relative group">
              <div className="hidden lg:block absolute -left-12 top-4 w-10 h-[1px] bg-neutral-300" />
              <h4 className="font-serif text-xl sm:text-2xl text-neutral-900 font-normal mb-1">
                Hands-on loading crew
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Unlike kerbside couriers, our team carries items directly to and from your rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
