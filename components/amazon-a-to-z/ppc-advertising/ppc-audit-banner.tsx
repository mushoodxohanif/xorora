import { ArrowUpRight } from "lucide-react";
import { buttonClassName } from "@/lib/button-styles";

export function PpcAuditBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(64px,8vw,96px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_0%,rgba(91,141,239,0.28),transparent_55%)]" />
      <div className="relative mx-auto max-w-[900px] text-center">
        <h2 className="ind-reveal m-0 mb-5 text-balance font-bold font-sans text-[clamp(28px,3.6vw,44px)] text-white leading-[1.08] tracking-[-0.02em]">
          Want to see what your existing campaigns are missing?
        </h2>
        <p className="ind-reveal mx-auto mb-8 max-w-[560px] font-sans text-[16.5px] text-white/72 leading-relaxed">
          Let our experts dive into your campaign structure and find
          opportunities to scale smarter.
        </p>
        <a
          href="#ppc-form"
          className={buttonClassName({ variant: "light", size: "lg" })}
        >
          Book a free Amazon PPC audit now
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
