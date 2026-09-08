import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.brandName} | ${site.role}`,
  description: site.intro,
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: `${site.brandName} | ${site.role}`,
    description: site.intro,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
