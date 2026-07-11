import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

// Nunito: rounded, friendly headings that read as warm rather than clinical
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Inter: highly legible body text, chosen for readability over style
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boys with Scoliosis",
  description:
    "Health information and support for boys with scoliosis and their families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
