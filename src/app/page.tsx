import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Eyebrow, Heading, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { StaggerGrid } from "@/components/motion/StaggerGrid";
import { CountUp } from "@/components/motion/CountUp";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { FloatingArt } from "@/components/motion/FloatingArt";
import { PhotoMarquee } from "@/components/motion/PhotoMarquee";
import { ScrollChars } from "@/components/motion/ScrollChars";
import { ProgramsAccordion, type ProgramItem } from "@/components/motion/ProgramsAccordion";
import { CloudShape } from "@/components/motion/CloudShape";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Assessments, therapies and remedial education in Bengaluru",
  description:
    "C.A.N (Centre for Action on Neurodiversity) is a multidisciplinary centre in Kumara Park, Bengaluru, supporting children with dyslexia, ADHD, autism and other learning differences through assessments, therapies, remedial education and parent coaching.",
  openGraph: {
    type: "website",
    siteName: "C.A.N — Centre for Action on Neurodiversity",
    title: "C.A.N — Every child CAN thrive with the right support",
    description: "Assessments, therapies, remedial education and parent coaching under one roof, in Kumara Park, Bengaluru.",
    images: ["/brand/can-logo-primary.png"],
  },
  twitter: {
    card: "summary",
    title: "C.A.N — Every child CAN thrive with the right support",
    description: "Assessments, therapies, remedial education and parent coaching under one roof, in Kumara Park, Bengaluru.",
  },
};

const audiences = [
  { icon: "book" as const, title: "Is your child struggling at school?", body: "Dyslexia, ADHD, autism or a learning gap. No diagnosis needed to talk to us.", href: "/services", cta: "See how we help" },
  { icon: "chalkboard" as const, title: "Do you teach a child who learns differently?", body: "Training and collaboration for whole staff rooms and SEN professionals.", href: "/for-schools", cta: "For schools and teachers" },
  { icon: "clipboard" as const, title: "Are you a paediatrician or counsellor?", body: "Refer a child in two minutes, with the family's consent.", href: "/for-professionals", cta: "Refer a child" },
];

const proofPoints = [
  { value: 8, suffix: "", label: "specialists under one roof" },
  { value: 22, suffix: "+", label: "years of special-education experience" },
  { value: null, display: "1:1", label: "sessions, or groups of 4 to 6" },
  { value: 3, suffix: "", label: "month terms, with a progress report every term" },
];

const serviceHighlights = [
  { slug: "assessments", icon: "search" as const, name: "Assessments and diagnostics", blurb: "Find out what's going on, and set the right goals." },
  { slug: "remedial", icon: "book" as const, name: "Remedial education", blurb: "One-on-one and small-group support that builds real skills." },
  { slug: "therapies", icon: "heart" as const, name: "Clinical and therapeutic sessions", blurb: "Speech, OT, counselling and more, integrated with learning." },
  { slug: "early-intervention", icon: "sprout" as const, name: "Early intervention", blurb: "Play-based support for young children, when it matters most." },
  { slug: "parents", icon: "people" as const, name: "Parent coaching and counselling", blurb: "Guidance and community for the whole family." },
];

const iconColors = ["text-amber", "text-coral", "text-accent"];
const cardTones = ["amber", "coral", "accent"] as const;

const programItems: ProgramItem[] = [
  { number: "01", category: "Where support begins", name: "Assessments and diagnostics", href: "/services#assessments", image: "/images/centre-reception-desk.jpg" },
  { number: "02", category: "One-on-one and small group", name: "Remedial education", href: "/services#remedial", image: "/images/centre-learning-room.jpg" },
  { number: "03", category: "Speech, OT, counselling and more", name: "Clinical and therapeutic sessions", href: "/services#therapies", image: "/images/centre-sensory-room.jpg" },
];

