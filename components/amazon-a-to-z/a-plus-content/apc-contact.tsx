import { AmazonLeadForm } from "@/components/amazon-a-to-z/amazon-lead-form";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

export function ApcContact() {
  return (
    <LightSection bg="var(--slate-50)" id="a-plus-contact">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHead
            title="Let's talk about your business"
            sub="At Xorora, our team of Amazon experts and design professionals love what we do. Our marketing services can take your company further. For those in the planning process, submit the form to dive into your project specifics."
            className="ind-reveal"
            titleSize="clamp(26px,3.2vw,38px)"
          />
        </div>
        <div className="ind-reveal">
          <AmazonLeadForm
            id="a-plus-contact-form"
            formName="a-plus-content-contact"
            title="Get a free quote"
            submitLabel="Send"
            variant="surface"
          />
        </div>
      </div>
    </LightSection>
  );
}
