import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/dim/cta-band";
import { FaqAccordion } from "@/components/dim/faq-accordion";
import { PageHero } from "@/components/dim/page-hero";
import { PricingTable } from "@/components/dim/pricing-table";
import { Section, SectionHeading } from "@/components/dim/primitives";
import { TierCard } from "@/components/dim/tier-card";
import { FAQS, TIERS } from "@/content/site";

const TITLE = "DIM Memberships | Starter, Creator, Career";
const DESCRIPTION =
  "Compare DIM memberships: Starter is free, Creator is R95 per month, Career is R250 per month and the 8-Month Career Program is R1,650 once-off.";

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/memberships" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/memberships" }],
  }),
  component: PageMemberships;
});

function PageMemberships() {
  const pricingFaqs = FAQS.filter((faq) =>
    /free|tier|much|cancel|program/i.test(faq.question),
  );

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Choose your DIM journey."
        description="Four options, all prices visible. You never have to pay to use DIM — Starter is genuinely free and nothing is preselected when you sign up."
        primary={{ label: "Start Free", to: "/get-started" }}
        secondary={{ label: "See How DIM Works", to: "/how-it-works" }}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((tier) => (
            <TierCard key={tier.key} tier={tier} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Comparison"
          title="What's included in each membership."
          description="Included features are ticked. A dash means not included. Anything still being developed is labelled Coming Soon, never advertised as live."
        />
        <div className="mt-10">
          <PricingTable />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Membership questions"
          title="Pricing, cancellation and access."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Start free. Upgrade only if it fits."
        description="Create your free Starter account, explore DIM from the inside, and choose a paid membership later if it genuinely matches what you're working toward."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Read the Full FAQ"
        secondaryTo="/faq"
      />
    </>
  );
}
