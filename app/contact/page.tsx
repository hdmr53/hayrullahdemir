
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

const email = "hayrullahdemiriletisim@gmail.com";

export const metadata: Metadata = {
  title: "İletişim | Hayrullah Demir",
  description:
    "Hayrullah Demir ile yazılım geliştirme, dijital topluluk yönetimi ve proje iş birlikleri hakkında iletişime geçin. E-posta, GitHub ve LinkedIn profilleri.",
  alternates: {
    canonical: "/contact",
    languages: {
      tr: "/contact",
      en: "/en/contact",
    },
  },
}; 

const contactLinks = [
  {
    name: "E-posta",
    description: "Doğrudan e-posta yoluyla iletişime geçin.",
    value: email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    icon: "@",
  },
  {
    name: "GitHub",
    description: "Projelerimi ve kod çalışmalarımı inceleyin.",
    value: "hdmr53",
    href: "https://github.com/hdmr53",
    icon: "GH",
  },
  {
    name: "LinkedIn",
    description: "Profesyonel profilimi ziyaret edin.",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/hayrullahdemir/",
    icon: "IN",
  },
  {
    name: "Instagram",
    description: "Instagram üzerinden iletişime geçin.",
    value: "@hayrullahdmr53",
    href: "https://www.instagram.com/hayrullahdmr53/",
    icon: "IG",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="tr" currentPath="contact" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
              PORTFOLYO / İLETİŞİM
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              İletişime <span className="text-blue-400">geçelim.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              Projeler, iş birlikleri veya fikir alışverişi için
              benimle iletişime geçebilirsiniz. Mesajlarınızı bekliyorum.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div>
              <p className="mb-6 text-sm font-semibold tracking-widest text-gray-500">
                İLETİŞİM KANALLARIM
              </p>

              <div className="space-y-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.name === "E-posta" ? undefined : "_blank"}
                    rel={
                      item.name === "E-posta"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 font-bold text-blue-400">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="mb-1 font-semibold">{item.name}</h2>
                      <p className="mb-2 text-sm text-gray-400">
                        {item.description}
                      </p>
                      <span className="break-all text-sm text-blue-400">
                        {item.value}
                      </span>
                    </div>

                    <span className="text-gray-500 transition group-hover:text-blue-400">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-8 md:p-10">
              <div>
                <p className="mb-5 text-sm font-semibold tracking-widest text-blue-400">
                  BİRLİKTE ÇALIŞALIM
                </p>

                <h2 className="mb-5 text-3xl font-bold">
                  Aklınızda bir proje mi var?
                </h2>

                <p className="leading-7 text-gray-400">
                  Yazılım geliştirme, dijital topluluk yönetimi veya
                  farklı projeler hakkında konuşmak için benimle
                  iletişime geçebilirsiniz.
                </p>
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                E-posta Gönder <span>↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-20 border-t border-white/10 pt-8">
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
