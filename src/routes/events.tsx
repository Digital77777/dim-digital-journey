import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  component: PageEvents,
});

function PageEvents() {
  return null;
}
