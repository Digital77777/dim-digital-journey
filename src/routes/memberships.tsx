import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/memberships")({
  component: PageMemberships,
});

function PageMemberships() {
  return null;
}
