
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const basePath = locale === "en" ? "/en" : "";
  const homePath = basePath || "/";

  const normalizedPath = currentPath
    ? currentPath.startsWith("/")
      ? currentPath
      : `/${currentPath}`
    : "";

  const trPath = normalizedPath || "/";
  const enPath = `/en${normalizedPath}`;

  const links = [
    {
      label: locale === "tr" ? "Anasayfa" : "Home",
      href: homePath,
    },
    {
      label: locale === "tr" ? "Hakkımda" : "About",
      href: `${basePath}/about`,
    },
    {
      label: locale === "tr" ? "Projeler" : "Projects",
      href: `${basePath}/projects`,
    },
    {
      label: locale === "tr" ? "Beceriler" : "Skills",
      href: `${basePath}/skills`,
    },
    {
      label: locale === "tr" ? "İletişim" : "Contact",
      href: `${basePath}/contact`,
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
      {/* Logo */}
      <Link href={homePath} className="text-xl font-bold tracking-tight">
        HDMR<span className="text-blue-500"></span>
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 text-sm md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              isActive(link.href)
                ? "text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
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
            href={trPath}
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
            href={enPath}
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
          <div className="flex flex-col gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
