import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "@/components/logo";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const JustInDeviceMockup = () => (
  <div className="w-[120px] h-20 rounded-lg bg-amber flex flex-col items-center justify-center gap-1 shadow-[0_12px_40px_rgba(232,160,32,0.35)]">
    <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/85">Score</span>
    <span className="font-mono text-[22px] font-bold text-white tracking-tight">5 — 3</span>
    <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/85">Period 2</span>
  </div>
);

const ZuttoDeviceMockup = () => (
  <div className="w-[70px] h-[120px] rounded-[14px] bg-green flex flex-col items-center justify-center gap-2.5 p-3.5 shadow-[0_12px_40px_rgba(58,170,106,0.35)]">
    <div className="w-[30px] h-1 rounded-sm bg-white/40" />
    <div className="flex-1 w-full rounded-md bg-white/15 flex items-center justify-center">
      <span className="font-mono text-lg font-bold text-white">Z</span>
    </div>
    <div className="w-full h-0.5 rounded-sm bg-white/30" />
  </div>
);

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();
  const accentBar =
    project.accent === "amber"
      ? "bg-amber"
      : project.accent === "green"
        ? "bg-green"
        : "bg-graphite/30";

  const productTagColor =
    project.accent === "amber"
      ? "text-amber-dim"
      : project.accent === "green"
        ? "text-green-dim"
        : "text-graphite dark:text-mist";

  const deviceBg =
    project.accent === "amber"
      ? "bg-amber-pale dark:bg-amber/20"
      : project.accent === "green"
        ? "bg-green-pale dark:bg-green/20"
        : "bg-mist/50 dark:bg-graphite/30";

  return (
    <motion.div
      data-project-id={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative bg-paper dark:bg-studio p-8 sm:p-14 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      {project.accent && (
        <div className={`absolute top-0 left-0 right-0 h-[3px] ${accentBar}`} aria-hidden />
      )}
      {project.productTagKey && (
        <p className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-6 ${productTagColor}`}>
          {t(project.productTagKey)}
        </p>
      )}
      <h3 className="text-3xl sm:text-4xl font-bold text-ink dark:text-paper tracking-tight mb-2">
        {t(project.nameKey)}
      </h3>
      <p className="text-[15px] leading-[1.65] text-graphite dark:text-mist max-w-[360px] mb-9">
        {t(project.descriptionKey)}
      </p>
      <div
        className={`w-full h-[200px] rounded-sm flex items-center justify-center mb-8 ${deviceBg}`}
      >
        {project.id === "justin" && <JustInDeviceMockup />}
        {project.id === "zutto" && <ZuttoDeviceMockup />}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-mist dark:border-graphite">
        <div className="flex items-center gap-2">
          <Logo variant="markOnly" size="xs" className="text-graphite dark:text-mist opacity-50" />
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-graphite dark:text-mist">
            {t("projects.designedBy")}
          </span>
        </div>
        {project.productUrl && (
          <motion.a
            href={project.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink dark:text-paper border border-ink dark:border-paper px-4 py-2 hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t(project.ctaKey)}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
