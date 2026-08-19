import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/dim/auth-form";
import { Container, Section } from "@/components/dim/primitives";

const TITLE = "Sign In to DIM";
const DESCRIPTION =
  "Sign in to your Digital Intelligence Marketplace account to reach your dashboard, learning, tools and community.";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://dim-digital-journey.lovable.app/sign-in" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://dim-digital-journey.lovable.app/sign-in" }],
  }),
  component: PageSignIn,
});

function PageSignIn() {
  return (
    <Section>
      <Container className="max-w-lg">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Member sign-in
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Use your email and password, or continue with Google.
        </p>
        <div className="mt-8">
          <AuthForm mode="sign-in" />
        </div>
      </Container>
    </Section>
  );
}
