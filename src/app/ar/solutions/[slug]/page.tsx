import { notFound } from "next/navigation";
import { solutions, solutionSlugs, type SolutionSlug } from "@/content/seo/solutions";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { defaultRelated, solutionCrumbs } from "@/lib/seo-nav";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

function isSolution(slug: string): slug is SolutionSlug {
  return solutionSlugs.includes(slug as SolutionSlug);
}

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isSolution(slug)) return {};
  return pageMetadata("ar", `/solutions/${slug}`, solutions[slug].ar);
}

export default async function ArSolutionPage({ params }: Props) {
  const { slug } = await params;
  if (!isSolution(slug)) notFound();
  const path = `/solutions/${slug}`;
  return (
    <SeoPageChrome locale="ar" currentPath={`/ar${path}`}>
      <SeoLanding
        locale="ar"
        englishPath={path}
        copy={solutions[slug].ar}
        breadcrumbs={solutionCrumbs("ar", slug)}
        related={defaultRelated("ar", path)}
        areaServed={["الإمارات العربية المتحدة", "المملكة العربية السعودية", "حيدر آباد"]}
      />
    </SeoPageChrome>
  );
}
