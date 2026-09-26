import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";
import { ScrollProgress } from "@/components/ScrollProgress";

// Closest free match to the brand kit's "Scoutie Sans" (ExtraLight–ExtraBold, single humanist grotesk).
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "C.A.N — Centre for Action on Neurodiversity, Bengaluru",
    template: "%s | C.A.N",
  },
  description:
    "Assessments, therapies, remedial education and parent coaching under one roof for children with dyslexia, ADHD, autism and diverse learning needs. Kumara Park, Bengaluru.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
