import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/dim/legal-page";

const TITLE = "Privacy Policy | DIM";
const DESCRIPTION =
  "How the Digital Intelligence Marketplace collects, uses and protects your personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PagePrivacy,
});

function PagePrivacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="We collect the minimum information needed to run DIM, and we tell you plainly what we do with it."
      updated="2026"
      sections={[
        {
          heading: "Information we collect",
          body: [
            "Account information you give us, such as your name, email address and the pathway or goals you select during onboarding.",
            "Usage information about how you interact with DIM, which helps us understand which resources are useful and which are not.",
            "Payment information for paid memberships, processed by our payment provider. DIM does not store your full card details.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "To create and maintain your account, personalise your DIM pathway, provide the features included in your membership, and communicate about your account and the platform.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We share information only with service providers who help us operate DIM (for example hosting, email and payment processing), and where required by law.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can request access to your information, ask us to correct it, or ask us to delete your account and associated data.",
            "You can unsubscribe from marketing emails at any time; we will still send essential account messages.",
          ],
        },
        {
          heading: "Security and retention",
          body: [
            "We use reasonable technical and organisational measures to protect your information, and keep it only as long as needed to run your account or meet legal obligations.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For any privacy question or request, contact us through the contact page and we will respond directly.",
          ],
        },
      ]}
    />
  );
}
