import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  AUDIENCES,
  HOW_IT_WORKS,
  PILLARS,
  TOOL_CATEGORIES,
  WHY_DIM,
} from "@/content/site";
import { cn } from "@/lib/utils";
import {
  ArrowIcon,
  CheckIcon,
  Section,
  SectionHeading,
  TextLink,
  accentBar,
  accentChip,
} from "./primitives";

const WITHOUT = [
  "Learn somewhere.",
  "Find tools somewhere else.",
  "Build alone.",
  "Search for opportunities.",
  "Network randomly.",
  "Figure out your career path yourself.",
];

const WITH = ["Learn.", "Build.", "Connect.", "Earn.", "Grow."];

export function ProblemSection() {
  return (
    <Section tone="surface" id="problem">
      <SectionHeading
        eyebrow="The problem"
        title="The digital economy is moving fast."
        description="People are increasingly expected to understand AI, use digital tools well, adapt their skills and show practical experience. Most struggle because the knowledge, the tools, the community, the career resources and the opportunities are scattered across different platforms. DIM brings those experiences together."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7">
          <h3 className="font-display text-lg font-semibold text-muted-foreground">
            Without DIM
          </h3>
          <ul className="mt-5 space-y-3">
            {WITHOUT.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-border" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-7 shadow-soft">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-dim" />
          <h3 className="font-display text-lg font-semibold">With DIM</h3>
          <ul className="mt-5 space-y-3">
            {WITH.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium">
                <CheckIcon className="mt-0.5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            All within one ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Button asChild size="lg" variant="outline">
          <Link to="/how-it-works">Discover the DIM Ecosystem</Link>
        </Button>
      </div>
    </Section>
  );
}

export function EcosystemSection() {
  return (
    <Section id="ecosystem">
      <SectionHeading
        eyebrow="The DIM ecosystem"
        title="One ecosystem. Many possibilities."
        description="Five connected pillars. You can start anywhere, and every pillar feeds the next."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.key}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div
              aria-hidden="true"
              className={cn("absolute inset-x-0 top-0 h-1", accentBar(pillar.accent))}
            />
            <span
              className={cn(
                "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]",
                accentChip(pillar.accent),
              )}
            >
              {pillar.title}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">
              {pillar.summary}
            </h3>
            <ul className="mt-4 space-y-2">
              {pillar.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="mt-0.5 text-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <TextLink to={pillar.to}>{pillar.cta}</TextLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function AudienceSection() {
  return (
    <Section tone="surface" id="who-its-for">
      <SectionHeading
        eyebrow="Who is DIM for?"
        title="Find your place in the digital economy."
        description="DIM adapts to where you are right now. Choose the description that sounds most like you."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCES.map((audience) => (
          <li key={audience.title}>
            <Link
              to={audience.to}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
            >
              <h3 className="font-display text-base font-semibold">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {audience.description}
              </p>
              <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold text-primary">
                See the pathway
                <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ToolsSection() {
  return (
    <Section id="ai-tools">
      <SectionHeading
        eyebrow="AI Tools Directory"
        title="Stop searching for AI tools. Start using the right ones."
        description="The DIM AI Tools Directory is a decision-making resource, not a list of links. It connects a goal you actually have to the tools worth your time — and explains why."
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {TOOL_CATEGORIES.map((category) => (
          <li
            key={category.name}
            className="rounded-xl border border-border bg-card px-4 py-4"
          >
            <h3 className="font-display text-sm font-semibold">{category.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {category.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="bg-gradient-dim" size="lg">
          <Link to="/ai-tools">Explore the AI Tools Directory</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/get-started">Create Free Account</Link>
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Previews and examples are public. The full directory opens inside your
        DIM account.
      </p>
    </Section>
  );
}

export function WhySection() {
  return (
    <Section tone="surface" id="why-dim">
      <SectionHeading
        eyebrow="Why DIM?"
        title="More than a platform. A digital journey."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
  );
}

export function HowItWorksSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {HOW_IT_WORKS.map((step) => (
        <li
          key={step.number}
          className="relative rounded-2xl border border-border bg-card p-5"
        >
          <span className="font-display text-2xl font-bold text-gradient-dim">
            {step.number}
          </span>
          <h3 className="mt-3 font-display text-base font-semibold">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
