"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";
import { asset } from "@/lib/asset";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setOpenGroup(null);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="C.A.N home">
          <Image src={asset("/brand/can-logo-compact.png")} alt="C.A.N — Centre for Action on Neurodiversity" width={149} height={105} className="h-12 w-auto" priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium hover:text-primary"
                >
                  {item.label}
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openGroup === item.label && (
                  <div className="absolute left-0 top-full w-72 rounded border border-line bg-surface p-2 shadow-sm">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded px-3 py-2 hover:bg-surface-2">
                        <span className="text-sm font-medium">{c.label}</span>
                        {c.note && <span className="block text-sm text-muted">{c.note}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded px-3 py-2 text-sm font-medium hover:text-primary">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link href="/contact" className="hidden whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark md:inline-flex">
            Talk to us
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 hover:bg-surface-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-surface px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="block rounded-lg px-3 py-2 font-semibold hover:bg-surface-2">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-line pl-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-lg px-3 py-2 text-muted hover:bg-surface-2">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/safeguarding" className="block rounded-lg px-3 py-2 font-semibold text-accent hover:bg-surface-2">
                Safeguarding and child protection
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/contact" className="block rounded bg-primary px-5 py-3 text-center font-semibold text-white">
                Talk to us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function LanguageToggle() {
  // Kannada and Hindi translations are a post-launch fast-follow. Toggle UI is wired now; only English is live.
  return (
    <label className="hidden items-center gap-1 text-sm sm:flex">
      <span className="sr-only">Language</span>
      <select className="rounded-lg border border-line bg-surface px-2 py-2" defaultValue="en" aria-label="Language">
        <option value="en">English</option>
        <option value="kn" disabled>
          ಕನ್ನಡ (coming soon)
        </option>
        <option value="hi" disabled>
          हिन्दी (coming soon)
        </option>
      </select>
    </label>
  );
}
