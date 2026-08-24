import { ArrowUpRight } from "lucide-react";
import { LetsTalkContactLink } from "@/components/modals";
import {
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_OFFICES,
  SITE_PHONES,
} from "@/lib/contact";
import { buttonClassName } from "@/lib/button-styles";

export function AtzCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,110px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(91,141,239,0.28),transparent_55%)]" />
      <div className="relative mx-auto max-w-[900px] text-center">
        <h2 className="ind-reveal m-0 mb-6 text-balance font-bold font-sans text-[clamp(28px,3.6vw,44px)] text-white leading-[1.08] tracking-[-0.02em]">
          Ready to run Amazon as a growth system?
        </h2>
        <p className="ind-reveal mx-auto mb-10 max-w-[560px] font-sans text-[16px] text-white/70 leading-relaxed">
          Tell us where you are today — new ASIN, stalled catalog, or Vendor
          Central pressure — and we&apos;ll map the next ninety days.
        </p>
        <div className="ind-reveal mb-10 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#hub-lead-form"
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Get a proposal
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "onDark", size: "lg" })}
          >
            Talk to a strategist
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <div className="ind-reveal mx-auto grid max-w-[720px] gap-6 text-left sm:grid-cols-2">
          <div>
            <p className="m-0 mb-2 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.12em]">
              Contact
            </p>
            <a
              href={SITE_EMAIL_HREF}
              className="font-sans text-[15px] text-white/80 no-underline hover:text-white"
            >
              {SITE_EMAIL}
            </a>
            <ul className="mt-3 m-0 flex list-none flex-col gap-1.5 p-0">
              {SITE_PHONES.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="font-sans text-[14px] text-white/65 no-underline hover:text-white"
                  >
                    {phone.label}: {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="m-0 mb-2 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.12em]">
              Locations
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {SITE_OFFICES.map((office) => (
                <li key={office.city}>
                  <div className="font-sans font-semibold text-[14px] text-white/85">
                    {office.city}
                  </div>
                  <div className="font-sans text-[13.5px] text-white/55 leading-snug">
                    {office.addr}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
