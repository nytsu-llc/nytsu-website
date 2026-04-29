import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "justin",
    nameKey: "projects.justin.name",
    descriptionKey: "projects.justin.description",
    productTagKey: "projects.justin.productTag",
    image: "/images/justin-placeholder.jpg",
    featuresKey: [
      "projects.justin.features.0",
      "projects.justin.features.1",
      "projects.justin.features.2",
    ],
    ctaKey: "projects.justin.cta",
    productUrl: "https://nytsu.com/justin",
    accent: "amber",
  },
  {
    id: "zutto",
    nameKey: "projects.zutto.name",
    descriptionKey: "projects.zutto.description",
    productTagKey: "projects.zutto.productTag",
    image: "/images/zutto-placeholder.jpg",
    featuresKey: [
      "projects.zutto.features.0",
      "projects.zutto.features.1",
      "projects.zutto.features.2",
    ],
    ctaKey: "projects.zutto.cta",
    productUrl: "https://zuttoapp.com",
    accent: "green",
  },
];
