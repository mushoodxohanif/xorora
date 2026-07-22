import { ArrowUpRight } from "lucide-react";
import { LetsTalkContactLink } from "@/components/modals";
import { OutcomeGrid } from "@/components/services";
import { buttonClassName } from "@/lib/button-styles";

const WHY = [
  {
    icon: "target",
    title: "Top 1% talent",
    body: "Hire cybersecurity professionals and draw on their 8+ years of hands-on experience.",
  },
  {
    icon: "shield-check",
    title: "In-depth cybersecurity knowledge",
    body: "Our specialists track evolving threats and align to your strategy to build immunity against advanced adversaries.",
  },
  {
    icon: "gauge",
    title: "Responsiveness",
    body: "Respond to incidents instantly. We offer a one-hour response time on all emergency calls, 24 hours a day.",
  },
  {
    icon: "trending-up",
    title: "Analytical minds",
    body: "Get the precision that comes from the analytical, rational thinking of our top security experts.",
  },
] as const;

export function CyWhy() {
  return (
    <div>
      <OutcomeGrid
        label="Why Xorora"
        title="Hire cybersecurity experts to prevent data breaches"
        sub="Build your cyber hygiene with engineers who have mastered behavioral analytics, automated testing, incident investigation, and mitigation."
        items={[...WHY]}
      />
      <div className="flex justify-center bg-navy-900 px-8 pb-[clamp(56px,7vw,88px)]">
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Hire top cybersecurity experts
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </div>
  );
}
