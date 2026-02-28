import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "@/components/logo";
import SectionTag from "@/components/section-tag";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:pl-12 lg:pr-16 py-20 lg:py-0 lg:min-h-screen after:absolute after:right-0 after:top-20 after:bottom-20 after:w-px after:bg-mist dark:after:bg-graphite after:hidden lg:after:block">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="mb-8">
            <SectionTag>{t("hero.eyebrow")}</SectionTag>
          </div>
          <h1
            className="text-ink dark:text-paper font-bold leading-[1.05] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
          >
            Building
            <br />
            products
            <br />
            <em className="font-normal not-italic text-graphite dark:text-mist">that matter.</em>
          </h1>
          <p className="text-[17px] leading-[1.65] text-graphite dark:text-mist max-w-[440px] mb-12">
            {t("hero.supportingCopy")}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              type="button"
              className="font-mono text-[11px] tracking-[0.1em] uppercase bg-ink dark:bg-paper text-paper dark:text-ink border border-ink dark:border-paper px-7 py-3.5 hover:bg-studio dark:hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("projects")}
            >
              {t("hero.ctaPrimary")}
            </motion.button>
            <motion.button
              type="button"
              className="font-mono text-[11px] tracking-[0.1em] uppercase bg-transparent text-ink dark:text-paper border border-mist dark:border-graphite px-7 py-3.5 hover:border-ink dark:hover:border-paper transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("about")}
            >
              {t("hero.ctaSecondary")}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center bg-ink overflow-hidden min-h-[50vh] lg:min-h-screen">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(247,246,243,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247,246,243,1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 py-20 lg:py-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, -12, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Logo variant="markOnly" size="2xl" forDarkBackground />
          </motion.div>
          <div
            className="font-sans font-bold text-5xl uppercase text-paper"
            style={{ letterSpacing: "0.18em" }}
          >
            Nytsu
          </div>
          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-graphite">
            {t("hero.headline")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
