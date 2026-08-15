import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-tools")({
  component: PageAiTools,
});

function PageAiTools() {
  return null;
}
