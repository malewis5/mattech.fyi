import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/ui/Footer";
import { NavBar } from "@/components/ui/Navbar";
import { siteConfig } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://mattech.fyi"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Web", "Development", "Software"],
  authors: [
    {
      name: "Matthew Lewis",
      url: "https://mattech.fyi",
    },
  ],
  creator: "MatTech LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@mttlws",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-teal-100 selection:text-teal-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
