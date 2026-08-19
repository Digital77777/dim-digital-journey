import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/dim/pillar-page";
import { PILLARS } from "@/content/site";

const TITLE = "Grow Your Career and Capabilities | DIM";
const DESCRIPTION =
  "Keep progressing with DIM Grow: career development, certifications, career resources, mentorship opportunities and job readiness.";

export const Route = createFileRoute("/grow")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/grow" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/grow" }],
  }),
  component: PageGrow,
});

function PageGrow() {
  return <PillarPage pillar={PILLARS[4]!} />;
}
