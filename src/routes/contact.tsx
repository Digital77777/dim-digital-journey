import { breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";
import { BRAND } from "@/content/site";

const TITLE = "Contact DIM | Digital Intelligence Marketplace";
const DESCRIPTION =
  "Get in touch with the Digital Intelligence Marketplace team about memberships, partnerships, support or press.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/contact" }],
    scripts: [breadcrumbLd("/contact", "Contact DIM")],
  }),
  component: PageContact,
});

const REASONS = [
  {
    title: "Membership and support",
    body: "Questions about your account, billing or which membership fits you.",
  },
  {
    title: "Partnerships",
    body: "Organisations, institutions and companies wanting to work with DIM.",
  },
  {
    title: "Share your story",
    body: "If DIM has helped you, we'd like to hear about it — with your permission.",
  },
];

function PageContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the DIM team."
        description="We're a small team building an ecosystem. Email is the fastest way to reach us and we answer real questions with real answers."
        primary={{ label: `Email ${BRAND.name}`, to: "/contact" }}
        secondary={{ label: "Read the FAQ", to: "/faq" }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title="Email is best."
              description="A contact form is being developed. Until then, email reaches us directly."
            />
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-8 inline-flex rounded-xl border border-border bg-card px-5 py-4 font-display text-base font-semibold text-primary shadow-soft transition-shadow hover:shadow-lift"
            >
              {BRAND.email}
            </a>
          </div>
          <ul className="grid gap-4">
            {REASONS.map((reason) => (
              <li
                key={reason.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-base font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {reason.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
