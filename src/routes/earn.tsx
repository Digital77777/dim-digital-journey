import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/dim/pillar-page";
import { PILLARS } from "@/content/site";

const TITLE = "Earn From Your Digital Capabilities | DIM";
const DESCRIPTION =
  "Turn digital capabilities into opportunities with creator work, freelancing, digital products and marketplace participation on DIM.";

export const Route = createFileRoute("/earn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/earn" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/earn" }],
  }),
  component: PageEarn,
});

function PageEarn() {
  return <PillarPage pillar={PILLARS[3]!} />;
}
