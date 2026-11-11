
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export const instant = false;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <Navbar locale="tr" currentPath="about" />

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
                PORTFOLYO / HAKKIMDA
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Merhaba, ben{" "}
                <span className="text-blue-400">Hayrullah</span>
              </h1>

              <h2 className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
                Software Developer{" "}
                <span className="text-blue-500">&</span>{" "}
                Community Manager
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-gray-400">
                <p>
                  Yönetim Bilişim Sistemleri 2.sınıf öğrencisiyim. Teknolojiye,
                  yazılım geliştirmeye ve dijital dünyada insanların
                  bir araya geldiği topluluklara ilgi duyuyorum.
                </p>

                <p>
                  Yazılım tarafında C#, .NET ve Python gibi teknolojiler
                  üzerinde çalışıyor; problem çözme becerilerimi
                  geliştirmeye ve öğrendiklerimi gerçek projelere
                  dönüştürmeye odaklanıyorum.
                </p>

                <p>
                  Benim için yazılım geliştirme kadar topluluk yönetimi
                  de önemli. Dijital topluluklarda edindiğim deneyimler
                  sayesinde ekip koordinasyonu, moderasyon ve kullanıcı
                  deneyimi konularında da kendimi geliştirme fırsatı buldum.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                >
                  Projelerimi Gör →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  İletişime Geç
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
                EĞİTİM
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Akademik Yolculuğum
              </h2>

              <div className="mt-9 rounded-2xl border border-white/10 bg-[#0d1422] p-7 md:p-9">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">
                      İstanbul Medipol Üniversitesi
                    </h3>
                    <p className="mt-2 text-gray-400">
                      Yönetim Bilişim Sistemleri (İngilizce)
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                    Lisans Eğitimi
                  </span>
                </div>

                <p className="mt-6 max-w-3xl leading-7 text-gray-400">
                  İşletme ve bilişim teknolojilerini bir araya getiren
                  eğitimimle yazılım, teknoloji ve iş süreçleri arasındaki
                  bağlantıyı daha iyi anlamaya çalışıyorum.
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
              DENEYİM
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Topluluk Yönetimi
            </h2>

            <div className="mt-9 rounded-2xl border border-white/10 bg-[#0d1422] p-7 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">Agar.live</h3>

                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  Community Management
                </span>
              </div>

              <p className="mt-5 leading-8 text-gray-400">
                Agar.live platformunda yaklaşık üç yıl boyunca yönetici
                olarak görev aldım. Bu süreçte dijital toplulukların
                yönetimi, moderasyon, kullanıcılarla iletişim ve topluluk
                düzeninin sağlanması konularında deneyim kazandım.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Ayrıca ekip koordinasyonu, sorun çözme ve topluluk
                ihtiyaçlarını anlama konularında kendimi geliştirdim.
                Bu deneyim, dijital toplulukların yalnızca yönetilmesinin
                değil, sürdürülebilir şekilde geliştirilmesinin de
                önemli olduğunu gösterdi.
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
                ODAK ALANLARIM
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                İlgilendiğim Alanlar
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
                    C#, .NET ve Python teknolojileriyle yazılım geliştirme,
                    algoritmalar ve problem çözme üzerine çalışıyorum.
                    Amacım teknik bilgi ve proje deneyimimi sürekli
                    geliştirmek.
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
                    Dijital topluluk yönetimi, moderasyon, ekip
                    koordinasyonu ve topluluk deneyiminin geliştirilmesi
                    üzerine yoğunlaşıyorum.
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
              GELECEK HEDEFLERİM
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Öğrenmeye ve üretmeye devam ediyorum.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Hedefim yazılım geliştirme alanında sağlam bir teknik
              altyapı oluşturmak, farklı projelerde deneyim kazanmak
              ve topluluk yönetimi konusundaki birikimimi geliştirmek.
              Yeni teknolojiler öğrenmeye, fikirlerimi projelere
              dönüştürmeye ve kendime yeni hedefler koymaya devam ediyorum.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Benimle İletişime Geçin →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Hayrullah Demir. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
