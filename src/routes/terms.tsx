import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: PageTerms,
});

function PageTerms() {
  return null;
}
