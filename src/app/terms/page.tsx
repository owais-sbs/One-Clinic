import type { Metadata } from "next";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsOfService } from "@/content/legal/terms-of-service";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("en", "/terms", {
  name: "Terms of Service",
  title: "Terms of Service | One Clinic",
  description: termsOfService.intro,
  h1: termsOfService.title,
  intro: termsOfService.intro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: "Contact Us",
});

export default function TermsPage() {
  return (
    <SeoPageChrome locale="en" currentPath="/terms">
      <LegalDocument
        title={termsOfService.title}
        effectiveDate={termsOfService.effectiveDate}
        intro={termsOfService.intro}
        sections={termsOfService.sections}
      />
    </SeoPageChrome>
  );
}
