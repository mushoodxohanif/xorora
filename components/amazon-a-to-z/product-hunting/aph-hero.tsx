import { Check } from "lucide-react";
import { AmazonLeadForm } from "@/components/amazon-a-to-z/amazon-lead-form";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { SignalField } from "@/components/geometry/signal-field";
import { Eyebrow } from "@/components/ui/eyebrow";

const INCLUDES = [
  "Data-driven product research",
  "Supplier sourcing, verification, and negotiation",
  "Sample and quality-check support",
  "Branding and private-label setup",
] as const;

export function AphHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-start gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div className="pt-2">
          <Eyebrow onDark className="hero-reveal mb-5">
            Amazon A to Z Services
          </Eyebrow>
          <h1 className="hero-reveal hero-reveal-1 mb-5 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,56px)] text-white leading-[1.02] tracking-[-0.03em]">
            Need{" "}
            <span className="text-tangerine-400">high-selling products</span>{" "}
            with reliable suppliers?
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-6 max-w-[540px] font-sans text-[16.5px] text-white/74 leading-relaxed">
            Our data-driven private-label hunting and sourcing services help you
            uncover high-demand, low-competition private-label products to scale
            your Amazon business.
          </p>
          <ul className="hero-reveal hero-reveal-2 m-0 mb-8 flex max-w-[540px] list-none flex-col gap-2 p-0">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-400"
                  aria-hidden
                />
                <span className="font-sans text-[14.5px] text-white/82 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="hero-reveal hero-reveal-2 flex items-center gap-2.5">
            <AmazonLogo className="h-6" />
            <span className="font-sans text-[13.5px] text-white/55">
              Private label · Supplier vetting · Launch ready
            </span>
          </div>
        </div>
        <div className="hero-reveal hero-reveal-2">
          <AmazonLeadForm
            formName="product-hunting-lead"
            title="Get a free consultation"
            submitLabel="Send message"
          />
        </div>
      </div>
    </section>
  );
}
