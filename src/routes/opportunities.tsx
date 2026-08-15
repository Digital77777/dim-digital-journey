import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/opportunities")({
  component: PageOpportunities,
});

function PageOpportunities() {
  return null;
}
