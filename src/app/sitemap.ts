import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { localizePath } from "@/lib/i18n";
import { solutionSlugs } from "@/content/seo/solutions";
import { specialtySlugs } from "@/content/seo/specialties";
import { cities, citySlugs, countrySlugs } from "@/content/seo/locations";
import { combos } from "@/content/seo/combos";

function entry(path: string, priority = 0.7): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const englishPaths = [
    "/",
    "/solutions",
    "/specialties",
    "/locations",
    ...solutionSlugs.map((slug) => `/solutions/${slug}`),
    ...specialtySlugs.map((slug) => `/specialties/${slug}`),
    ...countrySlugs.map((slug) => `/locations/${slug}`),
    ...citySlugs.map((slug) => `/locations/${cities[slug].country}/${slug}`),
    ...combos.map((combo) => `/locations/${combo.country}/${combo.city}/${combo.pathSegment}`),
  ];

  return englishPaths.flatMap((path) => [
    entry(localizePath(path, "en"), path === "/" ? 1 : 0.8),
    entry(localizePath(path, "ar"), path === "/" ? 0.9 : 0.7),
  ]);
}
