import type { Metadata } from "next";
import { Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { ReferralForm } from "@/components/ReferralForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Book a visit to C.A.N in Kumara Park, Bengaluru. Monday to Friday, 10 am to 6:30 pm." };

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.join(", "))}&output=embed`;
  return (
    <>
      <PageHero eyebrow="Contact" title="Book a visit" lead="Drop in and help us help you. No diagnosis needed, and no question is too small." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Card>
              <Eyebrow>Find us</Eyebrow>
              <address className="not-italic">
                {site.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-3">
                <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:underline">
                  {site.email}
                </a>
              </p>
              {site.phone && (
                <p>
                  <a href={`tel:${site.phone}`} className="font-semibold text-primary hover:underline">
                    {site.phone}
                  </a>
                </p>
              )}
              <p className="mt-3 text-muted">{site.hours}</p>
            </Card>
            <iframe
              title="Map showing the location of C.A.N in Kumara Park, Bengaluru"
              src={mapSrc}
              className="h-72 w-full rounded-card border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Card tone="soft">
              <Heading as="h3">What happens when you write to us</Heading>
              <p className="mt-2 text-sm">We reply within two working days to arrange a first conversation, in person at the centre. That conversation is about your child’s strengths and needs, and about what kind of support might fit. Nothing is decided without you.</p>
            </Card>
          </div>
          <div>
            <Heading as="h3">Send a message</Heading>
            <ReferralForm variant="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
