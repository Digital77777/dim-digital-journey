import { breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/dim/auth-form";
import { PageHero } from "@/components/dim/page-hero";
import {
  CheckIcon,
  Section,
  SectionHeading,
} from "@/components/dim/primitives";


const TITLE = "Get Started With DIM | Create Your Free Account";
const DESCRIPTION =
  "Create a free DIM Starter account with email or Google, choose your pathway and begin your digital journey.";


export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/get-started" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/get-started" }],
    scripts: [breadcrumbLd("/get-started", "Get Started With DIM")],
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

          <AuthForm mode="sign-up" />

        </div>
      </Section>
    </>
  );
}
