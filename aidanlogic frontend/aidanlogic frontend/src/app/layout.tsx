import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import ThemeToggle from "@/components/ThemeToggle";
import CookieBanner from "@/components/CookieBanner";
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "AiDanLogic - AI-Powered Productivity Intelligence",
  description: "Transform your workflow with AI Dan - your intelligent productivity companion that analyzes, optimizes, and elevates your daily focus.",
  icons: {
    icon: [
      { url: '/fevicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/fevicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {/* Custom Cursor and Trail */}
        <CursorTrail />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <VisualEditsMessenger />

        {/* Cloudflare Turnstile Script */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}