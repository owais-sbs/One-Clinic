import type { Metadata } from "next";
import { Markets } from "@/components/markets/Markets";
import { SpecialtyStrip } from "@/components/specialties/SpecialtyStrip";
import { Pricing } from "@/components/pricing/Pricing";
import { Contact } from "@/components/contact/Contact";
import { SeoPageChrome } from "@/components/seo/SeoPageChrome";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMetadata("ar", "/", {
  name: "وان كلينك",
  title: "وان كلينك | برنامج إدارة العيادات والمستشفيات",
  description:
    "برنامج إدارة عيادات ونظام مستشفيات وإدارة مرضى للإمارات والسعودية وحيدر آباد. حلول للنساء والأعصاب والقلب والمراكز متعددة التخصصات.",
  h1: "برنامج إدارة العيادات للمستشفيات والعيادات",
  intro:
    "ابنوا وأديروا ووسّعوا أعمالكم الصحية مع وان كلينك من وان باث سوليوشنز.",
  sections: [],
  benefits: [],
  faqs: [],
  cta: "اطلب عرضاً",
});

export default function ArabicHome() {
  return (
    <SeoPageChrome locale="ar" currentPath="/ar">
      <Section id="hero" className="pt-32 bg-white">
        <Container>
          <p className="text-sm font-bold mb-4 text-gray-500">وان باث سوليوشنز</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black max-w-4xl mb-6">
            برنامج إدارة العيادات للمستشفيات والعيادات
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            حلول عيادات وأنظمة مستشفيات وإدارة مرضى لدبي والشارقة وعجمان والرياض وجدة والدمام وحيدر آباد — مع سير عمل للنساء والأعصاب والتخصصات الأخرى.
          </p>
          <Link href="/ar#contact">
            <Button variant="primary" className="h-12 px-8">
              اطلب عرضاً
            </Button>
          </Link>
        </Container>
      </Section>
      <Markets locale="ar" />
      <SpecialtyStrip locale="ar" />
      <div id="pricing">
        <Pricing />
      </div>
      <Contact locale="ar" />
    </SeoPageChrome>
  );
}
