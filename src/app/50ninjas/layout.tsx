import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50Ninjas | Managed Short-Form AI Content Studio • 50ninjas.kavivas.tech",
  description:
    "50Ninjas (50ninjas.kavivas.tech) is a managed short-form AI video production studio and creator ecosystem. Done-for-you avatar creation, voice cloning, kinetic editing, custom thumbnails, and auto-DM copy.",
  keywords: [
    "50Ninjas",
    "50ninjas.kavivas.tech",
    "The 50Ninjas Experiment",
    "AI Creator Community",
    "AI Content Studio",
    "Instagram Reels Production",
    "AI Avatars",
    "Faceless Reels",
    "Remotion AI Editing",
    "Personal Branding for Founders",
    "Kavivas Tech",
  ],
  metadataBase: new URL("https://50ninjas.kavivas.tech"),
  alternates: {
    canonical: "https://50ninjas.kavivas.tech",
  },
  openGraph: {
    title: "50Ninjas | Managed AI Content Studio • 50ninjas.kavivas.tech",
    description:
      "Make Videos With Your Face & Voice. Amazingly Edited. Done-for-you AI avatar video production and creator ecosystem by Kavivas Tech.",
    url: "https://50ninjas.kavivas.tech",
    siteName: "50Ninjas",
    type: "website",
    images: [
      {
        url: "/kavivas-logo.png",
        width: 640,
        height: 192,
        alt: "50Ninjas AI Content Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50Ninjas | Managed AI Content Studio • 50ninjas.kavivas.tech",
    description:
      "Make Videos With Your Face & Voice. Amazingly Edited. 50ninjas.kavivas.tech by Kavivas Tech.",
    images: ["/kavivas-logo.png"],
  },
};

export default function FiftyNinjasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {children}
    </div>
  );
}
