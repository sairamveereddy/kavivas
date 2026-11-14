import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { KAVIVAS_DATA } from "@/data/kavivas-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavivas.tech"),
  title: "Kavivas.Tech | AI-First Product Studio & Engineering",
  description:
    "Kavivas Tech Pvt Ltd is an AI-first product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes. Owners of JobNinjas.ai, 50Ninjas, and VSRInsurancePlus.com.",
  keywords: [
    "Kavivas Tech",
    "AI Product Studio",
    "Autonomous AI Agents",
    "JobNinjas.ai",
    "50Ninjas",
    "The Ninja Experiment",
    "VSRInsurancePlus.com",
    "AI software development",
    "Hyderabad AI company",
    "Full-stack engineering"
  ],
  authors: [{ name: "Kavivas Tech Pvt Ltd" }],
  openGraph: {
    title: "Kavivas.Tech | AI-First Product Studio & Engineering",
    description:
      "AI-first product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes.",
    url: "https://kavivas.tech",
    siteName: "Kavivas.Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kavivas.tech/kavivas-brand-logo.png",
        secureUrl: "https://kavivas.tech/kavivas-brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Kavivas Tech — AI-First Product Studio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavivas.Tech | AI-First Product Studio & Engineering",
    description:
      "AI-first product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes.",
    images: ["https://kavivas.tech/kavivas-brand-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kavivas.tech/#organization",
        name: KAVIVAS_DATA.company.name,
        alternateName: KAVIVAS_DATA.company.brandName,
        url: "https://kavivas.tech",
        logo: "https://kavivas.tech/kavivas-logo.png",
        description: KAVIVAS_DATA.company.mission,
        email: KAVIVAS_DATA.company.email,
        telephone: KAVIVAS_DATA.company.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "H. No. 7-2-31/sv/44/104, 1st Floor, Sv Colony",
          addressLocality: "Rangareddy",
          addressRegion: "Telangana",
          postalCode: "500079",
          addressCountry: "IN",
        },
        sameAs: [
          "https://jobninjas.ai",
          "https://www.skool.com/the-ninja-experiment-3274",
          "https://vsrinsuranceplus.com",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#3D4ADF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
