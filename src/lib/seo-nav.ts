import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import { solutions, solutionSlugs, type SolutionSlug } from "@/content/seo/solutions";
import { specialties, specialtySlugs, type SpecialtySlug } from "@/content/seo/specialties";
import { cities, citySlugs, countries, countrySlugs, type CitySlug, type CountrySlug } from "@/content/seo/locations";
import { combos } from "@/content/seo/combos";
import type { Breadcrumb, RelatedLink } from "@/content/seo/types";

export function crumb(locale: Locale, name: string, englishPath: string): Breadcrumb {
  return { name, href: localizePath(englishPath, locale) };
}

export function solutionCrumbs(locale: Locale, slug: SolutionSlug): Breadcrumb[] {
  const labels = ui[locale];
  return [
    crumb(locale, labels.breadcrumbHome, "/"),
    crumb(locale, labels.solutions, "/solutions"),
    crumb(locale, solutions[slug][locale].name, `/solutions/${slug}`),
  ];
}

export function specialtyCrumbs(locale: Locale, slug: SpecialtySlug): Breadcrumb[] {
  const labels = ui[locale];
  return [
    crumb(locale, labels.breadcrumbHome, "/"),
    crumb(locale, labels.specialties, "/specialties"),
    crumb(locale, specialties[slug][locale].name, `/specialties/${slug}`),
  ];
}

export function countryCrumbs(locale: Locale, slug: CountrySlug): Breadcrumb[] {
  const labels = ui[locale];
  return [
    crumb(locale, labels.breadcrumbHome, "/"),
    crumb(locale, labels.locations, "/locations"),
    crumb(locale, countries[slug][locale].name, `/locations/${slug}`),
  ];
}

export function cityCrumbs(locale: Locale, slug: CitySlug): Breadcrumb[] {
  const city = cities[slug];
  const labels = ui[locale];
  return [
    crumb(locale, labels.breadcrumbHome, "/"),
    crumb(locale, labels.locations, "/locations"),
    crumb(locale, countries[city.country][locale].name, `/locations/${city.country}`),
    crumb(locale, city[locale].name, `/locations/${city.country}/${slug}`),
  ];
}

export function comboCrumbs(locale: Locale, country: CountrySlug, city: CitySlug, segment: string, name: string): Breadcrumb[] {
  return [
    ...cityCrumbs(locale, city),
    crumb(locale, name, `/locations/${country}/${city}/${segment}`),
  ];
}

export function defaultRelated(locale: Locale, englishPath: string): RelatedLink[] {
  const extras: RelatedLink[] = [
    { href: localizePath("/solutions/clinic-management-software", locale), label: solutions["clinic-management-software"][locale].name },
    { href: localizePath("/specialties/maternity", locale), label: specialties.maternity[locale].name },
    { href: localizePath("/locations/uae/dubai", locale), label: cities.dubai[locale].name },
    { href: localizePath("/locations/saudi-arabia/riyadh", locale), label: cities.riyadh[locale].name },
    { href: localizePath("/locations/india/hyderabad", locale), label: cities.hyderabad[locale].name },
  ];
  return extras.filter((link) => link.href !== localizePath(englishPath, locale)).slice(0, 6);
}

export function cityRelated(locale: Locale, slug: CitySlug): RelatedLink[] {
  const city = cities[slug];
  const countryCities = countries[city.country].cities
    .filter((item) => item !== slug)
    .map((item) => ({
      href: localizePath(`/locations/${city.country}/${item}`, locale),
      label: cities[item][locale].name,
    }));
  const cityCombos = combos
    .filter((combo) => combo.city === slug)
    .map((combo) => ({
      href: localizePath(`/locations/${combo.country}/${combo.city}/${combo.pathSegment}`, locale),
      label: combo.copy[locale].name,
    }));
  return [
    { href: localizePath("/solutions/clinic-management-software", locale), label: solutions["clinic-management-software"][locale].name },
    { href: localizePath("/specialties/maternity", locale), label: specialties.maternity[locale].name },
    { href: localizePath("/specialties/neurology", locale), label: specialties.neurology[locale].name },
    ...countryCities,
    ...cityCombos,
  ].slice(0, 8);
}

export function countryRelated(locale: Locale, slug: CountrySlug): RelatedLink[] {
  return countries[slug].cities.map((city) => ({
    href: localizePath(`/locations/${slug}/${city}`, locale),
    label: cities[city][locale].name,
  }));
}

export function navTree(locale: Locale) {
  return {
    solutions: solutionSlugs.map((slug) => ({
      href: localizePath(`/solutions/${slug}`, locale),
      label: solutions[slug][locale].name,
    })),
    specialties: specialtySlugs.map((slug) => ({
      href: localizePath(`/specialties/${slug}`, locale),
      label: specialties[slug][locale].name,
    })),
    locations: countrySlugs.map((slug) => ({
      href: localizePath(`/locations/${slug}`, locale),
      label: countries[slug][locale].name,
      children: countries[slug].cities.map((city) => ({
        href: localizePath(`/locations/${slug}/${city}`, locale),
        label: cities[city][locale].name,
      })),
    })),
  };
}

export { solutionSlugs, specialtySlugs, countrySlugs, citySlugs };
