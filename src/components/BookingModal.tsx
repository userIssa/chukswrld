"use client";

import React, { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  { id: "house", label: "House or Apartment Move", desc: "Full or part homes" },
  { id: "single", label: "Single Item Transport", desc: "Sofa, wardrobe, piano" },
  { id: "store", label: "IKEA & B&Q Store Pickup", desc: "Store collections" },
  { id: "market", label: "Marketplace / eBay / Gumtree", desc: "Online purchases" },
  { id: "student", label: "Student Move", desc: "Halls to house, end of term" },
  { id: "airport", label: "Airport Luggage", desc: "Punctual airport transfers" },
  { id: "help", label: "Load & Unload Muscle", desc: "Lifting assistance only" },
];

const propertySizes = [
  "Single item or small load",
  "Studio / 1 bedroom flat",
  "2 bedroom house / flat",
  "3+ bedroom property",
  "Office / Commercial space",
];

const loadingHelpOptions = [
  "Yes — full loading & unloading assistance",
  "Loading only at pickup",
  "Unloading only at drop-off",
  "Transport only (I will handle lifting)",
];

const timeSlots = ["Morning (8am – 12pm)", "Afternoon (12pm – 5pm)", "Evening (5pm – 9pm)", "Flexible slot"];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "House or Apartment Move",
    fromLocation: "",
    toLocation: "",
    date: "",
    timeSlot: "Flexible slot",
    propertySize: "Studio / 1 bedroom flat",
    loadingHelp: "Yes — full loading & unloading assistance",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [error, setError] = useState("");

  if (!isOpen) return null;

  const validateCurrentStep = () => {
    if (step === 2) {
      if (!formData.fromLocation.trim()) return "Please enter your pickup location.";
      if (!formData.toLocation.trim()) return "Please enter your drop-off location.";
      if (!formData.date) return "Please choose your preferred moving date.";
    }
    if (step === 4) {
      if (!formData.name.trim()) return "Please provide your name.";
      if (!formData.phone.trim()) return "Please provide your phone or WhatsApp number.";
    }
    return "";
  };

  const handleNext = () => {
    const err = validateCurrentStep();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Send to WhatsApp
      const lines = [
        "*NEW MOVE REQUEST — CHUKSWRLD LOGISTICS*",
        "------------------------------------",
        `*Service:* ${formData.service}`,
        `*From:* ${formData.fromLocation}`,
        `*To:* ${formData.toLocation}`,
        `*Date:* ${formData.date}`,
        `*Time:* ${formData.timeSlot}`,
        `*Move Size:* ${formData.propertySize}`,
        `*Crew Assistance:* ${formData.loadingHelp}`,
        "------------------------------------",
        `*Name:* ${formData.name}`,
        `*Phone:* ${formData.phone}`,
        formData.email ? `*Email:* ${formData.email}` : "",
        formData.notes ? `*Notes:* ${formData.notes}` : "",
        "------------------------------------",
        "Sent via ChuksWRLD Quiet Moving Web App",
      ].filter(Boolean);

      const encoded = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/447845072105?text=${encoded}`, "_blank");
      onClose();
    }
  };

  const handlePrev = () => {
    setError("");
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#fafaf7] rounded-[36px] border border-neutral-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-8 pt-8 pb-4 flex items-center justify-between border-b border-black/[0.04]">
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-medium text-lg text-neutral-900">
              ChuksWRLD
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase bg-neutral-200/80 px-2.5 py-0.5 rounded-full text-neutral-700">
              Step {step} of 5
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors shadow-2xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-200 h-1">
          <div
            className="bg-[#8a931c] h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-8 overflow-y-auto flex-1">
          {error && (
            <div className="mb-6 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700">
              {error}
            </div>
          )}

          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mb-2">
                What do you need moved?
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Pick the service that best fits your requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: opt.label })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.service === opt.label
                        ? "bg-white border-[#8a931c] shadow-sm ring-1 ring-[#8a931c]"
                        : "bg-white/60 border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <p className="text-xs font-semibold text-neutral-900">{opt.label}</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: ROUTE & TIMING */}
          {step === 2 && (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mb-2">
                Where are we moving from &amp; to?
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                A city, town, or UK postcode is fine. We cover all 4 nations.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Moving from (Pickup) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sheffield S2, London N1"
                      value={formData.fromLocation}
                      onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Moving to (Destination) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Manchester M1, Leeds LS2"
                      value={formData.toLocation}
                      onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Time of Day
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SIZE & ACCESS */}
          {step === 3 && (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mb-2">
                Move size &amp; crew assistance
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                This helps us bring the ideal van size and equipment.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Size of move
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {propertySizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertySize: size })}
                        className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                          formData.propertySize === size
                            ? "bg-white border-[#8a931c] font-medium shadow-2xs"
                            : "bg-white/60 border-neutral-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Do you want our crew to help load &amp; unload?
                  </label>
                  <div className="space-y-2">
                    {loadingHelpOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, loadingHelp: opt })}
                        className={`w-full p-3 rounded-2xl border text-left text-xs transition-all ${
                          formData.loadingHelp === opt
                            ? "bg-white border-[#8a931c] font-medium shadow-2xs"
                            : "bg-white/60 border-neutral-200"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT */}
          {step === 4 && (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mb-2">
                How should we reach you?
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                We send quotes quickly on WhatsApp — usually within the hour.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chukwudi Onuorah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 07845 072105"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Special notes (Stairs, heavy items, fragile pieces)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 2nd floor flat without lift, large marble coffee table..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-neutral-300 focus:outline-none focus:border-[#8a931c]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: REVIEW */}
          {step === 5 && (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mb-2">
                Check and dispatch
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Clicking continue will open WhatsApp with your pre-formatted enquiry.
              </p>

              <div className="rounded-2xl p-6 bg-white border border-neutral-200/80 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Service</span>
                  <span className="font-medium text-neutral-900">{formData.service}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Route</span>
                  <span className="font-medium text-neutral-900">{formData.fromLocation} ➔ {formData.toLocation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Date &amp; Time</span>
                  <span className="font-medium text-neutral-900">{formData.date} ({formData.timeSlot})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Move Size</span>
                  <span className="font-medium text-neutral-900">{formData.propertySize}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Crew Assistance</span>
                  <span className="font-medium text-neutral-900">{formData.loadingHelp}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-neutral-400">Contact</span>
                  <span className="font-medium text-neutral-900">{formData.name} ({formData.phone})</span>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-2xl bg-[#fafaf7] border border-black/5 flex items-center gap-2 text-xs text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-[#8a931c] shrink-0" />
                <span>Quotes start from £40 • No booking fees • Free cancellation</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-8 py-5 bg-white border-t border-black/[0.04] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8a931c] hover:bg-[#788015] text-white text-xs font-semibold tracking-wide shadow-sm transition-all"
          >
            <span>{step === 5 ? "Send on WhatsApp" : "Continue"}</span>
            {step === 5 ? <MessageSquare className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
