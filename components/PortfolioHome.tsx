import Navbar from "@/components/Navbar";
import { translations, type Locale } from "@/lib/translations";

type PortfolioHomeProps = {
  locale: Locale;
};

export default function PortfolioHome({ locale }: PortfolioHomeProps) {
  const t = translations[locale];
  const project = t.portfolio;

  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale={locale} />

      <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">{t.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {t.hero.greeting}
            <br />
            Hayrullah Demir<span className="text-blue-500">.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-gray-300 md:text-2xl">
            {t.hero.role} <span className="text-blue-500">&amp;</span>{" "}
            {t.hero.secondRole}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              {t.hero.projectsButton}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              {t.hero.contactButton}
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              {t.hero.exploring}
            </p>
            <div className="flex flex-wrap gap-3">
              {["C#", ".NET", "Python", "Git & GitHub"].map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1422] p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-gray-500">
                {t.hero.profileTitle}
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
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {t.hero.education}
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-gray-500">{t.hero.focusLabel}</span>
                <span className="text-right text-blue-400">
                  {t.hero.role} &amp; {t.hero.secondRole}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-300">{t.hero.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            {t.portfolio.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 max-w-xl text-gray-400">
            {t.portfolio.description}
          </p>
        </div>

        <article className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-blue-500">
              {project.projectName}
            </span>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              {project.projectStatus}
            </span>
          </div>

          <h3 className="mt-8 text-2xl font-bold">{project.projectName}</h3>
          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            {project.projectDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                {project.repositoryLabel}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                {project.demoLabel}
              </a>
            )}
          </div>
        </article>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            {t.skills.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 max-w-xl text-gray-400">
            {t.skills.description}
          </p>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-xl font-semibold">
            {t.skills.technicalTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {t.skills.technicalCategories.map((category) => (
              <div
                key={category.title}
                className="flex h-full min-h-32 flex-col rounded-xl border border-white/10 bg-[#0d1422] p-5"
              >
                <h4 className="mb-4 text-sm font-semibold text-gray-300">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1.5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">
            {t.skills.professionalTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {t.skills.professionalCategories.map((category) => (
              <div
                key={category.title}
                className="flex h-full min-h-32 flex-col rounded-xl border border-white/10 bg-[#0d1422] p-5"
              >
                <h4 className="mb-4 text-sm font-semibold text-gray-300">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1.5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          {locale === "tr" ? "İLETİŞİM" : "CONTACT"}
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          {locale === "tr" ? "Benimle iletişime geçin." : "Get in touch."}
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-gray-400">
          {locale === "tr"
            ? "Projeler, iş birlikleri, sorularınız veya fikirleriniz için benimle iletişime geçebilirsiniz."
            : "Feel free to contact me about projects, collaborations, questions or ideas."}
        </p>
        <div className="mt-8">
          <a
            href="mailto:EMAIL_ADRESIN"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            {locale === "tr" ? "E-posta gönder" : "Send an email"}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-sm text-gray-500">
            © 2026 Hayrullah Demir. {locale === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="https://github.com/hdmr53" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/hayrullahdemir/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com/hayrullahdmr53/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
