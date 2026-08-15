import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  component: PageLearn,
});

function PageLearn() {
  return null;
}
