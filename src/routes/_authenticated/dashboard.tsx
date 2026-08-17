import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Section, ArrowIcon } from "@/components/dim/primitives";
import { PILLARS } from "@/content/site";

const TITLE = "Your DIM Dashboard";
const DESCRIPTION = "Your Digital Intelligence Marketplace member home.";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PageDashboard,
});

function PageDashboard() {
  const { user } = Route.useRouteContext();

  return (
    <Section>
      <Container>
        <p className="text-sm font-medium text-primary">Signed in</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
          Welcome{user?.email ? `, ${user.email}` : ""}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          You're on the free Starter membership. The full member platform is
          still being built — in the meantime, explore each pillar of the DIM
          ecosystem below.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.key}
              to={pillar.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary"
            >
              <h2 className="font-display text-lg font-semibold">{pillar.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {pillar.cta}
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/memberships">Compare memberships</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
