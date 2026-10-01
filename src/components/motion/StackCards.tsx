"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap, gsap, prefersReducedMotion } from "@/lib/gsapConfig";
import { Button } from "@/components/ui";

export type ProgramCard = {
  number: string;
  category: string;
  name: string;
  href: string;
  /** [col1-top, col1-bottom, col2-tall] */
  images: [string, string, string];
};

/** Sticky-stacking cards: each card pins, then scales down slightly as the next one covers it. */
export function StackCards({ cards }: { cards: ProgramCard[] }) {
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();
    const n = cards.length;
    const tweens = cards.map((_, i) => {
      if (i === n - 1) return null;
      const card = cardRefs.current[i];
      const wrap = wrapRefs.current[i];
      if (!card || !wrap) return null;
      const targetScale = 1 - (n - 1 - i) * 0.03;
      return gsap.to(card, {
        scale: targetScale,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => tweens.forEach((t) => t?.scrollTrigger?.kill());
  }, [cards.length]);

  return (
    <div className="relative">
      {cards.map((c, i) => (
        <div
          key={c.number}
          ref={(el) => {
            wrapRefs.current[i] = el;
          }}
          className="sticky h-[85vh]"
          style={{ top: `${96 + i * 28}px`, zIndex: 10 + i }}
        >
          <div
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex h-full flex-col rounded-[40px] border-2 border-accent bg-surface p-4 shadow-lg will-change-transform sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-baseline gap-4">
                <span className="font-fun text-[clamp(2.5rem,9vw,6rem)] font-black leading-none text-primary">{c.number}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">{c.category}</p>
                  <p className="font-fun text-xl font-semibold text-ink sm:text-2xl">{c.name}</p>
                </div>
              </div>
              <Button href={c.href} variant="outline" className="rounded-full">
                View service
              </Button>
            </div>

            <div className="mt-6 flex flex-1 gap-3">
              <div className="flex w-2/5 flex-col gap-3">
                <div className="relative flex-1 overflow-hidden rounded-[28px] sm:rounded-[36px]">
                  <Image src={c.images[0]} alt="" fill sizes="20vw" className="object-cover" />
                </div>
                <div className="relative flex-[1.4] overflow-hidden rounded-[28px] sm:rounded-[36px]">
                  <Image src={c.images[1]} alt="" fill sizes="20vw" className="object-cover" />
                </div>
              </div>
              <div className="relative w-3/5 overflow-hidden rounded-[28px] sm:rounded-[36px]">
                <Image src={c.images[2]} alt="" fill sizes="30vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
