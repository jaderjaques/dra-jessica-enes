import type { MetadataRoute } from "next";
import { site } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
