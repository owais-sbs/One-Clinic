import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import type { Breadcrumb, FaqItem } from "@/content/seo/types";

type JsonLdProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbs: Breadcrumb[];
  faqs: FaqItem[];
  areaServed?: string[];
};

export function JsonLd({ title, description, path, breadcrumbs, faqs, areaServed }: JsonLdProps) {
  const pageUrl = absoluteUrl(path);
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.company,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}#software`,
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      provider: { "@id": `${siteConfig.url}#organization` },
      description: siteConfig.description,
    },
    {
      "@type": "Service",
      name: title,
      description,
      provider: { "@id": `${siteConfig.url}#organization` },
      serviceType: "Clinic and hospital management software",
      areaServed: areaServed?.map((name) => ({ "@type": "Place", name })),
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.href),
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
