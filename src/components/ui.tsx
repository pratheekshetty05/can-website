import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/asset";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "default",
  border = true,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "soft" | "primary";
  border?: boolean;
  className?: string;
}) {
  const tones = {
    default: "",
    soft: "bg-surface-2",
    primary: "bg-primary text-white",
  };
  return (
    <section id={id} className={`py-14 sm:py-20 ${border ? "border-b border-line" : ""} ${tones[tone]} ${className}`}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${light ? "text-white/70" : "text-muted"}`}>{children}</p>;
}

export function Heading({ children, as: Tag = "h2", light = false, className = "" }: { children: ReactNode; as?: "h1" | "h2" | "h3"; light?: boolean; className?: string }) {
  const size = Tag === "h1" ? "text-3xl sm:text-4xl" : Tag === "h2" ? "text-2xl sm:text-3xl" : "text-lg";
  return (
    <Tag className={`font-semibold leading-snug tracking-tight ${size} ${light ? "text-white" : "text-ink"} ${className}`}>
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
    <Link href={href} className={`inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Card({ children, className = "", tone = "surface" }: { children: ReactNode; className?: string; tone?: "surface" | "soft" | "primary" }) {
  const tones = {
    surface: "bg-surface border border-line",
    soft: "bg-surface-2",
    primary: "bg-primary-soft",
  };
  return <div className={`rounded p-6 ${tones[tone]} ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="border-b border-line py-14 sm:py-20">
      <Container>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading as="h1" className="max-w-2xl">
          {title}
        </Heading>
        {lead && <Lead>{lead}</Lead>}
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
        src={asset(src)}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
