"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MobileShowcase from "@/components/MobileShowcase";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaFooter from "@/components/CtaFooter";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafaf7] flex flex-col selection:bg-[#8a931c]/20">
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero with Misty Rolling Hills & 3D Floating Member Card */}
      <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Experience Section (What it's like moving with ChuksWRLD) */}
      <ExperienceSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Mobile Showcase ("Calm logistics for modern life") */}
      <MobileShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 7 Services & UK Coverage */}
      <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Founder Profile & Official Companies House Registration */}
      <FounderSection />

      {/* Testimonials from Real UK Moves */}
      <TestimonialsSection />

      {/* Editorial Footer & CTA ("Built for people who value clarity over noise.") */}
      <CtaFooter onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Multi-Step WhatsApp Booking Assistant Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
