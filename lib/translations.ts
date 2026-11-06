
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
