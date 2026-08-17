import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/dim/legal-page";

const TITLE = "Cookie Policy | DIM";
const DESCRIPTION =
  "How the Digital Intelligence Marketplace uses cookies and similar technologies, and how you can control them.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/cookies" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: PageCookies,
});

function PageCookies() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="Cookies are small files stored by your browser. We use as few as we can, and only for reasons we can explain."
      updated="2026"
      sections={[
        {
          heading: "Essential cookies",
          body: [
            "These keep the site working: remembering that you are signed in, keeping your session secure, and storing basic preferences. DIM cannot function properly without them.",
          ],
        },
        {
          heading: "Analytics cookies",
          body: [
            "We may use privacy-respecting analytics to understand which pages and resources are useful, so we can improve them. This data is aggregated, not used to profile you individually.",
          ],
        },
        {
          heading: "What we do not do",
          body: [
            "We do not use cookies to sell your data or to build advertising profiles about you across other websites.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can clear or block cookies in your browser settings at any time. Blocking essential cookies may prevent you from signing in or using parts of DIM.",
          ],
        },
        {
          heading: "Questions",
          body: [
            "If you want to know exactly what is stored, contact us and we will tell you.",
          ],
        },
      ]}
    />
  );
}
