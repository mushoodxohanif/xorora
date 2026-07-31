"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ServiceCard } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

const INITIAL_VISIBLE = 6;

const CAPABILITIES = [
  {
    icon: "workflow",
    name: "Process automation",
    body: "We identify and automate manual tasks to improve productivity and consistency across your operations.",
  },
  {
    icon: "layers",
    name: "Custom workflow development",
    body: "We design and deploy workflows tailored to your business, for consistent, scalable, cost-effective processes.",
  },
  {
    icon: "calendar-clock",
    name: "Task scheduling automation",
    body: "We enable efficient task allocation with automated scheduling that improves team productivity and resource use.",
  },
  {
    icon: "file-text",
    name: "Document automation systems",
    body: "We simplify document management with automated workflows for approvals, storage, and sharing.",
  },
  {
    icon: "plug",
    name: "Systems integration",
    body: "We connect disparate systems into unified, automated processes across your organization.",
  },
  {
    icon: "activity",
    name: "Workflow monitoring and analytics",
    body: "We track, measure, and analyze workflows in real time to drive continuous improvement.",
  },
  {
    icon: "map",
    name: "Process mapping and optimization",
    body: "We visualize and upgrade your processes with expert mapping and optimization strategies.",
  },
  {
    icon: "bot",
    name: "Robotic process automation (RPA)",
    body: "We use RPA to automate repetitive, high-volume tasks for greater accuracy and lower labor costs.",
  },
  {
    icon: "check-circle",
    name: "Automated approval systems",
    body: "We streamline sign-offs with automated approval routing, so work doesn't stall waiting on a decision.",
  },
  {
    icon: "scan-text",
    name: "Data capture",
    body: "We automate data capture that extracts and structures information, cutting manual entry and errors.",
  },
  {
    icon: "shield-check",
    name: "Compliance automation",
    body: "We support compliance by automating controls, documentation, and monitoring.",
  },
  {
    icon: "cloud",
    name: "Cloud-based workflows",
    body: "We build workflows that scale with your business and run reliably in the cloud.",
  },
] as const;

export function WfaDeliver() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? CAPABILITIES
    : CAPABILITIES.slice(0, INITIAL_VISIBLE);

  return (
    <div id="services">
      <LightSection bg="var(--slate-50)">
        <SectionHead
          label="Our services"
          title="Xorora workflow automation services"
          sub="Streamline operations with workflow automation that lifts efficiency, cuts errors, and transforms tasks through custom workflows, automated approvals, and RPA."
          className="mb-12"
        />
        <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
          {visible.map((item, i) => (
            <div
              key={item.name}
              className={i >= INITIAL_VISIBLE ? "hero-reveal" : undefined}
            >
              <ServiceCard {...item} showLearnMore={true} />
            </div>
          ))}
        </div>
        {!expanded && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              See more
              <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
            </button>
          </div>
        )}
      </LightSection>
    </div>
  );
}
