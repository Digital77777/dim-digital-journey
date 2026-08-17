import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/content/site";
import { useSessionUser } from "@/hooks/use-session";
import { supabase } from "@/integrations/supabase/client";
import { DimWordmark } from "./logo";
import { Container } from "./primitives";

const ACTIVE = { className: "text-primary" };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useSessionUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    setOpen(false);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }


  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Digital Intelligence Marketplace home">
          <DimWordmark />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={ACTIVE}
              className="text-sm font-medium text-navy-soft transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="bg-gradient-dim">
                <Link to="/get-started">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="bg-gradient-dim">
            <Link to={user ? "/dashboard" : "/get-started"}>
              {user ? "Dashboard" : "Get Started"}
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="mt-2 flex flex-col px-4"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={ACTIVE}
                    className="border-b border-border/60 py-3 text-base font-medium text-navy-soft"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/ai-tools"
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium text-navy-soft"
                >
                  AI Tools
                </Link>
                <Link
                  to="/opportunities"
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium text-navy-soft"
                >
                  Opportunities
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium text-navy-soft"
                >
                  FAQ
                </Link>
              </nav>
              <div className="mt-6 flex flex-col gap-2 px-4">
                <Button asChild className="bg-gradient-dim">
                  <Link to="/get-started" onClick={() => setOpen(false)}>
                    Create Your Free Account
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/sign-in" onClick={() => setOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
