import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/dim/pillar-page";
import { PILLARS } from "@/content/site";

const TITLE = "Connect With a Digital Community | DIM";
const DESCRIPTION =
  "Meet people who are learning and building too. DIM Connect brings discussions, networking, events, collaboration and peer learning together.";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/connect" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/connect" }],
  }),
  component: PageConnect,
});

function PageConnect() {
  return <PillarPage pillar={PILLARS[2]!} />;
}
