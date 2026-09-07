import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { cities, citySlugs, countries, countrySlugs } from "@/content/seo/locations";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";
import { localizePath } from "@/lib/i18n";

const copy = {
  title: ui.ar.locationsHubTitle,
  description: ui.ar.locationsHubIntro,
  name: ui.ar.locations,
  h1: ui.ar.locationsHubTitle,
  intro: ui.ar.locationsHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.ar.requestDemo,
};

export const metadata = pageMetadata("ar", "/locations", copy);

export default function ArLocationsHubPage() {
  return (
    <SeoPageChrome locale="ar" currentPath="/ar/locations">
      <SeoHub
        locale="ar"
        englishPath="/locations"
        title={ui.ar.locationsHubTitle}
        intro={ui.ar.locationsHubIntro}
        items={[
          ...countrySlugs.map((slug) => ({
            href: localizePath(`/locations/${slug}`, "ar"),
            title: countries[slug].ar.name,
            description: countries[slug].ar.description,
          })),
          ...citySlugs.map((slug) => ({
            href: localizePath(`/locations/${cities[slug].country}/${slug}`, "ar"),
            title: cities[slug].ar.name,
            description: cities[slug].ar.description,
          })),
        ]}
      />
    </SeoPageChrome>
  );
}
