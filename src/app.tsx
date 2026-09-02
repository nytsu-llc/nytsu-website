import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AnalyticsTracker from "@/components/analytics-tracker";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowWeBuild from "@/components/how-we-build";
import Layout from "@/components/layout";
import Projects from "@/components/projects";
import TheBar from "@/components/the-bar";
import { ThemeProvider } from "@/contexts/theme-context";
import CardPage from "@/pages/card";
import JustInPage from "@/pages/justin";

const HomePage = () => (
  <Layout>
    <Hero />
    <TheBar />
    <HowWeBuild />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
);

/** Reset scroll on client-side navigation (SPA default keeps previous scroll). */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/justin"
          element={
            <Layout>
              <JustInPage />
            </Layout>
          }
        />
        <Route path="/card/:slug" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
