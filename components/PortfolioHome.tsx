
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/translations";

type PortfolioHomeProps = {
  locale: Locale;
};

export default function PortfolioHome({ locale }: PortfolioHomeProps) {
  const basePath = locale === "en" ? "/en" : "";
  const isTr = locale === "tr";

  const skills = [
    "C#",
    ".NET",
    "Python",
    "Git",
    "GitHub",
    "Team Leadership",
    "Community Management",
  ];

  const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale={locale} />

      {/* HERO */}
      <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">
              {isTr
                ? "Merhaba, portfolyoma hoş geldiniz."
                : "Welcome to my portfolio."}
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {isTr ? "Merhaba, ben" : "Hi, I'm"}
            <br />
            Hayrullah Demir<span className="text-blue-500"></span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-gray-300 md:text-2xl">
            Software Developer <span className="text-blue-500">&amp;</span>{" "}
            Community Manager
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            {isTr
              ? "Yazılım geliştirmeyi, yeni şeyler öğrenmeyi ve fikirlerimi projelere dönüştürmeyi seviyorum. Aynı zamanda dijital toplulukların yönetimi ve geliştirilmesiyle ilgileniyorum. Her iki alanda da kendimi geliştirmeye devam ediyorum."
              : "I enjoy software development, learning new things and turning ideas into projects. I'm also interested in managing and growing digital communities. I'm continuously developing my skills in both areas."}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`${basePath}/projects`}
              className="button-hover rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              {isTr ? "Projelerimi Gör" : "Explore My Projects"}
            </Link>

            <Link
              href={`${basePath}/contact`}
              className="button-hover rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              {isTr ? "İletişime Geç" : "Get in Touch"}
            </Link>
          </div>
        </div>

        {/* PROFILE CARD */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-in delay-200">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1422] p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-gray-500">
                {isTr ? "KİŞİSEL PROFİL" : "PERSONAL PROFILE"}
              </span>
              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>

            <div className="my-10 flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-600/30 to-[#080b12] shadow-[0_0_60px_rgba(37,99,235,0.15)]">
                <span className="text-6xl font-bold tracking-tighter">
                  H<span className="text-blue-500">D</span>
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">Hayrullah Demir</h3>
              <p className="mt-3 text-sm text-blue-400">
                Software Developer & Community Manager
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  {isTr ? "Odak Alanı" : "Focus"}
                </span>
                <span className="text-right text-gray-300">
                  {isTr ? "Yazılım & Topluluk" : "Software & Community"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  {isTr ? "Konum" : "Location"}
                </span>
                <span className="text-gray-300">Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              {isTr ? "UZMANLIK ALANLARI" : "AREAS OF INTEREST"}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {isTr ? "Neler yapıyorum?" : "What I Do"}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              {isTr
                ? "İki farklı alanda deneyim kazanıyor, öğrendiklerimi gerçek projelere ve topluluklara yansıtıyorum."
                : "I gain experience in two different fields and apply what I learn to real projects and communities."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal delay={100}>
            <article className="card-hover h-full rounded-2xl border border-white/10 bg-[#0d1422] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                {"</>"}
              </div>

              <h3 className="text-xl font-bold">Software Development</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {isTr
                  ? "C#, .NET ve Python gibi teknolojilerle yazılım geliştirme üzerine çalışıyorum. Problem çözme ve yeni teknolojiler öğrenme konusunda kendimi geliştiriyorum."
                  : "I work on software development using technologies such as C#, .NET and Python. I continue improving my problem-solving skills and learning new technologies."}
              </p>

              <Link
                href={`${basePath}/skills`}
                className="mt-6 inline-block text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                {isTr ? "Becerilerimi Gör →" : "Explore My Skills →"}
              </Link>
            </article>
          </Reveal>

          <Reveal delay={250}>
            <article className="card-hover h-full rounded-2xl border border-white/10 bg-[#0d1422] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                {"✦"}
              </div>

              <h3 className="text-xl font-bold">Community Management</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {isTr
                  ? "Dijital toplulukların yönetimi, moderasyon süreçleri, ekip koordinasyonu ve topluluk deneyiminin geliştirilmesi üzerine çalışıyorum."
                  : "I work on digital community management, moderation processes, team coordination and improving community experiences."}
              </p>

              <Link
                href={`${basePath}/about`}
                className="mt-6 inline-block text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                {isTr ? "Hakkımda →" : "About Me →"}
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              {isTr ? "ÖNE ÇIKAN PROJE" : "FEATURED PROJECT"}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {isTr ? "Üzerinde çalıştığım proje" : "What I'm Working On"}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <article className="card-hover rounded-2xl border border-white/10 bg-[#0d1422] p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-blue-400">
                PERSONAL PORTFOLIO
              </span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                {isTr ? "Geliştiriliyor" : "In Development"}
              </span>
            </div>

            <h3 className="mt-7 text-2xl font-bold">Hayrullahdemir.me</h3>

            <p className="mt-4 max-w-3xl leading-7 text-gray-400">
              {isTr
                ? "Kendimi, projelerimi ve yetkinliklerimi tanıtmak için geliştirdiğim kişisel portfolyo web sitesi. Türkçe ve İngilizce dil desteğiyle tasarlıyorum."
                : "A personal portfolio website I'm building to showcase my background, projects and skills. It features both Turkish and English language support."}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/hdmr53/hayrullahdemir"
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover mt-8 inline-block rounded-lg border border-white/15 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              GitHub Repository ↗
            </a>
          </article>
        </Reveal>

        <Reveal delay={100} className="mt-7 text-center">
          <Link
            href={`${basePath}/projects`}
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            {isTr ? "Tüm projelerimi gör →" : "View all projects →"}
          </Link>
        </Reveal>
      </section>

      {/* SKILLS SUMMARY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              {isTr ? "BECERİLER" : "SKILLS"}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {isTr ? "Kullandığım teknolojiler" : "Technologies I Work With"}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                style={{ transitionDelay: `${index * 60}ms` }}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                {skill}
              </span>
            ))}
          </div>

          <Link
            href={`${basePath}/skills`}
            className="mt-7 inline-block text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            {isTr ? "Tüm becerilerimi gör →" : "View all skills →"}
          </Link>
        </Reveal>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0d1422] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold tracking-widest text-blue-400">
                  {isTr ? "İLETİŞİM" : "GET IN TOUCH"}
                </p>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  {isTr
                    ? "Birlikte güzel işler çıkarabiliriz."
                    : "Let's create something great together."}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  {isTr
                    ? "Yeni projeler, iş birlikleri veya fikir alışverişi için benimle iletişime geçebilirsiniz."
                    : "Feel free to contact me for new projects, collaborations or exchanging ideas."}
                </p>
              </div>

              <Link
                href={`${basePath}/contact`}
                className="button-hover shrink-0 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                {isTr ? "İletişime Geç" : "Get in Touch"} →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-sm text-gray-500">
            © 2026 Hayrullah Demir.{" "}
            {isTr ? "Tüm hakları saklıdır." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/hdmr53"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hayrullahdemir/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/hayrullahdmr53/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
