import type { Metadata } from "next";
import { Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Safeguarding and child protection", description: "How C.A.N keeps children safe physically, mentally and emotionally, and how to report a concern." };

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        eyebrow="Safeguarding and child protection"
        title="Every child safe, every day."
        lead="This page is one tap from anywhere on our site because it matters more than anything else we do."
        tone="teal"
        mascotSrc="/mascot/bird-nest-rest.png"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-can">
            <Eyebrow>Our commitment</Eyebrow>
            <Heading>In brief</Heading>
            <p className="mt-4">
              C.A.N exists so that children who learn differently feel understood and safe. Safety here means physical, mental and emotional safety, at all times, for every age group we work with.
            </p>
            <ul>
              <li>The centre is child-proofed for all age groups.</li>
              <li>Sessions are covered by CCTV, without audio, so that what happens in a room is never in doubt.</li>
              <li>Every member of staff completes intensive child-safeguarding training, and we operate under written child-safeguarding policies.</li>
              <li>Information about a child is confidential and accessed strictly on a need-to-know basis.</li>
              <li>We never publish a child’s face on this website, even with parental consent. With consent, we may share a child’s work or hands on social media, always with changed names and non-identifying information. Without consent, nothing is published.</li>
              <li>We share reports and information with schools only with a parent’s written consent.</li>
              <li>We follow the laws of the country and go beyond them where we can.</li>
            </ul>
            <h2>Full policy</h2>
            <p>The complete Child Safeguarding and Protection Policy, including staff conduct, recruitment checks, reporting procedures and escalation, is being prepared as a downloadable document and will be published here.</p>
          </div>
          <div className="space-y-4">
            <Card tone="soft">
              <Icon kind="clipboard" className="h-7 w-7 text-accent" />
              <Heading as="h3" className="mt-3">
                Report a concern
              </Heading>
              <p className="mt-2 text-sm">If you are worried about a child’s safety at C.A.N, or about the conduct of anyone connected with us, contact our safeguarding lead directly. Every report is taken seriously and handled confidentially.</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-semibold">Safeguarding lead</dt>
                  <dd>{site.safeguardingLead || "Named lead to be confirmed"}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>
                    <a href={`mailto:${site.safeguardingEmail}?subject=Safeguarding concern`} className="text-primary underline">
                      {site.safeguardingEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone</dt>
                  <dd>{site.safeguardingPhone || "Reporting number to be confirmed"}</dd>
                </div>
              </dl>
            </Card>
            <Card tone="soft">
              <Icon kind="heart" className="h-7 w-7 text-accent" />
              <Heading as="h3" className="mt-3">
                If a child is in immediate danger
              </Heading>
              <p className="mt-2 text-sm">
                Call Childline India on <a href="tel:1098" className="font-semibold underline">1098</a> (free, 24 hours) or the police on <a href="tel:112" className="font-semibold underline">112</a>.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
