import { PageHero } from "@/components/dim/page-hero";
import { Container, Section } from "@/components/dim/primitives";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section>
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Last updated {updated}
          </p>
          <div className="mt-10 grid gap-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-semibold">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-12 rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground">
            This document is a plain-language summary provided for
            transparency. It is not legal advice, and DIM will publish a final
            reviewed version before paid memberships open.
          </p>
        </Container>
      </Section>
    </>
  );
}
