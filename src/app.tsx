import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Projects from "@/components/projects";
import { ThemeProvider } from "@/contexts/theme-context";

const App = () => (
  <ThemeProvider>
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default App;
