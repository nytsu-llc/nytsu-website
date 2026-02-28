import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper border border-mist dark:border-graphite rounded hover:bg-mist/50 dark:hover:bg-graphite/30 transition-colors focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2 data-[state=open]:bg-mist/50 dark:data-[state=open]:bg-graphite/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Select language"
        >
          {i18n.language === "en" ? "EN" : "ES"}
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
          <DropdownMenu.Item
            className="relative flex cursor-default select-none items-center rounded px-3 py-2 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper outline-none hover:bg-mist/50 dark:hover:bg-graphite/30 focus:bg-mist/50 dark:focus:bg-graphite/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            onSelect={() => setLanguage("en")}
          >
            English
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="relative flex cursor-default select-none items-center rounded px-3 py-2 font-mono text-xs tracking-widest uppercase text-ink dark:text-paper outline-none hover:bg-mist/50 dark:hover:bg-graphite/30 focus:bg-mist/50 dark:focus:bg-graphite/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            onSelect={() => setLanguage("es")}
          >
            Español
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LanguageSwitcher;
