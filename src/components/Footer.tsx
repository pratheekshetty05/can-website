import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

const columns = [
  {
    title: "About",
    links: [
      { label: "Our story and team", href: "/about-us" },
      { label: "Our approach", href: "/our-approach" },
      { label: "Meet my centre", href: "/meet-my-centre" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "What we do",
    links: [
      { label: "Services", href: "/services" },
      { label: "For schools", href: "/for-schools" },
      { label: "For professionals", href: "/for-professionals" },
      { label: "Resources", href: "/resources" },
      { label: "Events and community", href: "/events-community" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Refer a child", href: "/for-professionals#refer" },
      { label: "Safeguarding and child protection", href: "/safeguarding" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <Image src="/brand/can-logo-compact.png" alt={site.fullName} width={149} height={105} className="h-12 w-auto" />
          <address className="mt-5 not-italic text-muted">
            {site.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="text-ink underline decoration-1 underline-offset-4 hover:text-primary">
              {site.email}
            </a>
          </p>
          {site.phone && (
            <p>
              <a href={`tel:${site.phone}`} className="text-ink underline decoration-1 underline-offset-4 hover:text-primary">
                {site.phone}
              </a>
            </p>
          )}
          <p className="mt-2 text-muted">{site.hours}</p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold text-ink">{c.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} C.A.N, a Wadhwa Foundation initiative. No child’s face is ever published on this site.</p>
          <Link href="/safeguarding" className="font-semibold text-primary hover:underline">
            Report a safeguarding concern
          </Link>
        </div>
      </div>
    </footer>
  );
}
