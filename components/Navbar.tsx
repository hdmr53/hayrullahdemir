
"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
  currentPath?: string;
};

export default function Navbar({
  locale,
  currentPath = "",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const basePath = locale === "en" ? "/en" : "";
  const homePath = basePath || "/";

  const normalizedPath = currentPath
    ? currentPath.startsWith("/")
      ? currentPath
      : `/${currentPath}`
    : "";

  const trPath = normalizedPath;
  const enPath = `/en${normalizedPath}`;

  return (
    <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
      <Link
        href={homePath}
        className="text-xl font-bold tracking-tight"
      >
        Hayrullah<span className="text-blue-500">.</span>
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
        <Link href={homePath} className="transition hover:text-white">
          {locale === "tr" ? "Anasayfa" : "Home"}
        </Link>

        <Link href={`${basePath}/about`} className="transition hover:text-white">
          {locale === "tr" ? "Hakkımda" : "About"}
        </Link>

        <Link href={`${homePath}#projects`} className="transition hover:text-white">
          {locale === "tr" ? "Projeler" : "Projects"}
        </Link>

        <Link href={`${homePath}#skills`} className="transition hover:text-white">
          {locale === "tr" ? "Beceriler" : "Skills"}
        </Link>

        <Link href={`${homePath}#contact`} className="transition hover:text-white">
          {locale === "tr" ? "İletişim" : "Contact"}
        </Link>
      </div>

      {/* Right side: mobile menu + language */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-300 md:hidden"
          aria-label={locale === "tr" ? "Menüyü aç veya kapat" : "Toggle menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link
            href={trPath || "/"}
            className={
              locale === "tr"
                ? "text-blue-400"
                : "text-gray-500 hover:text-white"
            }
          >
            TR
          </Link>

          <span className="text-gray-700">/</span>

          <Link
            href={enPath || "/en"}
            className={
              locale === "en"
                ? "text-blue-400"
                : "text-gray-500 hover:text-white"
            }
          >
            EN
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#080b12] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-sm text-gray-300">
            <Link href={homePath} onClick={() => setIsMenuOpen(false)}>
              {locale === "tr" ? "Anasayfa" : "Home"}
            </Link>

            <Link href={`${basePath}/about`} onClick={() => setIsMenuOpen(false)}>
              {locale === "tr" ? "Hakkımda" : "About"}
            </Link>

            <Link href={`${homePath}#projects`} onClick={() => setIsMenuOpen(false)}>
              {locale === "tr" ? "Projeler" : "Projects"}
            </Link>

            <Link href={`${homePath}#skills`} onClick={() => setIsMenuOpen(false)}>
              {locale === "tr" ? "Beceriler" : "Skills"}
            </Link>

            <Link href={`${homePath}#contact`} onClick={() => setIsMenuOpen(false)}>
              {locale === "tr" ? "İletişim" : "Contact"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
