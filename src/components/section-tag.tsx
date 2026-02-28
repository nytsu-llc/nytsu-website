interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  /** Use "onDark" when placed on dark backgrounds (ink/studio) so text stays graphite */
  variant?: "default" | "onDark";
}

const SectionTag = ({ children, className = "", variant = "default" }: SectionTagProps) => (
  <span
    className={`section-tag flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase ${
      variant === "onDark" ? "text-graphite" : "text-graphite dark:text-mist"
    } ${className}`}
  >
    <span
      className={`block w-6 h-px shrink-0 ${variant === "onDark" ? "bg-graphite" : "bg-graphite dark:bg-mist"}`}
      aria-hidden
    />
    {children}
  </span>
);

export default SectionTag;
