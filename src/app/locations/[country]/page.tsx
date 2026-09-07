import { notFound } from "next/navigation";
import { countries, countrySlugs, type CountrySlug } from "@/content/seo/locations";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { countryCrumbs, countryRelated } from "@/lib/seo-nav";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ country: string }> };

function isCountry(slug: string): slug is CountrySlug {
  return countrySlugs.includes(slug as CountrySlug);
}

export function generateStaticParams() {
  return countrySlugs.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props) {
  const { country } = await params;
  if (!isCountry(country)) return {};
  return pageMetadata("en", `/locations/${country}`, countries[country].en);
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  if (!isCountry(country)) notFound();
  const path = `/locations/${country}`;
  return (
    <SeoPageChrome locale="en" currentPath={path}>
      <SeoLanding
        locale="en"
        englishPath={path}
        copy={countries[country].en}
        breadcrumbs={countryCrumbs("en", country)}
        related={countryRelated("en", country)}
        areaServed={[countries[country].en.name]}
      />
    </SeoPageChrome>
  );
}
