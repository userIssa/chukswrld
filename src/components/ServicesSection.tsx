"use client";

import React, { useState } from "react";
import { ArrowUpRight, Box, Home, ShoppingCart, Smartphone, GraduationCap, Plane, Armchair } from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

const servicesData = [
  {
    id: "house-moves",
    title: "House & Apartment Moves",
    tagline: "Full or part homes",
    desc: "From studio flats to 3+ bedroom houses. We pack with care, pad furniture with moving blankets, and ensure calm delivery to your new address.",
    price: "Free bespoke quote",
    icon: Home,
  },
  {
    id: "single-item",
    title: "Single Item Transport",
    tagline: "Designer furniture & heavy pieces",
    desc: "From a single velvet armchair to a solid oak wardrobe or upright piano. Delivered carefully without asking friends to borrow a van.",
    price: "From £40",
    icon: Armchair,
  },
  {
    id: "store-collections",
    title: "IKEA, B&Q & Store Orders",
    tagline: "We collect, you relax",
    desc: "Store orders, flat-packs, garden furniture sets, and appliances collected straight from store loading bays and brought up to your room.",
    price: "From £40",
    icon: ShoppingCart,
  },
  {
    id: "marketplace",
    title: "Marketplace & eBay Pickups",
    tagline: "Facebook Marketplace & Gumtree",
    desc: "Found an online treasure? We coordinate with the seller, inspect condition on pickup, and deliver safely to your doorstep.",
    price: "From £40",
    icon: Smartphone,
  },
  {
    id: "student-moves",
    title: "Student Relocations",
    tagline: "Halls to private student housing",
    desc: "Budget-friendly, punctual moves for students across the UK during term start, end of year, or storage transfers.",
    price: "Student Friendly",
    icon: GraduationCap,
  },
  {
    id: "airport",
    title: "Airport Luggage Transport",
    tagline: "Manchester, Heathrow, Gatwick & regional",
    desc: "Travel light without wrestling oversized cases across train platforms. We take your luggage directly from door to terminal.",
    price: "Fixed Quote",
    icon: Plane,
  },
  {
    id: "loading-support",
    title: "Load & Unload Muscle",
    tagline: "Your transport or ours",
    desc: "Hire our polite, experienced crew for the heavy lifting, navigating spiral stairs, and van packing even if you hired your own vehicle.",
    price: "Flexible hourly",
    icon: Box,
  },
];

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-900/15 bg-[#fafaf7] px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 mb-6">
              <span className="font-serif italic">Functions</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal tracking-tight">
              Quiet solutions for <br />
              <span className="italic font-light">every item in your world</span>
            </h2>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Prices from £40 • All 4 UK Nations
            </p>
          </div>
        </div>

        {/* Minimalist Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={onOpenBooking}
                className="group rounded-[28px] p-8 bg-[#fafaf7] border border-neutral-200/80 hover:border-neutral-900/40 hover:bg-white hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform shadow-2xs">
                      <Icon className="w-4 h-4 text-[#7c8517]" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase bg-white border border-black/5 px-3 py-1 rounded-full">
                      {svc.price}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#7c8517] mb-1">
                    {svc.tagline}
                  </p>
                  <h3 className="font-serif text-2xl text-neutral-950 font-normal mb-3 group-hover:translate-x-0.5 transition-transform">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-medium text-neutral-900">
                  <span className="group-hover:text-[#7c8517] transition-colors">
                    Plan this move
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform border border-black/5">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bonus Card: Coverage & Long Distance */}
          <div className="rounded-[28px] p-8 bg-neutral-950 text-white border border-neutral-800 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[11px] font-mono tracking-widest text-[#d4dd4b] uppercase mb-6">
                Nationwide Logistics
              </span>
              <h3 className="font-serif text-3xl font-light text-white leading-tight mb-3">
                Covering the entire United Kingdom.
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                England, Scotland, Wales, and Northern Ireland. Inter-city routes scheduled smoothly between Sheffield, London, Manchester, Birmingham, Leeds, and beyond.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-8 w-full py-3.5 rounded-full bg-white text-neutral-950 hover:bg-[#fafaf7] text-xs font-semibold tracking-wide uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>Check Route Slot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
