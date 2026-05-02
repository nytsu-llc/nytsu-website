import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fade } from "@/utils/animations";

// ── SECTION LABEL ──────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-5 h-px bg-amber opacity-40" />
    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber">
      {children}
    </span>
  </div>
);

// ── PHONE SCREEN COMPONENTS (always dark — app UI mockups) ─────────────────

type DotColor = "amber" | "score";

const SBar = ({ time, dot }: { time: string; dot?: DotColor }) => (
  <div className="flex justify-between items-center px-3 pt-1.5 pb-1">
    <span className="font-mono text-[7px] font-bold tracking-[0.04em] text-steel">
      {time}
    </span>
    {dot && (
      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${dot === "amber" ? "bg-amber" : "bg-score"}`} />
    )}
  </div>
);

const HomeScreen = () => (
  <div className="min-h-[270px]">
    <SBar time="10:15" dot="amber" />
    <div className="px-3 pb-3">
      <p className="font-sans text-[11px] font-bold mb-0.5 text-paper">Ready to fence.</p>
      <p className="font-mono text-[6px] tracking-[0.06em] mb-3 text-jet">Device · 94%</p>
      <div className="py-3.5 text-center mb-1.5 bg-amber">
        <span className="font-mono text-[8px] font-bold tracking-[0.14em] uppercase text-night">▶ Start Bout</span>
      </div>
      <div className="py-2.5 text-center mb-3 bg-white/[0.04]">
        <span className="font-mono text-[7px] tracking-[0.1em] uppercase text-jet">Set up first →</span>
      </div>
      <div className="pt-2 border-t border-white/[0.04]">
        <p className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1.5 text-jet">Last bout</p>
        <div className="flex justify-between items-center">
          <span className="font-sans text-[9px] font-semibold text-steel">vs Chen</span>
          <span className="font-mono text-[10px] font-bold text-green">15–9 W</span>
        </div>
      </div>
    </div>
  </div>
);

const SetupScreen = () => (
  <div className="min-h-[270px]">
    <SBar time="10:16" />
    <div className="px-3 pb-3 flex flex-col gap-1.5">
      <div className="flex justify-between items-center mb-1">
        <span className="font-sans text-[10px] font-bold text-paper">Set Up Bout</span>
        <span className="font-mono text-[7px] tracking-[0.1em] uppercase text-amber">Start →</span>
      </div>
      <div>
        <p className="font-mono text-[6px] tracking-[0.12em] uppercase mb-1 text-jet">Left Fencer</p>
        <div className="px-2 py-1.5 text-[9px] text-steel bg-white/[0.04] border border-green/30">
          Rodriguez, M.
        </div>
      </div>
      <div>
        <p className="font-mono text-[6px] tracking-[0.12em] uppercase mb-1 text-jet">Right Fencer</p>
        <div className="px-2 py-1.5 text-[9px] text-jet bg-white/[0.04] border border-white/[0.06]">
          optional
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <p className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1 text-jet">Periods</p>
          <div className="py-1.5 text-center font-mono text-[10px] font-bold bg-amber text-night">3</div>
        </div>
        <div>
          <p className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1 text-jet">Duration</p>
          <div className="py-1.5 text-center font-mono text-[10px] text-steel bg-white/[0.04]">3:00</div>
        </div>
      </div>
    </div>
  </div>
);

const LiveScreen = () => (
  <div className="min-h-[270px]">
    <SBar time="10:18" dot="score" />
    <div className="px-1.5">
      <div className="grid grid-cols-3 items-center gap-1 mb-1">
        <div className="flex flex-col items-center py-3 bg-green/[0.12]">
          <span className="font-mono text-[5px] tracking-[0.12em] uppercase mb-0.5 text-green">Left</span>
          <span className="font-mono font-bold text-green" style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.04em" }}>
            7
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono font-bold text-[12px] text-paper">2:34</span>
          <div className="w-px h-2 bg-white/[0.06]" />
          <span className="font-mono text-[5px] text-jet">P2</span>
        </div>
        <div className="flex flex-col items-center py-3 bg-score/[0.12]">
          <span className="font-mono text-[5px] tracking-[0.12em] uppercase mb-0.5 text-score">Right</span>
          <span className="font-mono font-bold text-score" style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.04em" }}>
            5
          </span>
        </div>
      </div>
      <div className="h-0.5 mb-1 bg-[linear-gradient(90deg,transparent,theme(colors.amber.DEFAULT),transparent)]" />
      <div className="grid grid-cols-2 gap-px mb-1">
        <div className="py-2.5 text-center font-mono text-[6px] font-bold tracking-[0.1em] uppercase bg-green text-night">
          + LEFT
        </div>
        <div className="py-2.5 text-center font-mono text-[6px] font-bold tracking-[0.1em] uppercase bg-score text-white">
          + RIGHT
        </div>
      </div>
      <div className="flex justify-between px-1 pb-2">
        {["⏸ Pause", "↩ Undo", "■ End"].map((label) => (
          <span key={label} className="font-mono text-[5px] tracking-[0.08em] uppercase text-jet">
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ResultScreen = () => (
  <div className="min-h-[270px]">
    <SBar time="10:27" />
    <div className="px-3 pb-3 flex flex-col gap-1.5">
      <p className="font-mono text-[6px] tracking-[0.14em] uppercase text-green">Bout Complete · Win</p>
      <div className="font-mono font-bold text-paper" style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1 }}>
        15<span className="text-jet" style={{ fontSize: 18 }}> — </span>9
      </div>
      <p className="font-sans text-[9px] text-steel">Rodriguez vs Chen</p>
      <div className="grid grid-cols-3 gap-px mt-1 bg-white/[0.04]">
        {[
          { val: "92%", label: "Accuracy", highlight: false },
          { val: "0.3s", label: "Avg Resp", highlight: false },
          { val: "+4%", label: "vs Avg", highlight: true },
        ].map(({ val, label, highlight }) => (
          <div key={label} className="py-1.5 text-center bg-studio">
            <div className={`font-mono text-[11px] font-bold ${highlight ? "text-amber" : "text-paper"}`}>{val}</div>
            <div className="font-mono text-[5px] tracking-[0.08em] uppercase mt-0.5 text-jet">{label}</div>
          </div>
        ))}
      </div>
      <div className="py-2 text-center mt-1 bg-amber">
        <span className="font-mono text-[7px] font-bold tracking-[0.12em] uppercase text-night">▶ Next Bout</span>
      </div>
    </div>
  </div>
);

const StatsScreen = () => {
  const stats = [
    { label: "Win Rate", val: "72%", pct: 72, barClass: "bg-green", textClass: "text-green" },
    { label: "Accuracy", val: "84%", pct: 84, barClass: "bg-amber", textClass: "text-amber" },
  ];
  const recentBouts = [
    { name: "Rodriguez", score: "15–9", borderClass: "border-l-green", textClass: "text-green" },
    { name: "Park, S.", score: "9–15", borderClass: "border-l-score", textClass: "text-score" },
  ];

  return (
    <div className="min-h-[270px]">
      <SBar time="10:30" />
      <div className="px-3 pb-3">
        <p className="font-sans text-[10px] font-bold mb-2 text-paper">Stats</p>
        {stats.map(({ label, val, pct, barClass, textClass }) => (
          <div key={label} className="mb-2.5">
            <div className="flex justify-between mb-0.5">
              <span className="font-mono text-[6px] tracking-[0.1em] uppercase text-jet">{label}</span>
              <span className={`font-mono text-[6px] font-bold ${textClass}`}>{val}</span>
            </div>
            <div className="h-0.5 rounded-sm overflow-hidden bg-white/[0.04]">
              <div className={`h-full ${barClass}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-white/[0.04]">
          <p className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1.5 text-jet">Recent Bouts</p>
          {recentBouts.map(({ name, score, borderClass, textClass }) => (
            <div
              key={name}
              className={`flex justify-between items-center px-2.5 py-2 mb-0.5 bg-studio border-l-2 ${borderClass}`}
            >
              <span className="font-sans text-[9px] font-semibold text-steel">{name}</span>
              <span className={`font-mono text-[9px] font-bold ${textClass}`}>{score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── WAITLIST ───────────────────────────────────────────────────────────────

/** Google Form — swap URL here if the waitlist moves to another provider */
const JUSTIN_WAITLIST_FORM_URL = "https://forms.gle/h99JkPGYw79sNavMA";

const WaitlistSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-mist dark:border-white/[0.04]">
      <motion.div {...fade()} className="max-w-2xl">
        <SectionLabel>{t("justin.waitlist.sectionLabel")}</SectionLabel>
        <h2
          className="font-bold mb-4 text-ink dark:text-paper"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
        >
          {t("justin.waitlist.heading")}
        </h2>
        <p className="text-[15px] leading-[1.65] mb-10 text-graphite dark:text-steel">
          {t("justin.waitlist.subheading")}
        </p>

        <motion.a
          href={JUSTIN_WAITLIST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-7 py-3.5 bg-amber text-night font-mono text-[11px] tracking-[0.12em] uppercase font-bold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-paper dark:focus:ring-offset-studio"
          aria-label={t("justin.waitlist.ctaAriaLabel")}
        >
          {t("justin.waitlist.cta")}
        </motion.a>
      </motion.div>
    </section>
  );
};

// ── PAGE ───────────────────────────────────────────────────────────────────

const JustInPage = () => {
  const { t } = useTranslation();

  const foundationCards = t("justin.foundation.cards", { returnObjects: true }) as Array<{
    label: string;
    title: string;
    body: string;
  }>;

  const screenLabels = t("justin.screens.labels", { returnObjects: true }) as string[];

  const scoringRules = t("justin.scoring.rules", { returnObjects: true }) as Array<{
    num: string;
    title: string;
    body: string;
  }>;

  const scoringPeriods = t("justin.scoring.structure.periods", { returnObjects: true }) as Array<{
    num: string;
    duration: string;
    description: string;
  }>;

  const scoringOutcomes = t("justin.scoring.structure.outcomes", { returnObjects: true }) as Array<{
    label: string;
    value: string;
  }>;

  const principleRules = t("justin.principles.rules", { returnObjects: true }) as Array<{
    num: string;
    title: string;
    body: string;
  }>;

  const outcomeTextClasses = ["text-green", "text-amber", "text-score"];

  const screens = [
    { component: <HomeScreen />, highlight: false },
    { component: <SetupScreen />, highlight: false },
    { component: <LiveScreen />, highlight: true },
    { component: <ResultScreen />, highlight: false },
    { component: <StatsScreen />, highlight: false },
  ];

  return (
    <div className="text-ink dark:text-steel">

      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(232,160,32,0.07)_0%,transparent_65%)]" />
        <motion.div {...fade()} className="max-w-3xl">
          <SectionLabel>{t("justin.hero.eyebrow")}</SectionLabel>
          <h1
            className="font-bold mb-4 text-ink dark:text-paper"
            style={{ fontSize: "clamp(4.5rem, 12vw, 7.5rem)", letterSpacing: "-0.04em", lineHeight: 0.92 }}
          >
            Just<span className="text-amber">In</span>
          </h1>
          <p
            className="font-sans mb-6 text-graphite dark:text-steel"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", letterSpacing: "0.01em" }}
          >
            {t("justin.hero.tagline")}<br />
            {t("justin.hero.subtagline")}
          </p>
          <p className="font-sans text-[15px] leading-[1.65] max-w-[480px] mb-16 text-graphite dark:text-steel">
            {t("justin.hero.body")}
          </p>

          {/* Live Score Display */}
          <div className="flex items-center gap-8 sm:gap-14">
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1 text-green">
                {t("justin.hero.labelLeft")}
              </span>
              <span
                className="font-mono font-bold text-green"
                style={{ fontSize: "clamp(4.5rem, 10vw, 6.875rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                15
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-mono font-bold text-ink dark:text-paper"
                style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
              >
                2:34
              </span>
              <div className="w-px h-6 bg-mist dark:bg-white/[0.06]" />
              <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-amber">
                {t("justin.hero.labelPeriod")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1 text-score">
                {t("justin.hero.labelRight")}
              </span>
              <span
                className="font-mono font-bold text-score"
                style={{ fontSize: "clamp(4.5rem, 10vw, 6.875rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                09
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Waitlist */}
      <WaitlistSection />

      {/* Foundation */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-mist dark:border-white/[0.04]">
        <motion.div {...fade()}>
          <SectionLabel>{t("justin.foundation.sectionLabel")}</SectionLabel>
          <h2
            className="font-bold mb-4 text-ink dark:text-paper"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            {t("justin.foundation.heading").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-[480px] mb-14 text-graphite dark:text-steel">
            {t("justin.foundation.subheading")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-mist dark:bg-white/[0.03]">
          {foundationCards.map(({ label, title, body }, i) => (
            <motion.div key={label} {...fade(i * 0.08)} className="p-10 bg-paper dark:bg-studio">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3.5 text-amber">{label}</p>
              <h3
                className="font-bold text-[20px] mb-3 leading-[1.2] text-ink dark:text-paper"
                style={{ letterSpacing: "-0.015em" }}
              >
                {title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-graphite dark:text-steel">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Screens */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-mist dark:border-white/[0.04]">
        <motion.div {...fade()}>
          <SectionLabel>{t("justin.screens.sectionLabel")}</SectionLabel>
          <h2
            className="font-bold mb-4 text-ink dark:text-paper"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            {t("justin.screens.heading").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-[480px] mb-14 text-graphite dark:text-steel">
            {t("justin.screens.subheading")}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          {screens.map(({ component, highlight }, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <motion.div
                {...fade(i * 0.08)}
                className="w-[140px] rounded-3xl p-2.5 bg-studio"
                style={{
                  boxShadow: highlight
                    ? "0 0 0 1px rgba(232,160,32,0.15), 0 20px 48px rgba(0,0,0,0.5), 0 0 32px rgba(232,160,32,0.08)"
                    : "0 0 0 1px rgba(255,255,255,0.05), 0 20px 48px rgba(0,0,0,0.5)",
                }}
              >
                <div className="w-10 h-1 rounded-sm mx-auto mb-2.5 bg-night" />
                <div className="rounded-2xl overflow-hidden bg-night">
                  {component}
                </div>
              </motion.div>
              <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-graphite dark:text-steel">
                {screenLabels[i]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-mist dark:border-white/[0.04]">
        <motion.div {...fade()}>
          <SectionLabel>{t("justin.scoring.sectionLabel")}</SectionLabel>
          <h2
            className="font-bold mb-4 text-ink dark:text-paper"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            {t("justin.scoring.heading").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-[480px] mb-14 text-graphite dark:text-steel">
            {t("justin.scoring.subheading")}
          </p>
        </motion.div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mb-16 bg-mist dark:bg-white/[0.03]">
          {scoringRules.map(({ num, title, body }, i) => (
            <motion.div key={num} {...fade(i * 0.06)} className="p-7 bg-paper dark:bg-studio">
              <p className="font-mono text-[9px] tracking-[0.15em] mb-2 text-amber opacity-60">{num}</p>
              <h3 className="font-bold text-[14px] mb-2 leading-[1.3] text-ink dark:text-paper">{title}</h3>
              <p className="text-[12px] leading-[1.6] text-graphite dark:text-steel">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bout structure */}
        <motion.div {...fade(0.2)}>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-6 text-amber">
            {t("justin.scoring.structure.label")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-stretch gap-px">
                {scoringPeriods.map(({ num, duration, description }, i) => (
                  <motion.div
                    key={num}
                    {...fade(i * 0.1)}
                    className="flex-1 p-5 flex flex-col gap-2 bg-paper dark:bg-studio border border-mist dark:border-transparent"
                  >
                    <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-amber">{num}</span>
                    <span className="font-mono font-bold text-2xl text-ink dark:text-paper" style={{ letterSpacing: "-0.03em" }}>
                      {duration}
                    </span>
                    <span className="font-mono text-[9px] text-graphite dark:text-steel">{description}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-px p-4 flex items-center justify-between bg-amber/[0.06] border border-amber/[0.12]">
                <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-amber">
                  {t("justin.scoring.structure.touchLimit")}
                </span>
                <span className="font-mono font-bold text-[20px] text-amber" style={{ letterSpacing: "-0.02em" }}>
                  15
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-px">
              {scoringOutcomes.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  {...fade(i * 0.07)}
                  className="flex items-center justify-between px-6 py-4 bg-paper dark:bg-studio border border-mist dark:border-transparent"
                >
                  <span className="font-mono text-[11px] tracking-[0.04em] text-graphite dark:text-steel">{label}</span>
                  <span className={`font-mono text-[11px] font-bold ${outcomeTextClasses[i]}`}>{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* UX Principles */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-mist dark:border-white/[0.04]">
        <motion.div {...fade()}>
          <SectionLabel>{t("justin.principles.sectionLabel")}</SectionLabel>
          <h2
            className="font-bold mb-4 text-ink dark:text-paper"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            {t("justin.principles.heading").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-[480px] mb-14 text-graphite dark:text-steel">
            {t("justin.principles.subheading")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist dark:bg-white/[0.03]">
          {principleRules.map(({ num, title, body }, i) => (
            <motion.div key={num} {...fade(i * 0.06)} className="p-7 bg-paper dark:bg-studio">
              <p className="font-mono text-[9px] tracking-[0.15em] mb-2 text-amber opacity-60">{num}</p>
              <h3 className="font-bold text-[14px] mb-2 leading-[1.3] text-ink dark:text-paper">{title}</h3>
              <p className="text-[12px] leading-[1.6] text-graphite dark:text-steel">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer strip */}
      <footer className="py-10 px-6 sm:px-12 lg:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-mist dark:border-white/[0.04]">
        <div className="flex items-center gap-4">
          <span className="font-sans font-bold text-base tracking-[-0.02em] text-amber">JustIn</span>
          <div className="w-px h-5 bg-mist dark:bg-white/[0.06]" />
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-graphite dark:text-steel">
            {t("justin.footer.designedBy")}
          </span>
        </div>
        <span className="font-mono text-[9px] tracking-[0.1em] text-graphite dark:text-steel">
          {t("justin.footer.version")}
        </span>
      </footer>
    </div>
  );
};

export default JustInPage;
