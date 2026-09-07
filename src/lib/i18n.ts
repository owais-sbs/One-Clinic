export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    if (normalized === "/") return "/ar";
    if (normalized.startsWith("/ar")) return normalized;
    return `/ar${normalized}`;
  }
  return normalized.startsWith("/ar/")
    ? normalized.replace(/^\/ar/, "") || "/"
    : normalized === "/ar"
      ? "/"
      : normalized;
}

export function alternatePath(path: string, locale: Locale) {
  return localizePath(path, locale === "ar" ? "en" : "ar");
}
