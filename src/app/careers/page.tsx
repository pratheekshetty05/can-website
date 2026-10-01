import type { Metadata } from "next";
import { Button, Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Careers", description: "Work, intern or collaborate with C.A.N in Bengaluru." };

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers and professional growth"
        title="Work where professionals learn and grow too."
        lead="A fun, hopeful and happy space where students thrive, parents smile, and the people who work here keep getting better at what they do."
        tone="amber"
        mascotSrc="/mascot/concept.png"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Working at C.A.N</Eyebrow>
            <Heading>Supervision, training and a team that talks</Heading>
            <p className="mt-4">
              Every professional working with a child meets monthly to share progress, so nobody works in isolation. Special educators, therapists and coaches learn from each other across disciplines, and our Centre Directors bring decades of training special educators across India.
            </p>
            <p className="mt-3">We stay current with credible research and international programs, and we expect the same curiosity from everyone who joins.</p>
          </div>
          <div className="grid gap-4">
            <Card tone="amber">
              <Icon kind="people" className="h-7 w-7 text-ink" />
              <Heading as="h3" className="mt-3">
                Open roles
              </Heading>
              <p className="mt-2 text-muted">There are no advertised openings right now. We are always glad to hear from special educators, occupational therapists, speech-language pathologists, counsellors and psychologists.</p>
            </Card>
            <Card tone="coral">
              <Icon kind="book" className="h-7 w-7 text-ink" />
              <Heading as="h3" className="mt-3">
                Internships
              </Heading>
              <p className="mt-2">
                If you are in a bachelor’s or master’s program in psychology, special education, occupational therapy, speech-language pathology, social work or a related field, email us. Not from these fields? Email us anyway. If there is a way to collaborate meaningfully, we are open to it.
              </p>
            </Card>
          </div>
        </div>
        <Button href={`mailto:${site.email}?subject=Working with C.A.N`} variant="primary" className="mt-8">
          Send us your profile
        </Button>
      </Section>
    </>
  );
}
