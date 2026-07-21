import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

export function DtHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb
            current="Digital Transformation Services"
            parent={{ label: "Consulting", href: ROUTES.consulting }}
          />
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,60px)] text-white leading-[1.02] tracking-[-0.03em]">
            AI digital transformation services that power meaningful&nbsp;
            <span className="text-tangerine-400">change</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            We solve today&apos;s challenges and anticipate what&apos;s next, so
            your business grows faster and runs with agility. Our digital
            transformation services turn ambition into working systems, with AI
            where it earns its place.
          </p>
          <div className="hero-reveal hero-reveal-2 mb-7 flex flex-wrap items-center gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Talk to our expert
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <Link
              href={ROUTES.ourWork}
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              See recent projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <p className="hero-reveal hero-reveal-2 m-0 font-sans text-[13.5px] text-white/55">
            40+ AI systems shipped to production
          </p>
        </div>
        <ServiceGlassForm
          formName="digital-transformation-contact"
          title="Start growing your business with us"
          nameLabel="First name"
          messageLabel="Message"
          messagePlaceholder="Tell us about your transformation goals"
          submitLabel="Send message"
          showNda={false}
        />
      </div>
    </section>
  );
}
