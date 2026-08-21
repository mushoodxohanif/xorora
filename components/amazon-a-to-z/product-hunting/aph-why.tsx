import {
  ArrowUpRight,
  Boxes,
  Handshake,
  type LucideIcon,
  Megaphone,
  ShieldAlert,
  TrendingDown,
  Warehouse,
} from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const PAINS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingDown,
    title: "Losing profit margins by picking saturated products",
    body: "Entering a category already dominated by entrenched sellers means competing on price from day one, and the margin disappears before you have a foothold.",
  },
  {
    icon: Boxes,
    title: "Unreliable suppliers and poor quality stock",
    body: "An unvetted manufacturer can ship inconsistent units, miss production windows, or substitute materials, and the returns and negative reviews land on your account.",
  },
  {
    icon: Handshake,
    title: "Overpaying due to weak negotiation",
    body: "Without benchmarks on unit cost, tooling, MOQs, and payment terms, it is easy to accept a first quote that quietly erodes your margin on every reorder.",
  },
  {
    icon: ShieldAlert,
    title: "Delays and suspensions from compliance issues",
    body: "Restricted categories, missing certifications, and incorrect labelling can stall a launch or trigger a listing takedown after your inventory has already shipped.",
  },
  {
    icon: Warehouse,
    title: "Inventory storage issues from weak sell-through",
    body: "Products that do not move accumulate storage fees and tie up capital, and slow sell-through can restrict how much you are allowed to send in later.",
  },
  {
    icon: Megaphone,
    title: "Wasting ad spend on unprofitable products",
    body: "Advertising cannot rescue a product with thin margins or weak demand. You end up buying traffic that converts at a loss and calling it a growth cost.",
  },
];

export function AphWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Why it matters"
          title="Why expert product hunting and sourcing is crucial for Amazon"
          sub="Almost every expensive Amazon mistake traces back to a decision made before the first unit was ever ordered. Choosing the wrong product or the wrong supplier is not something you can fix later with better listings or a bigger ad budget. Here is what goes wrong when the research and vetting are rushed."
          onDark
          className="ind-reveal mb-12 max-w-[760px]"
        />
        <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[18px]">
          {PAINS.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.title}
                className="ind-reveal vc-card-lift-dark relative overflow-hidden rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)]"
              >
                <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-900/28 text-indigo-300">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-white leading-snug">
                  {pain.title}
                </h3>
                <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
                  {pain.body}
                </p>
              </div>
            );
          })}
        </div>
        <div className="ind-reveal mt-11">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Get expert hunting and sourcing
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </section>
  );
}
