import { ArrowUpRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LightSection } from "@/components/case-study/light-section";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

export function IiBenefits() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-balance font-extrabold font-sans text-[clamp(26px,3.2vw,40px)] text-fg1 leading-tight tracking-tight">
            What are the benefits of IT infrastructure consultancy?
          </h2>
          <p className="mb-8 m-0 font-sans text-[16px] text-fg2 leading-relaxed">
            Over time, your IT setup needs further optimization. The right
            solution raises efficiency, reduces costs, and improves customer
            satisfaction, while keeping you protected from threats like malware
            and unauthorized access. We audit your current setup and advise on
            how to improve it, or overhaul it entirely if it isn&apos;t meeting
            the needs of the business.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Speak to us
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-(--r-lg) border border-border bg-linear-to-br from-navy-700 via-[#15225C] to-[#2C57C9]">
          <SignalField className="opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_70%_30%,rgba(120,160,255,0.35),transparent_60%)]" />
          <div className="relative z-10 flex h-full min-h-[280px] flex-col items-center justify-center px-8 py-12 text-center">
            <p className="m-0 font-mono text-[11px] text-indigo-200/70 uppercase tracking-[0.14em]">
              Infrastructure
            </p>
            <p className="mt-3 max-w-[240px] font-sans font-semibold text-[18px] text-white/90 leading-snug">
              Secure, agile foundations for multicloud workforces
            </p>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
