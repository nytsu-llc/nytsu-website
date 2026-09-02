import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTag from "@/components/section-tag";

/**
 * Studio-level only: this says how Nytsu builds anything, not how JustIn
 * specifically came about. Product-specific framing belongs in the product
 * section.
 */
const HowWeBuild = () => {
  const { t } = useTranslation();

  return (
    <section
      id="how"
      className="px-4 sm:px-6 lg:px-16 border-t border-mist dark:border-graphite"
    >
      <div className="max-w-7xl mx-auto py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>{t("how.sectionTag")}</SectionTag>
          <p
            className="mt-9 text-ink dark:text-paper font-medium leading-[1.25] tracking-[-0.025em] max-w-[24ch]"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            {t("how.lead")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeBuild;
