import i18n from "i18next";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper dark:bg-studio flex items-center justify-center px-6 text-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-graphite dark:text-mist">
              {i18n.t("errorBoundary.sectionTag")}
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-ink dark:text-paper tracking-tight">
              {i18n.t("errorBoundary.heading")}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.65] text-graphite dark:text-mist max-w-[40ch] mx-auto">
              {i18n.t("errorBoundary.body")}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 font-mono text-[11px] tracking-[0.08em] uppercase bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-2.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-paper focus:ring-offset-2"
            >
              {i18n.t("errorBoundary.cta")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
