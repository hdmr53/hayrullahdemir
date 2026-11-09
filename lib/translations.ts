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
      eyebrow: "Yazılım geliştirme ve topluluk yönetimi üzerine çalışıyorum.",
      role: "Yazılım Geliştirici",
      secondRole: "Topluluk Yöneticisi",
      description:
        "Yazılım Geliştirme ve Topluluk Yönetimi bölümünde öğrenciyim. C# ve .NET başta olmak üzere yazılım geliştirmeye odaklanıyor; topluluk yönetimi deneyimimi de dijital ürünlere ve ekip çalışmalarına taşıyorum.",
      projectsButton: "Projelerimi keşfet",
      contactButton: "Benimle iletişime geç",
      exploring: "ÜZERİNDE ÇALIŞTIKLARIM",
      profileTitle: "KİŞİSEL PROFİL",
      education: "Yazılım Geliştirme ve Topluluk Yönetimi",
      focusLabel: "Odak",
      locationLabel: "Konum",
      location: "Türkiye",
    },
    about: {
      label: "HAKKIMDA",
      title: "Yazılım ve topluluklar üzerine.",
      paragraph1:
        "İstanbul Medipol Üniversitesi'nde İngilizce Yönetim Bilişim Sistemleri 2. sınıf öğrencisiyim. Yazılım geliştirme ve topluluk yönetimi, ilgi alanlarımın iki önemli parçası.",
      paragraph2:
        "Yazılım geliştirmede özellikle C# ve .NET üzerine çalışıyorum. Öğrendiklerimi kişisel projelerimde uygulamayı ve backend geliştirme ile faydalı dijital ürünler konusundaki bilgimi geliştirmeyi hedefliyorum.",
      paragraph3:
        "Agar.live'da yaklaşık üç yıl admin olarak görev aldım. Bu deneyimde topluluk yönetimi, ekip koordinasyonu, kullanıcılarla iletişim ve organizasyon konularında çalıştım.",
    },
    portfolio: {
      label: "PORTFÖY",
      title: "Öne Çıkan Proje",
      description:
        "Kişisel web sitem HayrullahDemir.com'u geliştiriyor ve burada çalışmalarımı paylaşıyorum.",
      projectName: "HayrullahDemir.com",
      projectStatus: "Geliştiriliyor",
      projectDescription:
        "Yazılım çalışmalarımı, becerilerimi ve geliştirme yolculuğumu paylaşmak için oluşturduğum kişisel portföy web sitesi.",
      repositoryUrl: "",
      demoUrl: "",
      repositoryLabel: "GitHub deposu",
      demoLabel: "Canlı site",
    },
    skills: {
      label: "YETKİNLİKLER",
      title: "Becerilerim",
      description: "Teknik bilgi ve profesyonel yetkinliklerim.",
      technicalTitle: "Teknik Beceriler",
      professionalTitle: "Profesyonel Beceriler",
      technicalCategories: [
        { title: "Programlama Dilleri", items: ["C#", "JavaScript", "Python"] },
        { title: "Backend Geliştirme", items: [".NET"] },
        { title: "Web Geliştirme", items: ["HTML & CSS"] },
        { title: "Sürüm Kontrolü", items: ["Git & GitHub"] },
      ],
      professionalCategories: [
        {
          title: "Topluluk ve Ekip Çalışması",
          items: ["Topluluk Yönetimi", "Topluluk Katılımı", "Ekip Liderliği"],
        },
        {
          title: "İletişim ve Organizasyon",
          items: ["Çatışma Çözümü", "İçerik Stratejisi", "Problem Çözme"],
        },
      ],
    },
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
      eyebrow: "Exploring software development and community management.",
      role: "Software Developer",
      secondRole: "Community Manager",
      description:
        "I'm a Management Information Systems student focused on software development, especially C# and .NET. I also bring community management experience to digital products and collaborative work.",
      projectsButton: "Explore my projects",
      contactButton: "Get in touch",
      exploring: "CURRENTLY EXPLORING",
      profileTitle: "PERSONAL PROFILE",
      education: "Software Development & Community Management",
      focusLabel: "Focus",
      location: "Türkiye",
    },
    about: {
      label: "ABOUT ME",
      title: "Software and communities.",
      paragraph1:
        "I'm a second-year English-taught Management Information Systems student at Istanbul Medipol University. Software development and community management are both important parts of my interests.",
      paragraph2:
        "In software development, I'm focusing especially on C# and .NET. I apply what I learn in personal projects and aim to grow my knowledge of backend development and useful digital products.",
      paragraph3:
        "I spent around three years as an admin at Agar.live. In that role, I worked on community management, team coordination, communication with users, and organizing activities.",
    },
    portfolio: {
      label: "PORTFOLIO",
      title: "Featured Project",
      description:
        "I'm building HayrullahDemir.com as my personal portfolio and a place to share my work.",
      projectName: "HayrullahDemir.com",
      projectStatus: "In Progress",
      projectDescription:
        "A personal portfolio website for sharing my software work, skills, and development journey.",
      repositoryUrl: "",
      demoUrl: "",
      repositoryLabel: "GitHub repository",
      demoLabel: "Live site",
    },
    skills: {
      label: "SKILLS",
      title: "My Skills",
      description: "My technical knowledge and professional competencies.",
      technicalTitle: "Technical Skills",
      professionalTitle: "Professional Skills",
      technicalCategories: [
        { title: "Programming Languages", items: ["C#", "JavaScript", "Python"] },
        { title: "Backend Development", items: [".NET"] },
        { title: "Web Development", items: ["HTML & CSS"] },
        { title: "Version Control", items: ["Git & GitHub"] },
      ],
      professionalCategories: [
        {
          title: "Community and Teamwork",
          items: ["Community Management", "Community Engagement", "Team Leadership"],
        },
        {
          title: "Communication and Organization",
          items: ["Conflict Resolution", "Content Strategy", "Problem Solving"],
        },
      ],
    },
  },
} as const;

export type Locale = keyof typeof translations;
