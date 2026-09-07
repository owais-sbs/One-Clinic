import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import { countries, cities, countrySlugs } from "@/content/seo/locations";

export function Markets({ locale = "en" }: { locale?: Locale }) {
  const labels = ui[locale];

  return (
    <Section id="markets" className="bg-gray-50/70">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-black">{labels.marketsTitle}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{labels.marketsIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countrySlugs.map((slug) => {
            const country = countries[slug];
            return (
              <div key={slug} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
                <h3 className="text-2xl font-bold text-black mb-3">{country[locale].name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{country[locale].intro}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {country.cities.map((city) => (
                    <Link
                      key={city}
                      href={localizePath(`/locations/${slug}/${city}`, locale)}
                      className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-sm hover:bg-black hover:text-white"
                    >
                      {cities[city][locale].name}
                    </Link>
                  ))}
                </div>
                <Link href={localizePath(`/locations/${slug}`, locale)} className="text-sm font-bold underline">
                  {labels.explore}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
