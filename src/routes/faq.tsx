import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/dim/cta-band";
import { FaqAccordion } from "@/components/dim/faq-accordion";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";
import { FAQS } from "@/content/site";

const TITLE = "Frequently Asked Questions | DIM";
const DESCRIPTION =
  "Answers about DIM memberships, pricing, cancellation, what's included, what's still being built and how the ecosystem works.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: PageFaq,
});

function PageFaq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers about DIM."
        description="If something you need isn't answered here, contact us and we'll answer it directly."
        primary={{ label: "Create Free Account", to: "/get-started" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />

      <Section>
        <SectionHeading eyebrow="Questions" title="Everything people ask." />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <CtaBand
        title="Still deciding?"
        description="Starter is free and takes a minute. You can explore DIM from the inside before spending anything."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Compare Memberships"
        secondaryTo="/memberships"
      />
    </>
  );
}
