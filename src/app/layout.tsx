import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DigiFactory Consulting | Beratung für die Digitale Fabrik",
  description: "Als technische Unternehmensberatung unterstützen wir Sie bei der digitalen Transformation Ihrer Produktion. Smart Factory, IoT, Industrie 4.0 Beratung.",
  keywords: "Digitale Fabrik, Smart Factory, Industrie 4.0, IoT, Digitalisierung, Produktion, Beratung, Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
