import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Projects from "@/components/projects";
import { ThemeProvider } from "@/contexts/theme-context";
import JustInPage from "@/pages/justin";

const HomePage = () => (
  <Layout>
    <Hero />
    <Projects />
    <About />
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
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
