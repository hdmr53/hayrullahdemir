
export const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      skills: "Beceriler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      role: "Yazılım Geliştirici",
      description:
        "Yönetim Bilişim Sistemleri öğrencisiyim. Backend geliştirme, yazılım mühendisliği ve faydalı dijital ürünler geliştirmekle ilgileniyorum.",
      projectsButton: "Projelerimi keşfet",
      contactButton: "Benimle iletişime geç",
    },
    about: {
      label: "HAKKIMDA",
      title: "Kısaca ben.",
      paragraph1:
      "Medipol Üniversitesi'nde İngilizce Yönetim Bilişim Sistemleri 2. sınıf öğrencisiyim. Yazılım geliştirme ve topluluk yönetimiyle ilgileniyorum.",
      paragraph2:
      "Yazılım tarafında özellikle C# ve .NET üzerine çalışıyorum. Öğrendiklerimi kendi projelerimde uygulamayı ve zamanla daha kapsamlı projeler geliştirmeyi hedefliyorum.",
      paragraph3:
      "Topluluk yönetimi tarafında ise yaklaşık 3 yıl boyunca Agar.live'da adminlik yaptım. Bu süreçte topluluk yönetimi, ekip koordinasyonu, kullanıcı iletişimi ve organizasyon konularında deneyim kazandım.",
    },
    portfolio: {
      label: "PORTFÖY",
      title: "Öne Çıkan Projeler",
      description: "Yazılım projelerimi ve geliştirme çalışmalarımı keşfedin.",
    },
    skills: {
      label: "YETKİNLİKLER",
      title: "Becerilerim",
      description: "Teknik bilgi ve profesyonel yetkinliklerim.",

      technicalTitle: "Teknik Beceriler",
      professionalTitle: "Profesyonel Beceriler",

      technical: "Teknoloji",
      professional: "Profesyonel Yetkinlik", },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Software Developer",
      description:
        "I'm a Management Information Systems student interested in backend development, software engineering, and building useful digital products.",
      projectsButton: "Explore my projects",
      contactButton: "Get in touch",
    },
    about: {
      label: "ABOUT ME",
      title: "A little about me.",
      paragraph1:
      "I'm a second-year English-taught Management Information Systems student at Istanbul Medipol University. I'm interested in both software development and community management.",
       paragraph2:
      "On the software side, I'm currently focusing on C# and .NET. I enjoy applying what I learn to personal projects and working towards building more advanced applications.",
       paragraph3:
       "When it comes to community management, I spent around three years as an admin at Agar.live. During that time, I gained experience in managing communities, coordinating teams, communicating with users, and organizing activities.",
    },
    portfolio: {
      label: "PORTFOLIO",
      title: "Featured Projects",
      description: "Explore my software projects and development work.",    },
    skills: {
      label: "SKILLS",
      title: "My Skills",
      description: "My technical knowledge and professional competencies.",

      technicalTitle: "Technical Skills",
      professionalTitle: "Professional Skills",

      technical: "Technology",
      professional: "Professional Competency",
},
  },
  
};

export type Locale = keyof typeof translations;
