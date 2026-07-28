import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoiceWelcome from "@/components/VoiceWelcome";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { COMPANY } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.legalName}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords:
    "security company, armed security guards, unarmed security guards, security training academy, DC SPO, VA DCJS, executive protection, mobile patrol, CCTV monitoring, Lanham Maryland, DMV security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VoiceWelcome />
      </body>
    </html>
  );
}
