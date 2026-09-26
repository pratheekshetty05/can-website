import type { Metadata } from "next";
import { Button, Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = { title: "Services", description: "Assessments, remedial education, therapies, early intervention, parent coaching and homeschool support at C.A.N Bengaluru." };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Quality services from assessment to therapy, under one roof." lead="Afterschool support for students in inclusive schools, small groups for homeschoolers and NIOS students, and early intervention for young children." />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card tone="soft">
            <p className="font-semibold text-ink">Who we support</p>
            <p className="mt-1 text-sm text-muted">Children with dyslexia, specific learning difficulties, ADHD, autism, developmental delays, emotional and behavioural challenges, and learning gaps.</p>
          </Card>
          <Card tone="soft">
            <p className="font-semibold text-ink">How sessions run</p>
            <p className="mt-1 text-sm text-muted">In-centre, in Kumara Park. Remedial sessions are one-on-one; groups are 4 to 6. Online only for families outside Bengaluru.</p>
          </Card>
          <Card tone="soft">
            <p className="font-semibold text-ink">Fees</p>
            <p className="mt-1 text-sm text-muted">Affordable and transparent. Packages are built around your family’s needs, so we don’t publish a standard price. Talk to us.</p>
          </Card>
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow>The pathway</Eyebrow>
        <Heading>How the pieces connect</Heading>
        <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm font-medium text-muted">
          {["Assessments", "Integrated IEP", "Clinical sessions (speech, OT)", "Remedial sessions (special education, counselling)", "School collaboration"].map((s, i, arr) => (
            <li key={s} className="flex items-center gap-2">
              <span className="text-ink">{s}</span>
              {i < arr.length - 1 && <span aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="space-y-8">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="grid gap-6 rounded-card border border-line bg-surface p-6 md:grid-cols-[1.2fr_1fr]">
              <div>
                <Heading as="h3">{s.name}</Heading>
                <p className="mt-1 text-sm font-semibold text-accent">{s.audience}</p>
                <p className="mt-3">{s.summary}</p>
                <p className="mt-3 text-sm text-muted">
                  <span className="font-semibold">Format:</span> {s.format}
                </p>
              </div>
              <ul className="space-y-1 text-sm">
                {s.involves.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      •
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Heading>For teachers and schools</Heading>
        <p className="mt-3 max-w-2xl">Teacher training, SEN professional development, inclusion audits and whole-school systems have their own page.</p>
        <Button href="/for-schools" variant="primary" className="mt-6">
          See school offerings
        </Button>
      </Section>
    </>
  );
}
