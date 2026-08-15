import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { Pillar } from "@/content/site";
import { PILLARS } from "@/content/site";
import { CtaBand } from "./cta-band";
import { PageHero } from "./page-hero";
import { CheckIcon, Section, SectionHeading, TextLink } from "./primitives";

export function PillarPage({ pillar }: { pillar: Pillar }) {
  const others = PILLARS.filter((item) => item.key !== pillar.key);

  return (
    <>
      <PageHero
        eyebrow={`${pillar.title} · DIM ecosystem`}
        title={pillar.summary}
        description={pillar.description}
        primary={{ label: "Create Your Free Account", to: "/get-started" }}
        secondary={{ label: "See How DIM Works", to: "/how-it-works" }}
      />

      <Section>
        <SectionHeading
          eyebrow={`Inside ${pillar.title}`}
          title={`What ${pillar.title} gives you`}
          description="Everything here is built to be applied, not just consumed."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillar.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm"
            >
              <CheckIcon className="mt-0.5 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-gradient-dim" size="lg">
            <Link to="/get-started">{pillar.cta}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/memberships">Compare Memberships</Link>
          </Button>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Connected pillars"
          title={`${pillar.title} doesn't work in isolation.`}
          description="Each DIM pillar strengthens the next. Follow the one that fits what you need now."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item) => (
            <li
              key={item.key}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-display text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-auto pt-5">
                <TextLink to={item.to}>{item.cta}</TextLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Ready to explore DIM?"
        description="A free Starter account gives you learning content, community access, AI tool previews and a personalised pathway. You can upgrade later, or never."
        primaryLabel="Create Free Account"
        secondaryLabel="Continue Exploring"
        secondaryTo="/how-it-works"
      />
    </>
  );
}
