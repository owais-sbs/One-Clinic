import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Services as Features } from "@/components/services/Services";
import { ProductShowcase } from "@/components/productShowcase/ProductShowcase";
import { WhyChooseUs } from "@/components/whyChooseUs/WhyChooseUs";
import { Markets } from "@/components/markets/Markets";
import { SpecialtyStrip } from "@/components/specialties/SpecialtyStrip";
import { Pricing } from "@/components/pricing/Pricing";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata("en", "/", {
    name: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    h1: siteConfig.title,
    intro: siteConfig.description,
    sections: [],
    benefits: [],
    faqs: [],
    cta: "Request Demo",
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar locale="en" currentPath="/" />
      <Hero />
      <Features />
      <Markets locale="en" />
      <SpecialtyStrip locale="en" />
      <ProductShowcase />
      <WhyChooseUs />
      <Pricing />
      <Contact locale="en" />
      <Footer locale="en" />
    </main>
  );
}
