import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/content/site";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "py-16 sm:py-24",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-navy text-primary-foreground",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "font-display font-bold text-balance",
          as === "h1"
            ? "text-3xl leading-[1.1] sm:text-5xl"
            : "text-2xl leading-[1.15] sm:text-4xl",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

const ACCENT_TEXT: Record<Accent, string> = {
  cyan: "text-cyan",
  blue: "text-primary",
  teal: "text-teal",
  purple: "text-purple",
  navy: "text-navy-soft",
};

const ACCENT_CHIP: Record<Accent, string> = {
  cyan: "bg-cyan-soft text-navy",
  blue: "bg-primary/10 text-primary",
  teal: "bg-teal/15 text-teal",
  purple: "bg-purple-soft text-purple",
  navy: "bg-navy/10 text-navy",
};

const ACCENT_BAR: Record<Accent, string> = {
  cyan: "bg-cyan",
  blue: "bg-primary",
  teal: "bg-teal",
  purple: "bg-purple",
  navy: "bg-navy",
};

export function accentText(accent: Accent) {
  return ACCENT_TEXT[accent];
}
export function accentChip(accent: Accent) {
  return ACCENT_CHIP[accent];
}
export function accentBar(accent: Accent) {
  return ACCENT_BAR[accent];
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
    </svg>
  );
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-navy",
        className,
      )}
    >
      {children}
      <ArrowIcon className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function StepFlow({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-2", className)}>
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold sm:text-sm">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowIcon className="size-3.5 text-muted-foreground" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
