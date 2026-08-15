import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/connect")({
  component: PageConnect,
});

function PageConnect() {
  return null;
}
