import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SCORE_R = "#E8394A";
const SCORE_R_DIM = "rgba(232,57,74,0.12)";
const NIGHT = "#0C0C0E";
const TECH = "#1C1C1C";
const JET = "#32323A";
const PAPER = "#F7F6F3";
const STEEL = "#E8E8EE";
const AMBER = "#E8A020";
const GREEN = "#3AAA6A";
const GREEN_DIM = "rgba(58,170,106,0.12)";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

// ── SECTION LABEL ──────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-5 h-px opacity-40" style={{ background: AMBER }} />
    <span className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: AMBER }}>
      {children}
    </span>
  </div>
);

// ── PHONE SCREEN COMPONENTS ────────────────────────────────────────────────

const SBar = ({ time, dot }: { time: string; dot?: string }) => (
  <div className="flex justify-between items-center px-3 pt-1.5 pb-1">
    <span className="font-mono text-[7px] font-bold tracking-[0.04em]" style={{ color: STEEL }}>
      {time}
    </span>
    {dot && (
      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: dot }} />
    )}
  </div>
);

const HomeScreen = () => (
  <div style={{ minHeight: 270 }}>
    <SBar time="10:15" dot={AMBER} />
    <div className="px-3 pb-3">
      <p className="font-sans text-[11px] font-bold mb-0.5" style={{ color: PAPER }}>
        Ready to fence.
      </p>
      <p className="font-mono text-[6px] tracking-[0.06em] mb-3" style={{ color: JET }}>
        Device · 94%
      </p>
      <div className="py-3.5 text-center mb-1.5" style={{ background: AMBER }}>
        <span
          className="font-mono text-[8px] font-bold tracking-[0.14em] uppercase"
          style={{ color: NIGHT }}
        >
          ▶ Start Bout
        </span>
      </div>
      <div
        className="py-2.5 text-center mb-3"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <span
          className="font-mono text-[7px] tracking-[0.1em] uppercase"
          style={{ color: JET }}
        >
          Set up first →
        </span>
      </div>
      <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p
          className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1.5"
          style={{ color: JET }}
        >
          Last bout
        </p>
        <div className="flex justify-between items-center">
          <span className="font-sans text-[9px] font-semibold" style={{ color: STEEL }}>
            vs Chen
          </span>
          <span className="font-mono text-[10px] font-bold" style={{ color: GREEN }}>
            15–9 W
          </span>
        </div>
      </div>
    </div>
  </div>
);

