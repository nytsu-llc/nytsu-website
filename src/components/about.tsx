import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "@/components/logo";
import SectionTag from "@/components/section-tag";

type StudioValue = {
  label: string;
  text: string;
};

const About = () => {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as StudioValue[];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <SectionTag variant="onDark">{t("about.sectionTag")}</SectionTag>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-6 mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              {t("about.studioHeadline")
                .split("\n")
                .map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
            </h2>
            <p className="text-base leading-[1.7] text-graphite mb-10">{t("about.studioBody")}</p>
            <div className="grid grid-cols-2 gap-px bg-graphite">
              {values.map((v) => (
                <div key={v.label} className="bg-studio p-5">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-graphite mb-1.5">
                    {v.label}
                  </div>
                  <div className="text-[13px] leading-[1.5] text-paper">{v.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-full relative overflow-hidden bg-studio py-16 px-14 flex flex-col items-center gap-3">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(247,246,243,1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <Logo variant="markOnly" size="xl" forDarkBackground />
              </div>
              <div
                className="text-3xl font-normal uppercase text-paper relative z-10"
                style={{ letterSpacing: "0.20em" }}
              >
                Nytsu
              </div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-graphite relative z-10 mt-1">
                {t("footer.tagline")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
