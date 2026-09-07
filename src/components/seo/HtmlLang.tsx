"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale === "ar" ? "ar" : "en";
    html.dir = locale === "ar" ? "rtl" : "ltr";
    return () => {
      html.lang = "en";
      html.dir = "ltr";
    };
  }, [locale]);

  return null;
}
