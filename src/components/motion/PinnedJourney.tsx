"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { ensureGsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsapConfig";
import type { Stage } from "@/content/approach";

/**
 * The site's one Complex-tier moment (see the motion spec): pins while the
 * mascot walks across the 6 stages, scrubbed to scroll position. Falls back
 * to a plain stacked list under reduced motion — no pin, no scrub, full
 * content immediately readable.
 */
export function PinnedJourney({ stages, mascotSrc }: { stages: Stage[]; mascotSrc: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState<boolean | null>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    if (prefersReducedMotion()) {
      setReduced(true);
      return;
    }
    setReduced(false);
    if (!sectionRef.current || !trackRef.current || !mascotRef.current) return;
    ensureGsap();

    const track = trackRef.current;
    const mascot = mascotRef.current;
    const n = stages.length;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${n * 90}%`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const trackWidth = track.clientWidth - mascot.offsetWidth;
        mascot.style.transform = `translateX(${progress * trackWidth}px)`;
        const idx = Math.min(n - 1, Math.floor(progress * n));
        setActive(idx);
      },
    });

    return () => st.kill();
  }, [stages.length]);

  if (reduced) {
    return (
      <ol className="space-y-6">
        {stages.map((s) => (
          <li key={s.step} className="clay bg-surface p-6">
            <p className="font-fun text-sm font-semibold uppercase tracking-wide text-accent">
              {s.step}. {s.name}
            </p>
            <p className="mt-1 font-semibold">{s.title}</p>
            <p className="mt-1 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div ref={sectionRef} className="flex min-h-screen flex-col justify-center py-10">
      <div ref={trackRef} className="relative mb-12 h-2 rounded-full bg-surface-2">
        <div className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-100" style={{ width: `${((active + 1) / stages.length) * 100}%` }} />
        {stages.map((s, i) => (
          <div
            key={s.step}
            className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-surface transition-colors ${i <= active ? "bg-primary" : "bg-surface-2"}`}
            style={{ left: `${(i / (stages.length - 1)) * 100}%` }}
          />
        ))}
        <div ref={mascotRef} className="absolute -top-10 left-0 h-16 w-16 will-change-transform">
          <Image src={mascotSrc} alt="" aria-hidden="true" fill sizes="64px" className="object-contain drop-shadow" />
        </div>
      </div>

      {stages.map((s, i) => (
        <div key={s.step} className={`transition-opacity duration-300 ${i === active ? "opacity-100" : "pointer-events-none absolute opacity-0"}`}>
          <p className="font-fun text-sm font-semibold uppercase tracking-wide text-accent">
            {s.step} / {stages.length} — {s.name}
          </p>
          <h3 className="font-fun mt-2 text-2xl font-semibold text-ink sm:text-3xl">{s.title}</h3>
          <p className="mt-3 max-w-2xl text-muted">{s.body}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">For the parent</p>
              <p className="mt-1 text-sm">{s.parent}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">For the child</p>
              <p className="mt-1 text-sm">{s.child}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Typical timeline</p>
              <p className="mt-1 text-sm">{s.timeline}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
