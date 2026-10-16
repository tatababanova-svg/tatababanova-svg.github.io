import type { Metadata } from "next";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { GitHubPagesCompat } from "@/components/github-pages-compat";
import seo from "@/content/seo.json";
import "./globals.css";
import "./approved-modern.css";
import "./responsive-refinement.css";
import "./mobile-desktop-parity.css";
import "./mobile-final.css";
import "./mobile-parity-v2.css";
import "./editorial-refresh.css";
import "./mobile-editorial-final.css";
import "./assistant-extension.css";
import "./final-legibility.css";
import "./readability-v2.css";
import "./kinetic-grid.css";
import "./portfolio-polish.css";
import "./mobile-layout-repair.css";
import "./balanced-responsive-v3.css";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  applicationName: "Татьяна Бабанова — бизнес-ассистент собственника",
  authors: [{ name: "Татьяна Бабанова" }],
  creator: "Татьяна Бабанова",
  keywords: [
    "Executive Assistant", "бизнес-ассистент собственника", "старший бизнес-ассистент",
    "помощник руководителя", "управление поручениями", "операционный менеджер",
    "Project Manager", "координатор проектов", "администратор проектов",
    "автоматизация бизнес-процессов", "Татьяна Бабанова"
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: seo.title,
    description: seo.description,
    siteName: "Татьяна Бабанова — бизнес-ассистент собственника",
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
        <GitHubPagesCompat />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
