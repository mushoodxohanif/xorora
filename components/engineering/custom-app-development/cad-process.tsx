import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Business analysis",
    body: "We set clear expectations and identify weak points early, so unplanned costs don't surface later.",
  },
  {
    n: "02",
    name: "Software architecture",
    body: "We pick the technology stack and structure the system for the scale and security you need.",
  },
  {
    n: "03",
    name: "UX and UI design",
    body: "We design the experience before we build it, so the app is usable from the first release.",
  },
  {
    n: "04",
    name: "Software development",
    body: "Our engineers build your product, keeping you in the loop on progress and decisions.",
  },
  {
    n: "05",
    name: "Quality assurance",
    body: "We test throughout, not at the end, catching issues while they're still cheap to fix.",
  },
  {
    n: "06",
    name: "Long-term maintenance",
    body: "We keep the app healthy after launch, handling updates, fixes, and platform changes.",
  },
] as const;

const BA_COVERS = [
  "Competitive analysis",
  "Proof-of-concept application",
  "Assessing new business opportunities",
  "Business model and technology innovation",
  "Preparing the development strategy",
  "Establishing custom security and scalability roadmaps",
  "Picking the ideal technology stack",
] as const;

export function CadProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we build"
        title="How do we build apps?"
        sub="When you partner with Xorora, our business analysts study your needs and assess your product requirements before anything gets built."
        steps={[...STEPS]}
        gradientId="cad-approach"
      />
      <LightSection bg="var(--surface)" className="pt-0">
        <div className="rounded-(--r-xl) border border-border bg-slate-50 p-[clamp(24px,3vw,36px)]">
          <h3 className="mb-4 font-sans font-semibold text-[18px] text-fg1 leading-snug">
            Business analysis covers
          </h3>
          <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
            {BA_COVERS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-500"
                  aria-hidden
                />
                <span className="font-sans text-[14.5px] text-fg2 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </LightSection>
    </div>
  );
}
