import { notFound } from "next/navigation";
import { specialties, specialtySlugs, type SpecialtySlug } from "@/content/seo/specialties";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { defaultRelated, specialtyCrumbs } from "@/lib/seo-nav";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

function isSpecialty(slug: string): slug is SpecialtySlug {
  return specialtySlugs.includes(slug as SpecialtySlug);
}

export function generateStaticParams() {
  return specialtySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isSpecialty(slug)) return {};
  return pageMetadata("ar", `/specialties/${slug}`, specialties[slug].ar);
}

export default async function ArSpecialtyPage({ params }: Props) {
  const { slug } = await params;
  if (!isSpecialty(slug)) notFound();
  const path = `/specialties/${slug}`;
  return (
    <SeoPageChrome locale="ar" currentPath={`/ar${path}`}>
      <SeoLanding
        locale="ar"
        englishPath={path}
        copy={specialties[slug].ar}
        breadcrumbs={specialtyCrumbs("ar", slug)}
        related={defaultRelated("ar", path)}
        areaServed={["الإمارات العربية المتحدة", "المملكة العربية السعودية", "حيدر آباد"]}
      />
    </SeoPageChrome>
  );
}
