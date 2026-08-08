import type { Project } from "@/types";

/**
 * One product, deliberately. Zutto is not listed: it was part of a PR Science
 * Trust programme, was paused before shipping, and was never a Nytsu product.
 *
 * JustIn's CTA points at email rather than justinfencing.com — that domain is
 * still an unconfigured registrar placeholder. Swap `productUrl` to
 * "https://justinfencing.com" once it serves the product.
 */
export const projects: Project[] = [
  {
    id: "justin",
    nameKey: "projects.justin.name",
    statusKey: "projects.justin.status",
    taglineKey: "projects.justin.tagline",
    descriptionKey: "projects.justin.description",
    factsKey: "projects.justin.facts",
    productTagKey: "projects.justin.productTag",
    ctaKey: "projects.justin.cta",
    productUrl: "mailto:support@nytsu.com?subject=JustIn%20%E2%80%94%20early%20access",
    accent: "amber",
  },
];
