import { SeoHub } from "@/components/seo/SeoHub";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { cities, citySlugs, countries, countrySlugs } from "@/content/seo/locations";
import { ui } from "@/content/seo/ui";
import { pageMetadata } from "@/lib/seo";

const copy = {
  title: ui.en.locationsHubTitle,
  description: ui.en.locationsHubIntro,
  name: ui.en.locations,
  h1: ui.en.locationsHubTitle,
  intro: ui.en.locationsHubIntro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: ui.en.requestDemo,
};

export const metadata = pageMetadata("en", "/locations", copy);

export default function LocationsHubPage() {
  return (
    <SeoPageChrome locale="en" currentPath="/locations">
      <SeoHub
        locale="en"
        englishPath="/locations"
        title={ui.en.locationsHubTitle}
        intro={ui.en.locationsHubIntro}
        items={[
          ...countrySlugs.map((slug) => ({
            href: `/locations/${slug}`,
            title: countries[slug].en.name,
            description: countries[slug].en.description,
          })),
          ...citySlugs.map((slug) => ({
            href: `/locations/${cities[slug].country}/${slug}`,
            title: cities[slug].en.name,
            description: cities[slug].en.description,
          })),
        ]}
      />
    </SeoPageChrome>
  );
}
