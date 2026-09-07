"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { localizePath, type Locale } from "@/lib/i18n";
import { contactHref } from "@/lib/seo";
import { ui } from "@/content/seo/ui";
import { navTree } from "@/lib/seo-nav";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
  currentPath?: string;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  locale = "en",
  currentPath = "/",
}) => {
  const labels = ui[locale];
  const tree = navTree(locale);
  const home = localizePath("/", locale);
  const demoHref = contactHref(locale);
  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchHref = localizePath(
    currentPath.startsWith("/ar") ? currentPath.replace(/^\/ar/, "") || "/" : currentPath,
    otherLocale
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
          />
          <motion.div
            initial={{ x: locale === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 end-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-8 lg:hidden shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-end mb-8">
              <button onClick={onClose} className="p-2 hover:bg-gray-soft rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <Link href={home} onClick={onClose} className="text-xl font-medium">
                {labels.home}
              </Link>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{labels.solutions}</p>
              {tree.solutions.map((item) => (
                <Link key={item.href} href={item.href} onClick={onClose} className="text-base">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{labels.specialties}</p>
              {tree.specialties.map((item) => (
                <Link key={item.href} href={item.href} onClick={onClose} className="text-base">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{labels.locations}</p>
              {tree.locations.map((country) => (
                <div key={country.href} className="space-y-2">
                  <Link href={country.href} onClick={onClose} className="text-base font-semibold">
                    {country.label}
                  </Link>
                  {country.children.map((city) => (
                    <Link key={city.href} href={city.href} onClick={onClose} className="block text-sm text-gray-600 ps-3">
                      {city.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href={`${home}#pricing`} onClick={onClose} className="text-xl font-medium">
                {labels.pricing}
              </Link>
              <Link href={switchHref} onClick={onClose} className="text-xl font-medium">
                {otherLocale === "ar" ? labels.arabic : labels.english}
              </Link>
              <div className="mt-6">
                <Link href={demoHref} onClick={onClose}>
                  <Button variant="primary" className="w-full">
                    {labels.requestDemo}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
