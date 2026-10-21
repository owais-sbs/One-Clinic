"use client";

import React from "react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current sm:h-9 sm:w-9">
        <path d="M19.11 17.4c-.28-.14-1.64-.81-1.89-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.65.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
        <path d="M16.04 3C9.4 3 4 8.37 4 14.96c0 2.11.55 4.16 1.6 5.97L4 29l8.28-1.57a12.1 12.1 0 0 0 3.76.59h.01c6.64 0 12.04-5.37 12.04-11.96C28.09 8.37 22.68 3 16.04 3zm0 21.84h-.01a10.1 10.1 0 0 1-5.14-1.41l-.37-.22-4.91.93.99-4.79-.24-.38a10.03 10.03 0 0 1-1.54-5.35c0-5.54 4.53-10.04 10.1-10.04 5.57 0 10.1 4.5 10.1 10.04 0 5.54-4.53 10.04-10.1 10.04z" />
      </svg>
    </a>
  );
}
