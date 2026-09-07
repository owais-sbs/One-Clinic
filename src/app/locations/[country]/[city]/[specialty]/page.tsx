import { notFound } from "next/navigation";
import { combos, findCombo } from "@/content/seo/combos";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { comboCrumbs, defaultRelated } from "@/lib/seo-nav";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ country: string; city: string; specialty: string }> };

export function generateStaticParams() {
  return combos.map((combo) => ({
    country: combo.country,
    city: combo.city,
    specialty: combo.pathSegment,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { country, city, specialty } = await params;
  const combo = findCombo(country, city, specialty);
  if (!combo) return {};
  return pageMetadata("en", `/locations/${country}/${city}/${specialty}`, combo.copy.en);
}

export default async function ComboPage({ params }: Props) {
  const { country, city, specialty } = await params;
  const combo = findCombo(country, city, specialty);
  if (!combo) notFound();
  const path = `/locations/${country}/${city}/${specialty}`;
  return (
    <SeoPageChrome locale="en" currentPath={path}>
      <SeoLanding
        locale="en"
        englishPath={path}
        copy={combo.copy.en}
        breadcrumbs={comboCrumbs("en", combo.country, combo.city, combo.pathSegment, combo.copy.en.name)}
        related={defaultRelated("en", path)}
        areaServed={[combo.copy.en.name]}
      />
    </SeoPageChrome>
  );
}
