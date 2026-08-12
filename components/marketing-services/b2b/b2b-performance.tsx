import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

export function B2bPerformance() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(70,76,159,0.42),transparent_60%)]" />
      <XWatermark
        size={480}
        color="rgba(120,150,240,0.05)"
        className="-translate-x-1/2 bottom-[-200px] left-1/2"
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <SignalRule
          color="var(--tangerine-400)"
          className="mb-[26px] justify-center"
        />
        <p className="mb-4 font-sans font-semibold text-[13px] text-tangerine-400 uppercase tracking-[0.18em]">
          Our approach
        </p>
        <h2 className="mb-5 text-balance font-extrabold font-sans text-[clamp(28px,4vw,44px)] text-white leading-tight tracking-tight">
          Performance marketing built for growth-focused B2B companies
        </h2>
        <p className="mx-auto mb-9 max-w-[620px] font-sans text-[16px] text-white/70 leading-relaxed">
          Whether you&apos;re pursuing hypergrowth, disrupting your industry,
          moving into a new market, or looking to develop more predictable
          revenue, you need a digital marketing partner who understands B2B and
          the mechanics of scaling programs.
        </p>
        <Link
          href={ROUTES.about}
          className={buttonClassName({ variant: "light", size: "lg" })}
        >
          About us
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
