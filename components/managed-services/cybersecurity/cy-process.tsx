"use client";

import { Shield, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    name: "Identify",
    body: "Preventing every incident is hard, but the damage can be contained. We map what you have and where you're exposed.",
  },
  {
    n: "02",
    name: "Protect",
    body: "We put the right controls around your people, data, identities, and systems to shut down the common ways in.",
  },
  {
    n: "03",
    name: "Detect",
    body: "We monitor continuously so unusual activity surfaces early, not months after the fact.",
  },
  {
    n: "04",
    name: "Respond",
    body: "When something happens, we move fast to contain it, recover, and close the gap that let it in.",
  },
] as const;

function FortressShield({ active }: { active: number }) {
  return (
    <div className="relative mx-auto flex h-[220px] w-[200px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(70,76,159,0.18),transparent_68%)]" />
      <Shield
        className="absolute h-[160px] w-[160px] text-indigo-100"
        strokeWidth={1.25}
        aria-hidden
      />
      <ShieldCheck
        className={cn(
          "relative h-[96px] w-[96px] transition-colors duration-300",
          active >= 0 ? "text-xo-indigo" : "text-slate-300",
        )}
        strokeWidth={1.5}
        aria-hidden
      />
      <div className="absolute bottom-2 flex gap-2">
        {STEPS.map((step, i) => (
          <span
            key={step.n}
            className={cn(
              "h-1.5 w-6 rounded-full transition-colors duration-200",
              i === active ? "bg-tangerine-500" : "bg-indigo-100",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function CyProcess() {
  const [active, setActive] = useState(0);

  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Our method"
        title="Building a mighty cyber-fortress in four steps"
        sub="We use advanced security and IT tooling to strengthen your defenses against difficult threats, step by step."
        className="mb-11"
      />
      <div className="svc-deliver-grid grid grid-cols-[0.92fr_1.08fr] items-stretch gap-[clamp(32px,5vw,72px)] border-border border-t">
        <div className="svc-deliver-visual flex flex-col justify-center pt-9">
          <div className="font-extrabold font-sans text-[clamp(56px,7vw,96px)] text-fg1 leading-[0.9] tracking-[-0.04em]">
            {STEPS[active]?.n}
          </div>
          <div className="flex justify-center py-6 pb-2">
            <FortressShield active={active} />
          </div>
        </div>
        <div className="border-border border-l">
          {STEPS.map((step, i) => {
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
                      on ? "text-xo-indigo" : "text-fg1",
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
      </div>
    </LightSection>
  );
}
