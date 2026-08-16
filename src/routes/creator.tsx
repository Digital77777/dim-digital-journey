import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import {
  CheckIcon,
  Section,
  SectionHeading,
  StepFlow,
} from "@/components/dim/primitives";
import { TierCard } from "@/components/dim/tier-card";
import { TIERS } from "@/content/site";

const TITLE = "Creator on DIM | Build, Create and Earn";
const DESCRIPTION =
  "The DIM Creator experience: premium AI courses, the full AI Tools Directory, prompt and content resources, creator community, challenges and project templates. Creator is R95 per month.";

export const Route = createFileRoute("/creator")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/creator" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/creator" }],
  }),
  component: PageCreator,
});

const AVAILABLE = [
  "Premium AI courses",
  "Full AI Tools Directory",
  "AI prompt resources",
  "Content creation resources",
  "Business resources",
  "Freelancing resources",
  "Creator community",
  "Creator challenges",
  "Portfolio building",
  "Project templates",
  "Early access to new features",
  "Member discounts",
];

function PageCreator() {
  return (
    <>
      <PageHero
        eyebrow="Creator experience"
        title="Don't just create. Build something that can grow."
        description="Creator is for people who make things — content, products, services, side hustles and small businesses. It gives you the tools, resources and community to move from making to sustaining."
        primary={{ label: "Become a Creator", to: "/memberships" }}
        secondary={{ label: "Create Free Account", to: "/get-started" }}
      >
        <div className="mt-10">
          <StepFlow
            steps={["Learn", "Create", "Tools", "Publish", "Community", "Earn"]}
          />
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Inside Creator"
          title="What the Creator experience includes."
          description="Available inside the Creator membership today."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AVAILABLE.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm"
            >
              <CheckIcon className="mt-0.5 text-purple" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-6">
          <div className="flex flex-wrap items-center gap-3">
            <ComingSoonBadge />
            <h3 className="font-display text-base font-semibold">
              Badges, achievements and marketplace participation
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            These creator features are currently being developed. We'll let you
            know when they become available.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Creator tier"
              title="R95 per month."
              description="Everything in Starter, plus premium creator resources and opportunities. Cancel any time."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to="/get-started">Create Free Account First</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/memberships">Compare All Memberships</Link>
              </Button>
            </div>
          </div>
          <TierCard tier={TIERS[1]!} />
        </div>
      </Section>

      <CtaBand
        title="Make something this month."
        description="Start free, explore the creator pathway, and upgrade when premium resources are the thing standing between you and shipping."
        primaryLabel="Join DIM"
        secondaryLabel="Explore Earning"
        secondaryTo="/earn"
      />
    </>
  );
}
