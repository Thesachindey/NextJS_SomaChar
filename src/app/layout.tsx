import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | POGO - Your AI Homework Assistant",
    default: "POGO - Your AI Homework Assistant",
  },
  description:
    "POGO is an AI assistant designed to help elementary school students with their homework and learning. It provides personalized support and guidance to make learning fun and engaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
