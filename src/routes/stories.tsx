import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stories")({
  component: PageStories,
});

function PageStories() {
  return null;
}
