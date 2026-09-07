import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import type { SeoCopy } from "@/content/seo/types";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export function languageAlternates(englishPath: string) {
  const en = localizePath(englishPath, "en");
  const ar = localizePath(englishPath, "ar");
  return {
    canonical: en,
    languages: {
      en,
      ar,
      "x-default": en,
    },
  } as const;
}

export const shareImages = [
  {
    url: "/og-square.png",
    width: 1200,
    height: 1200,
    alt: "One Clinic logo",
    type: "image/png",
  },
  {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "One Clinic by OnePath Solutions — clinic management software",
    type: "image/png",
  },
];

export const shareImage = shareImages[0];

export function pageMetadata(locale: Locale, englishPath: string, copy: SeoCopy): Metadata {
  const path = localizePath(englishPath, locale);
  const alternates = languageAlternates(englishPath);
  const url = absoluteUrl(path);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: alternates.languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_US",
      url,
      siteName: siteConfig.name,
      title: copy.title,
      description: copy.description,
      images: shareImages,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: shareImages,
    },
  };
}

export function contactHref(locale: Locale) {
  return locale === "ar" ? "/ar#contact" : "/#contact";
}
