import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refunds")({
  component: PageRefunds,
});

function PageRefunds() {
  return null;
}
