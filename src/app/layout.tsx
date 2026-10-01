import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fredoka } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";
import { ScrollProgress } from "@/components/ScrollProgress";

// Body copy: dyslexia/ADHD-legible by design — the audience's actual reading needs outrank house style.
const display = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-display", display: "swap" });
// Fun display face for headlines/CTAs only — body copy stays on the accessible font above.
const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fredoka", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "C.A.N — Centre for Action on Neurodiversity, Bengaluru",
    template: "%s | C.A.N",
  },
  description:
    "Assessments, therapies, remedial education and parent coaching under one roof for children with dyslexia, ADHD, autism and diverse learning needs. Kumara Park, Bengaluru.",
};

// Applies saved accessibility prefs to <html> before hydration, so GSAP's
// mount-time prefersReducedMotion() check never races the toolbar's own effect.
const applyA11yPrefsScript = `(function(){try{var p=JSON.parse(localStorage.getItem('can-a11y')||'{}');var h=document.documentElement;if(p.fontsize&&p.fontsize!=='normal')h.dataset.fontsize=p.fontsize;if(p.contrast)h.dataset.contrast='high';if(p.motion)h.dataset.motion='reduced';}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${fredoka.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Script id="a11y-prefs" strategy="beforeInteractive">
          {applyA11yPrefsScript}
        </Script>
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
