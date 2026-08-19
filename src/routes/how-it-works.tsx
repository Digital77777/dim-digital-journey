import { breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/dim/cta-band";
import { HowItWorksSteps } from "@/components/dim/home-sections";
import { PageHero } from "@/components/dim/page-hero";
import { PathFinder } from "@/components/dim/path-finder";
import {
  Section,
  SectionHeading,
  TextLink,
} from "@/components/dim/primitives";
import { PILLARS } from "@/content/site";

const TITLE = "How DIM Works | Digital Intelligence Marketplace";
const DESCRIPTION =
  "Discover, learn, build, connect and grow. See how the Digital Intelligence Marketplace ecosystem fits together and where you would start.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/how-it-works" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/how-it-works" }],
    scripts: [breadcrumbLd("/how-it-works", "How DIM Works")],
  }),
  component: PageHowItWorks,
});

function PageHowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How DIM works"
        title="Five steps, one continuous journey."
        description="DIM is designed as a loop rather than a course. You discover where you are, learn what you need, build something with it, connect with people, and keep growing."
        primary={{ label: "Start Your Journey", to: "/get-started" }}
        secondary={{ label: "Compare Memberships", to: "/memberships" }}
      />

      <Section>
        <SectionHeading
          eyebrow="The five steps"
          title="From discovery to growth."
        />
        <div className="mt-10">
          <HowItWorksSteps />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="The ecosystem"
          title="Each pillar has its own home."
          description="Explore any pillar in detail — they are all public, no account needed."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.key}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-display text-base font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {pillar.summary}
              </p>
              <div className="mt-auto pt-5">
                <TextLink to={pillar.to}>{pillar.cta}</TextLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Find your path"
          title="What are you trying to achieve?"
          description="Pick a goal and see the recommended DIM pathway."
        />
        <PathFinder />
      </Section>

      <CtaBand
        title="Start where you are."
        description="Create a free Starter account and DIM will organise your experience around the goal you choose during onboarding."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Read the FAQ"
        secondaryTo="/faq"
      />
    </>
  );
}
