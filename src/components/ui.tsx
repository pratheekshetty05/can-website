import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "default",
  border = true,
  className = "",
  noRevealWrapper = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "soft" | "primary" | "amber" | "coral" | "teal";
  border?: boolean;
  className?: string;
  /** Skip the outer fade-in wrapper — it applies a CSS transform that breaks
   * GSAP ScrollTrigger's `pin: true` on any descendant (fixed-position pins
   * resolve against the nearest transformed ancestor, not the viewport). */
  noRevealWrapper?: boolean;
}) {
  const tones = {
    default: "",
    soft: "bg-surface-2",
    primary: "bg-primary text-white",
    amber: "bg-amber-soft",
    coral: "bg-coral-soft",
    teal: "bg-accent-soft",
  };
  return (
    <section id={id} className={`py-14 sm:py-20 ${border ? "border-b border-line" : ""} ${tones[tone]} ${className}`}>
      <Container>{noRevealWrapper ? children : <Reveal>{children}</Reveal>}</Container>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${light ? "text-white/70" : "text-muted"}`}>{children}</p>;
}

export function Heading({ children, as: Tag = "h2", light = false, className = "" }: { children: ReactNode; as?: "h1" | "h2" | "h3"; light?: boolean; className?: string }) {
  const size = Tag === "h1" ? "text-3xl sm:text-4xl" : Tag === "h2" ? "text-2xl sm:text-3xl" : "text-lg";
  return (
    <Tag className={`font-fun font-semibold leading-snug tracking-tight ${size} ${light ? "text-white" : "text-ink"} ${className}`}>
      {children}
    </Tag>
  );
}

export function Lead({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mt-3 max-w-2xl text-base sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>{children}</p>;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "text";
  className?: string;
}) {
  if (variant === "text") {
    return (
      <Link href={href} className={`inline-flex items-center gap-1.5 font-semibold text-primary underline decoration-1 underline-offset-4 hover:decoration-2 ${className}`}>
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:bg-surface-2",
  };
  return (
    <Link href={href} className={`font-fun inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Card({ children, className = "", tone = "surface" }: { children: ReactNode; className?: string; tone?: "surface" | "soft" | "primary" | "amber" | "coral" | "accent" }) {
  const tones = {
    surface: "bg-surface border border-line",
    soft: "bg-surface-2",
    primary: "bg-primary-soft",
    amber: "bg-amber-soft",
    coral: "bg-coral-soft",
    accent: "bg-accent-soft",
  };
  return <div className={`rounded p-6 ${tones[tone]} ${className}`}>{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "default",
  mascotSrc,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "default" | "amber" | "coral" | "teal";
  /** Small mascot illustration shown beside the heading — the same reusable touch across every page. */
  mascotSrc?: string;
}) {
  const tones = { default: "bg-bg", amber: "bg-amber-soft", coral: "bg-coral-soft", teal: "bg-accent-soft" };
  return (
    <div className={`border-b border-line py-14 sm:py-20 ${tones[tone]}`}>
      <Container className="flex items-center justify-between gap-10">
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading as="h1" className="max-w-2xl">
            {title}
          </Heading>
          {lead && <Lead>{lead}</Lead>}
        </div>
        {mascotSrc && (
          <div className="hidden w-32 shrink-0 md:block lg:w-40">
            <Image src={mascotSrc} alt="" aria-hidden="true" width={400} height={400} className="h-auto w-full object-contain" />
          </div>
        )}
      </Container>
    </div>
  );
}

export function Placeholder({
  label,
  src,
  ratio = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  label: string;
  src?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return <div role="img" aria-label={label} className={`${ratio} w-full rounded border border-line bg-surface-2 ${className}`} />;
  }
  return (
    <div className={`${ratio} relative w-full overflow-hidden rounded border border-line ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
