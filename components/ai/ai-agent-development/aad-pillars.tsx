import {
  ArrowUpRight,
  Boxes,
  Database,
  Scale,
  Server,
  Shield,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const PILLARS = [
  {
    n: "01",
    name: "Governance",
    body: "What the agent is for, who owns it, and which regulations apply.",
    icon: Scale,
  },
  {
    n: "02",
    name: "Security",
    body: "Who the agent acts for, what it's allowed to do, and its audit trails.",
    icon: Shield,
  },
  {
    n: "03",
    name: "Operations",
    body: "How the agent is monitored, improved, and fully transitioned to your team.",
    icon: Server,
  },
  {
    n: "04",
    name: "Architecture",
    body: "How the agent works inside your systems without disrupting existing workflows.",
    icon: Boxes,
  },
  {
    n: "05",
    name: "Data",
    body: "Which data the agent can access, where it lives, and the rules it has to follow.",
    icon: Database,
  },
] as const;

export function AadPillars() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Production readiness"
        title="The five pillars that decide whether your agent ships"
        sub="Getting an agent to a demo is easy. Getting it to production means solving all five."
        className="mb-10 max-w-[720px]"
      />

      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.n}
              className="relative flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono font-bold text-[12px] text-xo-indigo tracking-[0.08em]">
                  {pillar.n}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
              </div>
              <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                {pillar.name}
              </h3>
              <p className="m-0 font-sans text-[13.5px] text-fg2 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-(--r-xl) border border-border bg-white px-[clamp(24px,3.5vw,40px)] py-[clamp(24px,3vw,32px)]">
        <div className="relative flex flex-wrap items-center justify-between gap-5">
          <p className="m-0 max-w-[560px] font-sans font-semibold text-[17px] text-fg1 leading-snug">
            Find out which production pillar is blocking you.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Book a scoping call
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </LightSection>
  );
}
