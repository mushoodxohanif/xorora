import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Frontier models",
    logos: [
      { name: "OpenAI", src: "/assets/ai-platforms/openai.svg" },
      { name: "Anthropic", src: "/assets/ai-platforms/anthropic.svg" },
      { name: "Google Gemini", src: "/assets/ai-platforms/gemini.svg" },
      { name: "Grok", src: "/assets/ai-platforms/grok.svg" },
    ],
  },
  {
    title: "Open-weight models",
    logos: [
      { name: "Qwen", src: "/assets/ai-platforms/qwen.svg" },
      { name: "Mistral", src: "/assets/ai-platforms/mistral.svg" },
      { name: "DeepSeek", src: "/assets/ai-platforms/deepseek.svg" },
      { name: "Llama", src: "/assets/ai-platforms/llama.svg" },
    ],
  },
  {
    title: "Frameworks and tooling",
    logos: [
      { name: "LangChain", src: "/assets/ai-platforms/langchain.svg" },
      { name: "PyTorch", src: "/assets/ai-platforms/pytorch.svg" },
      { name: "LiveKit", src: "/assets/ai-platforms/livekit.svg" },
    ],
  },
  {
    title: "Cloud platforms",
    logos: [
      { name: "AWS", src: "/assets/ai-platforms/aws.svg" },
      { name: "Azure", src: "/assets/ai-platforms/azure.svg" },
      { name: "Google Cloud", src: "/assets/ai-platforms/google-cloud.svg" },
    ],
  },
] as const;

export function AsdTech() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Tech & tools"
        title="Models and platforms we build with"
        sub="Vendor-neutral across frontier models, open-weight alternatives, frameworks, and the clouds your teams already trust."
        className="mb-12 max-w-[720px]"
      />
      <div className="flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-slate-50 px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      title={logo.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      unoptimized
                    />
                  </span>
                  <span className="font-sans font-semibold text-[14.5px] text-fg1">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
