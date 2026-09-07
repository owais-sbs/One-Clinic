import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { specialties, specialtySlugs } from "@/content/seo/specialties";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";

const copy = {
  title: ui.en.specialtiesHubTitle,
  description: ui.en.specialtiesHubIntro,
  name: ui.en.specialties,
  h1: ui.en.specialtiesHubTitle,
  intro: ui.en.specialtiesHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.en.requestDemo,
};

export const metadata = pageMetadata("en", "/specialties", copy);

export default function SpecialtiesHubPage() {
  return (
    <SeoPageChrome locale="en" currentPath="/specialties">
      <SeoHub
        locale="en"
        englishPath="/specialties"
        title={ui.en.specialtiesHubTitle}
        intro={ui.en.specialtiesHubIntro}
        items={specialtySlugs.map((slug) => ({
          href: `/specialties/${slug}`,
          title: specialties[slug].en.name,
          description: specialties[slug].en.description,
        }))}
      />
    </SeoPageChrome>
  );
}
