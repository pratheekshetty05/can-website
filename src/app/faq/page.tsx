import type { Metadata } from "next";
import { Button, Heading, PageHero, Section } from "@/components/ui";
import { faqs } from "@/content/faq";

export const metadata: Metadata = { title: "FAQ", description: "Answers to the questions parents, schools and professionals most often ask C.A.N." };

const groups = ["Getting started", "Families", "Safety and privacy", "Schools and professionals"] as const;

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="FAQ" title="Questions parents ask us" lead="Straight answers, in the order people usually ask them." />
      <Section>
        <nav aria-label="FAQ sections" className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-6 text-sm font-medium">
          {groups.map((g) => (
            <a key={g} href={`#${g.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted underline decoration-1 underline-offset-4 hover:text-primary">
              {g}
            </a>
          ))}
        </nav>
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g} id={g.toLowerCase().replace(/\s+/g, "-")}>
              <Heading>{g}</Heading>
              <div className="mt-4 divide-y divide-line rounded-card border border-line bg-surface">
                {faqs
                  .filter((f) => f.group === g)
                  .map((f) => (
                    <details key={f.q} className="group px-5 py-4">
                      <summary className="flex list-none cursor-pointer items-center justify-between gap-4 font-bold marker:content-none [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-muted">{f.a}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="primary" border={false}>
        <Heading light>Didn’t find your question?</Heading>
        <Button href="/contact" variant="primary" className="mt-6">
          Ask us directly
        </Button>
      </Section>
    </>
  );
}
