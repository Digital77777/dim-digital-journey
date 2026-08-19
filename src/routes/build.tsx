import { breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/dim/pillar-page";
import { PILLARS } from "@/content/site";

const TITLE = "Build Real-World Projects | DIM";
const DESCRIPTION =
  "Turn knowledge into real-world projects on DIM with project briefs, templates, AI tools and portfolio development.";

export const Route = createFileRoute("/build")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/build" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/build" }],
    scripts: [breadcrumbLd("/build", "Build Real-World Projects")],
  }),
  component: PageBuild,
});

function PageBuild() {
  return <PillarPage pillar={PILLARS[1]!} />;
}
