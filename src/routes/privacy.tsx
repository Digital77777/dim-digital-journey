import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PagePrivacy,
});

function PagePrivacy() {
  return null;
}
