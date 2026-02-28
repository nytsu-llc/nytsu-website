import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Theme } from "@/contexts/theme-context";
import { useTheme } from "@/contexts/theme-context";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const getIcon = () => {
    if (theme === "dark") {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    }
    if (theme === "light") {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper border border-mist dark:border-graphite rounded hover:bg-mist/50 dark:hover:bg-graphite/30 transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2 data-[state=open]:bg-mist/50 dark:data-[state=open]:bg-graphite/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Select theme"
        >
          {getIcon()}
          <svg
            className="w-3.5 h-3.5 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[8rem] rounded border border-mist dark:border-graphite bg-paper dark:bg-studio p-1 shadow-lg focus:outline-none z-50"
          sideOffset={6}
          align="end"
        >
          <DropdownMenu.RadioGroup value={theme} onValueChange={(v) => setTheme(v as Theme)}>
            <DropdownMenu.RadioItem
              className="relative flex cursor-default select-none items-center rounded px-3 py-2 pl-8 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper outline-none hover:bg-mist/50 dark:hover:bg-graphite/30 focus:bg-mist/50 dark:focus:bg-graphite/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="light"
            >
              <DropdownMenu.ItemIndicator className="absolute left-2 inline-flex items-center">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
              {t("theme.light")}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="relative flex cursor-default select-none items-center rounded px-3 py-2 pl-8 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper outline-none hover:bg-mist/50 dark:hover:bg-graphite/30 focus:bg-mist/50 dark:focus:bg-graphite/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="dark"
            >
              <DropdownMenu.ItemIndicator className="absolute left-2 inline-flex items-center">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
              {t("theme.dark")}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="relative flex cursor-default select-none items-center rounded px-3 py-2 pl-8 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper outline-none hover:bg-mist/50 dark:hover:bg-graphite/30 focus:bg-mist/50 dark:focus:bg-graphite/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              value="system"
            >
              <DropdownMenu.ItemIndicator className="absolute left-2 inline-flex items-center">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
              {t("theme.system")}
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeToggle;
