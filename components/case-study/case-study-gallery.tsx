"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
} from "react";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import type { SectionImage } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";

interface CaseStudyGalleryProps {
  images: SectionImage[];
  onDark?: boolean;
  className?: string;
  amazon?: boolean;
  /** Listing stills are nearer square; A+ modules are wide banners. */
  aspect?: "square" | "wide";
  caption?: string;
}

export function CaseStudyGallery({
  images,
  onDark = false,
  className,
  amazon = true,
  aspect = "square",
  caption,
}: CaseStudyGalleryProps) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (index >= count) setIndex(0);
  }, [count, index]);

  if (count === 0) return null;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  }

  return (
    <div
      className={cn("relative mx-auto w-full max-w-[980px] outline-none", className)}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <p id={labelId} className="sr-only">
        Image gallery, slide {index + 1} of {count}
      </p>

      {caption && (
        <div className="mb-4 flex items-center gap-3">
          {amazon && (
            <AmazonLogo
              variant="orange"
              className="h-[18px] w-auto"
              decorative
            />
          )}
          <p
            className={cn(
              "m-0 font-mono text-[11.5px] uppercase tracking-[0.14em]",
              onDark ? "text-white/55" : "text-fg3",
            )}
          >
            {caption}
          </p>
        </div>
      )}

      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute -inset-8 rounded-[32px] opacity-70 blur-2xl",
            onDark
              ? "bg-[radial-gradient(circle_at_40%_20%,rgba(255,153,0,0.2),transparent_58%)]"
              : "bg-[radial-gradient(circle_at_40%_20%,rgba(255,153,0,0.14),transparent_58%)]",
          )}
          aria-hidden
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-[18px] border shadow-[0_32px_80px_-36px_rgba(2,6,15,.55)]",
            amazon
              ? "border-[#D5D9D9] bg-white"
              : onDark
                ? "border-white/12 bg-[#0C1430]"
                : "border-border bg-white",
          )}
        >
          {amazon && (
            <div className="flex items-center justify-between gap-3 bg-[#131921] px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <AmazonLogo
                  variant="orange"
                  className="h-[20px] w-auto"
                  decorative
                />
                <span className="hidden font-sans text-[12px] text-white/65 sm:inline">
                  amazon.com.au
                </span>
              </div>
              <span className="font-mono text-[10.5px] text-white/45">
                {index + 1} / {count}
              </span>
            </div>
          )}

          <div
            className={cn(
              "relative w-full bg-[#F7F8F8]",
              aspect === "wide" ? "aspect-[21/9]" : "aspect-square sm:aspect-[4/3]",
            )}
          >
            {images.map((image, i) => (
              <div
                key={image.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  i === index ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                aria-hidden={i !== index}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 980px"
                  quality={92}
                  className="object-contain object-center p-4 sm:p-7"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-5 flex flex-col items-center gap-4">
          <div className="flex max-w-full flex-wrap justify-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-lg border-2 bg-white transition-all sm:h-[72px] sm:w-[72px]",
                  i === index
                    ? "border-[#FF9900] shadow-sm"
                    : onDark
                      ? "border-white/15 opacity-75 hover:opacity-100"
                      : "border-[#D5D9D9] opacity-75 hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="72px"
                  quality={80}
                  className="object-contain p-1.5"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(index - 1)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
                onDark
                  ? "border-white/15 bg-white/6 text-white hover:bg-white/12"
                  : "border-[#D5D9D9] bg-white text-fg1 hover:border-[#FF9900]",
              )}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(index + 1)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
                onDark
                  ? "border-white/15 bg-white/6 text-white hover:bg-white/12"
                  : "border-[#D5D9D9] bg-white text-fg1 hover:border-[#FF9900]",
              )}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
