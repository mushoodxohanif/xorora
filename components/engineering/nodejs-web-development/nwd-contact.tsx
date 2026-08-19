import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

const CONTACT_ITEMS = [
  { icon: Mail, value: "info@xorora.com" },
  { icon: Phone, value: "+92-332-0555328" },
] as const;

const RELATED = [
  { label: "Python web development", href: ROUTES.pythonWebDevelopment },
  { label: "Custom app development", href: ROUTES.customAppDevelopment },
  { label: "Hire Node.js developers", href: ROUTES.staffAugmentation },
  { label: "Application modernization", href: ROUTES.applicationModernization },
  { label: "DevOps", href: ROUTES.devops },
] as const;

export function NwdContact() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,120px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(70,76,159,0.42),transparent_60%)]" />
      <XWatermark
        size={560}
        color="rgba(120,150,240,0.05)"
        className="-translate-x-1/2 bottom-[-240px] left-1/2"
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <SignalRule
          color="var(--tangerine-400)"
          className="mb-[26px] justify-center"
        />
        <h2 className="mb-[22px] text-balance font-extrabold font-sans text-[clamp(32px,5vw,60px)] text-white leading-tight tracking-tight">
          Power your next digital move.
        </h2>
        <p className="mx-auto mb-4 max-w-[540px] font-sans text-[clamp(16px,1.9vw,19px)] text-white/70 leading-relaxed">
          Tell us what you&apos;re building. We will tell you what it takes,
          what it costs, and whether Node.js is the right call.
        </p>
        <p className="mx-auto mb-9 max-w-[540px] font-sans text-[clamp(16px,1.9vw,19px)] text-white/70 leading-relaxed">
          Most conversations start with a 30-minute technical call. No deck.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Talk to an engineer
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
          <Link
            href={ROUTES.ourWork}
            className={buttonClassName({ variant: "onDark", size: "lg" })}
          >
            See our work
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-x-[clamp(20px,4vw,40px)] gap-y-5">
          {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
            <div
              key={value}
              className="flex items-center gap-2.5 font-sans text-[15px] text-white/82"
            >
              <Icon
                className="h-[17px] w-[17px] text-tangerine-400"
                aria-hidden
              />
              <a
                href={
                  value.includes("@")
                    ? `mailto:${value}`
                    : `tel:${value.replace(/[^\d+]/g, "")}`
                }
                className="transition-colors hover:text-tangerine-400"
              >
                {value}
              </a>
            </div>
          ))}
        </div>
        <nav
          aria-label="Related services"
          className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 border-white/10 border-t pt-8"
        >
          {RELATED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[13.5px] text-white/55 no-underline transition-colors hover:text-tangerine-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
