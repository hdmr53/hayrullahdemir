import type { Metadata } from "next";
import PortfolioHome from "@/components/PortfolioHome";

export const metadata: Metadata = {
  title: {
    absolute:
      "Hayrullah Demir | Software Developer & Community Manager",
  },
  description:
    "Explore Hayrullah Demir's portfolio, software development projects, C#, .NET, Python skills and digital community management experience.",
  alternates: {
    canonical: "/en",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function EnglishHome() {
  return <PortfolioHome locale="en" />;
}