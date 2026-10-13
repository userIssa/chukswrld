"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Play, Pause, Volume2, Shield, Clock } from "lucide-react";

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export default function ExperienceSection({ onOpenBooking }: ExperienceSectionProps) {
  const [calmDays, setCalmDays] = useState(100);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  return (
    <section id="experience" className="py-24 bg-white border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-900/15 bg-[#fafaf7] px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 mb-6">
              <span className="font-serif italic">Features</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal tracking-tight">
              What it’s like moving <br />
              <span className="italic font-light">with ChuksWRLD</span>
            </h2>
          </div>

          <div className="md:text-right">
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              The future of quiet moving
            </span>
          </div>
        </div>

        {/* 3-Card Grid (Exact Layout from Reference Image 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Lime Tinted Quote Card */}
          <div className="lg:col-span-4 rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#f2f5e4] to-[#e7ecd2] border border-[#dce3c0] flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-3xl text-[#7c8517] font-serif">“</span>
              <p className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug font-normal mt-2">
                For the first time, our moving day felt quiet. No pressure. No shouting. Just absolute clarity about how our belongings were packed, protected, and moved.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-black/10">
              <p className="font-sans text-xs tracking-wider uppercase text-neutral-500 font-medium">
                Founder &amp; Remote Creative
              </p>
              <p className="font-sans text-xs text-neutral-400 mt-0.5">
                Sheffield to London Relocation
              </p>
            </div>
          </div>

          {/* Card 2: Center Circular Gauge Card (The Life Runway / Calm Days visual) */}
          <div className="lg:col-span-4 rounded-[32px] overflow-hidden relative min-h-[420px] flex flex-col items-center justify-center p-8 border border-neutral-200/80 shadow-sm bg-neutral-900 text-white group">
            {/* Background Landscape Texture */}
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src="/images/misty-hills-bg.jpg"
                alt="Calm hills background"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            </div>

            {/* Gauge Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase text-white/90 mb-8">
                <span>Move Peace Score</span>
              </div>

              {/* Circular Gauge Ring */}
              <div className="relative w-48 h-48 rounded-full border border-white/15 flex flex-col items-center justify-center p-6 bg-white/[0.03] backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-2 rounded-full border-2 border-[#a3ad22]/50 border-t-[#a3ad22] animate-spin [animation-duration:18s]" />
                <span className="text-[11px] text-white/60 font-sans tracking-wide">
                  You can move calmly for
                </span>
                <span className="font-serif text-5xl font-light text-white my-1 tracking-tight">
                  {calmDays}%
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4dd4b]">
                  Zero Friction
                </span>
              </div>

              {/* Slider for interactive satisfaction */}
              <div className="mt-8 w-full max-w-[200px]">
                <div className="flex justify-between text-[10px] text-white/50 mb-1 font-mono">
                  <span>Standard</span>
                  <span>ChuksWRLD White-Glove</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="100"
                  value={calmDays}
                  onChange={(e) => setCalmDays(Number(e.target.value))}
                  className="w-full accent-[#a3ad22] cursor-pointer h-1.5 bg-white/20 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Stacked Feature Cards & Olive CTA Button */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            {/* Top Subcard */}
            <div className="rounded-[28px] p-7 bg-[#f6f7f2] border border-neutral-200/70 hover:border-neutral-300 transition-all">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-black/5 mb-3 shadow-2xs">
                <Clock className="w-4 h-4 text-[#7c8517]" />
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 font-normal mb-2">
                Your calm days
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Punctual timing windows based on your schedule and route. No waiting around in empty flats wondering when the van arrives.
              </p>
            </div>

            {/* Middle Subcard */}
            <div className="rounded-[28px] p-7 bg-[#f6f7f2] border border-neutral-200/70 hover:border-neutral-300 transition-all">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-black/5 mb-3 shadow-2xs">
                <Shield className="w-4 h-4 text-[#7c8517]" />
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 font-normal mb-2">
                Zero stress
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                No aggressive surcharges, last-minute cancellations, or damaged furniture. Only careful hands and polite professionals.
              </p>
            </div>

            {/* Bottom Olive Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-4 rounded-full bg-[#8a931c] hover:bg-[#788015] active:scale-[0.99] text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-sm shadow-[#8a931c]/25 flex items-center justify-center gap-2"
            >
              <span>Your calm move</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Ambient Moving Track Bar (from bottom of Reference Image 5) */}
        <div className="mt-12 p-4 rounded-full bg-[#fafaf7] border border-neutral-200/80 flex items-center gap-4">
          <button
            onClick={() => setIsPlayingSound(!isPlayingSound)}
            className="w-9 h-9 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-neutral-900 hover:scale-105 transition-all shadow-xs"
            aria-label="Toggle ambient player"
          >
            {isPlayingSound ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-[#8a931c]" />
            )}
          </button>

          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center text-[11px] text-neutral-600 mb-1 font-mono">
              <span className="font-medium text-neutral-900">
                UK Route Status: Active Fleet
              </span>
              <span>Sheffield • London • Manchester • Glasgow • Belfast</span>
            </div>
            <div className="w-full bg-neutral-200/70 h-1 rounded-full overflow-hidden">
              <div className="bg-[#8a931c] h-full w-2/3 rounded-full animate-pulse-subtle" />
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-600 pr-2">
            <Volume2 className="w-4 h-4 text-neutral-400" />
            <span>Quiet dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
