import type { Metadata } from "next";
import Image from "next/image";
import { Button, Card, Eyebrow, Heading, PageHero, Placeholder, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { team } from "@/content/team";
import { values } from "@/content/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "About us", description: "Our story, vision, values and the team behind C.A.N in Bengaluru." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About C.A.N" title="A home away from home for children who learn differently." lead="Neither a school nor a clinic: a space where children feel understood and safe while learning critical skills." />

      <Section>
        <Placeholder label="A quiet reading corner at the C.A.N centre" src="/images/about-reading-nook.jpg" ratio="aspect-[21/9]" className="mb-10" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose-can">
            <Eyebrow>Our story</Eyebrow>
            <Heading>Why C.A.N exists</Heading>
            <p className="mt-4">
              Mainstream schooling and the individual needs of a child who learns differently are drifting further apart. Families are left to stitch together assessments, therapies, tuitions and advice from a dozen places, often without anyone talking to anyone else.
            </p>
            <p>
              C.A.N, the Centre for Action on Neurodiversity, was set up to close that gap: a multidisciplinary centre where remedial education, therapeutic intervention, psychological support and inclusive-education practice sit under one roof and work as one team around the child, with parents, teachers and schools included in the process.
            </p>
            <p>
              We are a set of passionate professionals with professional expertise, work experience and lived experience of neurodivergence, who believe that every child will thrive with the right set of skills.
            </p>
          </div>
          <div className="grid gap-4">
            <Card tone="primary">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Vision</p>
              <p className="mt-2">
                To create an inclusive, compassionate, and scientifically grounded learning ecosystem with aware, accessible, affordable, and available, internationally validated, evidence-based therapies, educational and allied services for children with diverse learning and life needs.
              </p>
            </Card>
            <Card tone="soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Mission</p>
              <p className="mt-2">
                To empower children with high-quality services from assessment to therapy under one roof, support parents to be the parents their child needs, and equip teachers and schools with methods and systems that enrich every classroom.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow>Values</Eyebrow>
        <Heading>What we stand on</Heading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <Card>
                <p className="font-semibold text-ink">{v.title}</p>
                <p className="mt-1 text-sm text-muted">{v.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="team">
        <Eyebrow>Our team</Eyebrow>
        <Heading>The people your child will meet</Heading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 70}>
              <article className="flex h-full flex-col rounded-card border border-line bg-surface p-5">
                {m.photo ? (
                  <Image src={asset(m.photo)} alt={`${m.name}, ${m.role.split("|")[0].trim()}`} width={400} height={400} className="aspect-square w-full rounded-xl object-cover" />
                ) : (
                  <div aria-hidden="true" className="flex aspect-square w-full items-center justify-center rounded-xl bg-primary-soft text-4xl font-semibold text-ink">
                    {m.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <h3 className="mt-4 font-semibold text-ink">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
                {m.quote && <p className="mt-2 text-sm italic">“{m.quote}”</p>}
                <p className="mt-3 text-sm">{m.short}</p>
                <details className="mt-3 text-sm">
                  <summary className="cursor-pointer list-none font-bold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                    Full bio
                  </summary>
                  <div className="mt-2 space-y-2 text-muted">
                    {m.bio.map((p) => (
                      <p key={p.slice(0, 30)}>{p}</p>
                    ))}
                    {m.interests && <p>{m.interests}</p>}
                  </div>
                </details>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow>Partnerships and collaborations</Eyebrow>
        <Heading>We don’t do this alone.</Heading>
        <p className="mt-4 max-w-3xl">
          Clinical and therapeutic services are delivered with established experts through formal MoU-backed collaborations. Educational services are led by The Teachers Collective, co-founded by our Centre Directors. Partner organisations and logos will appear here as permissions are confirmed.
        </p>
        <Button href="/contact" variant="primary" className="mt-6">
          Partner with us
        </Button>
      </Section>
    </>
  );
}
