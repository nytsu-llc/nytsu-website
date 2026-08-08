import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTag from "@/components/section-tag";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionTag>{t("hero.eyebrow")}</SectionTag>

          <h1
            className="mt-8 text-ink dark:text-paper font-bold leading-[1.02] tracking-[-0.04em] max-w-[14ch]"
            style={{ fontSize: "clamp(44px, 8vw, 104px)" }}
          >
            {t("hero.headline")}
          </h1>

          <p className="mt-9 text-[17px] leading-[1.65] text-graphite dark:text-mist max-w-[46ch]">
            {t("hero.supportingCopy")}{" "}
            <strong className="font-semibold text-ink dark:text-paper">
              {t("hero.supportingEmphasis")}
            </strong>
          </p>

          <div className="mt-16 pt-6 border-t border-mist dark:border-graphite">
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-graphite dark:text-mist">
              {t("hero.founded")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
