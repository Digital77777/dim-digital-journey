import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/dim/coming-soon";
import { PageHero } from "@/components/dim/page-hero";
import {
  CheckIcon,
  Section,
  SectionHeading,
} from "@/components/dim/primitives";

const TITLE = "Get Started With DIM | Create Your Free Account";
const DESCRIPTION =
  "Create a free DIM Starter account, choose your pathway and begin your digital journey. Account creation opens soon — explore the ecosystem in the meantime.";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/get-started" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/get-started" }],
  }),
  component: PageGetStarted,
});

const STEPS = [
  "Create your free Starter account",
  "Tell DIM what you're working toward",
  "Get a suggested pathway across Learn, Build, Connect, Earn and Grow",
  "Upgrade later only if a paid membership fits",
];

function PageGetStarted() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Your DIM journey starts with a free account."
        description="Starter is free, requires no card, and nothing is preselected for you. You choose your own direction during onboarding."
        secondary={{ label: "Compare Memberships", to: "/memberships" }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What happens next"
              title="Four simple steps."
            />
            <ul className="mt-8 grid gap-3">
              {STEPS.map((step) => (
                <li key={step} className="flex gap-3 text-sm">
                  <CheckIcon className="mt-0.5 text-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-surface p-7">
            <ComingSoonBadge label="Account creation opening soon" />
            <h2 className="mt-3 font-display text-xl font-semibold">
              Sign-up isn't open yet
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The DIM member platform is being finalised. Rather than collect
              details we can't yet use, we'd rather you explore the ecosystem
              and pricing openly first — everything on this website is public
              and accurate.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-gradient-dim">
                <Link to="/how-it-works">See How DIM Works</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
