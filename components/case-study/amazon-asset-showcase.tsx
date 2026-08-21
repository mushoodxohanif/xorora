"use client";

import Image from "next/image";
import { useState } from "react";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import type {
  BulletItem,
  MetaItem,
  SectionImage,
} from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";
import { LightSection } from "./light-section";
import { SectionHead } from "./section-head";

function normalizeBullet(bullet: BulletItem | string): {
  title?: string;
  body: string;
} {
  if (typeof bullet === "string") return { body: bullet };
  return bullet;
}

interface AmazonAssetShowcaseProps {
  label?: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: Array<BulletItem | string>;
  meta?: MetaItem[];
  image: SectionImage;
  gallery?: SectionImage[];
  marketplace?: string;
}

/**
 * Formula A — 60/40 Amazon asset showcase.
 * Large listing frame + conversion strategy narrative.
 * Distinct from centered stacks and phase timelines used elsewhere.
 */
export function AmazonAssetShowcase({
  label,
  title,
  subtitle,
  paragraphs,
  bullets,
  meta,
  image,
  gallery = [],
  marketplace = "amazon.com.au",
}: AmazonAssetShowcaseProps) {
  const frames = [image, ...gallery.filter((g) => g.src !== image.src)];
  const [active, setActive] = useState(0);
  const current = frames[active] ?? image;

  return (
    <LightSection bg="var(--surface)" id="listing-showcase">
      <div className="cs-amazon-showcase grid grid-cols-[1.45fr_1fr] items-center gap-[clamp(28px,4vw,56px)]">
        {/* 60% — product asset stage */}
        <div className="min-w-0">
          <div className="overflow-hidden rounded-[var(--r-xl)] border border-border bg-white shadow-[0_24px_60px_-32px_rgba(2,6,15,0.35)]">
            <div className="flex items-center justify-between gap-3 border-border border-b bg-[#131921] px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <AmazonLogo
                  variant="orange"
                  className="h-[20px] w-auto"
                  decorative
                />
                <span className="hidden font-sans text-[12px] text-white/65 sm:inline">
                  Listing image
                </span>
              </div>
              <span className="font-mono text-[10.5px] text-white/45 tracking-[0.04em]">
                {marketplace}
              </span>
            </div>

            <div className="relative aspect-square w-full bg-[#F7F8F8] sm:aspect-[5/4]">
              {frames.map((frame, i) => (
                <div
                  key={frame.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    i === active
                      ? "opacity-100"
                      : "pointer-events-none opacity-0",
                  )}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 680px"
                    quality={92}
                    className="object-contain object-center p-5 sm:p-8"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {frames.length > 1 && (
            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
              {frames.map((frame, i) => (
                <button
                  key={frame.src}
                  type="button"
                  aria-label={`Show listing image ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-[var(--r-md)] border-2 bg-white transition-all",
                    i === active
                      ? "border-[#FF9900] shadow-xs"
                      : "border-border opacity-75 hover:opacity-100",
                  )}
                >
                  <Image
                    src={frame.src}
                    alt=""
                    fill
                    sizes="68px"
                    quality={80}
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          )}

          <p className="mt-3 font-sans text-[13px] text-fg3 leading-snug">
            {current.alt}
          </p>
        </div>

        {/* 40% — strategy narrative */}
        <div className="min-w-0">
          <SectionHead
            label={label}
            title={title}
            sub={subtitle}
            titleSize="clamp(28px,3.4vw,40px)"
            className="mb-6"
          />

          {paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-4 font-sans text-[15.5px] text-fg2 leading-[1.7] first:mt-0"
            >
              {paragraph}
            </p>
          ))}

          {meta && meta.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {meta.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-[var(--r-sm)] border border-border bg-slate-50 px-2.5 py-1.5"
                >
                  <span className="font-mono text-[10px] text-tangerine-600 uppercase tracking-[0.1em]">
                    {item.label}
                  </span>
                  <span className="font-sans font-semibold text-[12.5px] text-fg1">
                    {item.value}
                  </span>
                </span>
              ))}
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="m-0 mt-7 flex list-none flex-col gap-3 p-0">
              {bullets.map((bullet) => {
                const item = normalizeBullet(bullet);
                return (
                  <li
                    key={item.title ?? item.body.slice(0, 40)}
                    className="rounded-[var(--r-lg)] border border-border bg-indigo-50/60 px-4 py-3.5"
                  >
                    {item.title && (
                      <div className="mb-1 font-mono text-[10.5px] text-xo-indigo uppercase tracking-[0.12em]">
                        {item.title}
                      </div>
                    )}
                    <p className="m-0 font-sans text-[14.5px] text-fg2 leading-[1.55]">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </LightSection>
  );
}
