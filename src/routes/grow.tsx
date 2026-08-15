import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grow")({
  component: PageGrow,
});

function PageGrow() {
  return null;
}
