import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { HtmlLang } from "@/components/seo/HtmlLang";
import type { Locale } from "@/lib/i18n";

export function SeoPageChrome({
  locale,
  currentPath,
  children,
}: {
  locale: Locale;
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <main className={`min-h-screen bg-white ${locale === "ar" ? "font-arabic" : ""}`} lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <HtmlLang locale={locale} />
      <Navbar locale={locale} currentPath={currentPath} />
      {children}
      <Footer locale={locale} />
    </main>
  );
}
