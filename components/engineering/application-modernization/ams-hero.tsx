import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

export function AmsHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb
            current="Application Modernization Services"
            parent={{ label: "Engineering", href: ROUTES.engineering }}
          />
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,60px)] text-white leading-[1.02] tracking-[-0.03em]">
            Application modernization services that upgrade legacy without
            the&nbsp;
            <span className="text-tangerine-400">disruption</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            Result-oriented application modernization services to upgrade and
            migrate your legacy software, with minimal disruption to your data
            and business processes.
          </p>
          <div className="hero-reveal hero-reveal-2 mb-7 flex flex-wrap items-center gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Achieve your modernization goal
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <Link
              href="#process"
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              See how we help
            </Link>
          </div>
        </div>
        <ServiceGlassForm
          formName="application-modernization-contact"
          title="Start growing your business with us"
          description="Send us the basics and we'll be in touch within one business day."
          nameLabel="First name"
          messageLabel="Message"
          messagePlaceholder="Tell us about your legacy systems"
          submitLabel="Send message"
          showNda={true}
        />
      </div>
    </section>
  );
}
