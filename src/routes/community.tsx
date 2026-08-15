import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/community")({
  component: PageCommunity,
});

function PageCommunity() {
  return null;
}
