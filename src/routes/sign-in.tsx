import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/dim/coming-soon";
import { Container, Section } from "@/components/dim/primitives";

const TITLE = "Sign In to DIM";
const DESCRIPTION =
  "Sign in to your Digital Intelligence Marketplace account. The member platform is being finalised and sign-in opens soon.";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/sign-in" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/sign-in" }],
  }),
  component: PageSignIn,
});

function PageSignIn() {
  return (
    <Section>
      <Container className="max-w-xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          <ComingSoonBadge label="Sign-in opening soon" />
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">
            Member sign-in
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The DIM member platform is being finalised. When accounts open,
            you'll sign in here to reach your dashboard, learning, tools and
            community.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-gradient-dim">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/how-it-works">Explore DIM</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
