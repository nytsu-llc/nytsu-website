import { useTranslation } from "react-i18next";
import Logo from "@/components/logo";
import { projects } from "@/data/projects";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-studio border-t border-white/[0.06] py-14 sm:py-16 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center text-paper focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-studio rounded"
              aria-label={t("footer.homeAriaLabel")}
            >
              <Logo variant="markOnly" size="md" forDarkBackground />
            </a>
            <span
              className="text-[13px] font-bold uppercase text-paper hidden sm:inline"
              style={{ letterSpacing: "0.15em" }}
            >
              {t("footer.brandName")}
            </span>
            <div className="hidden sm:block w-px h-6 bg-white/15" aria-hidden />
            <span className="font-mono text-[10px] tracking-[0.1em] text-graphite">
              {t("footer.tagline")}
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-graphite">
            {t("footer.copyright")}
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-8 sm:gap-y-3">
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-graphite">
            {t("footer.contactLabel")}
          </span>
          <a
            href={`mailto:${t("footer.supportEmail")}`}
            className="font-mono text-[10px] tracking-[0.06em] text-mist hover:text-paper transition-colors focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-studio rounded"
          >
            {t("footer.supportEmail")}
          </a>
          {projects
            .filter((p) => p.productUrl)
            .map((p) => (
              <a
                key={p.id}
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.06em] text-mist hover:text-paper transition-colors focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-studio rounded"
              >
                {t(p.nameKey)}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
