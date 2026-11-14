import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://kavivas.tech/sitemap.xml",
      "https://50ninjas.kavivas.tech/sitemap.xml",
    ],
  };
}
