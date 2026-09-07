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
  return pageMetadata("en", `/solutions/${slug}`, solutions[slug].en);
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  if (!isSolution(slug)) notFound();
  const path = `/solutions/${slug}`;
  return (
    <SeoPageChrome locale="en" currentPath={path}>
      <SeoLanding
        locale="en"
        englishPath={path}
        copy={solutions[slug].en}
        breadcrumbs={solutionCrumbs("en", slug)}
        related={defaultRelated("en", path)}
        areaServed={["United Arab Emirates", "Saudi Arabia", "Hyderabad, India"]}
      />
    </SeoPageChrome>
  );
}
