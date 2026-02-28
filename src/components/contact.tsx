import * as Label from "@radix-ui/react-label";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import SectionTag from "@/components/section-tag";
import type { ContactFormData } from "@/types";

/** Standard enter/exit animation for form error and status messages */
const messageMotion = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.2 },
};

function Contact() {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setSubmitStatus("idle");
    try {
      // Placeholder: replace with real submission
      await new Promise((r) => setTimeout(r, 500));
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-mist dark:bg-graphite/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-4">
          <SectionTag>{t("contact.sectionTag")}</SectionTag>
        </div>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-ink dark:text-paper tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("contact.heading")}
        </motion.h2>
        <motion.form
          className="mt-10 max-w-xl space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <Label.Root
              htmlFor="name"
              className="block font-mono text-xs tracking-widest uppercase text-graphite dark:text-mist mb-2"
            >
              {t("contact.nameLabel")}
            </Label.Root>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-paper dark:bg-studio border border-mist dark:border-graphite rounded text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper"
              aria-invalid={!!errors.name}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  key="name"
                  {...messageMotion}
                  className="mt-1 text-sm text-graphite dark:text-mist"
                  role="alert"
                >
                  {t("contact.nameRequired")}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div>
            <Label.Root
              htmlFor="email"
              className="block font-mono text-xs tracking-widest uppercase text-graphite dark:text-mist mb-2"
            >
              {t("contact.emailLabel")}
            </Label.Root>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="w-full px-4 py-3 bg-paper dark:bg-studio border border-mist dark:border-graphite rounded text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper"
              aria-invalid={!!errors.email}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  key="email"
                  {...messageMotion}
                  className="mt-1 text-sm text-graphite dark:text-mist"
                  role="alert"
                >
                  {errors.email.type === "required"
                    ? t("contact.emailRequired")
                    : t("contact.emailInvalid")}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div>
            <Label.Root
              htmlFor="message"
              className="block font-mono text-xs tracking-widest uppercase text-graphite dark:text-mist mb-2"
            >
              {t("contact.messageLabel")}
            </Label.Root>
            <textarea
              id="message"
              rows={5}
              {...register("message", { required: true })}
              className="w-full px-4 py-3 bg-paper dark:bg-studio border border-mist dark:border-graphite rounded text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper resize-y"
              aria-invalid={!!errors.message}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  key="message"
                  {...messageMotion}
                  className="mt-1 text-sm text-graphite dark:text-mist"
                  role="alert"
                >
                  {t("contact.messageRequired")}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.p
                key="success"
                {...messageMotion}
                className="text-graphite dark:text-mist"
                role="status"
              >
                {t("contact.success")}
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                key="error"
                {...messageMotion}
                className="text-graphite dark:text-mist"
                role="alert"
              >
                {t("contact.error")}
              </motion.p>
            )}
          </AnimatePresence>
          <button
            type="submit"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-ink dark:bg-paper text-paper dark:text-ink border border-ink dark:border-paper rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
          >
            {t("contact.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export { Contact as default };
