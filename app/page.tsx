
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Hayrullah<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#about" className="hover:text-white">Hakkımda</a>
          <a href="#projects" className="hover:text-white">Projeler</a>
          <a href="#contact" className="hover:text-white">İletişim</a>
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
        >
          GitHub ↗
        </a>
      </nav>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="text-sm text-gray-400">
            Yazılım geliştirmeyi öğreniyorum ve üretiyorum.
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Merhaba, ben
          <br />
          Hayrullah Demir<span className="text-blue-500">.</span>
        </h1>

        <h2 className="mt-7 text-xl font-medium text-gray-300 md:text-2xl">
          Software Developer in Progress
        </h2>

        <p
          id="about"
          className="mt-6 max-w-2xl text-base leading-8 text-gray-400"
        >
          Yönetim Bilişim Sistemleri öğrencisiyim. Backend geliştirme,
          yazılım mühendisliği ve faydalı dijital ürünler geliştirmekle
          ilgileniyorum. Fikirleri çalışan projelere dönüştürmek için
          sürekli öğreniyor ve üretiyorum.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Projelerimi keşfet
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            Benimle iletişime geç
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          PORTFOLIO
        </p>
        <h2 className="mt-3 text-3xl font-bold">Öne Çıkan Projeler</h2>
        <p className="mt-4 text-gray-400">
          Burada geliştirdiğim projeleri paylaşacağım.
        </p>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-500"
      >
        © 2026 Hayrullah Demir. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
