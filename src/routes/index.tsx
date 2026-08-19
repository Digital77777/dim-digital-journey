import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/dim/cta-band";
import { FaqAccordion } from "@/components/dim/faq-accordion";
import { Hero } from "@/components/dim/hero";
import {
  AudienceSection,
  EcosystemSection,
  ProblemSection,
  ToolsSection,
  WhySection,
} from "@/components/dim/home-sections";
import { PathFinder } from "@/components/dim/path-finder";
import {
  Section,
  SectionHeading,
  TextLink,
} from "@/components/dim/primitives";
import { TierCard } from "@/components/dim/tier-card";
import { FAQS, TIERS } from "@/content/site";

const TITLE = "Digital Intelligence Marketplace | Elevate Your Digital IQ";
const DESCRIPTION =
  "Digital Intelligence Marketplace helps you learn practical AI skills, build real-world projects, connect with a digital community, discover opportunities and grow in the AI-powered economy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <EcosystemSection />
      <AudienceSection />

      <Section id="find-your-path">
        <SectionHeading
          eyebrow="Personalised journey"
          title="What are you trying to achieve?"
          description="Choose a goal and DIM will show you the pathway that fits it — before you even create an account."
        />
        <PathFinder />
      </Section>

      <ToolsSection />

      <Section tone="surface" id="career">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Career"
              title="Build a career for the AI-powered economy."
              description="The Career experience turns skills into readiness: a roadmap, portfolio, interview and CV resources, networking and career conversations that keep you moving."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to="/career">Explore Career</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/8-month-career-program">
                  See the 8-Month Program
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <TierCard tier={TIERS[2]!} compact />
          </div>
        </div>
      </Section>

      <Section id="creator">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <TierCard tier={TIERS[1]!} compact />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Creator"
              title="Don't just create. Build something that can grow."
              description="Creator is for people who make things — content, products, services, businesses. Premium courses, the full AI Tools Directory, prompt and content resources, templates and a creator community."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to="/creator">Explore Creator</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/earn">Explore Earning</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" id="community">
        <SectionHeading
          eyebrow="Community"
          title="You don't have to build your future alone."
          description="Discussions, networking, events, collaboration, challenges, peer learning, creator connections and career conversations — with people working on the same things you are."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gradient-dim">
            <Link to="/community">Join the Community</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/events">Explore Events</Link>
          </Button>
        </div>
        <p className="mt-6 max-w-xl text-xs text-muted-foreground">
          DIM does not publish member counts or statistics until they are
          verified. What you see here is what exists today.
        </p>
      </Section>

      <Section id="opportunities">
        <SectionHeading
          eyebrow="Opportunities"
          title="Skills are only the beginning."
          description="DIM works toward pathways: career opportunities, internships, creator opportunities, freelancing, entrepreneurship, networking, collaboration and digital projects. DIM does not guarantee employment or income."
        />
        <div className="mt-8">
          <Button asChild size="lg" variant="outline">
            <Link to="/opportunities">Explore Opportunities</Link>
          </Button>
        </div>
      </Section>

      <Section tone="surface" id="memberships">
        <SectionHeading
          eyebrow="Membership"
          title="Choose your DIM journey."
          description="Start free. Upgrade only if a paid membership genuinely fits what you're doing. All pricing is shown up front."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((tier) => (
            <TierCard key={tier.key} tier={tier} compact />
          ))}
        </div>
        <div className="mt-8">
          <TextLink to="/memberships">
            See the full membership comparison
          </TextLink>
        </div>
      </Section>

      <WhySection />

      <Section id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions people ask before joining."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={FAQS.slice(0, 8)} />
          <div className="mt-8">
            <TextLink to="/faq">Read all frequently asked questions</TextLink>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Your digital future starts with one decision."
        description="You don't need to know everything today. You just need a place to start. DIM gives you an ecosystem to learn, build, connect, earn and grow as you develop your digital capabilities."
        primaryLabel="Create Your Free Account"
        secondaryLabel="Explore Memberships"
        secondaryTo="/memberships"
      />
    </>
  );
}
