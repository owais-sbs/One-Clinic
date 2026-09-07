"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";
import { localizePath, type Locale } from "@/lib/i18n";
import { contactHref } from "@/lib/seo";
import { ui } from "@/content/seo/ui";
import { navTree } from "@/lib/seo-nav";

type NavbarProps = {
  locale?: Locale;
  currentPath?: string;
};

export const Navbar = ({ locale = "en", currentPath = "/" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const labels = ui[locale];
  const tree = navTree(locale);
  const home = localizePath("/", locale);
  const demoHref = contactHref(locale);
  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchHref = localizePath(currentPath.startsWith("/ar") ? currentPath.replace(/^\/ar/, "") || "/" : currentPath, otherLocale);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-morphism py-4" : "bg-white/80 py-6"}`}>
      <Container className="flex items-center justify-between gap-4">
        <Link href={home} className="text-2xl font-bold tracking-tight shrink-0">
          One clinic  <span className="text-accent">.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link href={home} className="text-sm font-medium hover:text-accent transition-colors">
            {labels.home}
          </Link>
          <DesktopMenu label={labels.solutions} href={localizePath("/solutions", locale)} items={tree.solutions} />
          <DesktopMenu label={labels.specialties} href={localizePath("/specialties", locale)} items={tree.specialties} />
          <DesktopMenu
            label={labels.locations}
            href={localizePath("/locations", locale)}
            items={tree.locations.flatMap((country) => [
              { href: country.href, label: country.label },
              ...country.children,
            ])}
          />
          <Link href={`${home}#pricing`} className="text-sm font-medium hover:text-accent transition-colors">
            {labels.pricing}
          </Link>
          <Link href={demoHref} className="text-sm font-medium hover:text-accent transition-colors">
            {labels.contact}
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            className="text-xs font-bold border border-gray-200 rounded-full px-3 py-1 hover:bg-black hover:text-white"
          >
            {otherLocale === "ar" ? labels.arabic : labels.english}
          </Link>
          <Link href={demoHref}>
            <Button variant="primary">{labels.requestDemo}</Button>
          </Link>
        </div>

        <button className="lg:hidden text-black p-2" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </Container>

      <MobileMenu locale={locale} currentPath={currentPath} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

function DesktopMenu({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="relative group">
      <Link href={href} className="text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-1">
        {label}
        <ChevronDown size={14} />
      </Link>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full start-0 pt-3 min-w-64">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-soft p-3 max-h-96 overflow-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-xl text-sm hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
