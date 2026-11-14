import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar",
  description:
    "Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails — We create. You post.",
  keywords: [
    "50Ninjas",
    "50ninjas.kavivas.tech",
    "Scale Your Personal Brand",
    "With Your AI Avatar",
    "The 50Ninjas Experiment",
    "AI Creator Community",
    "AI Content Studio",
    "Instagram Reels Production",
    "AI Avatars",
    "Personal Branding for Founders",
    "HeyGen Alternative",
    "Google Veo Studio",
    "Kavivas Tech",
  ],
  metadataBase: new URL("https://50ninjas.kavivas.tech"),
  alternates: {
    canonical: "https://50ninjas.kavivas.tech",
  },
  openGraph: {
    title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar",
    description:
      "Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails — We create. You post.",
    url: "https://50ninjas.kavivas.tech",
    siteName: "50Ninjas Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://50ninjas.kavivas.tech/work-50ninjas.png",
        secureUrl: "https://50ninjas.kavivas.tech/work-50ninjas.png",
        width: 1024,
        height: 640,
        alt: "50Ninjas — Scale Your Personal Brand With Your AI Avatar",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar",
    description:
      "Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails — We create. You post.",
    creator: "@first.ninja_",
    site: "@50ninjas.ai",
    images: ["https://50ninjas.kavivas.tech/work-50ninjas.png"],
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
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function FiftyNinjasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://50ninjas.kavivas.tech/#website",
        url: "https://50ninjas.kavivas.tech",
        name: "50Ninjas Studio",
        description:
          "Scale Your Personal Brand With Your AI Avatar. Done-for-you short-form video production.",
        publisher: {
          "@type": "Organization",
          name: "Kavivas Tech Pvt Ltd",
          url: "https://kavivas.tech",
          logo: "https://kavivas.tech/kavivas-logo.png",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://50ninjas.kavivas.tech/#service",
        name: "50Ninjas AI Content Studio",
        url: "https://50ninjas.kavivas.tech",
        logo: "https://50ninjas.kavivas.tech/work-50ninjas.png",
        image: "https://50ninjas.kavivas.tech/work-50ninjas.png",
        description:
          "Done-for-you short-form video production. Custom AI avatars, voice cloning, retention scripts, kinetic subtitles, and custom thumbnails.",
        priceRange: "$74 - $399/mo",
        areaServed: ["US", "AU", "GB"],
        telephone: "+91 99126 64800",
        sameAs: [
          "https://www.instagram.com/50ninjas.ai/",
          "https://www.instagram.com/first.ninja_/",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </div>
  );
}
