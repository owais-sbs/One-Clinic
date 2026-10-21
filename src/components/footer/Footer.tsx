import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "../common/Container";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import { navTree } from "@/lib/seo-nav";
import { siteConfig } from "@/lib/site";

type FooterProps = {
  locale?: Locale;
};

export const Footer = ({ locale = "en" }: FooterProps) => {
  const labels = ui[locale];
  const tree = navTree(locale);
  const home = localizePath("/", locale);
  const privacyHref = "/privacy-policy";
  const termsHref = "/terms";

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href={home} className="text-3xl font-bold tracking-tighter block">
              One clinic <span className="text-accent">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed font-medium">
              {locale === "ar"
                ? "نمكّن العيادات والمستشفيات ببرمجيات إدارة حديثة في الإمارات والسعودية وحيدر آباد."
                : "Empowering clinics and hospitals with clinic management software across the UAE, Saudi Arabia, and Hyderabad."}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">{labels.solutions}</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              {tree.solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={localizePath("/specialties/maternity", locale)} className="hover:text-white transition-colors duration-300">
                  {locale === "ar" ? "النساء والولادة" : "Maternity software"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">{labels.locations}</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              {tree.locations.flatMap((country) => country.children).map((city) => (
                <li key={city.href}>
                  <Link href={city.href} className="hover:text-white transition-colors duration-300">
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.08em] sm:text-base">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-6 text-gray-400 font-medium">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" aria-hidden />
                <span className="leading-relaxed whitespace-pre-line">{siteConfig.headquarters}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0 text-accent" aria-hidden />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium">
            <p className="text-gray-500">
              © {new Date().getFullYear()} OnePath Solutions.{" "}
              {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
            </p>
            <p className="text-gray-400">
              {locale === "ar" ? "المنتج مملوك لـ" : "Product Owned By"}{" "}
              <a
                href={siteConfig.ownerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                OnePath
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
            <Link href={privacyHref} className="hover:text-white">
              {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link href={termsHref} className="hover:text-white">
              {locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
