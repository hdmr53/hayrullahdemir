
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hayrullahdemir.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hayrullah Demir | Software Developer & Community Manager",
    template: "%s | Hayrullah Demir",
  },

  description:
    "Hayrullah Demir'in kişisel portfolyosu. Yazılım geliştirme projeleri, C#, .NET, Python ve dijital topluluk yönetimi alanındaki çalışmaları.",

  applicationName: "Hayrullah Demir Portfolio",

  authors: [{ name: "Hayrullah Demir", url: siteUrl }],
  creator: "Hayrullah Demir",
  publisher: "Hayrullah Demir",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Hayrullah Demir",
    title: "Hayrullah Demir | Software Developer & Community Manager",
    description:
      "Yazılım geliştirme projelerimi, teknik becerilerimi ve topluluk yönetimi deneyimimi keşfedin.",
    images: [
      {
        url: "/og-image.png",
        width: 1648,
        height: 927,
        alt: "Hayrullah Demir - Software Developer & Community Manager",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hayrullah Demir | Software Developer & Community Manager",
    description:
      "Kişisel portfolyom, yazılım projelerim ve topluluk yönetimi çalışmalarım.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "technology",
};

export const instant = false;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "tr";

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
