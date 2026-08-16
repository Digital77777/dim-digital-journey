import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonCard } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";

const TITLE = "Member Stories | DIM";
const DESCRIPTION =
  "Real member stories from the Digital Intelligence Marketplace. We publish stories only with member permission, so this page grows as members share.";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/stories" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: PageStories,
});

function PageStories() {
  return (
    <>
      <PageHero
        eyebrow="Member stories"
        title="Real stories, published only when they're real."
        description="DIM is early. Rather than invent testimonials or borrow stock quotes, we're leaving this page open until members share their own journeys and give us permission to publish them."
        primary={{ label: "Start Your Story", to: "/get-started" }}
        secondary={{ label: "Share Your Story", to: "/contact" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="Why this page is empty."
          description="No fabricated testimonials, no invented member counts, no borrowed success claims. When members tell us what changed for them, we'll publish it here in their words with their consent."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ComingSoonCard
            title="Member story submissions"
            description="A simple way for members to submit their story from inside DIM is being developed."
          />
          <ComingSoonCard
            title="Creator and career spotlights"
            description="Longer features on member work will be published as the community grows."
          />
        </div>
      </Section>

      <CtaBand
        title="Write the first chapter."
        description="Create a free account, choose your pathway and start building something worth telling people about."
        primaryLabel="Create Your Free Account"
        secondaryLabel="See How DIM Works"
        secondaryTo="/how-it-works"
      />
    </>
  );
}
