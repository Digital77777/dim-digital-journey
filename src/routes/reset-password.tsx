import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container, Section } from "@/components/dim/primitives";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Reset Your DIM Password";
const DESCRIPTION = "Choose a new password for your Digital Intelligence Marketplace account.";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PageResetPassword,
});

function PageResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated.");
    navigate({ to: "/dashboard" });
  }

  return (
    <Section>
      <Container className="max-w-md">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Set a new password
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft"
        >
          <div className="grid gap-2">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-gradient-dim" disabled={busy}>
            {busy ? "Updating…" : "Update password"}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
