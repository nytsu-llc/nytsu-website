import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/** Sends page_view on every client-side navigation (React Router SPA). */
const AnalyticsTracker = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export { AnalyticsTracker as default };
