import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaseenbaloch.com"),

  title: {
    default: "Yaseen Baloch | Developer & Technology Creator",
    template: "%s | Yaseen Baloch",
  },

  description:
    "Yaseen Baloch is a BS Computer Science student, developer, and technology creator focused on programming, web development, AI, and practical technology education.",

  keywords: [
    "Yaseen Baloch",
    "Yaseen Baloch Developer",
    "BS Computer Science",
    "Web Development",
    "Python",
    "Artificial Intelligence",
    "AI Automation",
    "Programming",
    "Technology",
    "Pakistan Developer",
  ],

  authors: [
    {
      name: "Yaseen Baloch",
      url: "https://yaseenbaloch.com",
    },
  ],

  creator: "Yaseen Baloch",
  publisher: "Yaseen Baloch",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Yaseen Baloch | Developer & Technology Creator",
    description:
      "Learn, build, and share technology through programming, web development, AI, and practical projects.",
    url: "https://yaseenbaloch.com",
    siteName: "Yaseen Baloch",
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Yaseen Baloch | Developer & Technology Creator",
    description:
      "BS Computer Science student, developer, and technology creator.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}