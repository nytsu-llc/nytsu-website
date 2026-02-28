import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/i18n/locales/en/translation.json";
import esTranslations from "@/i18n/locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
