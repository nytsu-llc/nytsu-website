import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/justin" element={<JustInPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
