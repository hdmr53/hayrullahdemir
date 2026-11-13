
import type { MetadataRoute } from "next";

const siteUrl = "https://hayrullahdemir.com.tr";

const pages = [
  "",
  "/about",
  "/projects",
  "/skills",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    routes.push({
      url: `${siteUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `${siteUrl}${page}`,
          en: `${siteUrl}/en${page}`,
        },
      },
    });

    routes.push({
      url: `${siteUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `${siteUrl}${page}`,
          en: `${siteUrl}/en${page}`,
        },
      },
    });
  }

  return routes;
}
