import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50Ninjas | We Edit Your Videos The Best Way • 50ninjas.kavivas.tech",
  description:
    "We Edit Your Videos The Best Way. Bring Any Creator Reference. 50Ninjas (50ninjas.kavivas.tech) is a managed short-form video production studio with your face and voice, kinetic editing, custom thumbnails, and auto-DM copy.",
  keywords: [
    "50Ninjas",
    "50ninjas.kavivas.tech",
    "We Edit Your Videos The Best Way",
    "Bring Any Creator Reference",
    "The 50Ninjas Experiment",
    "AI Creator Community",
    "AI Content Studio",
    "Instagram Reels Production",
    "AI Avatars",
    "Personal Branding for Founders",
    "Kavivas Tech",
  ],
  metadataBase: new URL("https://50ninjas.kavivas.tech"),
  alternates: {
    canonical: "https://50ninjas.kavivas.tech",
  },
  openGraph: {
    title: "50Ninjas | We Edit Your Videos The Best Way • 50ninjas.kavivas.tech",
    description:
      "We Edit Your Videos The Best Way. Bring Any Creator Reference. Done-for-you short-form video production with your face and voice by Kavivas Tech.",
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
    title: "50Ninjas | We Edit Your Videos The Best Way • 50ninjas.kavivas.tech",
    description:
      "We Edit Your Videos The Best Way. Bring Any Creator Reference. 50ninjas.kavivas.tech by Kavivas Tech.",
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
