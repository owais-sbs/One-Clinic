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
  return pageMetadata("en", `/specialties/${slug}`, specialties[slug].en);
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  if (!isSpecialty(slug)) notFound();
  const path = `/specialties/${slug}`;
  return (
    <SeoPageChrome locale="en" currentPath={path}>
      <SeoLanding
        locale="en"
        englishPath={path}
        copy={specialties[slug].en}
        breadcrumbs={specialtyCrumbs("en", slug)}
        related={defaultRelated("en", path)}
        areaServed={["United Arab Emirates", "Saudi Arabia", "Hyderabad, India"]}
      />
    </SeoPageChrome>
  );
}
