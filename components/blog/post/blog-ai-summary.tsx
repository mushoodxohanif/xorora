"use client";

import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BlogAiSummaryProps {
  summary: string;
}

export function BlogAiSummary({ summary }: BlogAiSummaryProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const dialog =
    open && mounted
      ? createPortal(
          <div className="lt-fade pointer-events-auto fixed inset-0 z-200 flex items-center justify-center bg-[rgba(2,6,15,0.55)] p-[clamp(16px,4vw,48px)] backdrop-blur-[6px]">
            <button
              type="button"
              aria-label="Close summary"
              onClick={() => setOpen(false)}
              className="absolute inset-0 cursor-default border-0 bg-transparent"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-ai-summary-title"
              className="lt-pop relative z-10 w-full max-w-[560px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 p-[clamp(28px,4vw,40px)] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,0.4), transparent 58%)",
                }}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-[18px] right-[18px] z-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--r-md) border border-white/14 bg-white/6 text-white/80 transition-colors duration-150 hover:bg-white/12 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-white/16 bg-white/6 px-3 py-[6px] font-mono text-[11px] text-tangerine-400 tracking-[0.14em]">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  AI SUMMARY
                </div>
                <h2
                  id="blog-ai-summary-title"
                  className="m-0 mb-4 font-bold font-sans text-[22px] text-white"
                >
                  The short version
                </h2>
                <p className="m-0 font-sans text-[15.5px] text-white/78 leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="relative z-20 mt-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-(--r-md) border border-indigo-200 bg-indigo-50 px-3.5 py-3 text-left transition-colors duration-150 hover:border-xo-indigo/40 hover:bg-indigo-100"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-xo-indigo" aria-hidden />
        <span className="font-sans font-semibold text-[13.5px] text-xo-indigo">
          Summarize this with AI
        </span>
      </button>
      {dialog}
    </div>
  );
}
