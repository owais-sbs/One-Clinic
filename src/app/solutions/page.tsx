import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { solutions, solutionSlugs } from "@/content/seo/solutions";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";

const copy = {
  title: ui.en.solutionsHubTitle,
  description: ui.en.solutionsHubIntro,
  name: ui.en.solutions,
  h1: ui.en.solutionsHubTitle,
  intro: ui.en.solutionsHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.en.requestDemo,
};

export const metadata = pageMetadata("en", "/solutions", copy);

export default function SolutionsHubPage() {
  return (
    <SeoPageChrome locale="en" currentPath="/solutions">
      <SeoHub
        locale="en"
        englishPath="/solutions"
        title={ui.en.solutionsHubTitle}
        intro={ui.en.solutionsHubIntro}
        items={solutionSlugs.map((slug) => ({
          href: `/solutions/${slug}`,
          title: solutions[slug].en.name,
          description: solutions[slug].en.description,
        }))}
      />
    </SeoPageChrome>
  );
}
