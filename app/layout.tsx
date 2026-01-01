import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import WhatsAppChat from "./components/WhatsappChat";
import ChatBot from "./components/ChatBot";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Full-stack developer specializing in creating beautiful, performant, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navigation />
          {children}
          <WhatsAppChat />
          {/* <ChatBot /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
