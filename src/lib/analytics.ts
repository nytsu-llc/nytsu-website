const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

export const isAnalyticsEnabled = (): boolean => import.meta.env.PROD && Boolean(MEASUREMENT_ID);

/** Load gtag.js once in production when a measurement ID is configured. */
export const initAnalytics = (): void => {
  if (!isAnalyticsEnabled() || initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
};

/** Send a page_view for client-side route changes (React Router SPA). */
export const trackPageView = (path: string): void => {
  if (!isAnalyticsEnabled()) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
};

/** Fire a custom GA4 event (e.g. key conversions). */
export const trackEvent = (eventName: string, params?: Record<string, string>): void => {
  if (!isAnalyticsEnabled()) return;
  window.gtag("event", eventName, params);
};
