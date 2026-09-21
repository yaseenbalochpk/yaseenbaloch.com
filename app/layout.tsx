import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Yaseen Baloch",
    "Yaseen Baloch Developer",
    "Web Development",
    "Python",
    "Artificial Intelligence",
    "AI Automation",
    "Programming",
    "Software Development",
    "Technology Education",
    "Pakistan Developer",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}