import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceBreadcrumb, ServiceGlassForm } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

export function SaHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <ServiceBreadcrumb
            current="Staff Augmentation Services"
            parent={{
              label: "Consulting",
              href: ROUTES.consulting,
            }}
          />
          <p className="hero-reveal hero-reveal-1 mb-3 font-mono text-[12px] text-indigo-200/80 uppercase tracking-[0.14em]">
            Staff augmentation services
          </p>
          <h1 className="hero-reveal hero-reveal-1 mb-6 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,60px)] text-white leading-[1.02] tracking-[-0.03em]">
            Staff augmentation services that work as one&nbsp;
            <span className="text-tangerine-400">integrated team</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[520px] font-sans text-lg text-white/74 leading-relaxed">
            Xorora adds senior software engineers and tech professionals to your
            internal teams. Unblock stalled roadmaps and scale delivery across
            your org, with engineers who work your hours and your workflows.
          </p>
          <div className="hero-reveal hero-reveal-2 mb-7 flex flex-wrap items-center gap-3.5">
            <LetsTalkContactLink
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Get started with staff augmentation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
            <a
              href="#vetting"
              className={buttonClassName({ variant: "onDark", size: "lg" })}
            >
              See how we vet engineers
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <p className="hero-reveal hero-reveal-2 m-0 font-sans text-[13.5px] text-white/55">
            AI-augmented engineers · Start in 2 weeks
          </p>
        </div>
        <ServiceGlassForm
          formName="staff-augmentation-contact"
          title="Start growing your business with us"
          description="Send us the basics and we'll be in touch within one business day."
          nameLabel="First name"
          messageLabel="About project"
          messagePlaceholder="Tell us about your team and what you need"
          submitLabel="Send message"
          showNda={true}
        />
      </div>
    </section>
  );
}
