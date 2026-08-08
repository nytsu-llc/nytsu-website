/**
 * Nytsu mark: geometric yin-yang "N" built on a circle grid (per brand guidelines
 * "Mark Refinement Principles"). Vector, monochrome via currentColor — no raster
 * assets or separate light/dark files needed.
 */
const NytsuMark = ({ size, className = "" }: { size: number; className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    width={size}
    height={size}
    fill="none"
    className={`flex-shrink-0 ${className}`}
    aria-hidden
  >
    <path
      d="M10 2C6 2 3 5.1 3 9c0 1.7.6 3.3 1.6 4.5L10 10l5.4-2.7C14.4 4.7 12.4 2 10 2z"
      fill="currentColor"
    />
    <path
      d="M10 18c4 0 7-3.1 7-7 0-1.7-.6-3.3-1.6-4.5L10 10l-5.4 2.7C5.6 15.3 7.6 18 10 18z"
      fill="currentColor"
      opacity="0.4"
    />
    <circle cx="10" cy="4.5" r="1.5" fill="currentColor" />
    <circle cx="10" cy="15.5" r="1.5" fill="currentColor" opacity="0.5" />
  </svg>
);

interface LogoProps {
  variant?: "lockup" | "markOnly";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  /** Use when the logo is always on a dark background (e.g. footer, studio section) */
  forDarkBackground?: boolean;
}

const markSizes = { xs: 14, sm: 24, md: 28, lg: 40, xl: 80, "2xl": 100 };
const wordmarkSizes = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-xl",
  "2xl": "text-xl",
};

export default function Logo({
  variant = "lockup",
  size = "md",
  className = "",
  forDarkBackground = false,
}: LogoProps) {
  const m = markSizes[size];

  const Mark = () => (
    <NytsuMark size={m} className={forDarkBackground ? "text-paper" : "text-ink dark:text-paper"} />
  );

  if (variant === "markOnly") {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <Mark />
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Mark />
      <span
        className={`font-sans font-normal uppercase text-ink dark:text-paper ${wordmarkSizes[size]}`}
        style={{ letterSpacing: "0.20em" }}
      >
        Nytsu
      </span>
    </div>
  );
}
