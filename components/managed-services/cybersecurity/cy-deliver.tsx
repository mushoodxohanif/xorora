import {
  Eye,
  Fingerprint,
  GraduationCap,
  KeyRound,
  Lock,
  MailWarning,
  ScanSearch,
  Shield,
  Swords,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";

const SERVICES: {
  icon: LucideIcon;
  name: string;
  tag: string;
  body: string;
}[] = [
  {
    icon: Eye,
    name: "24/7 threat detection and response",
    tag: "DETECT / RESPOND",
    body: "We watch, triage, and act around the clock, so threats are caught and contained before they spread.",
  },
  {
    icon: MailWarning,
    name: "Email security and phishing protection",
    tag: "PROTECT — EMAIL",
    body: "We harden your biggest attack surface, cutting the phishing and spoofing that start most breaches.",
  },
  {
    icon: GraduationCap,
    name: "Security awareness training",
    tag: "PROTECT — PEOPLE",
    body: "We turn your team from the front line into a first defense with training that actually changes behavior.",
  },
  {
    icon: Fingerprint,
    name: "Identity and access management",
    tag: "PROTECT — IDENTITY",
    body: "We make sure the right people reach the right systems, and no one else does.",
  },
  {
    icon: ScanSearch,
    name: "Compliance and risk assessments",
    tag: "IDENTIFY / GOVERN",
    body: "We map your risks against the standards you answer to and give you a clear path to close the gaps.",
  },
  {
    icon: Lock,
    name: "Data protection and encryption",
    tag: "PROTECT — DATA",
    body: "We protect data at rest and in transit, so a breach doesn't hand attackers anything usable.",
  },
  {
    icon: Shield,
    name: "Zero trust security",
    tag: "PROTECT — ARCHITECTURE",
    body: "We design for \"never trust, always verify,\" removing the implicit access attackers exploit.",
  },
  {
    icon: KeyRound,
    name: "Vulnerability management",
    tag: "IDENTIFY",
    body: "We find, rank, and track weaknesses continuously, so the important fixes happen first.",
  },
  {
    icon: Swords,
    name: "Penetration testing",
    tag: "IDENTIFY / VALIDATE",
    body: "We attack your systems the way a real adversary would, then show you exactly what to fix.",
  },
];

export function CyDeliver() {
  return (
    <LightSection bg="var(--slate-50)" id="cyber-services" className="scroll-mt-24">
      <SectionHead
        label="What we do"
        title="Cybersecurity services, one accountable team"
        sub="Each service stands alone and layers in as you grow. Together they cover the full surface, and the tags map each one to the security function it serves."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {SERVICES.map((item) => {
          const Icon = item.icon;
          return (
            <LetsTalkContactLink
              key={item.name}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)] no-underline transition-all duration-220 hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="mb-4 inline-flex w-fit rounded-[5px] border border-indigo-100 bg-indigo-50 px-2 py-1 font-mono text-[10px] text-indigo-700 tracking-wider">
                {item.tag}
              </span>
              <span className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo transition-all duration-200 group-hover:bg-xo-indigo group-hover:text-white">
                <Icon className="h-[23px] w-[23px]" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.name}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </LetsTalkContactLink>
          );
        })}
      </div>
    </LightSection>
  );
}
