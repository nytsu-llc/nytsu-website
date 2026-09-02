/**
 * Nytsu mark: the "n" logo. Two raster/vector files back it (nytsu-logo-light.png,
 * nytsu-logo-dark.svg) since neither uses currentColor — forDarkBackground picks the
 * dark-mode file outright (e.g. footer, always on a dark surface); otherwise both
 * files render and Tailwind's dark: visibility classes pick the one matching the
 * site's active theme.
 */
const NytsuMark = ({
  size,
  className = "",
  forDarkBackground = false,
}: {
  size: number;
  className?: string;
  forDarkBackground?: boolean;
}) => {
  if (forDarkBackground) {
    return (
      <img
        src="/images/nytsu-logo-dark.svg"
        alt=""
        style={{ height: size, width: "auto" }}
        className={`flex-shrink-0 ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <>
      <img
        src="/images/nytsu-logo-light.png"
        alt=""
        style={{ height: size, width: "auto" }}
        className={`flex-shrink-0 dark:hidden ${className}`}
        aria-hidden
      />
      <img
        src="/images/nytsu-logo-dark.svg"
        alt=""
        style={{ height: size, width: "auto" }}
        className={`hidden flex-shrink-0 dark:block ${className}`}
        aria-hidden
      />
    </>
  );
};

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
  sm: "text-sm",
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

  const Mark = () => <NytsuMark size={m} forDarkBackground={forDarkBackground} />;

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
