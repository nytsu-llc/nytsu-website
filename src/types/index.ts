/** Product accent per brand: JustIn = amber, Zutto = green. Others none. */
export type ProjectAccent = "amber" | "green" | null;

export type Project = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  featuresKey?: string[];
  ctaKey: string;
  ctaType: "learnMore" | "viewCatalog";
  /** Brand product color accent (card bar, tag) */
  accent?: ProjectAccent;
  /** Product tag above name (e.g. "Hardware · Fencing · Wireless") */
  productTagKey?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
