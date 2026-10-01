import type { Metadata } from "next";
import { Button, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { stages } from "@/content/approach";

export const metadata: Metadata = { title: "Our approach", description: "The six-stage parent and child journey at C.A.N: understand, connect, plan, support, review, empower." };

const stageTones = ["bg-amber-soft", "bg-coral-soft", "bg-accent-soft"];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="What happens when you come to C.A.N"
        lead="Plain language, no surprises. Here is the journey for you and for your child, stage by stage."
        tone="teal"
        mascotSrc="/mascot/hero-celebrate.png"
      />

      <Section>
        <p className="max-w-3xl text-lg">
          You don’t need a diagnosis to start. The first conversation is about your child’s strengths, needs and aspirations, and about your intuition as a parent, which we value as much as any report. From there we build a team, a plan and a rhythm of support that we review and adapt together.
        </p>
      </Section>

      <Section tone="soft">
        <ol className="space-y-6">
          {stages.map((s, i) => (
            <li key={s.step} className={`grid gap-6 rounded-card p-6 lg:grid-cols-[auto_1fr_1fr_1fr] ${stageTones[i % stageTones.length]}`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-semibold text-white" aria-hidden="true">
                {s.step}
              </div>
              <div className="lg:col-span-3 lg:-mt-1">
                <Eyebrow>{s.name}</Eyebrow>
                <Heading as="h3" className="-mt-2">
                  {s.title}
                </Heading>
                <p className="mt-2">{s.body}</p>
              </div>
              <div className="lg:col-start-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">For the parent</p>
                <p className="mt-1 text-sm">{s.parent}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">For the child</p>
                <p className="mt-1 text-sm">{s.child}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">Typical timeline</p>
                <p className="mt-1 text-sm">{s.timeline}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="primary" border={false}>
        <Heading light>Ready for the first conversation?</Heading>
        <p className="mt-3 text-white/90">Monday to Friday, 10 am to 6:30 pm. Minimum enrolment is one term of three months.</p>
        <Button href="/contact" variant="primary" className="mt-6">
          Book a visit
        </Button>
      </Section>
    </>
  );
}
