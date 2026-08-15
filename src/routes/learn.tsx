import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "@/components/dim/pillar-page";
import { PILLARS } from "@/content/site";

const TITLE = "Learn Practical AI Skills | DIM";
const DESCRIPTION =
  "Develop practical AI and digital skills on DIM with courses, guided resources and challenges designed around what you can actually apply.";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/learn" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/learn" }],
  }),
  component: PageLearn,
});

function PageLearn() {
  return <PillarPage pillar={PILLARS[0]!} />;
}
