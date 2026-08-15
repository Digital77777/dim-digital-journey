import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Tier } from "@/content/site";
import { CheckIcon, accentBar } from "./primitives";

export function TierCard({
  tier,
  compact = false,
}: {
  tier: Tier;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift",
        tier.featured ? "border-purple/40" : "border-border",
      )}
    >
      <div
        aria-hidden="true"
        className={cn("absolute inset-x-0 top-0 h-1", accentBar(tier.accent))}
      />
      {tier.featured ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
          Most popular
        </p>
      ) : null}
      <h3 className="font-display text-xl font-bold">{tier.name}</h3>
      <p className="mt-3 flex flex-wrap items-baseline gap-2">
        <span className="font-display text-3xl font-bold">{tier.price}</span>
        <span className="text-sm text-muted-foreground">{tier.cadence}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {tier.audience}
      </p>
      <ul className="mt-6 space-y-2.5">
        {(compact ? tier.features.slice(0, 6) : tier.features).map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm">
            <CheckIcon className="mt-0.5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <Button
          asChild
          className={cn("w-full", tier.featured && "bg-gradient-dim")}
          variant={tier.featured ? "default" : "outline"}
        >
          <Link to={tier.to}>{tier.cta}</Link>
        </Button>
        {tier.key === "program" ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Once-off R1,650 payment covering 8 months. This is not lifetime
            access.
          </p>
        ) : null}
        {tier.key === "creator" || tier.key === "career" ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Cancel any time. Nothing is preselected when you sign up.
          </p>
        ) : null}
      </div>
    </article>
  );
}
