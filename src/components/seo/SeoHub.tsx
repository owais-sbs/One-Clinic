import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import type { Breadcrumb } from "@/content/seo/types";

type HubItem = {
  href: string;
  title: string;
  description: string;
};

export function SeoHub({
  locale,
  englishPath,
  title,
  intro,
  items,
}: {
  locale: Locale;
  englishPath: string;
  title: string;
  intro: string;
  items: HubItem[];
}) {
  const labels = ui[locale];
  const path = localizePath(englishPath, locale);
  const breadcrumbs: Breadcrumb[] = [
    { name: labels.breadcrumbHome, href: localizePath("/", locale) },
    { name: title, href: path },
  ];

  return (
    <>
      <JsonLd
        title={title}
        description={intro}
        path={path}
        breadcrumbs={breadcrumbs}
        faqs={[]}
      />
      <Section className="pt-32 bg-white">
        <Container>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black mb-6">{title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">{intro}</p>
        </Container>
      </Section>
      <Section className="bg-gray-50/70">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:border-black transition-colors"
              >
                <h2 className="text-xl font-bold text-black mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
