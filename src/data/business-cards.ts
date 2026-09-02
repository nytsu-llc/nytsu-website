export interface BusinessCard {
  slug: string;
  name: string;
  title: string;
  email: string;
  /** Sourced from an env var so the real number never enters git history (public repo). */
  phone?: string;
  linkedin: string;
  linkedinUrl: string;
  /** Optional headshot; falls back to the Nytsu mark when unset. */
  photoUrl?: string;
}

export const businessCards: Record<string, BusinessCard> = {
  justin: {
    slug: "justin",
    name: "Justin J. De La Cruz",
    title: "Founder, Nytsu",
    email: "justin@nytsu.com",
    phone: import.meta.env.VITE_JUSTIN_PHONE || "+1 (000) 000-0000",
    linkedin: "linkedin.com/in/justinjdelacruz",
    linkedinUrl: "https://www.linkedin.com/in/justinjdelacruz",
    photoUrl: "/images/justin-headshot.jpg",
  },
};
