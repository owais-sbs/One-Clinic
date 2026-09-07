import type { Locale } from "@/lib/i18n";

export type FaqItem = {
  question: string;
  answer: string;
};

export type SeoSection = {
  heading: string;
  body: string;
};

export type SeoBenefit = {
  title: string;
  text: string;
};

export type SeoCopy = {
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
  benefits: SeoBenefit[];
  faqs: FaqItem[];
  cta: string;
};

export type LocalizedCopy = Record<Locale, SeoCopy>;

export type Breadcrumb = {
  name: string;
  href: string;
};

export type RelatedLink = {
  href: string;
  label: string;
};
