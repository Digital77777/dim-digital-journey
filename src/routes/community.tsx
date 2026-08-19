import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonCard } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";

const TITLE = "DIM Community | Learn and Build With Others";
const DESCRIPTION =
  "The DIM community is where members discuss what they're learning, share work, ask for help and collaborate on projects.";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/community" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/community" }],
  }),
  component: PageCommunity,
});

const SPACES = [
  {
    title: "Discussions",
    body: "Ask questions, share what worked, and get unstuck faster than you would alone.",
  },
  {
    title: "Creator space",
    body: "Feedback on work in progress, collaboration and creative accountability.",
  },
  {
    title: "Career space",
    body: "Peer support for people studying, job hunting or changing direction.",
  },
  {
    title: "Peer learning",
    body: "Study alongside people working through the same material.",
  },
];

function PageCommunity() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Progress is easier with people around you."
        description="Community access is included with every DIM membership, including the free Starter account. It's built around relationships first, not transactions."
        primary={{ label: "Join the Community", to: "/get-started" }}
        secondary={{ label: "Explore Connect", to: "/connect" }}
      />

      <Section>
        <SectionHeading eyebrow="Spaces" title="Where members gather." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {SPACES.map((space) => (
            <li
              key={space.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-base font-semibold">
                {space.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{space.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid gap-5 md:grid-cols-2">
          <ComingSoonCard title="Member directory and profiles" />
          <ComingSoonCard title="Collaboration matching" />
        </div>
      </Section>

      <CtaBand
        title="Community access is free."
        description="Create a Starter account and join the conversation — no payment needed."
        primaryLabel="Create Your Free Account"
        secondaryLabel="See Events"
        secondaryTo="/events"
      />
    </>
  );
}
