import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import { specialties, specialtySlugs } from "@/content/seo/specialties";

export function SpecialtyStrip({ locale = "en" }: { locale?: Locale }) {
  const labels = ui[locale];

  return (
    <Section id="specialties" className="bg-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-black">{labels.specialtiesTitle}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{labels.specialtiesIntro}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialtySlugs.map((slug) => (
            <Link
              key={slug}
              href={localizePath(`/specialties/${slug}`, locale)}
              className="p-6 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-black hover:text-white transition-colors"
            >
              <h3 className="font-bold text-lg">{specialties[slug][locale].name}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
