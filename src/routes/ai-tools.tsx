import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonBadge } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";
import { TOOL_CATEGORIES } from "@/content/site";

const TITLE = "AI Tools Directory | DIM";
const DESCRIPTION =
  "Browse the DIM AI Tools Directory by category — learning, productivity, content, design, development, marketing, business, research, career and automation.";

export const Route = createFileRoute("/ai-tools")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/ai-tools" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/ai-tools" }],
  }),
  component: PageAiTools,
});

function PageAiTools() {
  return (
    <>
      <PageHero
        eyebrow="AI Tools Directory"
        title="Find the right AI tool for what you're actually doing."
        description="The DIM AI Tools Directory is organised by outcome rather than hype. Starter members see category previews; Creator and Career members get the full directory."
        primary={{ label: "Get Free Access", to: "/get-started" }}
        secondary={{ label: "See Memberships", to: "/memberships" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Categories"
          title="Ten categories, one directory."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_CATEGORIES.map((category) => (
            <li
              key={category.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <h3 className="font-display text-base font-semibold">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="rounded-2xl border border-dashed border-border bg-card p-7">
          <ComingSoonBadge label="In development" />
          <h2 className="mt-3 font-display text-xl font-semibold">
            Tool listings, reviews and comparisons
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We are still building the individual tool pages, member reviews and
            side-by-side comparisons. Rather than publish placeholder listings,
            we're showing you the category structure now and will open the full
            directory as it's populated.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Get directory access with a free account."
        description="Starter members can preview the directory categories. Creator and Career memberships unlock the full and advanced directories."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Compare Memberships"
        secondaryTo="/memberships"
      />
    </>
  );
}
