"use client";

import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";
import { DiamondStack } from "./diamond-stack";

export interface ApproachStep {
  n: string;
  name: string;
  body: string;
}

interface StepApproachProps {
  label?: string;
  title: string;
  sub?: string;
  steps: ApproachStep[];
  gradientId?: string;
  className?: string;
  /** Diamond stack + large step number side. Default left (visual | content). */
  visualSide?: "left" | "right";
  /** Active diamond / accent color. Default indigo. */
  tone?: "indigo" | "indigoLight" | "tangerine";
}

export function StepApproach({
  label = "How we work",
  title,
  sub,
  steps,
  gradientId = "stepApproachDia",
  className,
  visualSide = "left",
  tone = "indigo",
}: StepApproachProps) {
  const [active, setActive] = useState(0);
  const visualOnRight = visualSide === "right";
  const activeTitleClass =
    tone === "tangerine"
      ? "text-tangerine-600"
      : tone === "indigoLight"
        ? "text-indigo-400"
        : "text-xo-indigo";
  const stepNumberClass =
    tone === "tangerine"
      ? "text-tangerine-500"
      : tone === "indigoLight"
        ? "text-indigo-400"
        : "text-fg1";

  const visual = (
    <div
      className={cn(
        "svc-deliver-visual flex flex-col justify-center pt-9",
        visualOnRight && "items-end text-right",
      )}
    >
      <div
        className={cn(
          "font-extrabold font-sans text-[clamp(56px,7vw,96px)] leading-[0.9] tracking-[-0.04em]",
          stepNumberClass,
        )}
      >
        {steps[active]?.n}
      </div>
      <div
        className={cn(
          "flex py-6 pb-2",
          visualOnRight ? "justify-end w-full" : "justify-center",
        )}
      >
        <DiamondStack
          active={active}
          count={steps.length}
          gradientId={gradientId}
          tone={tone}
        />
      </div>
    </div>
  );

  const stepsList = (
    <div
      className={cn(
        "border-border",
        visualOnRight ? "border-r" : "border-l",
      )}
    >
      {steps.map((step, i) => {
        const on = active === i;
        return (
          <button
            key={step.n}
            type="button"
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "block w-full cursor-pointer border-border border-b px-[clamp(20px,2.4vw,32px)] py-[clamp(18px,2vw,24px)] text-left transition-colors duration-180",
              on ? "bg-slate-50" : "bg-transparent",
            )}
          >
            <div className="flex items-baseline gap-4">
              <span
                className={cn(
                  "font-mono text-[13px] transition-colors duration-180",
                  on ? "text-tangerine-600" : "text-slate-400",
                )}
              >
                {step.n}
              </span>
              <h3
                className={cn(
                  "m-0 font-bold font-sans text-[clamp(20px,2.2vw,26px)] tracking-[-0.01em] transition-colors duration-180",
                  on ? activeTitleClass : "text-fg1",
                )}
              >
                {step.name}
              </h3>
            </div>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-[620px] pt-3.5 pl-[29px] font-sans text-[15px] text-fg2 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <LightSection bg="var(--surface)" className={className}>
      <SectionHead label={label} title={title} sub={sub} className="mb-11" />
      <div
        className={cn(
          "svc-deliver-grid grid items-stretch gap-[clamp(32px,5vw,72px)] border-border border-t",
          visualOnRight
            ? "grid-cols-[1.08fr_0.92fr]"
            : "grid-cols-[0.92fr_1.08fr]",
        )}
      >
        {visualOnRight ? (
          <>
            {stepsList}
            {visual}
          </>
        ) : (
          <>
            {visual}
            {stepsList}
          </>
        )}
      </div>
    </LightSection>
  );
}
