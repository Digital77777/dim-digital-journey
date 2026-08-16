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

const TITLE = "Career on DIM | Build a Career for the AI Economy";
const DESCRIPTION =
  "The DIM Career experience: career roadmap, AI skills, portfolio development, CV and interview resources, networking and job readiness. Career membership is R250 per month.";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/career" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: PageCareer,
});

const AVAILABLE = [
  "Career roadmap",
  "Practical AI skills for the workplace",
  "Portfolio development",
  "CV and resume resources",
  "Interview preparation",
  "Networking with peers and professionals",
  "Job readiness resources",
  "Career community and workshops",
  "Advanced AI Tools Directory access",
];

const IN_PROGRESS = [
  "Professional certifications",
  "Structured career mentorship",
  "Opportunities board",
];

function PageCareer() {
  return (
    <>
      <PageHero
        eyebrow="Career experience"
        title="Build a career for the AI-powered economy."
        description="Career is the DIM track for students, graduates, job seekers, young professionals and career changers. It moves you from learning to being genuinely ready — with skills, proof of work and the confidence to talk about both."
        primary={{ label: "Explore Career Tier", to: "/memberships" }}
        secondary={{ label: "Create Free Account", to: "/get-started" }}
      >
        <div className="mt-10">
          <StepFlow
            steps={[
              "Learn",
              "Build",
              "Certify",
              "Portfolio",
              "Connect",
              "Opportunities",
              "Grow",
            ]}
          />
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Inside Career"
          title="What the Career experience includes."
          description="Everything below is available inside the Career membership today."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {AVAILABLE.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm"
            >
              <CheckIcon className="mt-0.5 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-6">
          <div className="flex flex-wrap items-center gap-3">
            <ComingSoonBadge />
            <h3 className="font-display text-base font-semibold">
              Still being developed
            </h3>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {IN_PROGRESS.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            These experiences are being built now. We'll let members know when
            they become available, and we don't charge for them as if they were
            already live.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Career tier"
              title="R250 per month."
              description="Everything in Creator, plus career-focused resources and experiences. Cancel any time."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to="/get-started">Create Free Account First</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/8-month-career-program">
                  Compare the 8-Month Program
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              DIM does not guarantee employment or income.
            </p>
          </div>
          <TierCard tier={TIERS[2]!} />
        </div>
      </Section>

      <CtaBand
        title="Your career is a build, not a search."
        description="Start free, choose the career pathway during onboarding, and upgrade only when the Career resources are what you need next."
        primaryLabel="Start My Career Journey"
        secondaryLabel="Explore Opportunities"
        secondaryTo="/opportunities"
      />
    </>
  );
}
