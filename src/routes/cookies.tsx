import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: PageCookies,
});

function PageCookies() {
  return null;
}
