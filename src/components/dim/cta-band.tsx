import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "./primitives";

export function CtaBand({
  title,
  description,
  primaryLabel = "Create Your Free Account",
  primaryTo = "/get-started",
  secondaryLabel,
  secondaryTo,
  microcopy = "No commitment required. Starter is free.",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  microcopy?: string;
}) {
  return (
    <section className="py-16 sm:py-20" aria-label={title}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-dim opacity-40 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-balance sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                {description}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to={primaryTo}>{primaryLabel}</Link>
              </Button>
              {secondaryLabel && secondaryTo ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to={secondaryTo}>{secondaryLabel}</Link>
                </Button>
              ) : null}
            </div>
            {microcopy ? (
              <p className="mt-4 text-xs text-primary-foreground/65">
                {microcopy}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
