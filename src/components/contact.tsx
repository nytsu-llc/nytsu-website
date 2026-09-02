import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTag from "@/components/section-tag";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-mist dark:bg-graphite/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-4">
          <SectionTag>{t("contact.sectionTag")}</SectionTag>
        </div>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-ink dark:text-paper tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("contact.heading")}
        </motion.h2>
        <motion.p
          className="text-[15px] leading-[1.65] text-graphite dark:text-mist mb-6 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          {t("contact.body")}
        </motion.p>
        <motion.a
          href={`mailto:${t("contact.email")}`}
          className="font-mono text-[13px] tracking-[0.04em] text-ink dark:text-paper underline underline-offset-4 decoration-mist dark:decoration-graphite hover:decoration-ink dark:hover:decoration-paper transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2 rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
        >
          {t("contact.email")}
        </motion.a>
        <motion.div
          className="mt-3 flex items-center gap-3 font-mono text-[12px] tracking-[0.04em] text-graphite dark:text-mist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          <span>
            {t("contact.name")} — {t("contact.title")}
          </span>
          <span className="text-mist dark:text-graphite" aria-hidden>
            ·
          </span>
          <a
            href={t("contact.linkedinUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink dark:text-paper underline underline-offset-4 decoration-mist dark:decoration-graphite hover:decoration-ink dark:hover:decoration-paper transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2 rounded"
          >
            {t("contact.linkedin")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export { Contact as default };
