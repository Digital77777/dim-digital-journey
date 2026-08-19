export const SITE_URL = "https://dim-digital-journey.lovable.app";

/** BreadcrumbList JSON-LD for a leaf page: Home > {name}. */
export function breadcrumbLd(path: string, name: string) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: `${SITE_URL}${path}`,
        },
      ],
    }),
  };
}
