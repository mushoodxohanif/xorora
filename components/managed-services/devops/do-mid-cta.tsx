import { ArrowUpRight } from "lucide-react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

export function DoMidCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(56px,7vw,88px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_90%_0%,rgba(70,76,159,0.45),transparent_58%)]" />
      <XWatermark
        size={360}
        color="rgba(120,150,240,0.06)"
        className="-right-8 bottom-[-160px]"
      />
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-8">
        <div className="max-w-[640px]">
          <h2 className="mb-0 text-balance font-extrabold font-sans text-[clamp(26px,3.4vw,40px)] text-white leading-tight tracking-tight">
            Delivering effective development to increase software success.
          </h2>
        </div>
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Let&apos;s connect
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </section>
  );
}
