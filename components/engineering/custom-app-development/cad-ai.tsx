import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { LetsTalkContactLink } from "@/components/modals";
import { ServiceCardGrid } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

const AI_CAPABILITIES = [
  {
    icon: "workflow",
    name: "AI-powered biometric authentication",
    body: "Fingerprint, facial, or iris verification with encrypted biometric data, so users get in without passwords.",
  },
  {
    icon: "file-code-2",
    name: "AI-automated code generation",
    body: "We use AI to accelerate delivery and reduce manual coding errors, with review keeping the output clean.",
  },
  {
    icon: "bar-chart-3",
    name: "Smart automation QA testing",
    body: "AI-driven testing analyzes app functionality and finds bugs, automating repeat test cases to speed release.",
  },
  {
    icon: "compass",
    name: "AI-powered personalization",
    body: "We use behavior data to tailor content and offers, lifting retention and app usage.",
  },
  {
    icon: "sigma",
    name: "Contextual search",
    body: "AI language models read user preferences, habits, and context to return relevant results instantly.",
  },
  {
    icon: "bot",
    name: "In-app NLP chatbot integration",
    body: "Natural-language chatbots handle real-time queries in your app, cutting response times and support load.",
  },
] as const;

export function CadAi() {
  return (
    <>
      <ServiceCardGrid
        label="AI in your app"
        title="Custom mobile app development powered by AI"
        sub="We build AI into custom apps where it improves the product, not because it's on the roadmap."
        items={[...AI_CAPABILITIES]}
        bg="var(--slate-50)"
        showLearnMore={false}
      />
      <LightSection bg="var(--slate-50)" className="pt-0">
        <div className="relative overflow-hidden rounded-(--r-xl) bg-navy-900 px-[clamp(28px,4vw,48px)] py-[clamp(28px,4vw,40px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_90%_0%,rgba(70,76,159,0.45),transparent_58%)]" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <h3 className="m-0 max-w-[640px] text-balance font-extrabold font-sans text-[clamp(22px,3vw,32px)] text-white leading-tight tracking-tight">
              Hire engineers who ship AI into production apps
            </h3>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              Hire custom mobile app developers
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </div>
      </LightSection>
    </>
  );
}
