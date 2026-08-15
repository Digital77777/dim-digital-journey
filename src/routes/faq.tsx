import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: PageFaq,
});

function PageFaq() {
  return null;
}
