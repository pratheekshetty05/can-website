import type { Metadata } from "next";
import { Card, Heading, PageHero, Section } from "@/components/ui";
import { resources } from "@/content/resources";

export const metadata: Metadata = { title: "Resources", description: "Free, practical downloadables for parents and teachers from C.A.N." };

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Free, practical materials for parents and teachers." lead="Short, printable and tested in real homes and classrooms. New resources are added as they are ready." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <Card key={r.title} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{r.audience}</p>
              <Heading as="h3" className="mt-1">
                {r.title}
              </Heading>
              <p className="mt-2 flex-1 text-sm text-muted">{r.description}</p>
              {r.file ? (
                <a href={r.file} download className="mt-4 font-semibold text-primary hover:underline">
                  Download PDF →
                </a>
              ) : (
                <p className="mt-4 text-sm font-semibold text-muted">Coming soon</p>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
