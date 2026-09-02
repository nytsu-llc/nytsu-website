import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionTag from "@/components/section-tag";

type Declaration = {
  /** text before the emphasised phrase */
  pre: string;
  /** the emphasised phrase (rendered in the dimmer on-dark tone) */
  em: string;
  /** text after the emphasised phrase, if the emphasis falls mid-sentence */
  post?: string;
};

/**
 * Scroll positions, as a fraction of the pinned range, where exactly one
 * statement is fully opaque. Derived from the animation-range values in
 * index.css — if those change, these must change with them.
 */
const STEPS = [0.1, 0.5, 0.85];
/** leave the natural entrance and exit alone */
const EDGE = 0.03;
/** already close enough to a step; don't nudge for no reason */
const SNUG = 0.02;
const SETTLE_DELAY_MS = 160;
const SETTLE_LOCK_MS = 650;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * Nudges the page to the nearest resolved statement once scrolling stops.
 * The scroll-driven fades in index.css have no rest points of their own, so
 * stopping mid-crossfade leaves two statements stacked and half-visible.
 */
const useSettleOnRelease = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // the plain fallback list has nothing to settle
    if (!window.CSS?.supports?.("animation-timeline: view()")) return;

    let settling = false;
    let timer: number | undefined;

    const progress = () => {
      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) return -1; // not pinned (very short viewport)
      return clamp01(-rect.top / travel);
    };

    const settle = () => {
      if (settling) return;
      const p = progress();
      if (p < 0 || p < EDGE || p > 1 - EDGE) return;

      const nearest = STEPS.reduce((best, step) =>
        Math.abs(p - step) < Math.abs(p - best) ? step : best,
      );
      if (Math.abs(p - nearest) < SNUG) return;

      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const docTop = rect.top + window.scrollY;
      settling = true;
      window.scrollTo({ top: Math.round(docTop + nearest * travel), behavior: "smooth" });
      window.setTimeout(() => {
        settling = false;
      }, SETTLE_LOCK_MS);
    };

    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(settle, SETTLE_DELAY_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref]);
};

const TheBar = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const declarations = t("bar.declarations", { returnObjects: true }) as Declaration[];

  useSettleOnRelease(sectionRef);

  return (
    <section ref={sectionRef} id="bar" className="bar-blk bg-ink text-paper py-28 lg:py-36">
      <div className="bar-sticky">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16">
          <SectionTag variant="onDark">{t("bar.sectionTag")}</SectionTag>
          <p className="mt-5 text-[15px] leading-[1.6] text-mist/70 max-w-[44ch]">
            {t("bar.lead")}
          </p>

          {/* layout (flex list vs stacked grid) is owned by .bar-decl in index.css */}
          <div className="bar-decl mt-9">
            {declarations.map((d) => (
              <p
                key={d.pre}
                className="bar-decl-item font-medium tracking-[-0.03em] leading-[1.1] max-w-[17ch] text-[clamp(28px,5vw,60px)]"
              >
                {d.pre} <em className="not-italic text-mist/60">{d.em}</em>
                {d.post}
              </p>
            ))}
          </div>

          <span className="bar-dots mt-11" aria-hidden>
            {declarations.map((d) => (
              <i key={d.pre} className="bar-dot block w-[5px] h-[5px] rounded-full bg-paper" />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TheBar;
