import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonCard } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";

const TITLE = "Opportunities | DIM";
const DESCRIPTION =
  "The DIM opportunities board for freelance work, creator briefs and career openings is being developed. We list opportunities only once they're verified.";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/opportunities" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/opportunities" }],
  }),
  component: PageOpportunities,
});

function PageOpportunities() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Where capability meets demand."
        description="The opportunities board will connect DIM members to freelance work, creator briefs, collaborations and career openings. It is included in the Career membership and the 8-Month Career Program."
        primary={{ label: "Explore Career", to: "/career" }}
        secondary={{ label: "Create Free Account", to: "/get-started" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Status"
          title="Being built, not oversold."
          description="We will not publish fake listings to make this page look busy. Opportunities appear here and inside the platform once they are real and verified."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <ComingSoonCard title="Opportunities board" />
          <ComingSoonCard title="Freelance and creator briefs" />
          <ComingSoonCard title="Marketplace participation" />
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          DIM does not guarantee employment, work or income. The opportunities
          board is a place to find and apply for real work — the outcome always
          depends on your skills, portfolio and effort.
        </p>
      </Section>

      <CtaBand
        title="Get ready before the door opens."
        description="Build skills and a portfolio now so that when opportunities go live you're already a credible candidate."
        primaryLabel="Start Building"
        secondaryLabel="Explore Earning"
        secondaryTo="/earn"
      />
    </>
  );
}
