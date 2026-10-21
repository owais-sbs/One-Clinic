import type { Metadata } from "next";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/content/legal/privacy-policy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("en", "/privacy-policy", {
  name: "Privacy Policy",
  title: "Privacy Policy | One Clinic",
  description: privacyPolicy.intro,
  h1: privacyPolicy.title,
  intro: privacyPolicy.intro,
  sections: [],
  benefits: [],
  faqs: [],
  cta: "Contact Us",
});

export default function PrivacyPolicyPage() {
  return (
    <SeoPageChrome locale="en" currentPath="/privacy-policy">
      <LegalDocument
        title={privacyPolicy.title}
        effectiveDate={privacyPolicy.effectiveDate}
        intro={privacyPolicy.intro}
        sections={privacyPolicy.sections}
      />
    </SeoPageChrome>
  );
}
