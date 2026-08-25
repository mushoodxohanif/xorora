"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { BrowserFrame } from "@/components/case-study/browser-frame";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";
import type { MappedCaseStudySlide } from "@/lib/case-studies/to-mapped-slides";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MappedCaseStudyCarouselProps {
  studies: MappedCaseStudySlide[];
  label?: string;
  title?: string;
  sub?: string;
}

function CaseStudySlide({ study }: { study: MappedCaseStudySlide }) {
  return (
    <article className="grid w-full shrink-0 basis-full items-center gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="min-h-[280px] lg:min-h-[420px]">
        <BrowserFrame
          src={study.image}
          alt={study.imageAlt}
          title={study.frameTitle ?? study.title}
          url={study.frameUrl ?? "app.xorora.com"}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-center py-2">
        <p className="m-0 mb-3 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.14em]">
          {study.tag}
        </p>
        <h3 className="m-0 mb-4 text-balance font-bold font-sans text-[clamp(24px,2.8vw,34px)] text-fg1 leading-[1.12] tracking-[-0.02em]">
          {study.title}
        </h3>
        <p className="m-0 mb-7 max-w-[480px] font-sans text-[16px] text-fg2 leading-relaxed">
          {study.description}
        </p>
        {study.stats.length > 0 && (
          <dl className="m-0 mb-8 grid grid-cols-3 gap-4 border-border border-y py-5">
            {study.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="m-0 font-mono text-[10.5px] text-fg3 uppercase tracking-[0.1em]">
                  {stat.label}
                </dt>
                <dd className="m-0 mt-1.5 font-sans font-semibold text-[clamp(18px,2vw,24px)] text-fg1 tracking-[-0.02em]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <div>
          <Link
            href={ROUTES.caseStudy(study.slug)}
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function MappedCaseStudyCarousel({
  studies,
  label = "Featured work",
  title = "Related case studies",
  sub = "Selected engagements mapped to this page — one study at a time.",
}: MappedCaseStudyCarouselProps) {
  const [index, setIndex] = useState(0);
  const labelId = useId();
  const trackId = useId();
  const count = studies.length;

  if (count === 0) return null;

  const atStart = index === 0;
  const atEnd = index === count - 1;

  function goPrev() {
    setIndex((current) => Math.max(0, current - 1));
  }

  function goNext() {
    setIndex((current) => Math.min(count - 1, current + 1));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <LightSection>
      <div className="ind-reveal mb-10 flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          label={label}
          title={title}
          sub={sub}
          className="max-w-[640px]"
        />
        {count > 1 && (
          <div className="flex items-center gap-2.5">
            <span className="mr-2 font-mono text-[12px] text-fg3 tracking-[0.06em]">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={goPrev}
              disabled={atStart}
              aria-label="Previous case study"
              aria-controls={trackId}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-(--r-md) border transition-colors",
                atStart
                  ? "cursor-not-allowed border-border bg-surface text-fg3 opacity-45"
                  : "cursor-pointer border-border bg-surface text-fg1 hover:border-border-strong hover:bg-slate-50",
              )}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atEnd}
              aria-label="Next case study"
              aria-controls={trackId}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-(--r-md) border transition-colors",
                atEnd
                  ? "cursor-not-allowed border-border bg-surface text-fg3 opacity-45"
                  : "cursor-pointer border-border bg-surface text-fg1 hover:border-border-strong hover:bg-slate-50",
              )}
            >
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        )}
      </div>

      <div
        id={trackId}
        className="ind-reveal outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelId}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <p id={labelId} className="sr-only">
          Case study carousel, slide {index + 1} of {count}
        </p>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {studies.map((study) => (
              <CaseStudySlide key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </div>
    </LightSection>
  );
}
