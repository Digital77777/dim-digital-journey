import { Link } from "@tanstack/react-router";
import { BRAND, SOCIALS } from "@/content/site";
import { DimMark } from "./logo";
import { Container } from "./primitives";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "How DIM Works", to: "/how-it-works" },
      { label: "Learning", to: "/learn" },
      { label: "AI Tools", to: "/ai-tools" },
      { label: "Community", to: "/community" },
      { label: "Opportunities", to: "/opportunities" },
      { label: "Events", to: "/events" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Starter", to: "/memberships" },
      { label: "Creator", to: "/creator" },
      { label: "Career", to: "/career" },
      { label: "8-Month Career Program", to: "/8-month-career-program" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About DIM", to: "/about" },
      { label: "Member Stories", to: "/stories" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "Refund Policy", to: "/refunds" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <DimMark />
              <span className="font-display text-lg font-bold">DIM</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {BRAND.name}
            </p>
            <p className="mt-2 font-display text-sm font-semibold">
              {BRAND.tagline}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {BRAND.philosophy}
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-sm font-semibold">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label + link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          {SOCIALS.length > 0 ? (
            <ul className="flex flex-wrap gap-4">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="transition-colors hover:text-primary"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Official DIM social channels will be listed here once they are
              live.
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
}
