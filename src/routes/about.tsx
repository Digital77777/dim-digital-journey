import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/dim/cta-band";
import { PageHero } from "@/components/dim/page-hero";
import { Section, SectionHeading } from "@/components/dim/primitives";
import { BRAND, WHY_DIM } from "@/content/site";

const TITLE = "About DIM | Digital Intelligence Marketplace";
const DESCRIPTION =
  "Our vision, mission, purpose and beliefs. DIM is building Africa's digital intelligence ecosystem for people learning, building, connecting, earning and growing.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/about" }],
  }),
  component: PageAbout,
});

const BLOCKS = [
  {
    title: "Our vision",
    body: "To become Africa's leading digital intelligence ecosystem, empowering millions of people to learn, build, connect, earn and grow in the AI-powered economy.",
  },
  {
    title: "Our mission",
    body: "To create an accessible, innovative and collaborative ecosystem that equips individuals, creators, professionals, entrepreneurs and organisations with practical AI skills, digital capabilities, meaningful connections and opportunities.",
  },
  {
    title: "Our purpose",
    body: "Help people participate successfully in the digital economy.",
  },
  {
    title: "Our belief",
    body: "Sustainable growth comes from building relationships before transactions.",
  },
];

function PageAbout() {
  return (
    <>
      <PageHero
        eyebrow="About DIM"
        title={`${BRAND.name} exists to make digital capability reachable.`}
        description="DIM was created because the pieces people need to succeed in the digital economy — knowledge, tools, community, career direction and opportunities — live on separate platforms. We are building one connected ecosystem instead."
        primary={{ label: "Explore DIM", to: "/how-it-works" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {BLOCKS.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h2 className="font-display text-lg font-bold uppercase tracking-[0.14em] text-primary">
                {block.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {block.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="What we stand for"
          title="More than a platform. A digital journey."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_DIM.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we communicate"
          title="We only claim what exists."
          description="DIM does not publish unverified member numbers, invented testimonials, fake urgency or features that are still being built. Anything under development is labelled Coming Soon across this website, and pricing is always visible before you sign up."
        />
      </Section>

      <CtaBand
        title="Be part of the ecosystem early."
        description="A free Starter account is the simplest way to see what DIM is becoming."
        primaryLabel="Join DIM"
        secondaryLabel="See Memberships"
        secondaryTo="/memberships"
      />
    </>
  );
}
