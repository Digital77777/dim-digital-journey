import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ComingSoonCard({
  title,
  description = "This DIM experience is currently being developed. We'll let you know when it becomes available.",
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-6">
      <Badge variant="secondary" className="bg-purple-soft text-purple">
        Coming Soon
      </Badge>
      <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Button asChild variant="outline" size="sm" className="mt-5">
        <Link to="/how-it-works">Explore Available DIM Features</Link>
      </Button>
    </div>
  );
}

export function ComingSoonBadge({ label = "Coming Soon" }: { label?: string }) {
  return (
    <Badge variant="secondary" className="bg-purple-soft text-purple">
      {label}
    </Badge>
  );
}
