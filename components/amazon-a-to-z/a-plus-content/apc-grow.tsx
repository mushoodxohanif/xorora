import { ArrowUpRight } from "lucide-react";
import { buttonClassName } from "@/lib/button-styles";

export function ApcGrow() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(64px,8vw,96px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_0%,rgba(91,141,239,0.28),transparent_55%)]" />
      <div className="relative mx-auto max-w-[900px] text-center">
        <h2 className="ind-reveal m-0 mb-5 text-balance font-bold font-sans text-[clamp(28px,3.6vw,44px)] text-white leading-[1.08] tracking-[-0.02em]">
          Get ready for your Amazon sales to grow
        </h2>
        <p className="ind-reveal mx-auto mb-8 max-w-[640px] font-sans text-[16.5px] text-white/72 leading-relaxed">
          Trust Xorora to take your Amazon presence further. Our Amazon A+ EBC
          listing services enable PDP customization using attention-grabbing
          images, informative comparison tables, persuasive copy, and more —
          filling more space than standard listings and leaving a lasting
          impression on customers.
        </p>
        <a
          href="#a-plus-contact"
          className={buttonClassName({ variant: "light", size: "lg" })}
        >
          Work with us today
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
