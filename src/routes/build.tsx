import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/build")({
  component: PageBuild,
});

function PageBuild() {
  return null;
}
