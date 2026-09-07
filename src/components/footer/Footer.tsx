import React from "react";
import Link from "next/link";
import { Share2, Globe } from "lucide-react";
import { Container } from "../common/Container";
import { NewsletterForm } from "./NewsletterForm";
import { localizePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/seo/ui";
import { navTree } from "@/lib/seo-nav";
import { solutions } from "@/content/seo/solutions";

type FooterProps = {
  locale?: Locale;
};

export const Footer = ({ locale = "en" }: FooterProps) => {
  const labels = ui[locale];
  const tree = navTree(locale);
  const home = localizePath("/", locale);

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
            <div className="flex gap-4">
              {[Globe, Share2].map((Icon, i) => (
                <Link key={i} href={home} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
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
            <h4 className="text-xl font-bold mb-8 tracking-tight">{locale === "ar" ? "النشرة" : "Newsletter"}</h4>
            <p className="text-gray-400 mb-8 font-medium">
              {locale === "ar"
                ? "أحدث تحديثات برمجيات الرعاية الصحية إلى بريدكم."
                : "Get the latest healthcare SaaS updates delivered to your inbox."}
            </p>
            <NewsletterForm />
            <p className="text-gray-500 text-xs mt-6">
              {solutions["hospital-management-system"][locale].name}
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} OnePath Solutions. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
            <Link href={localizePath("/solutions", locale)} className="hover:text-white">{labels.solutions}</Link>
            <Link href={localizePath("/specialties", locale)} className="hover:text-white">{labels.specialties}</Link>
            <Link href={localizePath("/locations", locale)} className="hover:text-white">{labels.locations}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
