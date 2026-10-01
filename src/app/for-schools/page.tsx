import type { Metadata } from "next";
import { Button, Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { schoolOfferings } from "@/content/services";

export const metadata: Metadata = { title: "For schools", description: "Teacher training, SEN professional development, inclusion audits and whole-school systems from C.A.N." };

const offeringTones = ["amber", "coral", "accent"] as const;

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For schools"
        title="Inclusive classrooms are built, not wished for."
        lead="We train all teachers to teach all kinds of students, help schools set up SEN systems, and partner on the children we support together."
        tone="coral"
        mascotSrc="/mascot/walk.png"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Why schools partner with C.A.N</Eyebrow>
            <Heading>Capacity that stays in your school</Heading>
            <p className="mt-4">
              Our Centre Directors have led SEN initiatives inside mainstream CBSE schools and trained special educators across India. We work with school leaders, coordinators, class teachers and SEN professionals, at your school or at our centre, so that inclusion becomes a system rather than a single person’s job.
            </p>
            <p className="mt-3">All programs are benchmarked to international standards and adapted to Indian classrooms and boards.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {schoolOfferings.map((o, i) => (
              <Card key={o.name} tone={offeringTones[i % offeringTones.length]}>
                <Icon kind="chalkboard" className="h-6 w-6 text-ink" />
                <p className="mt-2 font-semibold text-ink">{o.name}</p>
                <p className="mt-1 text-sm text-muted">{o.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow>Case studies</Eyebrow>
        <Heading>In Indian schools</Heading>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[1, 2].map((n) => (
            <Card key={n} tone="surface">
              <Icon kind="clipboard" className="h-6 w-6 text-accent" />
              <p className="mt-2 text-sm font-semibold text-accent">Case study {n}</p>
              <p className="mt-2 text-muted">Two school partnership case studies (the problem, what C.A.N did, the outcome) are being prepared with the schools’ consent and will be published here.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="primary" border={false}>
        <Heading light>Partner with us</Heading>
        <p className="mt-3 text-white/90">Tell us about your school and where you would like to start: a workshop, an audit, or a whole-school plan.</p>
        <Button href="/contact" variant="primary" className="mt-6">
          Start a conversation
        </Button>
      </Section>
    </>
  );
}
