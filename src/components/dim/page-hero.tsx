import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-60"
      />
      <Container className="relative py-14 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-[1.1] text-balance sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </div>
        {primary || secondary ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primary ? (
              <Button asChild size="lg" className="bg-gradient-dim">
                <Link to={primary.to}>{primary.label}</Link>
              </Button>
            ) : null}
            {secondary ? (
              <Button asChild size="lg" variant="outline">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
