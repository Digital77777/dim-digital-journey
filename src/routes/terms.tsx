import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/dim/legal-page";

const TITLE = "Terms of Service | DIM";
const DESCRIPTION =
  "The terms that apply when you use the Digital Intelligence Marketplace website, memberships and community.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/terms" }],
  }),
  component: PageTerms,
});

function PageTerms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      description="What you can expect from DIM, and what we expect from members."
      updated="2026"
      sections={[
        {
          heading: "Using DIM",
          body: [
            "You may use DIM for lawful, personal or professional development purposes. You are responsible for keeping your account credentials secure and for activity under your account.",
          ],
        },
        {
          heading: "Memberships and billing",
          body: [
            "Starter is free. Creator is R95 per month and Career is R250 per month, billed monthly until cancelled. The 8-Month Career Program is R1,650 once-off and gives access for eight months.",
            "Prices are shown before you subscribe. If prices change, existing members are notified in advance.",
          ],
        },
        {
          heading: "Cancellation",
          body: [
            "You can cancel a monthly membership at any time. Access continues until the end of the paid period, after which your account reverts to Starter.",
          ],
        },
        {
          heading: "Features under development",
          body: [
            "DIM is an evolving ecosystem. Features labelled Coming Soon are not yet available, and we do not represent them as included in current access.",
          ],
        },
        {
          heading: "No guarantees of outcome",
          body: [
            "DIM provides learning resources, tools, community and opportunity access. We do not guarantee employment, clients, income or any specific result. Outcomes depend on your own effort, skills and circumstances.",
          ],
        },
        {
          heading: "Content and conduct",
          body: [
            "DIM course materials, resources and platform content remain the property of DIM or its licensors and may not be resold or redistributed.",
            "Work you create remains yours. In community spaces, treat other members with respect; harassment, spam and misuse may result in removal.",
          ],
        },
        {
          heading: "Changes and contact",
          body: [
            "We may update these terms as DIM develops and will publish the updated version here. Questions can be sent through the contact page.",
          ],
        },
      ]}
    />
  );
}
