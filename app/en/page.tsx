
export const instant = false;

import { translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";

export default function EnglishHome() {
  const t = translations.en;

  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="en" />

      <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">
              Learning, building and creating.
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {t.hero.greeting}
            <br />
            Hayrullah Demir<span className="text-blue-500">.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-gray-300 md:text-2xl">
            {t.hero.role}
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
              CURRENTLY EXPLORING
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
                PERSONAL PROFILE
              </span>
              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>

            <div className="my-12 flex justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-600/30 to-[#080b12] shadow-[0_0_60px_rgba(37,99,235,0.15)]">
                <span className="text-6xl font-bold tracking-tighter">
                  H<span className="text-blue-500">D</span>
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">Hayrullah Demir</h3>
              <p className="mt-2 text-sm text-gray-400">
                Management Information Systems Student
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Focus</span>
                <span className="text-blue-400">Software Developer</span>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">Location</span>
                <span className="text-gray-300">Türkiye</span>
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

        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-500">
                PROJECT 01
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                In Progress
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-bold">Personal Portfolio</h3>

            <p className="mt-4 leading-7 text-gray-400">
              A modern, multilingual personal website built to showcase my
              projects, software skills and development journey.
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
          </div>

          <div className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-500">
                PROJECT 02
              </span>
              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                C# Project
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-bold">Football Simulator</h3>

            <p className="mt-4 leading-7 text-gray-400">
              A C# console application designed to simulate football teams and
              player attributes.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["C#", ".NET", "OOP", "Console App"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "C#", category: "Programming Language" },
              { name: "JavaScript", category: "Programming Language" },
              { name: "Python", category: "Programming Language" },
              { name: ".NET", category: "Backend Development" },
              { name: "HTML & CSS", category: "Web Development" },
              { name: "Git & GitHub", category: "Version Control" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-white/10 bg-[#0d1422] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <h4 className="text-lg font-bold">{skill.name}</h4>
                <p className="mt-2 text-xs text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">
            {t.skills.professionalTitle}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Community Management",
              "Team Leadership",
              "Conflict Resolution",
              "Community Engagement",
              "Content Strategy",
              "Problem Solving",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-[#0d1422] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <h4 className="text-base font-semibold">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          CONTACT
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Get in touch.
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-gray-400">
          Feel free to contact me about projects, collaborations, questions or
          ideas.
        </p>

        <div className="mt-8">
          <a
            href="mailto:EMAIL_ADRESIN"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Send an email
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-sm text-gray-500">
            © 2026 Hayrullah Demir. All rights reserved.
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
