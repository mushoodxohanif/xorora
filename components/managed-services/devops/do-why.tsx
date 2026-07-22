import {
  CloudOff,
  Gauge,
  Rocket,
  ShieldCheck,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";

const BENEFITS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Timer,
    title: "Faster software updates",
    body: "Move approved changes into production faster. High-performing DevOps teams can reach change lead times of under an hour, depending on system complexity.",
  },
  {
    icon: Rocket,
    title: "Higher deployment frequency",
    body: "Ship smaller updates more often instead of large, risky release cycles. Mature teams can reach daily or multiple deployments a day.",
  },
  {
    icon: Gauge,
    title: "Faster recovery time",
    body: "Recover quicker from failed deployments or production issues. Strong practices help teams work toward recovery times under an hour.",
  },
  {
    icon: ShieldCheck,
    title: "Lower change failure rate",
    body: "Cut deployments that lead to incidents, rollbacks, or urgent fixes. High-performing teams move toward change failure rates of 0 to 15%.",
  },
  {
    icon: CloudOff,
    title: "Reduced cloud waste",
    body: "Trim avoidable cloud spend with better visibility, scaling, tagging, and governance. Industry research estimates 20 to 30% of cloud spend is wasted.",
  },
];

export function DoWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="What you gain"
          title="What your business can achieve with Xorora DevOps services"
          onDark
          align="center"
          className="mx-auto mb-[52px] max-w-[720px]"
        />
        <div className="flex flex-col gap-[18px]">
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <BenefitCard key={item.title} icon={Icon} title={item.title} body={item.body} />
              );
            })}
          </div>
          <div className="mx-auto grid w-full max-w-[780px] grid-cols-1 gap-[18px] sm:grid-cols-2">
            {BENEFITS.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <BenefitCard key={item.title} icon={Icon} title={item.title} body={item.body} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)]">
      <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-900/28 text-indigo-300">
        <Icon className="h-[22px] w-[22px]" aria-hidden />
      </span>
      <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-white leading-snug">
        {title}
      </h3>
      <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
        {body}
      </p>
    </div>
  );
}
