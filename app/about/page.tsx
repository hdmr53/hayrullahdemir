
export const instant = false;

import { translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const t = translations.tr.about;

  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="tr" currentPath="/about" />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
          {t.label}
        </p>

        <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-6xl">
          {t.title}
        </h1>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-400">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
          <p>{t.paragraph3}</p>
        </div>
      </section>
    </main>
  );
}