const SetupScreen = () => (
  <div style={{ minHeight: 270 }}>
    <SBar time="10:16" />
    <div className="px-3 pb-3 flex flex-col gap-1.5">
      <div className="flex justify-between items-center mb-1">
        <span className="font-sans text-[10px] font-bold" style={{ color: PAPER }}>
          Set Up Bout
        </span>
        <span
          className="font-mono text-[7px] tracking-[0.1em] uppercase"
          style={{ color: AMBER }}
        >
          Start →
        </span>
      </div>
      <div>
        <p
          className="font-mono text-[6px] tracking-[0.12em] uppercase mb-1"
          style={{ color: JET }}
        >
          Left Fencer
        </p>
        <div
          className="px-2 py-1.5 text-[9px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(58,170,106,0.3)",
            color: STEEL,
          }}
        >
          Rodriguez, M.
        </div>
      </div>
      <div>
        <p
          className="font-mono text-[6px] tracking-[0.12em] uppercase mb-1"
          style={{ color: JET }}
        >
          Right Fencer
        </p>
        <div
          className="px-2 py-1.5 text-[9px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: JET,
          }}
        >
          optional
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <p
            className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1"
            style={{ color: JET }}
          >
            Periods
          </p>
          <div
            className="py-1.5 text-center font-mono text-[10px] font-bold"
            style={{ background: AMBER, color: NIGHT }}
          >
            3
          </div>
        </div>
        <div>
          <p
            className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1"
            style={{ color: JET }}
          >
            Duration
          </p>
          <div
            className="py-1.5 text-center font-mono text-[10px]"
            style={{ background: "rgba(255,255,255,0.04)", color: STEEL }}
          >
            3:00
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LiveScreen = () => (
  <div style={{ minHeight: 270 }}>
    <SBar time="10:18" dot={SCORE_R} />
    <div className="px-1.5">
      <div className="grid grid-cols-3 items-center gap-1 mb-1">
        <div
          className="flex flex-col items-center py-3"
          style={{ background: GREEN_DIM }}
        >
          <span
            className="font-mono text-[5px] tracking-[0.12em] uppercase mb-0.5"
            style={{ color: GREEN }}
          >
            Left
          </span>
          <span
            className="font-mono font-bold"
            style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.04em", color: GREEN }}
          >
            7
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono font-bold text-[12px]" style={{ color: PAPER }}>
            2:34
          </span>
          <div className="w-px h-2" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="font-mono text-[5px]" style={{ color: JET }}>
            P2
          </span>
        </div>
        <div
          className="flex flex-col items-center py-3"
          style={{ background: SCORE_R_DIM }}
        >
          <span
            className="font-mono text-[5px] tracking-[0.12em] uppercase mb-0.5"
            style={{ color: SCORE_R }}
          >
            Right
          </span>
          <span
            className="font-mono font-bold"
            style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.04em", color: SCORE_R }}
          >
            5
          </span>
        </div>
      </div>
      <div
        className="h-0.5 mb-1"
        style={{ background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)` }}
      />
      <div className="grid grid-cols-2 gap-px mb-1">
        <div
          className="py-2.5 text-center font-mono text-[6px] font-bold tracking-[0.1em] uppercase"
          style={{ background: GREEN, color: NIGHT }}
        >
          + LEFT
        </div>
        <div
          className="py-2.5 text-center font-mono text-[6px] font-bold tracking-[0.1em] uppercase"
          style={{ background: SCORE_R, color: "#fff" }}
        >
          + RIGHT
        </div>
      </div>
      <div className="flex justify-between px-1 pb-2">
        {["⏸ Pause", "↩ Undo", "■ End"].map((label) => (
          <span
            key={label}
            className="font-mono text-[5px] tracking-[0.08em] uppercase"
            style={{ color: JET }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ResultScreen = () => (
  <div style={{ minHeight: 270 }}>
    <SBar time="10:27" />
    <div className="px-3 pb-3 flex flex-col gap-1.5">
      <p
        className="font-mono text-[6px] tracking-[0.14em] uppercase"
        style={{ color: GREEN }}
      >
        Bout Complete · Win
      </p>
      <div
        className="font-mono font-bold"
        style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1, color: PAPER }}
      >
        15
        <span style={{ color: JET, fontSize: 18 }}> — </span>9
      </div>
      <p className="font-sans text-[9px]" style={{ color: STEEL }}>
        Rodriguez vs Chen
      </p>
      <div
        className="grid grid-cols-3 gap-px mt-1"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {[
          { val: "92%", label: "Accuracy", highlight: false },
          { val: "0.3s", label: "Avg Resp", highlight: false },
          { val: "+4%", label: "vs Avg", highlight: true },
        ].map(({ val, label, highlight }) => (
          <div key={label} className="py-1.5 text-center" style={{ background: TECH }}>
            <div
              className="font-mono text-[11px] font-bold"
              style={{ color: highlight ? AMBER : PAPER }}
            >
              {val}
            </div>
            <div
              className="font-mono text-[5px] tracking-[0.08em] uppercase mt-0.5"
              style={{ color: JET }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="py-2 text-center mt-1" style={{ background: AMBER }}>
        <span
          className="font-mono text-[7px] font-bold tracking-[0.12em] uppercase"
          style={{ color: NIGHT }}
        >
          ▶ Next Bout
        </span>
      </div>
    </div>
  </div>
);

const StatsScreen = () => (
  <div style={{ minHeight: 270 }}>
    <SBar time="10:30" />
    <div className="px-3 pb-3">
      <p className="font-sans text-[10px] font-bold mb-2" style={{ color: PAPER }}>
        Stats
      </p>
      {[
        { label: "Win Rate", val: "72%", pct: 72, color: GREEN },
        { label: "Accuracy", val: "84%", pct: 84, color: AMBER },
      ].map(({ label, val, pct, color }) => (
        <div key={label} className="mb-2.5">
          <div className="flex justify-between mb-0.5">
            <span
              className="font-mono text-[6px] tracking-[0.1em] uppercase"
              style={{ color: JET }}
            >
              {label}
            </span>
            <span className="font-mono text-[6px] font-bold" style={{ color }}>
              {val}
            </span>
          </div>
          <div
            className="h-0.5 rounded-sm overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="h-full" style={{ width: `${pct}%`, background: color }} />
          </div>
        </div>
      ))}
      <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p
          className="font-mono text-[6px] tracking-[0.1em] uppercase mb-1.5"
          style={{ color: JET }}
        >
          Recent Bouts
        </p>
        {[
          { name: "Rodriguez", score: "15–9", color: GREEN },
          { name: "Park, S.", score: "9–15", color: SCORE_R },
        ].map(({ name, score, color }) => (
          <div
            key={name}
            className="flex justify-between items-center px-2.5 py-2 mb-0.5"
            style={{ background: TECH, borderLeft: `2px solid ${color}` }}
          >
            <span className="font-sans text-[9px] font-semibold" style={{ color: STEEL }}>
              {name}
            </span>
            <span className="font-mono text-[9px] font-bold" style={{ color }}>
              {score}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── DATA ───────────────────────────────────────────────────────────────────

const screens = [
  { label: "01 · Home", component: <HomeScreen />, highlight: false },
  { label: "02 · Setup", component: <SetupScreen />, highlight: false },
  { label: "03 · Live Bout", component: <LiveScreen />, highlight: true },
  { label: "04 · Result", component: <ResultScreen />, highlight: false },
  { label: "05 · Stats", component: <StatsScreen />, highlight: false },
];

const foundation = [
  {
    label: "Mission",
    title: "Every touch, counted.",
    body: "JustIn exists to bring real-time scoring analytics and wireless automation to fencing training. Built by a fencer, for fencers — the system understands the sport from the inside out.",
  },
  {
    label: "Positioning",
    title: "Training tool, not competition apparatus.",
    body: "JustIn is a training and analytics platform — not FIE competition hardware. This removes regulatory friction and opens the market to every club, coach, and athlete worldwide.",
  },
  {
    label: "Audience",
    title: "Competitive fencers + their coaches.",
    body: "Age 14+. Competitive to serious recreational. English- and Spanish-speaking. Underserved by European-dominated tech. Most don't know wireless scoring systems exist yet.",
  },
  {
    label: "Studio",
    title: "Designed by Nytsu.",
    body: "JustIn is a Nytsu LLC product. 'Designed by Nytsu' appears on all physical packaging and hardware. The studio mark is always secondary — JustIn is the product, Nytsu is the maker.",
  },
];

const principles = [
  {
    num: "01",
    title: "One tap to the most important thing",
    body: "From anywhere, the critical action is never more than one tap away. Start Bout from Home. Undo during Bout. Next Bout from Result.",
  },
  {
    num: "02",
    title: "Score numbers are always legible",
    body: "Never smaller than 60px during a bout. Readable from 1 metre in gym lighting. Color alone distinguishes left from right.",
  },
  {
    num: "03",
    title: "Nothing irreversible without warning",
    body: "End Bout requires a 1.5s hold. Delete requires confirmation. Undo is always one tap. The athlete never loses data by accident.",
  },
  {
    num: "04",
    title: "The bout screen has no distractions",
    body: "During scoring, navigation disappears. Notifications suppressed. Only: score, timer, two scoring buttons.",
  },
  {
    num: "05",
    title: "Defaults are always correct",
    body: "3 periods × 3 minutes. An athlete who changes nothing still gets a valid, properly configured bout.",
  },
  {
    num: "06",
    title: "Works offline, syncs when ready",
    body: "Scores and records locally. Syncs when connectivity returns. Bad wifi doesn't break the app.",
  },
];

// ── PAGE ───────────────────────────────────────────────────────────────────

const JustInPage = () => (
  <div className="min-h-screen font-sans" style={{ background: NIGHT, color: STEEL }}>

    {/* Header */}
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 sm:px-12"
      style={{
        background: "rgba(12,12,14,0.95)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Link
        to="/"
        className="font-mono text-[9px] tracking-[0.12em] uppercase flex items-center gap-2 transition-opacity hover:opacity-60"
        style={{ color: JET }}
      >
        ← nytsu.com
      </Link>
      <span
        className="font-sans font-bold text-[18px] tracking-[-0.02em]"
        style={{ color: AMBER }}
      >
        JustIn
      </span>
      <span
        className="font-mono text-[8px] tracking-[0.15em] uppercase"
        style={{ color: JET }}
      >
        v1.0
      </span>
    </header>

    {/* Hero */}
    <section
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-14 relative overflow-hidden"
    >
      <div
        className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 65%)",
        }}
      />
      <motion.div {...fade()} className="max-w-3xl">
        <SectionLabel>Nytsu LLC · Product</SectionLabel>
        <h1
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(72px, 12vw, 120px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
            color: PAPER,
          }}
        >
          Just<span style={{ color: AMBER }}>In</span>
        </h1>
        <p
          className="font-sans mb-6"
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            letterSpacing: "0.01em",
            color: JET,
          }}
        >
          Wireless scoring system for fencing.<br />
          Every touch, counted.
        </p>
        <p
          className="font-sans text-[15px] leading-[1.65] max-w-[480px] mb-16"
          style={{ color: "#4A4A4A" }}
        >
          Built by a fencer, for fencers — live scoring and training analytics in your pocket.
          iOS · Android · Hardware.
        </p>

        {/* Live Score Display */}
        <div className="flex items-center gap-8 sm:gap-14">
          <div className="flex flex-col items-center">
            <span
              className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1"
              style={{ color: GREEN }}
            >
              Left
            </span>
            <span
              className="font-mono font-bold"
              style={{
                fontSize: "clamp(72px, 10vw, 110px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: GREEN,
              }}
            >
              15
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span
              className="font-mono font-bold"
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: PAPER }}
            >
              2:34
            </span>
            <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span
              className="font-mono text-[9px] tracking-[0.15em] uppercase"
              style={{ color: AMBER }}
            >
              P2
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span
              className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1"
              style={{ color: SCORE_R }}
            >
              Right
            </span>
            <span
              className="font-mono font-bold"
              style={{
                fontSize: "clamp(72px, 10vw, 110px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: SCORE_R,
              }}
            >
              09
            </span>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Foundation */}
    <section
      className="py-20 px-6 sm:px-12 lg:px-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <motion.div {...fade()}>
        <SectionLabel>01 · Foundation</SectionLabel>
        <h2
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: PAPER,
          }}
        >
          What JustIn<br />stands for.
        </h2>
        <p
          className="text-[15px] leading-[1.65] max-w-[480px] mb-14"
          style={{ color: JET }}
        >
          Built on a single, non-negotiable truth: athletes and coaches deserve precision tools.
          Everything flows from that commitment.
        </p>
      </motion.div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-px"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {foundation.map(({ label, title, body }, i) => (
          <motion.div
            key={label}
            {...fade(i * 0.08)}
            className="p-10"
            style={{ background: TECH }}
          >
            <p
              className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3.5"
              style={{ color: AMBER }}
            >
              {label}
            </p>
            <h3
              className="font-bold text-[20px] mb-3 leading-[1.2]"
              style={{ letterSpacing: "-0.015em", color: PAPER }}
            >
              {title}
            </h3>
            <p className="text-[13px] leading-[1.7]" style={{ color: JET }}>
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* App Screens */}
    <section
      className="py-20 px-6 sm:px-12 lg:px-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <motion.div {...fade()}>
        <SectionLabel>02 · App Screens</SectionLabel>
        <h2
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: PAPER,
          }}
        >
          Five screens.<br />One flow.
        </h2>
        <p
          className="text-[15px] leading-[1.65] max-w-[480px] mb-14"
          style={{ color: JET }}
        >
          Home → Setup → Live Bout → Result → Stats. The bout screen has no navigation —
          it is the navigation.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
        {screens.map(({ label, component, highlight }, i) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <motion.div
              {...fade(i * 0.08)}
              className="w-[140px] rounded-[24px] p-2.5"
              style={{
                background: TECH,
                boxShadow: highlight
                  ? `0 0 0 1px rgba(232,160,32,0.15), 0 20px 48px rgba(0,0,0,0.5), 0 0 32px rgba(232,160,32,0.08)`
                  : `0 0 0 1px rgba(255,255,255,0.05), 0 20px 48px rgba(0,0,0,0.5)`,
              }}
            >
              <div
                className="w-10 h-1 rounded-sm mx-auto mb-2.5"
                style={{ background: NIGHT }}
              />
              <div className="rounded-[16px] overflow-hidden" style={{ background: NIGHT }}>
                {component}
              </div>
            </motion.div>
            <span
              className="font-mono text-[8px] tracking-[0.15em] uppercase"
              style={{ color: JET }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* UX Principles */}
    <section
      className="py-20 px-6 sm:px-12 lg:px-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <motion.div {...fade()}>
        <SectionLabel>03 · UX Principles</SectionLabel>
        <h2
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: PAPER,
          }}
        >
          As fast as setting<br />up a piste.
        </h2>
        <p
          className="text-[15px] leading-[1.65] max-w-[480px] mb-14"
          style={{ color: JET }}
        >
          A standard piste takes 2–3 minutes. That is the maximum time from opening the app
          to scoring the first touch.
        </p>
      </motion.div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {principles.map(({ num, title, body }, i) => (
          <motion.div
            key={num}
            {...fade(i * 0.06)}
            className="p-7"
            style={{ background: TECH }}
          >
            <p
              className="font-mono text-[9px] tracking-[0.15em] mb-2"
              style={{ color: AMBER, opacity: 0.6 }}
            >
              {num}
            </p>
            <h3
              className="font-bold text-[14px] mb-2 leading-[1.3]"
              style={{ color: PAPER }}
            >
              {title}
            </h3>
            <p className="text-[12px] leading-[1.6]" style={{ color: JET }}>
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer
      className="py-10 px-6 sm:px-12 lg:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="flex items-center gap-4">
        <span
          className="font-sans font-bold text-[16px] tracking-[-0.02em]"
          style={{ color: AMBER }}
        >
          JustIn
        </span>
        <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.06)" }} />
        <span
          className="font-mono text-[9px] tracking-[0.15em] uppercase"
          style={{ color: JET }}
        >
          Designed by Nytsu
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span
          className="font-mono text-[9px] tracking-[0.1em]"
          style={{ color: JET }}
        >
          Brand Identity v1.0 · 2026
        </span>
        <Link
          to="/"
          className="font-mono text-[9px] tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
          style={{ color: JET }}
        >
          ← nytsu.com
        </Link>
      </div>
    </footer>
  </div>
);

export default JustInPage;
