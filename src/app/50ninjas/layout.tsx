import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar • 50ninjas.kavivas.tech",
  description:
    "Scale Your Personal Brand. With Your AI Avatar. Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails — We create. You post.",
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
    "Kavivas Tech",
  ],
  metadataBase: new URL("https://50ninjas.kavivas.tech"),
  alternates: {
    canonical: "https://50ninjas.kavivas.tech",
  },
  openGraph: {
    title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar • 50ninjas.kavivas.tech",
    description:
      "Scale Your Personal Brand. With Your AI Avatar. Done-for-you short-form video production. We craft your avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design custom thumbnails — We create. You post.",
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
    title: "50Ninjas | Scale Your Personal Brand With Your AI Avatar • 50ninjas.kavivas.tech",
    description:
      "Scale Your Personal Brand. With Your AI Avatar. Done-for-you short-form video production. We create. You post.",
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
