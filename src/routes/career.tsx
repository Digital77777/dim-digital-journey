import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/career")({
  component: PageCareer,
});

function PageCareer() {
  return null;
}
