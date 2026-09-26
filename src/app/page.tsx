import Image from "next/image";
import Link from "next/link";
import { Button, Card, Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { stages } from "@/content/approach";
import { featuredFaqs } from "@/content/faq";
import { services } from "@/content/services";
import { events } from "@/content/resources";
import { values } from "@/content/site";

const audiences = [
  { title: "Is your child struggling at school?", body: "Dyslexia, ADHD, autism or a learning gap: you don't need a diagnosis to talk to us. We help you understand what's going on and what kind of support fits.", href: "/services", cta: "See how we help" },
  { title: "Do you teach a child who learns differently?", body: "Training for whole staff rooms, SEN professionals and school leaders, plus collaboration on the children we support together.", href: "/for-schools", cta: "For schools and teachers" },
  { title: "Are you a paediatrician, psychologist or counsellor?", body: "Refer a child in two minutes. We keep you in the loop with the family's consent.", href: "/for-professionals", cta: "Refer a child" },
];

const proofPoints = [
  { value: "8", label: "specialists across special education, OT, coaching and outreach" },
  { value: "22+", label: "years of special-education experience leading the centre" },
  { value: "1:1", label: "remedial sessions; small groups of 4 to 6" },
  { value: "3", label: "month terms, with a progress report every term" },
];

export default function HomePage() {
  return (
    <>
      <div className="relative h-[88vh] min-h-[560px] max-h-[840px] overflow-hidden border-b border-line">
        <Parallax strength={44} className="absolute inset-0">
          <Image
            src="/images/hero-reception.jpg"
            alt="The C.A.N centre in Kumara Park: a bright, calm learning space"
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <Container className="relative flex h-full items-center">
          <Reveal className="max-w-xl">
            <Eyebrow light>Centre for Action on Neurodiversity, Bengaluru</Eyebrow>
            <Heading as="h1" light>
              Every child can thrive with the right support.
            </Heading>
            <Lead light>
              Assessments, therapies, remedial education and parent coaching under one roof, for children with dyslexia, ADHD, autism and diverse learning needs.
            </Lead>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Talk to us
              </Button>
              <Button href="/for-professionals#refer" variant="light">
                Refer a child
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <Card tone="surface" className="flex h-full flex-col">
                <Heading as="h3">{a.title}</Heading>
                <p className="mt-3 flex-1 text-muted">{a.body}</p>
                <Link href={a.href} className="mt-5 font-semibold text-accent hover:underline">
                  {a.cta} →
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 md:grid-cols-4">
          {proofPoints.map((p) => (
            <div key={p.label}>
              <p className="text-4xl font-semibold text-ink">{p.value}</p>
              <p className="mt-1 text-muted">{p.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <Heading>Professionals with expertise, experience and lived experience.</Heading>
            <p className="mt-4 text-muted">
              We are a set of passionate professionals who believe that every child will thrive with the right set of skills. We support children, parents, teachers and schools, with the child at the centre of everything.
            </p>
            <Button href="/about-us" variant="outline" className="mt-6">
              Meet the team
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <Card tone="soft">
                  <p className="font-semibold text-ink">{v.title}</p>
                  <p className="mt-1 text-sm text-muted">{v.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow>Our approach</Eyebrow>
        <Heading>Six stages, one connected team around your child.</Heading>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {stages.map((s) => (
            <li key={s.step} className="rounded-card bg-surface p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {s.step}. {s.name}
              </p>
              <p className="mt-1 font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <Button href="/our-approach" variant="primary" className="mt-8">
          The parent and child journey
        </Button>
      </Section>

      <Section>
        <Eyebrow>Services</Eyebrow>
        <Heading>From assessment to therapy, under one roof.</Heading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link href={`/services#${s.slug}`} className="block h-full rounded-card border border-line bg-surface p-5 transition-colors hover:border-primary">
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="mt-1 text-sm text-muted">{s.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Our safeguarding promise</Eyebrow>
            <Heading>Safe physically, mentally and emotionally, at all times.</Heading>
            <p className="mt-4">
              The centre is child-proofed for every age group, with CCTV (without audio) in sessions, written child-safeguarding policies and intensive staff training. We never publish a child’s face, and information about your child stays confidential.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button href="/safeguarding" variant="primary">
              Read our safeguarding policy
            </Button>
            <Button href="/meet-my-centre" variant="outline">
              Show my child the centre
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Events and community</Eyebrow>
            <Heading as="h3">Upcoming</Heading>
            {events.length === 0 ? (
              <p className="mt-3 text-muted">Our calendar of workshops, parent sessions and community events is being finalised. Keep an eye on this space.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {events.slice(0, 3).map((e) => (
                  <li key={e.title} className="rounded-card border border-line p-4">
                    <p className="text-sm text-muted">{e.date}</p>
                    <p className="font-semibold">{e.title}</p>
                  </li>
                ))}
              </ul>
            )}
            <Link href="/events-community" className="mt-4 inline-block font-semibold text-accent hover:underline">
              All events →
            </Link>
          </div>
          <div>
            <Eyebrow>Common questions</Eyebrow>
            <Heading as="h3">Parents ask us</Heading>
            <ul className="mt-4 divide-y divide-line">
              {featuredFaqs.slice(0, 3).map((f) => (
                <li key={f.q} className="py-3">
                  <p className="font-semibold">{f.q}</p>
                  <p className="mt-1 text-sm text-muted">{f.a}</p>
                </li>
              ))}
            </ul>
            <Link href="/faq" className="mt-2 inline-block font-semibold text-accent hover:underline">
              All questions →
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="primary" border={false}>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Heading light>Not sure where to start? Start with a conversation.</Heading>
            <Lead light>No diagnosis needed. Monday to Friday, 10 am to 6:30 pm, in Kumara Park.</Lead>
          </div>
          <Button href="/contact" variant="primary">
            Book a visit
          </Button>
        </div>
      </Section>
    </>
  );
}
