import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://kavivas.tech",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://50ninjas.kavivas.tech",
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: "https://kavivas.tech/50ninjas",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}
