import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactHref } from "@/lib/seo";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import type { Breadcrumb, RelatedLink, SeoCopy } from "@/content/seo/types";

type SeoLandingProps = {
  locale: Locale;
  englishPath: string;
  copy: SeoCopy;
  breadcrumbs: Breadcrumb[];
  related: RelatedLink[];
  areaServed?: string[];
};

export function SeoLanding({
  locale,
  englishPath,
  copy,
  breadcrumbs,
  related,
  areaServed,
}: SeoLandingProps) {
  const labels = ui[locale];
  const path = localizePath(englishPath, locale);
  const demoHref = contactHref(locale);

  return (
    <>
      <JsonLd
        title={copy.title}
        description={copy.description}
        path={path}
        breadcrumbs={breadcrumbs}
        faqs={copy.faqs}
        areaServed={areaServed}
      />
      <Section className="pt-32 bg-white">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-black font-medium">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-black">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{copy.name}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black max-w-4xl mb-6">
            {copy.h1}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">{copy.intro}</p>
          <Link href={demoHref}>
            <Button variant="primary" className="h-12 px-8">
              {copy.cta}
            </Button>
          </Link>
        </Container>
      </Section>

      <Section className="bg-gray-50/70">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-5">
                  <Check size={18} />
                </div>
                <h2 className="text-xl font-bold text-black mb-3">{benefit.title}</h2>
                <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl space-y-12">
            {copy.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-3xl font-bold text-black mb-4">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50/70">
        <Container>
          <h2 className="text-3xl font-bold text-black mb-10">{labels.faq}</h2>
          <div className="max-w-3xl space-y-6">
            {copy.faqs.map((faq) => (
              <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 p-6">
                <summary className="font-bold text-black cursor-pointer">{faq.question}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-black mb-8">{labels.related}</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-black hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-black text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{copy.cta}</h2>
          <Link href={demoHref}>
            <Button variant="secondary" className="h-12 px-8">
              {labels.requestDemo}
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
