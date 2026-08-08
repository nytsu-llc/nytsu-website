/** Product accent per brand: JustIn = amber. Others none. */
export type ProjectAccent = "amber" | "green" | null;

export type Project = {
  id: string;
  nameKey: string;
  /** Short status line above the name, e.g. "In development" */
  statusKey: string;
  /** The product's own line, e.g. "Every touch, counted." */
  taglineKey: string;
  descriptionKey: string;
  /** i18n key for an array of { value, label } shown as a stat row */
  factsKey: string;
  ctaKey: string;
  /** Where the CTA points. mailto: while the product has no live site. */
  productUrl: string;
  /** Brand product color accent */
  accent?: ProjectAccent;
  /** Product tag under the name (e.g. "Fencing · Hardware & app") */
  productTagKey?: string;
};
