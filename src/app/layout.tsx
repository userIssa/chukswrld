import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ChuksWRLD Logistics | Calm Removals & Transport Across the UK",
  description:
    "Private, ultra-minimalist UK removals and delivery designed for calm minds. House moves, single items, store collections, and student moves. Prices from £40.",
  openGraph: {
    title: "ChuksWRLD Logistics | Moving should feel invisible.",
    description:
      "Reliable, calm, and affordable removals across England, Scotland, Wales, and Northern Ireland. Free quotes from £40.",
    images: ["/images/misty-hills-bg.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#fafaf7] text-neutral-900 font-sans selection:bg-[#8a931c]/20 selection:text-neutral-900">
        {children}
      </body>
    </html>
  );
}
