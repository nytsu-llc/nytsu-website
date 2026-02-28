/**
 * Nytsu logo using brand mark PNGs for light and dark backgrounds.
 * Use forDarkBackground when the logo sits on a dark surface (e.g. footer, studio section).
 */
const LOGO_LIGHT_BG = "/images/nytsu_logo_dark_trasparent.png"; // dark mark, for light backgrounds
const LOGO_DARK_BG = "/images/nytsu_logo_light_trasparent.png"; // light mark, for dark backgrounds

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

  const Mark = () => {
    if (forDarkBackground) {
      return (
        <img
          src={LOGO_DARK_BG}
          alt=""
          width={m}
          height={m}
          className="flex-shrink-0 object-contain"
          aria-hidden
        />
      );
    }
    return (
      <>
        <img
          src={LOGO_LIGHT_BG}
          alt=""
          width={m}
          height={m}
          className="flex-shrink-0 object-contain dark:hidden"
          aria-hidden
        />
        <img
          src={LOGO_DARK_BG}
          alt=""
          width={m}
          height={m}
          className="hidden flex-shrink-0 object-contain dark:block"
          aria-hidden
        />
      </>
    );
  };

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
        className={`font-sans font-bold uppercase text-ink dark:text-paper ${wordmarkSizes[size]}`}
        style={{ letterSpacing: "0.12em" }}
      >
        Nytsu
      </span>
    </div>
  );
}
