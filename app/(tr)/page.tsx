import type { Metadata } from "next";
import PortfolioHome from "@/components/PortfolioHome";

export const metadata: Metadata = {
  title: {
    absolute:
      "Hayrullah Demir | Yazılım Geliştirici & Topluluk Yöneticisi",
  },
  description:
    "Hayrullah Demir'in kişisel portfolyosu. Yazılım geliştirme, C#, .NET, Python ve dijital topluluk yönetimi alanındaki projelerini ve çalışmalarını keşfedin.",
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function Home() {
  return <PortfolioHome locale="tr" />;
}