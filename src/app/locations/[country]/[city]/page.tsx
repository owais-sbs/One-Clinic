import { notFound } from "next/navigation";
import { cities, citySlugs, type CitySlug } from "@/content/seo/locations";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { cityCrumbs, cityRelated } from "@/lib/seo-nav";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ country: string; city: string }> };

function isCity(slug: string): slug is CitySlug {
  return citySlugs.includes(slug as CitySlug);
}

export function generateStaticParams() {
  return citySlugs.map((city) => ({ country: cities[city].country, city }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  if (!isCity(city)) return {};
  const record = cities[city];
  return pageMetadata("en", `/locations/${record.country}/${city}`, record.en);
}

export default async function CityPage({ params }: Props) {
  const { country, city } = await params;
  if (!isCity(city) || cities[city].country !== country) notFound();
  const path = `/locations/${country}/${city}`;
  return (
    <SeoPageChrome locale="en" currentPath={path}>
      <SeoLanding
        locale="en"
        englishPath={path}
        copy={cities[city].en}
        breadcrumbs={cityCrumbs("en", city)}
        related={cityRelated("en", city)}
        areaServed={[cities[city].en.name, cities[city].en.name]}
      />
    </SeoPageChrome>
  );
}
