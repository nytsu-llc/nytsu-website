/** Product accent per brand: JustIn = amber, Zutto = green. Others none. */
export type ProjectAccent = "amber" | "green" | null;

export type Project = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  featuresKey?: string[];
  ctaKey: string;
  /** External product URL; omit or set to undefined to hide the CTA button */
  productUrl?: string;
  /** Brand product color accent (card bar, tag) */
  accent?: ProjectAccent;
  /** Product tag above name (e.g. "Hardware · Fencing · Wireless") */
  productTagKey?: string;
};
