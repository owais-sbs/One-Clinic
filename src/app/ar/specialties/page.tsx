import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { specialties, specialtySlugs } from "@/content/seo/specialties";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";
import { localizePath } from "@/lib/i18n";

const copy = {
  title: ui.ar.specialtiesHubTitle,
  description: ui.ar.specialtiesHubIntro,
  name: ui.ar.specialties,
  h1: ui.ar.specialtiesHubTitle,
  intro: ui.ar.specialtiesHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.ar.requestDemo,
};

export const metadata = pageMetadata("ar", "/specialties", copy);

export default function ArSpecialtiesHubPage() {
  return (
    <SeoPageChrome locale="ar" currentPath="/ar/specialties">
      <SeoHub
        locale="ar"
        englishPath="/specialties"
        title={ui.ar.specialtiesHubTitle}
        intro={ui.ar.specialtiesHubIntro}
        items={specialtySlugs.map((slug) => ({
          href: localizePath(`/specialties/${slug}`, "ar"),
          title: specialties[slug].ar.name,
          description: specialties[slug].ar.description,
        }))}
      />
    </SeoPageChrome>
  );
}
