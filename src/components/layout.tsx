import * as Dialog from "@radix-ui/react-dialog";
import { type ReactNode, useState } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

interface LayoutProps {
  children: ReactNode;
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("about");
        onNavigate?.();
      }}
      className="font-mono text-[11px] tracking-[0.08em] uppercase text-graphite dark:text-mist hover:text-ink dark:hover:text-paper transition-colors"
    >
      Studio
    </a>
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("projects");
        onNavigate?.();
      }}
      className="font-mono text-[11px] tracking-[0.08em] uppercase text-graphite dark:text-mist hover:text-ink dark:hover:text-paper transition-colors"
    >
      Products
    </a>
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("projects");
        onNavigate?.();
      }}
      className="font-mono text-[11px] tracking-[0.08em] uppercase text-graphite dark:text-mist hover:text-ink dark:hover:text-paper transition-colors"
    >
      Work
    </a>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("about");
        onNavigate?.();
      }}
      className="font-mono text-[11px] tracking-[0.08em] uppercase text-graphite dark:text-mist hover:text-ink dark:hover:text-paper transition-colors"
    >
      About
    </a>
  </>
);

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper dark:bg-studio transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 sm:px-12 bg-paper dark:bg-studio border-b border-mist dark:border-graphite transition-colors duration-300 backdrop-blur-[12px]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2 focus:ring-offset-paper dark:focus:ring-offset-studio rounded"
          aria-label="Nytsu — Home"
        >
          <Logo size="xs" />
        </a>
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-4">
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="md:hidden p-2 text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper rounded"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/20 dark:bg-black/40 pt-16 md:hidden" />
              <Dialog.Content
                className="fixed left-0 right-0 top-16 z-40 md:hidden focus:outline-none"
                aria-describedby={undefined}
              >
                <nav
                  className="bg-paper dark:bg-studio border-b border-mist dark:border-graphite py-4 px-6 flex flex-col gap-4"
                  aria-label="Mobile navigation"
                >
                  <NavLinks onNavigate={() => setMobileMenuOpen(false)} />
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo("contact");
                      setMobileMenuOpen(false);
                    }}
                    className="font-mono text-[11px] tracking-[0.08em] uppercase bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-2.5 w-fit"
                  >
                    Contact
                  </button>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="hidden sm:block font-mono text-[11px] tracking-[0.08em] uppercase bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-2.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
          >
            Contact
          </button>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
};

export { Layout as default };
