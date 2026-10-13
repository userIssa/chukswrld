"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden pt-12 pb-16 lg:pb-24">
      {/* Background Landscape with Top Fog Dissolve */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/misty-hills-bg.jpg"
          alt="Misty green rolling hills landscape"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Top Gradient to blend perfectly with the clean white header */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf7] via-[#fafaf7]/40 via-35% to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/[0.04]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-between">
        {/* Top Header Row in Hero: Badge on Left, Poetic Subtitle on Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-900/20 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-medium text-neutral-800 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a931c]"></span>
              <span>The future of quiet moving</span>
            </div>
          </div>

          <div className="max-w-md md:text-right">
            <p className="text-xl md:text-2xl font-sans text-neutral-900 font-medium tracking-tight leading-snug">
              Private removals designed for calm minds and modern lifestyles.
            </p>
          </div>
        </div>

        {/* Center Canvas: Giant Headline & Floating Move Card */}
        <div className="relative my-auto py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Main Headline on Left */}
          <div className="lg:col-span-7 z-20">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] text-neutral-950 font-normal tracking-tight leading-[1.02]">
              Moving should <br />
              <span className="italic font-light">feel invisible.</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-700">
              <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-black/10 px-3.5 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8a931c]" />
                Registered UK Co. 17263579
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-black/10 px-3.5 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#8a931c]" />
                Covering England, Scotland, Wales &amp; NI
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-black/10 px-3.5 py-1.5 rounded-full">
                From £40 • Free quotes
              </span>
            </div>
          </div>

          {/* Floating Center Card (Reference from Images 1 & 2) */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end z-20 mt-6 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={cardRef}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(-11deg)`,
                transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className="relative w-[280px] sm:w-[320px] aspect-[1/1.55] rounded-[28px] overflow-hidden shadow-2xl shadow-neutral-950/25 border border-white/60 cursor-pointer group select-none transition-shadow hover:shadow-neutral-900/40"
              onClick={onOpenBooking}
            >
              {/* Card Face Landscape Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/misty-hills-bg.jpg"
                  alt="ChuksWRLD Member Card"
                  fill
                  className="object-cover scale-110 object-center transition-transform duration-700 group-hover:scale-115"
                />
                {/* Subtle glass shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/30 backdrop-blur-[0.5px]" />
              </div>

              {/* EMV Microchip */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 w-12 h-10 rounded-lg bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300 border border-amber-400/60 shadow-sm p-1 flex flex-col justify-between opacity-95">
                <div className="w-full h-[1px] bg-amber-600/40 my-auto" />
                <div className="w-full h-[1px] bg-amber-600/40 my-auto" />
                <div className="absolute inset-1 rounded border border-amber-500/30 pointer-events-none" />
              </div>

              {/* Card Meta / Engraving */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start pt-2">
                  <span className="font-serif italic text-white/90 text-sm tracking-wide drop-shadow-sm font-medium">
                    ChuksWRLD
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/80 bg-black/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                    Quiet Pass
                  </span>
                </div>

                <div className="flex items-end justify-between pt-16">
                  <div>
                    <p className="text-[11px] font-mono tracking-wider text-white/90 drop-shadow-sm uppercase">
                      Chukwudi E. Onuorah
                    </p>
                    <p className="text-[9px] font-mono tracking-widest text-white/70">
                      SHF ⇄ UK WIDE • NO. 17263579
                    </p>
                  </div>

                  {/* Dual Intersecting Glowing Circles Emblem (Ref Image 1 & 2) */}
                  <div className="flex items-center -space-x-3 drop-shadow-md">
                    <div className="w-8 h-8 rounded-full bg-[#f97316] opacity-90 shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-[#eab308] opacity-85 shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Light reflection bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Bar in Hero: "Start Invisibly" Pill Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/[0.06]">
          <p className="text-xs text-neutral-600 max-w-sm">
            House clearances, store collections, single items &amp; luggage delivered with quiet precision.
          </p>

          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-3 bg-[#eef0e5]/90 hover:bg-white text-neutral-900 border border-black/10 px-7 py-3 rounded-full text-sm font-semibold shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Invisibly</span>
            <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
