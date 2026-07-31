import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Agent orchestration",
    logos: [
      { name: "LangGraph", src: "/assets/automation-tools/langgraph.svg" },
      { name: "CrewAI", src: "/assets/automation-tools/crewai.svg" },
      { name: "LangChain", src: "/assets/ai-platforms/langchain.svg" },
    ],
  },
  {
    title: "No-code and low-code platforms",
    logos: [
      { name: "n8n", src: "/assets/automation-tools/n8n.svg" },
      { name: "Make", src: "/assets/automation-tools/make.svg" },
      { name: "Zapier", src: "/assets/automation-tools/zapier.svg" },
    ],
  },
  {
    title: "LLMs",
    logos: [
      { name: "OpenAI", src: "/assets/ai-platforms/openai.svg" },
      { name: "Anthropic", src: "/assets/ai-platforms/anthropic.svg" },
    ],
  },
] as const;

export function WfaStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Automation stack we build with"
        sub="Vendor-neutral across agent frameworks, no-code platforms, and the LLMs your workflows already rely on."
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
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
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
