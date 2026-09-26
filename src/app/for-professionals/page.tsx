import type { Metadata } from "next";
import { Card, Eyebrow, Heading, PageHero, Section } from "@/components/ui";
import { ReferralForm } from "@/components/ReferralForm";

export const metadata: Metadata = { title: "For professionals", description: "Paediatricians, psychologists, counsellors and teachers can refer a child to C.A.N in two minutes." };

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero eyebrow="For professionals" title="Partner with us on referrals." lead="For paediatricians, psychologists, counsellors and teachers who see a child who could use more support than they can give alone." />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <Heading>What happens after a referral</Heading>
            <ol className="mt-4 space-y-4">
              {[
                "You send us the form below, or simply share our website with the family and let them book directly.",
                "We contact the family within two working days to arrange a first conversation. No diagnosis is required.",
                "With the parents' written consent, we keep you informed and collaborate on the child's plan. Without it, by law, we communicate only with the parents.",
              ].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white" aria-hidden="true">
                    {i + 1}
                  </span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <Card tone="soft" className="mt-6">
              <p className="text-sm">
                <span className="font-semibold">Privacy notice.</span> The details you share are used only to contact the family and understand the referral. They are stored confidentially, accessed on a need-to-know basis, and never shared with third parties. Please do not include clinical reports in this form.
              </p>
            </Card>
          </div>
          <div id="refer">
            <Heading as="h3">Refer a child</Heading>
            <ReferralForm />
          </div>
        </div>
      </Section>
    </>
  );
}
