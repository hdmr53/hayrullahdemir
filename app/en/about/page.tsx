
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export const instant = false;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="en" currentPath="about" />

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* PROFILE PHOTO */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1422]">
                <Image
                  src="/profile.jpg"
                  alt="Hayrullah Demir"
                  width={900}
                  height={1600}
                  priority
                  className="h-[480px] w-full object-cover object-center sm:h-[560px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/50 to-transparent p-7 pt-24">
                  <h2 className="text-2xl font-bold">Hayrullah Demir</h2>
                  <p className="mt-2 text-sm text-blue-400">
                    Software Developer & Community Manager
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-[#0d1422] p-4">
                  <div className="mb-3 text-xl text-blue-400">
                    {"</>"}
                  </div>
                  <h3 className="font-semibold text-white">Software</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Development
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0d1422] p-4">
                  <div className="mb-3 text-xl text-blue-400">
                    ✦
                  </div>
                  <h3 className="font-semibold text-white">Community</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Management
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* INTRO TEXT */}
          <Reveal delay={100}>
            <div className="pt-5 lg:pt-0">
              <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-blue-400">
                PORTFOLIO / ABOUT ME
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Hi, I&apos;m{" "}
                <span className="text-blue-400">Hayrullah</span>
              </h1>

              <h2 className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
                Software Developer{" "}
                <span className="text-blue-500">&</span>{" "}
                Community Manager
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-gray-400">
                <p>
                  I&apos;m a second-year Management Information Systems
                  student. I&apos;m interested in technology, software
                  development, and digital communities that bring
                  people together.
                </p>

                <p>
                  On the software side, I work with technologies
                  such as C#, .NET and Python. I focus on improving
                  my problem-solving skills and turning what I learn
                  into practical projects.
                </p>

                <p>
                  Software development is just as important to me
                  as community management. Through my experience
                  with digital communities, I&apos;ve had the opportunity
                  to develop my skills in team coordination,
                  moderation and user experience.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/en/projects"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                >
                  Explore My Projects →
                </Link>

                <Link
                  href="/en/contact"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-5 text-sm text-gray-400">
                <a
                  href="https://github.com/hdmr53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/hayrullahdemir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
                EDUCATION
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Academic Background
              </h2>

              <div className="mt-9 rounded-2xl border border-white/10 bg-[#0d1422] p-7 md:p-9">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">
                      Istanbul Medipol University
                    </h3>
                    <p className="mt-2 text-gray-400">
                      Management Information Systems (English)
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                    Bachelor&apos;s Degree
                  </span>
                </div>

                <p className="mt-6 max-w-3xl leading-7 text-gray-400">
                  My education brings together business and information
                  technologies, helping me better understand the
                  relationship between software, technology and
                  business processes.
                </p>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <>
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              EXPERIENCE
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Community Management
            </h2>

            <div className="mt-9 rounded-2xl border border-white/10 bg-[#0d1422] p-7 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">Agar.live</h3>

                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  Community Management
                </span>
              </div>

              <p className="mt-5 leading-8 text-gray-400">
                I worked as an administrator on the Agar.live platform
                for approximately three years. During this time, I
                gained experience in digital community management,
                moderation, user communication and maintaining
                community standards.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                I also developed my skills in team coordination,
                problem-solving and understanding community needs.
                This experience taught me that digital communities
                are not only about management, but also about
                building and maintaining a sustainable environment.
              </p>
            </div>
          </>
        </Reveal>
      </section>

      {/* FOCUS AREAS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
                MY FOCUS AREAS
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Areas I&apos;m Interested In
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-white/10 bg-[#0d1422] p-8 transition hover:border-blue-500/40">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-bold text-blue-400">
                    {"</>"}
                  </div>

                  <h3 className="text-xl font-bold">
                    Software Development
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    I work on software development using C#, .NET
                    and Python, with a focus on algorithms and
                    problem-solving. My goal is to continuously
                    improve my technical knowledge and project
                    experience.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-[#0d1422] p-8 transition hover:border-blue-500/40">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-bold text-blue-400">
                    ✦
                  </div>

                  <h3 className="text-xl font-bold">
                    Community Management
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    I&apos;m interested in digital community management,
                    moderation, team coordination and improving
                    the overall community experience.
                  </p>
                </article>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="rounded-3xl border border-blue-500/20 bg-[#0d1422] p-8 md:p-12">
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              FUTURE GOALS
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Always learning, always building.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              My goal is to build a strong technical foundation
              in software development, gain experience through
              different projects and continue developing my
              knowledge of community management. I enjoy learning
              new technologies, turning ideas into projects and
              setting new goals for myself.
            </p>

            <Link
              href="/en/contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Get in Touch →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Hayrullah Demir. All rights reserved.
      </footer>
    </main>
  );
}
