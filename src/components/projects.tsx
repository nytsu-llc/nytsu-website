import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/project-card";
import SectionTag from "@/components/section-tag";
import { projects } from "@/data/projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="mb-4">
              <SectionTag>{t("projects.sectionTag")}</SectionTag>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-ink dark:text-paper tracking-tight leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("projects.heading")}
            </h2>
          </div>
          <p className="text-sm leading-[1.7] text-graphite dark:text-mist max-w-[340px] font-mono">
            {t("projects.subheadline")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-mist dark:bg-graphite">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects as default };
