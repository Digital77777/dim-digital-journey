import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-started")({
  component: PageGetStarted,
});

function PageGetStarted() {
  return null;
}
