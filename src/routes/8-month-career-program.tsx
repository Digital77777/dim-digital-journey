import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import {
  CheckIcon,
  Section,
  SectionHeading,
} from "@/components/dim/primitives";
import { TierCard } from "@/components/dim/tier-card";
import { TIERS } from "@/content/site";

const TITLE = "8-Month Career Program | DIM";
const DESCRIPTION =
  "A structured eight-month career journey on DIM for R1,650 once-off: skills development, portfolio building, certifications, community and mentorship opportunities.";

export const Route = createFileRoute("/8-month-career-program")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/8-month-career-program" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/8-month-career-program" }],
  }),
  component: PageProgram,
});

const PHASES = [
  {
    label: "Months 1–2",
    title: "Foundations",
    body: "Digital and AI fundamentals, how to learn effectively, and choosing the direction you want to build toward.",
  },
  {
    label: "Months 3–4",
    title: "Applied skills",
    body: "Deeper practical skills with AI tools, applied to real tasks instead of isolated exercises.",
  },
  {
    label: "Months 5–6",
    title: "Portfolio",
    body: "Build projects worth showing, document them properly, and develop a portfolio that speaks for you.",
  },
  {
    label: "Months 7–8",
    title: "Career readiness",
    body: "Certifications, CV and interview work, networking and positioning yourself for opportunities.",
  },
];

const INCLUDES = [
  "The full Career experience for 8 months",
  "Structured skills development",
  "Portfolio building",
  "Certifications",
  "Career resources",
  "Community access",
  "Mentorship opportunities",
  "AI tools access",
  "Ongoing career development",
];

function PageProgram() {
  return (
    <>
      <PageHero
        eyebrow="8-Month Career Program"
        title="A structured journey, paid once."
        description="If you'd rather commit to a longer, guided path than manage a monthly membership, the 8-Month Career Program gives you the full Career experience for eight months at R1,650 once-off."
        primary={{ label: "Start the 8-Month Journey", to: "/get-started" }}
        secondary={{ label: "Compare Memberships", to: "/memberships" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Programme shape"
          title="Eight months, four phases."
          description="The programme follows the DIM loop, paced so that each phase builds on the previous one."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {PHASES.map((phase) => (
            <li
              key={phase.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {phase.label}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {phase.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What's included"
              title="Everything in Career, for eight months."
            />
            <ul className="mt-8 grid gap-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <CheckIcon className="mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to="/get-started">Create Free Account First</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/refunds">Read Refund Policy</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              DIM does not guarantee employment or income. Certification and
              mentorship elements are being rolled out and are labelled as such
              inside the platform.
            </p>
          </div>
          <TierCard tier={TIERS[3]!} />
        </div>
      </Section>

      <CtaBand
        title="Commit once, build for eight months."
        description="Start with a free account, then choose the programme when you're ready to commit to the longer path."
        primaryLabel="Get Started"
        secondaryLabel="Explore the Career Tier"
        secondaryTo="/career"
      />
    </>
  );
}
