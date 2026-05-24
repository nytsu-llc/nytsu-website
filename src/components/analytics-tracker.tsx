import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/** Initializes GA4 and sends page_view on every client-side navigation. */
const AnalyticsTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useLayoutEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export { AnalyticsTracker as default };
