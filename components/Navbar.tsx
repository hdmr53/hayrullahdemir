
import Link from "next/link";
import type { Locale } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
  currentPath?: string;
};

export default function Navbar({
  locale,
  currentPath = "",
}: NavbarProps) {
  const basePath = locale === "en" ? "/en" : "";

  const languagePath = currentPath
    ? currentPath.startsWith("/")
      ? currentPath
      : `/${currentPath}`
    : "";

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
      <Link
        href={locale === "en" ? "/en" : "/"}
        className="text-xl font-bold tracking-tight"
      >
        Hayrullah<span className="text-blue-500">.</span>
      </Link>

      <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
        <Link href={basePath || "/"} className="transition hover:text-white">
  {     locale === "tr" ? "Anasayfa" : "Home"}
        </Link> 
        <Link href={`${basePath}/about`} className="transition hover:text-white">
          {locale === "tr" ? "Hakkımda" : "About"}
        </Link>

        <Link href={`${basePath}/projects`} className="transition hover:text-white">
          {locale === "tr" ? "Projeler" : "Projects"}
        </Link>

        <Link href={`${basePath}/skills`} className="transition hover:text-white">
          {locale === "tr" ? "Beceriler" : "Skills"}
        </Link>

        <Link href={`${basePath}/contact`} className="transition hover:text-white">
          {locale === "tr" ? "İletişim" : "Contact"}
        </Link>
      </div>

      <div className="flex items-center gap-3 text-sm font-semibold">
        <Link
          href={languagePath}
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
          href={`/en${languagePath}`}
          className={
            locale === "en"
              ? "text-blue-400"
              : "text-gray-500 hover:text-white"
          }
        >
          EN
        </Link>
      </div>
    </nav>
  );
}
