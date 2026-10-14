# ChuksWRLD Logistics — Calm Removals & Transport

> **"Built for people who value clarity over noise."**  
> Private, ultra-minimalist UK removals, student relocations, and transport designed for calm minds.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Companies House](https://img.shields.io/badge/Companies_House-Verified_#17263579-059669?style=flat-square)](https://find-and-update.company-information.service.gov.uk/)
[![UK Coverage](https://img.shields.io/badge/Coverage-UK--Wide-8a931c?style=flat-square)](https://chukswrld.com)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Design Philosophy](#-design-philosophy)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Interactive Components & Workflows](#-interactive-components--workflows)
- [Company & Legal Information](#-company--legal-information)
- [Contact & Channels](#-contact--channels)

---

## 🌿 Overview

**ChuksWRLD Logistics** is a modern, editorial web application for a UK-wide moving and delivery service headquartered in Sheffield, England. 

Unlike traditional loud, high-friction removals firms, ChuksWRLD operates on quiet logistics: transparent upfront pricing from **£40**, dedicated white-glove transit, respectful communication, and end-to-end calm execution.

The platform provides clients with an intuitive, 5-step booking assistant that instantly calculates move details and opens a structured, pre-formatted conversation directly on WhatsApp with dispatch.

---

## 🎨 Design Philosophy

The user interface follows an **editorial, quiet luxury aesthetic**:
- **Warm Architectural Palette**: Warm sand whites (`#fafaf7`), earthen olive accents (`#8a931c`), deep charcoal typography (`#121312`), and misty rolling green hills.
- **Editorial Typography**: Pairing serif headline elegance ([Newsreader](https://fonts.google.com/specimen/Newsreader)) with geometric modern sans-serif readability ([Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)).
- **Subtle Micro-Interactions**: 3D perspective mouse-tilt cards, atmospheric floating badges, interactive calm runway slider, and soundscape toggles.
- **Mobile Device Showcases**: High-fidelity dual iPhone mockups displaying dispatch notifications and transparent quotes.

---

## ✨ Key Features

1. **Interactive 3D Hero Section**
   - Perspective-tracking 3D floating member card (`ChuksWRLD Quiet Mover ID`).
   - Atmospheric misty landscape background with subtle dissolved gradients.
   - Fast quote input for immediate route estimation.

2. **5-Step WhatsApp Booking Assistant Modal**
   - **Step 1: Service Selection** (House moves, single items, store pickups, student relocations, luggage, muscle support).
   - **Step 2: Journey & Schedule** (Pick-up, drop-off, date selection, flexible time slots).
   - **Step 3: Property & Crew Requirements** (Studio, 1-3+ bed house, loading & unloading assistance level).
   - **Step 4: Contact & Custom Notes** (Name, WhatsApp number, special access instructions).
   - **Step 5: Review & Instant Dispatch** (Generates a clean, formatted WhatsApp booking payload sent straight to dispatch).

3. **7 Core Logistics Services**
   - 🏠 **House & Apartment Moves** — Bespoke packing and calm relocation for studio to 3+ bedroom properties.
   - 🛋️ **Single Item Transport** — Velvet sofas, oak wardrobes, upright pianos, and designer furniture.
   - 🛒 **Store Pickups (IKEA, B&Q, etc.)** — Flat-packs, garden furniture, and large appliances collected from loading bays.
   - 📱 **Marketplace & eBay Pickups** — Safe collection and condition check for Gumtree / Facebook Marketplace finds.
   - 🎓 **Student Relocations** — Student-friendly pricing for halls-to-house moves across UK university cities.
   - ✈️ **Airport Luggage Transport** — Door-to-terminal baggage transit (Heathrow, Gatwick, Manchester, Birmingham).
   - 💪 **Loading & Muscle Support** — Professional heavy lifting and packing assistance without vehicle rental.

4. **Calm Experience Runway & Ambient Demo**
   - Interactive gauge demonstrating the stress reduction ("Calm Days") of quiet moving.
   - Audio ambient soundscape player simulating peaceful moving day vibes.

5. **Official Verification & Founder Credentials**
   - Founder profile of **Chukwudi Ernest Onuorah** (*MSc Logistics & Supply Chain Management, Sheffield Hallam University*).
   - Verified **Companies House Certificate of Incorporation** (Limited Company No. `17263579`).
   - Active status in England & Wales with registered office in Sheffield.

6. **Client Testimonials & UK Coverage Map**
   - Real testimonials from moves in Sheffield, London, Manchester, Leeds, Bristol, and Birmingham.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4.0](https://nextjs.org/) | App Router, Turbopack, React Server Components |
| **Runtime / Library** | [React 19.3.0](https://react.dev/) | Latest React features and client components |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety across all components |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `@tailwindcss/turbopack` with custom `@theme` variables |
| **Typography** | `next/font/google` | Google Fonts: Newsreader (Serif) & Plus Jakarta Sans |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, stroke-based modern icon set |
| **Integration** | WhatsApp Business API (URL scheme) | Zero-friction instant quote dispatching |

---

## 📁 Project Structure

```
chukswrld-next/
├── public/
│   ├── images/
│   │   ├── ceo-chukwudi.jpg            # Founder portrait
│   │   ├── company-registration.jpg    # Verified Companies House certificate
│   │   ├── cover-banner.jpg            # Brand banner
│   │   ├── gallery-loading-bay.jpg     # Logistics bay photography
│   │   ├── gallery-storage-boxes.jpg   # Storage & packing imagery
│   │   ├── gallery-van-parking.jpg     # Fleet vehicle imagery
│   │   ├── logo.jpg                    # ChuksWRLD logo emblem
│   │   └── misty-hills-bg.jpg          # Signature landscape hero background
│   └── videos/
│       ├── clip-1.mp4 ... clip-5.mp4   # Logistics reels & moving clips
│
├── src/
│   ├── app/
│   │   ├── globals.css                 # Tailwind v4 theme, custom scrollbar & animations
│   │   ├── layout.tsx                  # Root layout, Google Fonts, SEO OpenGraph metadata
│   │   └── page.tsx                    # Landing page orchestrator
│   │
│   └── components/
│       ├── BookingModal.tsx            # Multi-step WhatsApp booking assistant
│       ├── CtaFooter.tsx               # Editorial footer with quick-quote input & socials
│       ├── ExperienceSection.tsx       # "What it's like moving with ChuksWRLD" & gauge
│       ├── FounderSection.tsx          # Founder credentials & Companies House verification
│       ├── HeroSection.tsx             # Misty landscape hero with 3D tilt member card
│       ├── MobileShowcase.tsx          # Dual smartphone mockup with dynamic annotations
│       ├── Navbar.tsx                  # Sticky minimalist glassmorphism navigation
│       ├── ServicesSection.tsx         # 7 bespoke moving services grid
│       └── TestimonialsSection.tsx     # Client reviews across the United Kingdom
│
├── next.config.ts                      # Next.js configuration
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript compiler options
└── README.md                           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (version `18.18.0` or higher recommended)
- `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chukswrld-next.git
   cd chukswrld-next
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live site.

### Production Build

To verify and create an optimized production build:

```bash
npm run build
npm run start
```

### Code Quality & Linting

```bash
npm run lint
```

---

## 📲 Interactive Components & Workflows

### WhatsApp Booking Payload Generation
When a user finishes Step 4 in `BookingModal.tsx`, the system generates a formatted WhatsApp message and redirects to the official dispatch line:

```text
*NEW MOVE REQUEST — CHUKSWRLD LOGISTICS*
------------------------------------
*Service:* House or Apartment Move
*From:* S1 2NU, Sheffield
*To:* N1 7GU, London
*Date:* 2026-10-25
*Time:* Morning (8am – 12pm)
*Move Size:* 2 bedroom house / flat
*Crew Assistance:* Yes — full loading & unloading assistance
------------------------------------
*Name:* Alex Morgan
*Phone:* +44 7123 456789
*Email:* alex@example.com
*Notes:* 2nd floor flat, elevator available.
------------------------------------
Sent via ChuksWRLD Quiet Moving Web App
```

---

## 🏛️ Company & Legal Information

- **Company Name:** ChuksWRLD Limited
- **Company Number:** `17263579`
- **Jurisdiction:** England & Wales
- **Registered Office:** Sheffield, South Yorkshire, England, S2 3WX
- **Status:** Active & Verified (Companies House)
- **Founder & MD:** Chukwudi Ernest Onuorah
  - *MSc in Logistics & Supply Chain Management — Sheffield Hallam University*
- **Transit Insurance:** Fully Insured Goods in Transit & Public Liability

---

## 📞 Contact & Channels

- **WhatsApp & Phone:** [+44 7845 072105](https://wa.me/447845072105)
- **Email:** [chukswrld@gmail.com](mailto:chukswrld@gmail.com)
- **Instagram:** [@chukswrld_logistics](https://www.instagram.com/chukswrld_logistics/)
- **Service Area:** England, Scotland, Wales, and Northern Ireland

---

© 2026 ChuksWRLD Limited. All rights reserved. Designed for calm minds.
