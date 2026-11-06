import Link from "next/link";
import type { Locale } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
      <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
        Hayrullah<span className="text-blue-500">.</span>
      </Link>

      <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
        <a href="#about" className="transition hover:text-white">
          {locale === "tr" ? "Hakkımda" : "About"}
        </a>

        <a href="#projects" className="transition hover:text-white">
          {locale === "tr" ? "Projeler" : "Projects"}
        </a>

        <a href="#skills" className="transition hover:text-white">
          {locale === "tr" ? "Beceriler" : "Skills"}
        </a>

        <a href="#contact" className="transition hover:text-white">
          {locale === "tr" ? "İletişim" : "Contact"}
        </a>
      </div>

      <div className="flex items-center gap-3 text-sm font-semibold">
        <Link
          href="/tr"
          className={locale === "tr" ? "text-blue-400" : "text-gray-500 hover:text-white"}
        >
          TR
        </Link>

        <span className="text-gray-700">/</span>

        <Link
          href="/en"
          className={locale === "en" ? "text-blue-400" : "text-gray-500 hover:text-white"}
        >
          EN
        </Link>
      </div>
    </nav>
  );
}