import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JOURNEY_PATHS } from "@/content/site";
import { StepFlow } from "./primitives";

export function PathFinder() {
  const [selected, setSelected] = useState(JOURNEY_PATHS[3]!.goal);
  const active = JOURNEY_PATHS.find((path) => path.goal === selected)!;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div role="group" aria-label="Choose what you want to achieve">
        <ul className="flex flex-col gap-2.5">
          {JOURNEY_PATHS.map((path) => {
            const isActive = path.goal === selected;
            return (
              <li key={path.goal}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelected(path.goal)}
                  className={cn(
                    "w-full rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors",
                    isActive
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-card text-navy-soft hover:border-primary/40 hover:bg-surface",
                  )}
                >
                  {path.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Your DIM path
        </p>
        <h3 className="mt-3 font-display text-xl font-bold">{active.label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {active.note}
        </p>
        <StepFlow steps={active.steps} className="mt-6" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-gradient-dim">
            <Link to={active.to}>{active.cta}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/get-started">Create Free Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
