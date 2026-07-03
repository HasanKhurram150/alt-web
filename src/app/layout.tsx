import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingLinesBackground from "@/components/ui/animated-components/floating-lines/FloatingLinesBackground";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const hedvigLettersSans = localFont({
  src: "../../public/fonts/HedvigLettersSans/otf/HedvigLettersSans-Regular.otf",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Antilinear Technologies",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable} ${hedvigLettersSans.variable}`}
    >
      <body className="bg-[var(--bg)] text-[var(--text-primary)] font-body transition-colors duration-300">
        <ThemeProvider>
          {/* Global Sticky/Fixed Background Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none w-full h-screen overflow-hidden">
            <FloatingLinesBackground />
          </div>
          
          {/* Main Content Wrapper */}
          <div className="relative z-10">
            <SmoothScroll>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