const marqueeRow1 = ["/images/centre-entrance.jpg", "/images/centre-reception-desk.jpg", "/images/centre-waiting-area.jpg", "/images/centre-learning-room.jpg"];
const marqueeRow2 = ["/images/about-reading-nook.jpg", "/images/centre-calm-corner.jpg", "/images/centre-sensory-room.jpg", "/images/centre-exit-street.jpg"];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.fullName,
    alternateName: site.name,
    description:
      "Multidisciplinary centre offering assessments, remedial education, therapies and parent coaching for children with dyslexia, ADHD, autism and other learning differences.",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.slice(0, 2).join(", "),
      addressLocality: "Bengaluru",
      postalCode: "560020",
      addressCountry: "IN",
    },
    areaServed: "Bengaluru",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:30",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO — an illustrated sky scene the bird is perched in, not a flat color block */}
      <div className="relative flex min-h-[92vh] flex-col overflow-hidden bg-accent-soft">
        {/* sky layer: drifting cloud clusters at two parallax depths */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax strength={10} className="absolute left-[6%] top-[12%] w-24 opacity-80 sm:w-32 md:left-[10%] md:w-40">
            <CloudShape />
          </Parallax>
          <Parallax strength={22} className="absolute right-[10%] top-[22%] w-32 opacity-90 sm:w-40 md:right-[16%] md:w-52">
            <CloudShape />
          </Parallax>
          <Parallax strength={14} className="absolute left-[34%] top-[6%] w-16 opacity-70 sm:w-20">
            <CloudShape />
          </Parallax>
        </div>

        {/* ground/horizon band */}
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-sun-soft" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:py-20">
          <Reveal>
            <Eyebrow>Centre for Action on Neurodiversity, Bengaluru</Eyebrow>
          </Reveal>
          <div className="overflow-hidden">
            <h1 className="mt-2 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight text-ink sm:text-[11vw] md:text-[9vw] lg:text-[7.5rem]">
              <KineticHeadline text="We are C.A.N" />
            </h1>
          </div>

          <div className="relative mt-12 flex flex-col-reverse items-start gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <Reveal delay={350} className="max-w-[270px] -rotate-2 rounded-2xl bg-surface p-4 shadow-md sm:max-w-[320px]">
              <p className="text-sm uppercase leading-snug tracking-wide text-muted sm:text-base">Therapies, remedial education and parent coaching, for every kind of learner.</p>
              <Button href="/contact" variant="primary" className="clay mt-5">
                Talk to us
              </Button>
            </Reveal>

            {/* bird, perched on a branch at the horizon line */}
            <Reveal delay={500} className="relative mx-auto w-[220px] sm:w-[280px] md:mx-0 md:w-[320px] lg:w-[380px]">
              <div className="absolute bottom-6 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-muted sm:bottom-8" aria-hidden="true" />
              <Parallax strength={18}>
                <FloatingArt src="/mascot/bird-perch.png" alt="The C.A.N bird mascot, perched and waving hello" />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </div>

      {/* WHO WE HELP */}
      <Section>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Card key={a.title} tone={cardTones[i % cardTones.length]} className="flex h-full flex-col rounded-[28px]">
              <span className="clay flex h-14 w-14 items-center justify-center bg-surface">
                <Icon kind={a.icon} className={`h-7 w-7 ${iconColors[i % iconColors.length]}`} />
              </span>
              <Heading as="h3" className="mt-4">
                {a.title}
              </Heading>
              <p className="mt-3 flex-1 text-sm text-muted">{a.body}</p>
              <Link href={a.href} className="mt-5 font-semibold text-accent hover:underline">
                {a.cta} →
              </Link>
            </Card>
          ))}
        </StaggerGrid>
      </Section>

      {/* MARQUEE */}
      <PhotoMarquee row1={marqueeRow1} row2={marqueeRow2} />

      {/* PROOF POINTS */}
      <Section tone="coral">
        <div className="grid gap-8 md:grid-cols-4">
          {proofPoints.map((p) => (
            <Reveal key={p.label}>
              <p className="font-fun text-4xl font-semibold text-ink">{p.value === null ? p.display : <CountUp value={p.value} suffix={p.suffix} />}</p>
              <p className="mt-1 text-sm text-muted">{p.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ABOUT — the bird at home in its nest, reading up on every child it meets */}
      <div className="relative overflow-hidden bg-amber-soft px-5 py-20 sm:px-8 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <Reveal>
              <h2
                className="bg-gradient-to-b from-amber to-coral bg-clip-text font-black uppercase leading-none tracking-tight text-transparent"
                style={{ fontSize: "clamp(2.75rem, 9vw, 120px)" }}
              >
                About C.A.N
              </h2>
            </Reveal>

            <Reveal delay={150} className="relative mt-6 max-w-md rounded-3xl rounded-tl-none bg-surface p-6 shadow-md">
              <ScrollChars
                text="With twenty-two plus years of experience, our eight specialists work as one team around every child who learns differently."
                className="font-medium leading-relaxed text-ink"
              />
            </Reveal>

            <Reveal delay={250} className="mt-6">
              <Button href="/about-us" variant="outline" className="clay">
                Meet the team
              </Button>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-[240px] sm:w-[300px] md:w-full md:max-w-[360px]">
            <Parallax strength={12}>
              <Image src="/mascot/bird-nest-read.png" alt="The C.A.N bird mascot, curled up in its nest reading a book" width={900} height={900} className="h-auto w-full object-contain" />
            </Parallax>
          </Reveal>
        </div>
      </div>

      {/* SERVICES */}
      <Section>
        <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-ink sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Services
        </h2>
        <div className="mx-auto max-w-5xl">
          {serviceHighlights.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <div className="flex items-center gap-6 border-t border-line py-8 last:border-b sm:py-10 md:py-12">
                <span className={`clay flex h-16 w-16 shrink-0 items-center justify-center bg-surface-2 sm:h-20 sm:w-20 ${iconColors[i % iconColors.length]}`}>
                  <Icon kind={s.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
                <div>
                  <Link href={`/services#${s.slug}`} className="font-fun text-lg font-medium uppercase text-ink hover:underline sm:text-2xl">
                    {s.name}
                  </Link>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-lg">{s.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section>
        <Reveal>
          <h2
            className="mb-10 bg-gradient-to-b from-amber to-coral bg-clip-text text-center font-black uppercase leading-none tracking-tight text-transparent"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Programs
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ProgramsAccordion items={programItems} />
        </Reveal>
        <Reveal delay={150} className="mt-10 text-center">
          <Button href="/services" variant="primary" className="clay">
            See all services
          </Button>
        </Reveal>
      </Section>

      {/* SAFEGUARDING — deliberately the calmest scene on the page, right before the close */}
      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="mx-auto w-[180px] sm:w-[220px] lg:mx-0">
            <Image src="/mascot/bird-nest-rest.png" alt="The C.A.N bird mascot, settled calmly into its nest" width={900} height={900} className="h-auto w-full object-contain" />
          </Reveal>
          <div>
            <Eyebrow>Our safeguarding promise</Eyebrow>
            <Heading>Safe physically, mentally and emotionally, at all times.</Heading>
            <p className="mt-4 text-muted">CCTV without audio, written safeguarding policies, and a centre child-proofed for every age group. We never publish a child&apos;s face.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/safeguarding" variant="primary">
                Read our safeguarding policy
              </Button>
              <Button href="/meet-my-centre" variant="outline">
                Show my child the centre
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section tone="primary" border={false}>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Heading light>Not sure where to start? Start with a conversation.</Heading>
            <p className="mt-3 max-w-2xl text-white/80">No diagnosis needed. {site.hours}, in Kumara Park.</p>
          </div>
          <Button href="/contact" variant="primary" className="clay">
            Book a visit
          </Button>
        </div>
      </Section>
    </>
  );
}
