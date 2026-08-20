"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { ContactFormPanel } from "@/components/contact/contact-form-panel";
import { XWatermark } from "@/components/geometry/x-watermark";

interface LetsTalkModalProps {
  open: boolean;
  onClose: () => void;
  industryNames: string[];
}

export function LetsTalkModal({
  open,
  onClose,
  industryNames,
}: LetsTalkModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lt-fade pointer-events-auto fixed inset-0 z-200 flex items-center justify-center bg-[rgba(2,6,15,0.6)] p-[clamp(16px,4vw,48px)] backdrop-blur-[6px]">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default border-0 bg-transparent"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lets-talk-title"
        className="lt-pop relative z-10 max-h-[92vh] w-full max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,0.4), transparent 58%)",
          }}
        />
        <XWatermark
          size={420}
          color="rgba(120,150,240,0.05)"
          className="bottom-[-180px] left-[-120px]"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] z-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--r-md) border border-white/14 bg-white/6 text-white/80 transition-colors duration-150 hover:bg-white/12 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="relative max-h-[92vh] overflow-y-auto p-[clamp(32px,4.5vw,60px)]">
          <ContactFormPanel
            industryNames={industryNames}
            formName="lets-talk"
            titleId="lets-talk-title"
            onSuccessAction={{ label: "Close", onClick: onClose }}
          />
        </div>
      </div>
    </div>
  );
}
