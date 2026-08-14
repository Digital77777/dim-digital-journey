import { cn } from "@/lib/utils";

export function DimMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Digital Intelligence Marketplace logo"
      className={cn("size-9", className)}
    >
      <defs>
        <linearGradient id="dim-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.52 0.16 245)" />
          <stop offset="55%" stopColor="oklch(0.68 0.15 217)" />
          <stop offset="100%" stopColor="oklch(0.55 0.21 295)" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#dim-mark-gradient)" />
      <path
        d="M15 33V15h6.6c5.2 0 8.7 3.5 8.7 9s-3.5 9-8.7 9H15Z"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="34" cy="16" r="3" fill="white" fillOpacity="0.9" />
      <circle cx="34" cy="32" r="3" fill="white" fillOpacity="0.55" />
    </svg>
  );
}

export function DimWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <DimMark />
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-tight">
          DIM
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Digital Intelligence
        </span>
      </span>
    </span>
  );
}
