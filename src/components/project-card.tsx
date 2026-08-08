import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type Fact = { value: string; label: string };

const accentText: Record<string, string> = {
  amber: "text-amber-dim dark:text-amber",
  green: "text-green-dim dark:text-green",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();
  const facts = (t(project.factsKey, { returnObjects: true }) as Fact[]) ?? [];
  const accent = project.accent ? accentText[project.accent] : "text-ink dark:text-paper";
  const isExternal = project.productUrl?.startsWith("http");

  return (
    <motion.div
      data-project-id={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      /* The card is not itself a link — the CTA inside it is. Nothing here
         should look clickable without being clickable. */
      className="group relative block border-y border-mist dark:border-graphite py-11 transition-[padding] duration-500 ease-out hover:px-6 focus-within:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber/[0.08] transition-[width] duration-500 ease-out group-hover:w-full group-focus-within:w-full"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-7 lg:gap-14 items-start">
        <div>
          <span
            className={`inline-flex items-center gap-2.5 font-mono text-[9.5px] tracking-[0.2em] uppercase ${accent}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
            {t(project.statusKey)}
          </span>
          <h3
            className={`mt-4 font-bold tracking-[-0.04em] leading-[0.95] ${accent}`}
            style={{ fontSize: "clamp(42px, 7vw, 76px)" }}
          >
            {t(project.nameKey)}
          </h3>
          {project.productTagKey && (
            <p className="mt-3.5 font-mono text-[9.5px] tracking-[0.2em] uppercase text-graphite dark:text-mist">
              {t(project.productTagKey)}
            </p>
          )}
        </div>

        <div>
          <p
            className="font-medium tracking-[-0.02em] leading-[1.3] text-ink dark:text-paper"
            style={{ fontSize: "clamp(19px, 2.4vw, 25px)" }}
          >
            {t(project.taglineKey)}
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-graphite dark:text-mist max-w-[46ch]">
            {t(project.descriptionKey)}
          </p>

          {facts.length > 0 && (
            <dl className="mt-7 flex flex-wrap border-t border-mist dark:border-graphite">
              {facts.map((f) => (
                <div key={f.label} className="pt-4 pr-7">
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="text-[23px] font-bold tracking-[-0.03em] leading-tight text-ink dark:text-paper">
                    {f.value}
                  </dd>
                  <p
                    aria-hidden
                    className="mt-1.5 font-mono text-[9px] tracking-[0.16em] uppercase text-graphite dark:text-mist"
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </dl>
          )}

          <a
            href={project.productUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2.5 mt-7 pb-1 font-mono text-[11.5px] tracking-[0.1em] uppercase text-graphite dark:text-mist border-b border-mist dark:border-graphite hover:text-amber-dim dark:hover:text-amber hover:border-amber-dim dark:hover:border-amber focus-visible:text-amber-dim dark:focus-visible:text-amber transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-paper focus-visible:ring-offset-2"
          >
            {t(project.ctaKey)}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
