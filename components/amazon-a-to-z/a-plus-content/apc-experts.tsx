import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

export function ApcExperts() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            title="How Xorora's Amazon experts can help"
            sub="Our A+ Content focuses on selling your brand. Situated within the Product Description, this feature gives you the chance to talk about your company's beginnings and values, product specifications, quality-centric manufacturing, and commitment to excellence."
            className="ind-reveal mb-6"
            titleSize="clamp(26px,3.2vw,38px)"
          />
          <p className="ind-reveal m-0 font-sans text-[16px] text-fg2 leading-relaxed">
            Our experts help you showcase your unique brand story and make the
            most of this platform.
          </p>
        </div>
        <div className="ind-reveal relative min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border bg-navy-900 p-[clamp(28px,3.5vw,40px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(91,141,239,0.35),transparent_55%)]" />
          <div className="relative">
            <p className="m-0 mb-3 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.14em]">
              Captivating content, compelling results
            </p>
            <p className="m-0 font-sans text-[17px] text-white/80 leading-relaxed">
              Leave a lasting impression with our creative content-creation
              services. Our copywriters craft persuasive product descriptions,
              engaging brand stories, and impactful comparison charts to
              maximize your sales potential.
            </p>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
