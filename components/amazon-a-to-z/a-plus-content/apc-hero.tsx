import { AmazonLeadForm } from "@/components/amazon-a-to-z/amazon-lead-form";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { SignalField } from "@/components/geometry/signal-field";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ApcHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-start gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div className="pt-2">
          <Eyebrow onDark className="hero-reveal mb-5">
            Amazon A+ Enhanced Brand Content services
          </Eyebrow>
          <h1 className="hero-reveal hero-reveal-1 mb-5 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,56px)] text-white leading-[1.02] tracking-[-0.03em]">
            Amazon A+ Enhanced Brand Content that{" "}
            <span className="text-tangerine-400">grows your marketplace</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-8 max-w-[540px] font-sans text-[16.5px] text-white/74 leading-relaxed">
            Transform ordinary product detail pages (PDPs) into extraordinary
            brand experiences. Enhanced Brand Content delivers engaging product
            descriptions and interactive media (A+ content), combining creative
            sales copy, larger-than-life hero banners, comparison tables, and
            more.
          </p>
          <div className="hero-reveal hero-reveal-2 flex items-center gap-2.5">
            <AmazonLogo className="h-6" />
            <span className="font-sans text-[13.5px] text-white/55">
              A+ Content · EBC · Brand Story · Brand Registry
            </span>
          </div>
        </div>
        <div className="hero-reveal hero-reveal-2">
          <AmazonLeadForm
            id="a-plus-form"
            formName="a-plus-content-lead"
            title="Get a free quote"
            submitLabel="Submit"
          />
        </div>
      </div>
    </section>
  );
}
