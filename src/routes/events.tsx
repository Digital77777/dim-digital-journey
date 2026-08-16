import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonCard } from "@/components/dim/coming-soon";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";

const TITLE = "DIM Events and Workshops";
const DESCRIPTION =
  "Live sessions, workshops and networking events for DIM members. Event scheduling is being rolled out — we publish sessions only once they're confirmed.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/events" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: PageEvents,
});

function PageEvents() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Live sessions, workshops and networking."
        description="DIM events are where learning becomes conversation — practical workshops, member sessions and networking with people building in the same direction."
        primary={{ label: "Create Free Account", to: "/get-started" }}
        secondary={{ label: "Explore Connect", to: "/connect" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Upcoming"
          title="No sessions are scheduled yet."
          description="We publish events only once dates and hosts are confirmed. Rather than list placeholder sessions, this page stays empty until there's something real to attend."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ComingSoonCard
            title="Event calendar"
            description="A member calendar with registration is being developed. Members will be notified when the first sessions open."
          />
          <ComingSoonCard
            title="Career workshops"
            description="Workshops for the Career experience are in development and will be announced to Career members first."
          />
        </div>
      </Section>

      <CtaBand
        title="Be notified when events open."
        description="Members are the first to hear about new sessions. A free Starter account is enough."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Join the Community"
        secondaryTo="/community"
      />
    </>
  );
}
