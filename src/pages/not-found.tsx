import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTag from "@/components/section-tag";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTag>{t("notFound.sectionTag")}</SectionTag>

          <h1
            className="mt-8 text-ink dark:text-paper font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(44px, 8vw, 80px)" }}
          >
            {t("notFound.heading")}
          </h1>

          <p className="mt-6 text-[17px] leading-[1.65] text-graphite dark:text-mist max-w-[46ch]">
            {t("notFound.body")}
          </p>

          <Link
            to="/"
            className="inline-block mt-10 font-mono text-[11px] tracking-[0.08em] uppercase bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-2.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
          >
            {t("notFound.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
