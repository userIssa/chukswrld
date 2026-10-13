"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 bg-[#fafaf7] border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-neutral-900/15 bg-white px-4 py-1.5 rounded-full text-xs font-medium text-neutral-800 mb-6">
            <span className="font-serif italic">Legal &amp; Leadership</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-950 font-normal tracking-tight max-w-2xl">
            Grounded in expertise, <br />
            <span className="italic font-light">verified by law</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Bio Card */}
          <div className="lg:col-span-6 rounded-[32px] p-8 sm:p-10 bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                <Image
                  src="/images/ceo-chukwudi.jpg"
                  alt="Chukwudi Ernest Onuorah, Founder & Director"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#7c8517]">
                  Founder &amp; Managing Director
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 font-normal">
                  Chukwudi Ernest Onuorah
                </h3>
                <p className="text-xs text-neutral-500 flex items-center gap-1.5 mt-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7c8517]" />
                  MSc Logistics &amp; Supply Chain Management
                </p>
                <p className="text-[11px] text-neutral-400">
                  Sheffield Hallam University
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              “We built ChuksWRLD on one fundamental truth: moving day shouldn’t feel like an emergency. Combining academic supply chain principles with hands-on, white-glove respect for people’s personal possessions is why our moves run quietly, predictably, and without friction.”
            </p>

            <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-[#fafaf7] px-3.5 py-1.5 rounded-full border border-black/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7c8517]" />
                Sheffield Based
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-[#fafaf7] px-3.5 py-1.5 rounded-full border border-black/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7c8517]" />
                UK-Wide Operation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-[#fafaf7] px-3.5 py-1.5 rounded-full border border-black/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7c8517]" />
                Fully Insured Transit
              </span>
            </div>
          </div>

          {/* Companies House Verified Certificate Card */}
          <div className="lg:col-span-6 rounded-[32px] p-8 sm:p-10 bg-white border border-neutral-200/80 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 shadow-sm shrink-0">
              <Image
                src="/images/company-registration.jpg"
                alt="Companies House Certificate of Incorporation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900/5" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Limited Company</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl text-neutral-950 font-normal">
                ChuksWRLD Limited
              </h4>

              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex justify-between py-1 border-b border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">Company No.</span>
                  <span className="font-mono font-medium text-neutral-900">17263579</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">Jurisdiction</span>
                  <span className="text-neutral-900">England &amp; Wales</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">Registered Office</span>
                  <span className="text-neutral-900 text-right">Sheffield, England</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04]">
                  <span className="text-neutral-400 font-mono">Status</span>
                  <span className="text-emerald-700 font-medium">Active &amp; In Good Standing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
