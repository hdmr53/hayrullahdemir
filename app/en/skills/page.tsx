
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | C#, .NET, Python & Community Management",
  description:
    "Explore Hayrullah Demir's technical and professional skills, including C#, .NET, Python, Git, GitHub and digital community management.",
  alternates: {
    canonical: "/en/skills",
    languages: {
      tr: "/skills",
      en: "/en/skills",
    },
  },
};

const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Technologies and tools I use throughout the software development process.",
    skills: [
      {
        name: "C#",
        description: "Programming and application development",
        level: "Development",
      },
      {
        name: ".NET",
        description: "Application development ecosystem",
        level: "Framework",
      },
      {
        name: "Python",
        description: "Programming and problem solving",
        level: "Programming",
      },
      {
        name: "Git",
        description: "Version control",
        level: "Tool",
      },
      {
        name: "GitHub",
        description: "Code management and project sharing",
        level: "Platform",
      },
    ],
  },
  {
    number: "02",
    title: "Professional Skills",
    description:
      "Skills I've developed through community management and teamwork.",
    skills: [
      {
        name: "Community Management",
        description: "Managing and developing digital communities",
        level: "Management",
      },
      {
        name: "Team Leadership",
        description: "Team coordination and leadership",
        level: "Leadership",
      },
      {
        name: "Moderation",
        description: "Community guidelines and moderation processes",
        level: "Community",
      },
      {
        name: "Team Coordination",
        description: "Team communication and task coordination",
        level: "Teamwork",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="en" currentPath="skills" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
              PORTFOLIO / SKILLS
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Skills &{" "}
              <span className="text-blue-400">expertise.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              Explore the technologies I use in software development and
              the professional skills I&apos;ve developed through managing
              digital communities.
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
              CONTINUOUS LEARNING
            </p>

            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Always learning, always improving.
            </h2>

            <p className="max-w-2xl leading-7 text-gray-400">
              I continue to explore new technologies, gain experience
              through projects, and improve my skills in community
              management.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/en"
              className="text-sm text-gray-400 transition hover:text-blue-400"
            >
              ← Back to home
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Hayrullah Demir. All rights reserved.
      </footer>
    </main>
  );
}
