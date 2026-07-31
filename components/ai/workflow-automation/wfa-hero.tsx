import { ArrowUpRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

export function WfaHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb
            current="Workflow Automation Services"
            parent={{ label: "AI", href: ROUTES.ai }}
          />
          <p className="hero-reveal hero-reveal-1 mb-4 font-sans font-semibold text-[13px] text-indigo-200/90 uppercase tracking-[0.14em]">
            AI-powered workflow automation
          </p>
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,56px)] text-white leading-[1.02] tracking-[-0.03em]">
            AI workflow automation services that&nbsp;
            <span className="text-tangerine-400">read, decide, and act</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            Your team spends much of its time on tasks AI can handle. We build
            intelligent automation that reads, decides, and acts, freeing your
            team for the work that actually needs human judgment.
          </p>
          <div className="hero-reveal hero-reveal-2 mb-7 flex flex-wrap items-center gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Get an AI assessment
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              Get a free quote
            </LetsTalkContactLink>
          </div>
        </div>
        <ServiceGlassForm
          formName="workflow-automation-contact"
          title="Start growing your business with us"
          description="Send us the basics and we'll be in touch within one business day."
          nameLabel="Full name"
          messageLabel="About project"
          messagePlaceholder="Tell us which process is eating your team's time"
          submitLabel="Send message"
          showNda={true}
        />
      </div>
    </section>
  );
}
