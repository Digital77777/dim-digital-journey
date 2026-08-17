import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/dim/legal-page";

const TITLE = "Refund Policy | DIM";
const DESCRIPTION =
  "How refunds, cancellations and billing work for DIM Creator, Career memberships and the 8-Month Career Program.";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/refunds" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
  component: PageRefunds,
});

function PageRefunds() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      description="Plain terms on cancellation, refunds and what happens to your access."
      updated="2026"
      sections={[
        {
          heading: "Starter is free",
          body: [
            "The Starter membership costs nothing and requires no card, so there is nothing to refund.",
          ],
        },
        {
          heading: "Monthly memberships",
          body: [
            "Creator (R95 per month) and Career (R250 per month) can be cancelled at any time. Cancelling stops future billing; access continues to the end of the period you have already paid for.",
            "Because access to digital resources is granted immediately, part-month periods are generally not refunded.",
          ],
        },
        {
          heading: "8-Month Career Program",
          body: [
            "The programme is R1,650 once-off for eight months of access. Refund requests made within 14 days of purchase, where the programme material has not been substantially accessed, will be considered.",
          ],
        },
        {
          heading: "Billing errors and access problems",
          body: [
            "If you were charged incorrectly, charged twice, or could not access what you paid for, contact us and we will correct it — including a refund where a refund is the right outcome.",
          ],
        },
        {
          heading: "How to request",
          body: [
            "Send your request through the contact page with the email address on your account and a short description. We aim to respond within a few business days.",
          ],
        },
      ]}
    />
  );
}
