"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "ChuksWRLD Logistics has been incredibly reliable. My shipment arrived safely and right on schedule. Their communication gave me complete peace of mind.",
    name: "James Thompson",
    location: "Sheffield to Manchester",
    role: "Verified Client",
  },
  {
    quote: "I was impressed by how professional and organized they were. Everything was handled smoothly, from pickup to delivery. Definitely using them again.",
    name: "Olivia Williams",
    location: "London Relocation",
    role: "Verified Client",
  },
  {
    quote: "Excellent logistics service. They kept me updated throughout and made the entire move stress-free. Punctual, respectful, and very careful with furniture.",
    name: "Daniel Anderson",
    location: "Birmingham to Leeds",
    role: "Verified Client",
  },
  {
    quote: "Delivered exactly as promised. Friendly team, honest price with zero surprise extras. Best moving experience I've had in the UK.",
    name: "Sophie Taylor",
    location: "Student Relocation",
    role: "Verified Client",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="stories" className="py-24 bg-white border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-900/15 bg-[#fafaf7] px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 mb-6">
              <span className="font-serif italic">Stories</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal tracking-tight">
              Quiet words from <br />
              <span className="italic font-light">satisfied movers</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-[#8a931c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
              5.0 / 5.0 (25+ UK Reviews)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-[28px] p-7 bg-[#fafaf7] border border-neutral-200/80 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#8a931c] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-base text-neutral-900 leading-relaxed mb-6 font-normal">
                  “{rev.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06]">
                <p className="text-xs font-medium text-neutral-900">{rev.name}</p>
                <p className="text-[10px] text-neutral-500 font-mono mt-0.5">
                  {rev.location} • {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
