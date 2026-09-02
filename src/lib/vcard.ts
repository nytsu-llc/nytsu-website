import type { BusinessCard } from "@/data/business-cards";

const CRLF = "\r\n";

const buildVCardText = (card: BusinessCard): string => {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${card.lastName};${card.firstName};${card.middleName ?? ""};;`,
    `FN:${card.name}`,
    "ORG:Nytsu",
    `TITLE:${card.title}`,
    `EMAIL;TYPE=INTERNET:${card.email}`,
  ];
  if (card.phone) {
    lines.push(`TEL;TYPE=CELL:${card.phone}`);
  }
  lines.push(`URL:${card.linkedinUrl}`, "URL:https://nytsu.com", "END:VCARD");
  return lines.join(CRLF) + CRLF;
};

export const buildVCardUrl = (card: BusinessCard): string => {
  const blob = new Blob([buildVCardText(card)], { type: "text/vcard" });
  return URL.createObjectURL(blob);
};
