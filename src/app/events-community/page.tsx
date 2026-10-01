import type { Metadata } from "next";
import { Button, Card, Heading, PageHero, Section } from "@/components/ui";
import { events } from "@/content/resources";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Events and community", description: "Workshops, parent sessions and community events hosted or joined by C.A.N in Bengaluru." };

const kinds = ["C.A.N event", "C.A.N participating", "Community event"] as const;

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events and community"
        title="Learn with us, in person and online."
        lead="Events we host, events we join as panelists or trainers, and curated community events (for example at NIMHANS) that may interest families."
        tone="coral"
        mascotSrc="/mascot/celebrate.png"
      />

      <Section>
        {events.length === 0 ? (
          <Card tone="coral" className="max-w-2xl">
            <Heading as="h3">The calendar is being finalised.</Heading>
            <p className="mt-2 text-muted">Summer programs, study-skills programs and communication programs run at specific times of the year. Write to us to hear about the next ones first.</p>
            <Button href={`mailto:${site.email}?subject=Please notify me about C.A.N events`} variant="primary" className="mt-4">
              Get notified
            </Button>
          </Card>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap gap-2" aria-label="Event types">
              {kinds.map((k, i) => (
                <span key={k} className={`rounded-full px-3 py-1 text-sm font-medium text-ink ${["bg-amber-soft", "bg-coral-soft", "bg-accent-soft"][i % 3]}`}>
                  {k}
                </span>
              ))}
            </div>
            <ul className="grid gap-6 md:grid-cols-2">
              {events.map((e) => (
                <li key={e.title}>
                  <Card className="h-full">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {e.kind}
                      {e.online ? " · Online" : ""}
                    </p>
                    <Heading as="h3" className="mt-1">
                      {e.title}
                    </Heading>
                    <p className="mt-1 text-sm text-muted">
                      {e.date}
                      {e.time ? `, ${e.time}` : ""} · {e.location}
                    </p>
                    <p className="mt-3 text-sm">{e.description}</p>
                    {e.link && (
                      <a href={e.link} className="mt-3 inline-block font-semibold text-primary hover:underline">
                        Register →
                      </a>
                    )}
                  </Card>
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>
    </>
  );
}
