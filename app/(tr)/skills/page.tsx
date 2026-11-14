
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Yeteneklerim | C#, .NET, Python ve Topluluk Yönetimi",
  description:
    "Hayrullah Demir'in teknik ve profesyonel becerileri. C#, .NET, Python, Git, GitHub, topluluk yönetimi ve ekip koordinasyonu.",
  alternates: {
    canonical: "/skills",
    languages: {
      tr: "/skills",
      en: "/en/skills",
    },
  },
};

const skillGroups = [
  {
    number: "01",
    title: "Yazılım Geliştirme",
    description:
      "Yazılım geliştirme sürecinde kullandığım teknolojiler ve araçlar.",
    skills: [
      {
        name: "C#",
        description: "Programlama ve uygulama geliştirme",
        level: "Development",
      },
      {
        name: ".NET",
        description: "Uygulama geliştirme ekosistemi",
        level: "Framework",
      },
      {
        name: "Python",
        description: "Programlama ve problem çözme",
        level: "Programming",
      },
      {
        name: "Git",
        description: "Versiyon kontrolü",
        level: "Tool",
      },
      {
        name: "GitHub",
        description: "Kod yönetimi ve proje paylaşımı",
        level: "Platform",
      },
    ],
  },
  {
    number: "02",
    title: "Profesyonel Beceriler",
    description:
      "Topluluk yönetimi ve ekip çalışmalarında geliştirdiğim yetkinlikler.",
    skills: [
      {
        name: "Community Management",
        description: "Dijital toplulukların yönetimi ve geliştirilmesi",
        level: "Management",
      },
      {
        name: "Team Leadership",
        description: "Ekip koordinasyonu ve liderlik",
        level: "Leadership",
      },
      {
        name: "Moderation",
        description: "Topluluk kuralları ve moderasyon süreçleri",
        level: "Community",
      },
      {
        name: "Team Coordination",
        description: "Ekip içi iletişim ve görev koordinasyonu",
        level: "Teamwork",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="tr" currentPath="skills" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
              PORTFOLYO / BECERİLER
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Becerilerim ve{" "}
              <span className="text-blue-400">yetkinliklerim.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              Yazılım geliştirme ve dijital topluluk yönetimi alanlarında
              kullandığım teknolojileri ve geliştirdiğim profesyonel
              becerileri burada bulabilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 100}>
              <section>
                <div className="mb-7 flex items-start gap-5">
                  <span className="pt-1 text-sm font-semibold text-blue-400">
                    {group.number}
                  </span>

                  <div>
                    <h2 className="mb-2 text-2xl font-semibold">
                      {group.title}
                    </h2>
                    <p className="text-sm leading-6 text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <article
                      key={skill.name}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]"
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-sm font-bold text-blue-400">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>

                        <span className="text-xs text-gray-500">
                          {skill.level}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-semibold">
                        {skill.name}
                      </h3>

                      <p className="text-sm leading-6 text-gray-400">
                        {skill.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-20 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-400">
              GELİŞİM SÜRECİ
            </p>

            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Öğrenmeye ve gelişmeye devam ediyorum.
            </h2>

            <p className="max-w-2xl leading-7 text-gray-400">
              Yeni teknolojiler öğrenmeye, projeler geliştirerek deneyim
              kazanmaya ve topluluk yönetimi alanındaki yetkinliklerimi
              geliştirmeye devam ediyorum.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/"
              className="text-sm text-gray-400 transition hover:text-blue-400"
            >
              ← Ana sayfaya dön
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Hayrullah Demir. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
