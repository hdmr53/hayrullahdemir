
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#080b12] text-white">
            <Navbar locale="en" currentPath="projects" />
            <section className="mx-auto max-w-6xl px-6 py-20">
                <Reveal>
                    <div className="mb-16">
                        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
                            PORTFOLIO / PROJECTS
                        </p>

                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                            Projects I've <span className="text-blue-400">built.</span>
                        </h1>

                        <p className="max-w-2xl text-lg leading-8 text-gray-400">
                            Here you can explore my projects, the technologies I use,
                            and the work I'm developing.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="grid gap-8 md:grid-cols-2">
                        <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/40 hover:bg-white/[0.05]">
                            <div className="mb-8 flex items-center justify-between">
                                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-400">
                                    Personal Portfolio
                                </span>
                                <span className="text-sm text-gray-500">2026</span>
                            </div>

                            <div className="mb-6 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-[#0d1422]">
                                <span className="text-4xl font-bold tracking-tight">
                                    My Portfolio <span className="text-blue-400">Website.</span>
                                </span>
                            </div>

                            <h2 className="mb-3 text-2xl font-semibold">
                                hayrullahdemir.me
                            </h2>

                            <p className="mb-6 leading-7 text-gray-400">
                                A personal portfolio website built to showcase my background,
                                projects, and skills. It supports both Turkish and English.
                            </p>

                            <div className="mb-8 flex flex-wrap gap-2">
                                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>

                            <a
                                href="https://github.com/hdmr53/hayrullahdemir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                            >
                                GitHub Repository <span>↗</span>
                            </a>
                        </article>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="mt-20 border-t border-white/10 pt-8">
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
