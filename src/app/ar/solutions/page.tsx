import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { solutions, solutionSlugs } from "@/content/seo/solutions";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";
import { localizePath } from "@/lib/i18n";

const copy = {
  title: ui.ar.solutionsHubTitle,
  description: ui.ar.solutionsHubIntro,
  name: ui.ar.solutions,
  h1: ui.ar.solutionsHubTitle,
  intro: ui.ar.solutionsHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.ar.requestDemo,
};

export const metadata = pageMetadata("ar", "/solutions", copy);

export default function ArSolutionsHubPage() {
  return (
    <SeoPageChrome locale="ar" currentPath="/ar/solutions">
      <SeoHub
        locale="ar"
        englishPath="/solutions"
        title={ui.ar.solutionsHubTitle}
        intro={ui.ar.solutionsHubIntro}
        items={solutionSlugs.map((slug) => ({
          href: localizePath(`/solutions/${slug}`, "ar"),
          title: solutions[slug].ar.name,
          description: solutions[slug].ar.description,
        }))}
      />
    </SeoPageChrome>
  );
}
