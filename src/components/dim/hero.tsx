import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PILLARS } from "@/content/site";
import { DimMark } from "./logo";
import { Container, accentChip } from "./primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-cyan-soft opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-purple-soft opacity-70 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-navy-soft">
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Digital Intelligence Marketplace
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-6xl">
            Elevate your <span className="text-gradient-dim">digital IQ.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            DIM is an ecosystem helping you learn practical AI skills, build
            real-world projects, connect with people, discover opportunities,
            earn from your capabilities and grow in the AI-powered economy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-dim">
              <Link to="/get-started">Get Started — It's Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">Explore DIM</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No commitment required.
          </p>

          <ul className="mt-10 flex flex-wrap gap-2">
            {PILLARS.map((pillar) => (
              <li key={pillar.key}>
                <Link
                  to={pillar.to}
                  className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${accentChip(pillar.accent)}`}
                >
                  {pillar.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-lift">
            <div className="relative mx-auto flex size-32 items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-primary/30 animate-dim-ring"
              />
              <span
                aria-hidden="true"
                className="absolute inset-3 rounded-full border border-purple/25"
              />
              <DimMark className="size-16 animate-dim-float" />
            </div>
            <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              The DIM flow
            </p>
            <ol className="mt-5 space-y-2.5">
              {PILLARS.map((pillar, index) => (
                <li
                  key={pillar.key}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface px-4 py-3"
                >
                  <span className="font-display text-xs font-bold text-muted-foreground">
                    0{index + 1}
                  </span>
                  <span className="font-display text-sm font-semibold">
                    {pillar.title}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {pillar.summary.replace(/\.$/, "")}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
