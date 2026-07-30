"use client";

import { useState } from "react";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    n: "01",
    name: "Discover",
    duration: "1–2 weeks",
    body: "We identify high-value opportunities where AI agents deliver measurable impact, covering use-case discovery, value mapping, data-readiness assessment, and a governance baseline. You leave with a use-case backlog, ROI model, and clear build, buy, or hybrid options.",
  },
  {
    n: "02",
    name: "Prove",
    duration: "Validate first",
    body: "We validate the highest-value use case against real data and constraints — proving the agent works before you commit to a full build. Success criteria, eval harnesses, and risk flags are locked before the next stage.",
  },
  {
    n: "03",
    name: "Pilot",
    duration: "Controlled users",
    body: "We put the agent in front of real users in a controlled setting, measuring against the ROI model. Feedback loops, escalation paths, and adoption metrics tell you whether the agent is ready to scale.",
  },
  {
    n: "04",
    name: "Scale",
    duration: "Production ready",
    body: "We move from pilot to production with the pipelines, monitoring, and governance to run reliably at scale — so the agent stays accurate, auditable, and owned by your team.",
  },
] as const;

export function AadProcess() {
  const [openIndex, setOpenIndex] = useState(0);
  const progress = ((openIndex + 1) / PHASES.length) * 100;

  return (
    <section
      id="process"
      className="relative overflow-hidden px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-surface"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(70,76,159,0.12)_0%,transparent_68%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="Our process for building AI agents"
          sub="Four connected phases from discovery to production — tap a stage to see what ships."
          className="mb-10 max-w-[720px] md:mb-12"
        />

        {/* Desktop: horizontal pipeline */}
        <div className="mb-8 hidden md:block">
          <div className="relative mb-2">
            <div className="absolute top-5 right-0 left-0 h-0.5 bg-indigo-100" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-linear-to-r from-xo-indigo to-indigo-400 transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: `${(openIndex / (PHASES.length - 1)) * 100}%`,
              }}
            />
            <ol className="relative m-0 grid list-none grid-cols-4 gap-4 p-0">
              {PHASES.map((phase, i) => {
                const isOpen = openIndex === i;
                const isPast = i < openIndex;
                return (
                  <li key={phase.n} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      aria-expanded={isOpen}
                      className="group flex w-full flex-col items-center text-center"
                    >
                      <span
                        className={cn(
                          "relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full font-mono font-bold text-[12px] text-white transition-all duration-300",
                          isOpen || isPast
                            ? "bg-xo-indigo shadow-[0_0_0_6px_rgba(70,76,159,0.18)]"
                            : "border-2 border-slate-200 bg-white text-slate-400",
                          isOpen && "scale-105",
                        )}
                      >
                        {isPast && !isOpen ? (
                          <span className="text-[14px]" aria-hidden>
                            ✓
                          </span>
                        ) : (
                          phase.n
                        )}
                      </span>
                      <span
                        className={cn(
                          "font-sans font-semibold text-[16px] tracking-[-0.015em] transition-colors",
                          isOpen ? "text-xo-indigo" : "text-fg1",
                        )}
                      >
                        {phase.name}
                      </span>
                      <span className="mt-1 font-mono text-[11px] text-fg3 uppercase tracking-[0.08em]">
                        {phase.duration}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-8 rounded-(--r-xl) border border-indigo-200 bg-linear-to-br from-indigo-50 to-white p-[clamp(24px,3vw,36px)] shadow-sm">
            <div className="mb-3 flex flex-wrap items-baseline gap-3">
              <span className="font-mono font-bold text-[13px] text-xo-indigo">
                {PHASES[openIndex].n}
              </span>
              <h3 className="m-0 font-bold font-sans text-[clamp(22px,2.4vw,28px)] text-fg1 tracking-[-0.02em]">
                {PHASES[openIndex].name}
              </h3>
              <span className="rounded-full border border-border bg-white px-3 py-1 font-mono text-[11px] text-fg2 uppercase tracking-[0.1em]">
                {PHASES[openIndex].duration}
              </span>
            </div>
            <p className="m-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
              {PHASES[openIndex].body}
            </p>
          </div>
        </div>

        {/* Mobile: stacked vertical timeline */}
        <div className="md:hidden">
          <div className="mb-5 h-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-linear-to-r from-xo-indigo via-indigo-400 to-indigo-300 transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="relative m-0 flex list-none flex-col p-0">
            {PHASES.map((phase, i) => {
              const isOpen = openIndex === i;
              const isPast = i < openIndex;
              const isLast = i === PHASES.length - 1;
              const segmentActive = i < openIndex;

              return (
                <li key={phase.n} className="relative flex gap-3.5">
                  <div className="relative flex w-10 shrink-0 flex-col items-center">
                    <span
                      className={cn(
                        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono font-bold text-[12px] text-white transition-all duration-300",
                        isOpen || isPast
                          ? cn(
                              "bg-xo-indigo",
                              isOpen &&
                                "shadow-[0_0_0_6px_rgba(70,76,159,0.18)]",
                            )
                          : "border-2 border-slate-200 bg-white text-slate-400",
                        isOpen && "scale-105",
                      )}
                    >
                      {isPast && !isOpen ? (
                        <span className="text-[14px]" aria-hidden>
                          ✓
                        </span>
                      ) : (
                        phase.n
                      )}
                    </span>
                    {!isLast && (
                      <div
                        className="mt-0 w-0.5 min-h-3 flex-1 rounded-full bg-indigo-100"
                        aria-hidden
                      >
                        <div
                          className={cn(
                            "w-full rounded-full bg-linear-to-b from-xo-indigo to-indigo-400 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            segmentActive ? "h-full" : "h-0",
                          )}
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-expanded={isOpen}
                    className={cn(
                      "group mb-2.5 min-w-0 flex-1 rounded-(--r-lg) border px-3 py-3 text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isLast && "mb-0",
                      isOpen
                        ? "border-indigo-200 bg-linear-to-br from-indigo-50 to-white shadow-sm"
                        : "border-transparent bg-transparent hover:border-border/70 hover:bg-white/70",
                    )}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span
                          className={cn(
                            "block font-sans font-semibold text-[15.5px] leading-snug tracking-[-0.015em]",
                            isOpen ? "text-fg1" : "text-fg1/85",
                          )}
                        >
                          {phase.name}
                        </span>
                        <span className="mt-0.5 block font-mono text-[11px] text-fg3 uppercase tracking-[0.08em]">
                          {phase.duration}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300",
                          isOpen
                            ? "scale-125 bg-xo-indigo"
                            : "bg-slate-200 group-hover:bg-slate-300",
                        )}
                      />
                    </span>
                    <span
                      className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-2.5 block font-sans text-[14px] text-fg2 leading-relaxed">
                          {phase.body}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
