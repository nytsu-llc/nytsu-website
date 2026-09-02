import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "@/components/logo";
import { businessCards } from "@/data/business-cards";
import { buildVCardUrl } from "@/lib/vcard";

const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
};

const FlipIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 4v5h5M20 20v-5h-5M4.5 15a8 8 0 0 0 14.4 3.4M19.5 9a8 8 0 0 0-14.4-3.4"
    />
  </svg>
);

const CardPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [flipped, setFlipped] = useState(false);
  useNoIndex();

  const card = slug ? businessCards[slug] : undefined;

  const vcardUrl = useMemo(() => (card ? buildVCardUrl(card) : undefined), [card]);
  useEffect(() => {
    return () => {
      if (vcardUrl) URL.revokeObjectURL(vcardUrl);
    };
  }, [vcardUrl]);

  if (!card) {
    return (
      <div className="min-h-screen bg-studio flex flex-col items-center justify-center gap-6 px-6 text-center">
        <Logo variant="markOnly" size="lg" forDarkBackground />
        <div>
          <h1 className="text-2xl font-bold text-paper tracking-tight">Card not found.</h1>
          <p className="mt-2 font-mono text-[12px] tracking-[0.04em] text-mist">
            This link doesn't match a card.
          </p>
        </div>
        <a
          href="/"
          className="mt-2 font-mono text-[11px] tracking-[0.08em] uppercase bg-paper text-ink px-5 py-2.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-studio"
        >
          Back to nytsu.com
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-studio flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm"
        style={{ perspective: 1600 }}
      >
        <motion.div
          className="relative w-full aspect-[3/4]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Front */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label="Flip card to see contact details"
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-mist/20 bg-paper p-8 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-4 focus:ring-offset-studio"
            style={{ backfaceVisibility: "hidden" }}
          >
            {card.photoUrl ? (
              <img
                src={card.photoUrl}
                alt={card.name}
                className="w-24 h-24 rounded-full object-cover border border-mist"
              />
            ) : (
              <Logo size="lg" />
            )}
            <h1 className="mt-6 text-2xl font-bold text-ink tracking-tight">{card.name}</h1>
            <p className="font-mono text-[12px] tracking-[0.06em] text-graphite">{card.title}</p>

            <div className="absolute bottom-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-graphite">
              <FlipIcon className="w-3.5 h-3.5" />
              Tap for contact
            </div>
          </button>

          {/* Back */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFlipped(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFlipped(false);
              }
            }}
            aria-label="Flip card back"
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 border border-mist/20 bg-paper p-8 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-4 focus:ring-offset-studio"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="absolute top-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-graphite">
              <FlipIcon className="w-3.5 h-3.5" />
              Tap to flip back
            </div>

            <a
              href={vcardUrl}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[220px] bg-ink text-paper font-mono text-[12px] tracking-[0.08em] uppercase px-6 py-3.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper"
            >
              Save contact
            </a>

            <div className="flex flex-col gap-3 items-center">
              <a
                href={`mailto:${card.email}`}
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-[13px] tracking-[0.04em] text-ink underline underline-offset-4 decoration-mist hover:decoration-ink transition-colors focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 rounded"
              >
                {card.email}
              </a>
              {card.phone && (
                <a
                  href={`tel:${card.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[13px] tracking-[0.04em] text-ink underline underline-offset-4 decoration-mist hover:decoration-ink transition-colors focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 rounded"
                >
                  {card.phone}
                </a>
              )}
              <a
                href={card.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-[13px] tracking-[0.04em] text-ink underline underline-offset-4 decoration-mist hover:decoration-ink transition-colors focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
            </div>

            <div className="absolute bottom-6 flex flex-col items-center gap-2">
              <Logo variant="markOnly" size="xs" />
              <a
                href="/"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-[9px] tracking-[0.16em] uppercase text-graphite hover:text-ink transition-colors"
              >
                nytsu.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export { CardPage as default };
